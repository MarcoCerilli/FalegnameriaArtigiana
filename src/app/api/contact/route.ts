import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // 1. Configurazione Robusta: Usiamo l'host esplicito invece di "service: gmail"
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Definizione contenuti testuali (fondamentale contro lo spam)
    const adminText = `Nuovo messaggio da ${name} (${email}, tel: ${phone}):\n\nOggetto: ${subject}\n\nMessaggio:\n${message}`;
    const clientText = `Ciao ${name}, abbiamo ricevuto la tua richiesta per "${subject}". Ti ricontatteremo al più presto. Grazie da Mave Arredamenti.`;

    // 3. Configurazione Mail Admin
    const adminMail = {
      from: `"Sito Web Mave" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🛠️ Nuovo Progetto: ${subject} - ${name}`,
      text: adminText, // Aggiunto per migliorare deliverability
      html: `
        <div style="background-color: #f4f5f4; padding: 40px 20px; font-family: sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-top: 6px solid #4a5d4d; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <div style="padding: 30px; border-bottom: 1px solid #eee;">
              <h1 style="color: #2c362e; margin: 0; font-size: 20px;">Nuova richiesta di preventivo</h1>
            </div>
            <div style="padding: 30px; color: #444; line-height: 1.6;">
              <p>Hai ricevuto un nuovo messaggio dal sito:</p>
              <p><strong>Cliente:</strong> ${name}<br>
                 <strong>Interesse:</strong> ${subject}<br>
                 <strong>Telefono:</strong> ${phone}<br>
                 <strong>Email:</strong> ${email}</p>
              <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #b7c767; margin-top: 20px; font-style: italic;">
                "${message}"
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // 4. Configurazione Mail Cliente (Semplificata un minimo per non insospettire i filtri)
    const clientMail = {
      from: `"Mave Arredamenti" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Grazie per averci contattato - Mave Arredamenti`,
      text: clientText, // Aggiunto per migliorare deliverability
      html: `
        <div style="background-color: #f4f5f4; padding: 40px 20px; font-family: sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; text-align: center;">
            <div style="background-color: #4a5d4d; padding: 30px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Mave Arredamenti</h1>
            </div>
            <div style="padding: 40px; color: #444;">
              <p style="font-size: 18px;">Grazie <strong>${name}</strong>,</p>
              <p>Abbiamo ricevuto la tua richiesta per <strong>"${subject}"</strong>.</p>
              <p>Il nostro team artigiano analizzerà i dettagli e ti ricontatterà al più presto.</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
              <p style="font-size: 12px; color: #888;">Mave Arredamenti - Falegnameria Artigiana & Nautica</p>
            </div>
          </div>
        </div>
      `,
    };

    // 5. Invio SEQUENZIALE (più sicuro dell'invio contemporaneo)
    await transporter.sendMail(adminMail);
    await transporter.sendMail(clientMail);

    return NextResponse.json({ message: "Inviato con successo" }, { status: 200 });

  } catch (error: any) {
    console.error("❌ ERRORE GMAIL:", error);
    return NextResponse.json(
      { error: "Errore invio", details: error.message },
      { status: 500 },
    );
  }
}