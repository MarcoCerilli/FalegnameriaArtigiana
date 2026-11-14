import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  subject: z.string().trim().min(1).max(200).optional().default("Richiesta generica"),
  message: z.string().trim().min(10).max(5000),
});

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

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();
    const parsed = contactSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dati non validi", details: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "Servizio email non configurato" },
        { status: 500 },
      );
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
    const clientText = `Ciao ${name}, abbiamo ricevuto la tua richiesta per "${subject}". Ti ricontatteremo al più presto. Grazie da Mave Arredamenti.`;

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

    const clientMail = {
      from: `"Mave Arredamenti" <${process.env.EMAIL_USER}>`,
      to: stripCrLf(email),
      subject: `Grazie per averci contattato - Mave Arredamenti`,
      text: clientText,
      html: `
        <div style="background-color: #f4f5f4; padding: 40px 20px; font-family: sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; text-align: center;">
            <div style="background-color: #4a5d4d; padding: 30px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Mave Arredamenti</h1>
            </div>
            <div style="padding: 40px; color: #444;">
              <p style="font-size: 18px;">Grazie <strong>${safeName}</strong>,</p>
              <p>Abbiamo ricevuto la tua richiesta per <strong>"${safeSubject}"</strong>.</p>
              <p>Il nostro team artigiano analizzerà i dettagli e ti ricontatterà al più presto.</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
              <p style="font-size: 12px; color: #888;">Mave Arredamenti - Falegnameria Artigiana &amp; Nautica</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(clientMail);

    return NextResponse.json({ message: "Inviato con successo" }, { status: 200 });
  } catch (error: unknown) {
    const details = error instanceof Error ? error.message : "Errore sconosciuto";
    console.error("❌ ERRORE GMAIL:", error);
    return NextResponse.json(
      { error: "Errore invio", details },
      { status: 500 },
    );
  }
}
