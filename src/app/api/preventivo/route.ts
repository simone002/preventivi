import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, cognome, email, telefono, tipoIntervento, materiale, indirizzo, citta, note } = body;

    // Lazy import so build doesn't fail without API key
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Email all'azienda
    await resend.emails.send({
      from: "SerraStyle Preventivi <preventivi@serrastyle.it>",
      to: ["simonebattiato002@gmail.com"], // ← CAMBIA CON LA TUA EMAIL REALE
      replyTo: email,
      subject: `Nuova richiesta preventivo – ${nome} ${cognome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F2231; padding: 24px; text-align: center;">
            <h1 style="color: #C8973A; margin: 0; font-size: 22px;">Nuova richiesta preventivo</h1>
          </div>
          <div style="padding: 32px; background: #ffffff; border: 1px solid #e5e7eb;">
            <h2 style="color: #0F2231; font-size: 16px; margin-top: 0;">Dati del cliente</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6B7280; width: 40%;">Nome</td><td style="padding: 8px 0; font-weight: bold;">${nome} ${cognome}</td></tr>
              <tr><td style="padding: 8px 0; color: #6B7280;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6B7280;">Telefono</td><td style="padding: 8px 0;"><a href="tel:${telefono}">${telefono}</a></td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
            <h2 style="color: #0F2231; font-size: 16px;">Dettagli intervento</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6B7280; width: 40%;">Tipo intervento</td><td style="padding: 8px 0; font-weight: bold; text-transform: capitalize;">${tipoIntervento}</td></tr>
              <tr><td style="padding: 8px 0; color: #6B7280;">Materiale</td><td style="padding: 8px 0;">${materiale || "Nessuna preferenza"}</td></tr>
              <tr><td style="padding: 8px 0; color: #6B7280;">Indirizzo</td><td style="padding: 8px 0;">${indirizzo}, ${citta}</td></tr>
            </table>
            ${note ? `<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" /><h2 style="color: #0F2231; font-size: 16px;">Note</h2><p style="color: #374151; background: #F9FAFB; padding: 16px; border-radius: 4px;">${note}</p>` : ""}
          </div>
          <div style="background: #F9FAFB; padding: 12px; text-align: center; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #6B7280; font-size: 11px; margin: 0;">Rispondi a questa email per contattare il cliente direttamente</p>
          </div>
        </div>
      `,
    });

    // Conferma al cliente
    await resend.emails.send({
      from: "SerraStyle <info@serrastyle.it>",
      to: [email],
      subject: "Abbiamo ricevuto la tua richiesta – SerraStyle",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F2231; padding: 24px; text-align: center;">
            <h1 style="color: #C8973A; margin: 0;">SerraStyle</h1>
            <p style="color: #ffffff80; margin: 6px 0 0; font-size: 13px;">Serramenti & Design – Catania</p>
          </div>
          <div style="padding: 40px 32px; background: #ffffff;">
            <p style="color: #0F2231; font-size: 18px; font-weight: bold;">Ciao ${nome},</p>
            <p style="color: #374151; line-height: 1.7;">Abbiamo ricevuto la tua richiesta di preventivo per <strong>${tipoIntervento}</strong> a <strong>${citta}</strong>.</p>
            <p style="color: #374151; line-height: 1.7;">Un nostro tecnico ti contatterà entro <strong>24 ore lavorative</strong> al numero <strong>${telefono}</strong>.</p>
            <div style="background: #F9FAFB; border-left: 3px solid #C8973A; padding: 16px; margin: 24px 0;">
              <p style="margin: 0; color: #6B7280; font-size: 13px;">Puoi anche chiamarci direttamente:<br/>
              <a href="tel:+390957154321" style="color: #1B3A4B; font-weight: bold; font-size: 16px;">095 715 4321</a>
              &nbsp;·&nbsp; Lun/Ven 8:30–18:30, Sab 9:00–13:00</p>
            </div>
            <p style="color: #6B7280;">Il team SerraStyle</p>
          </div>
          <div style="background: #0F2231; padding: 14px; text-align: center;">
            <p style="color: #6B728080; font-size: 11px; margin: 0;">© SerraStyle · Via del Serramento 12, Catania · <a href="https://www.serrastyle.it" style="color: #C8973A;">serrastyle.it</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Errore nell'invio" }, { status: 500 });
  }
}
