import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const MAX_BODY_BYTES = 20 * 1024;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const ALLOWED_ORIGINS = new Set([
  "www.mavearredamenti.it",
  "mavearredamenti.it",
  "localhost",
  "127.0.0.1",
]);

// TODO(security): back rate limiting with shared Redis/Upstash or Cloudflare Turnstile when scaling horizontally
const rateLimitStore = new Map<string, number[]>();

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .default("")
    .refine((val) => val === "" || /^[+\d\s().-]{6,30}$/.test(val), {
      message: "Numero di telefono non valido",
    }),
  subject: z
    .string()
    .trim()
    .min(1)
    .max(200)
    .optional()
    .default("Richiesta generica"),
  message: z.string().trim().min(10).max(5000),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({
      message: "È necessario accettare l'informativa sulla privacy.",
    }),
  }),
  website: z.string().max(200).optional().default(""),
});

function jsonNoStore(
  body: Record<string, unknown>,
  status: number,
  extraHeaders?: Record<string, string>,
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function stripCrLf(value: string): string {
  return value.replaceAll(/[\r\n]+/g, " ").trim();
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  return "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  for (const [key, timestamps] of rateLimitStore.entries()) {
    const active = timestamps.filter((ts) => ts > windowStart);
    if (active.length === 0) {
      rateLimitStore.delete(key);
    } else if (active.length !== timestamps.length) {
      rateLimitStore.set(key, active);
    }
  }

  const recent = (rateLimitStore.get(ip) ?? []).filter((ts) => ts > windowStart);
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldestInWindow = recent[0] ?? now;
    const retryAfterSec = Math.max(
      1,
      Math.ceil((oldestInWindow + RATE_LIMIT_WINDOW_MS - now) / 1000),
    );
    return { allowed: false, retryAfterSec };
  }

  recent.push(now);
  rateLimitStore.set(ip, recent);
  return { allowed: true, retryAfterSec: 0 };
}

function isOriginAllowed(request: Request): boolean {
  const originHeader = request.headers.get("origin");
  if (!originHeader) return true;

  try {
    const originUrl = new URL(originHeader);
    const originHostname = originUrl.hostname.toLowerCase();
    if (ALLOWED_ORIGINS.has(originHostname)) return true;

    const hostHeader =
      request.headers.get("x-forwarded-host") || request.headers.get("host");
    if (hostHeader) {
      const requestHostname = hostHeader.split(":")[0]?.trim().toLowerCase();
      if (requestHostname && originHostname === requestHostname) return true;
    }
    return false;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    if (!isOriginAllowed(request)) {
      return jsonNoStore({ error: "Origine non autorizzata" }, 403);
    }

    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return jsonNoStore({ error: "Formato richiesta non supportato" }, 415);
    }

    const contentLengthHeader = request.headers.get("content-length");
    if (contentLengthHeader) {
      const declaredSize = Number(contentLengthHeader);
      if (Number.isFinite(declaredSize) && declaredSize > MAX_BODY_BYTES) {
        return jsonNoStore({ error: "Richiesta troppo grande" }, 413);
      }
    }

    const rawText = await request.text();
    if (Buffer.byteLength(rawText, "utf8") > MAX_BODY_BYTES) {
      return jsonNoStore({ error: "Richiesta troppo grande" }, 413);
    }

    let rawBody: unknown;
    try {
      rawBody = JSON.parse(rawText);
    } catch {
      return jsonNoStore({ error: "JSON non valido" }, 400);
    }

    const parsed = contactSchema.safeParse(rawBody);
    if (!parsed.success) {
      return jsonNoStore(
        { error: "Dati non validi", details: parsed.error.flatten().fieldErrors },
        400,
      );
    }

    const { name, email, phone, subject, message, website } = parsed.data;

    // Honeypot triggered: silently succeed without touching SMTP or leaking signals
    if (website.trim().length > 0) {
      return jsonNoStore({ message: "Inviato con successo" }, 200);
    }

    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return jsonNoStore(
        {
          error:
            "Hai inviato troppe richieste. Riprova tra qualche minuto o contattaci su WhatsApp.",
        },
        429,
        { "Retry-After": String(rateLimit.retryAfterSec) },
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return jsonNoStore({ error: "Servizio email non disponibile" }, 500);
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Non fornito");
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminText = `Nuovo messaggio da ${name} (${email}, tel: ${phone || "Non fornito"}):\n\nOggetto: ${subject}\n\nMessaggio:\n${message}`;

    const adminMail = {
      from: `"Sito Web Mave" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: stripCrLf(email),
      subject: stripCrLf(`Nuovo Progetto: ${subject} - ${name}`),
      text: adminText,
      html: `
        <div style="background-color: #f4f5f4; padding: 40px 20px; font-family: sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-top: 6px solid #4a5d4d; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <div style="padding: 30px; border-bottom: 1px solid #eee;">
              <h1 style="color: #2c362e; margin: 0; font-size: 20px;">Nuova richiesta di preventivo</h1>
            </div>
            <div style="padding: 30px; color: #444; line-height: 1.6;">
              <p>Hai ricevuto un nuovo messaggio dal sito:</p>
              <p><strong>Cliente:</strong> ${safeName}<br>
                 <strong>Interesse:</strong> ${safeSubject}<br>
                 <strong>Telefono:</strong> ${safePhone}<br>
                 <strong>Email:</strong> ${safeEmail}</p>
              <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #b7c767; margin-top: 20px; font-style: italic;">
                "${safeMessage}"
              </div>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);

    return jsonNoStore({ message: "Inviato con successo" }, 200);
  } catch (error: unknown) {
    console.error("❌ ERRORE INVIO CONTATTO:", error);
    return jsonNoStore(
      {
        error:
          "Si è verificato un errore durante l'invio della richiesta. Riprova più tardi.",
      },
      500,
    );
  }
}
