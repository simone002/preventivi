import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nome, email, telefono, oggetto, messaggio } = await req.json();

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "SerraStyle Contatti <onboarding@resend.dev>",
      to: ["simonebattiato002@gmail.com"], // ← CAMBIA CON LA TUA EMAIL REALE
      replyTo: email,
      subject: `Messaggio dal sito: ${oggetto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <div style="background: #0F2231; padding: 20px;">
            <h2 style="color: #C8973A; margin: 0;">Nuovo messaggio dal sito</h2>
          </div>
          <div style="padding: 24px; background: #fff; border: 1px solid #e5e7eb;">
            <p><strong>Da:</strong> ${nome} (<a href="mailto:${email}">${email}</a>)</p>
            ${telefono ? `<p><strong>Telefono:</strong> ${telefono}</p>` : ""}
            <p><strong>Oggetto:</strong> ${oggetto}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb;" />
            <p style="white-space: pre-wrap; color: #374151;">${messaggio}</p>
          </div>
        </div>
      `,
    });

    await resend.emails.send({
      from: "SerraStyle <onboarding@resend.dev>",
      to: [email],
      subject: "Abbiamo ricevuto il tuo messaggio – SerraStyle",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <div style="background: #0F2231; padding: 20px; text-align: center;">
            <h1 style="color: #C8973A; margin: 0;">SerraStyle</h1>
          </div>
          <div style="padding: 32px; background: #fff;">
            <p>Ciao <strong>${nome}</strong>,</p>
            <p>Abbiamo ricevuto il tuo messaggio riguardo a "<em>${oggetto}</em>". Ti risponderemo entro 24 ore lavorative.</p>
            <p>Puoi anche chiamarci al <strong>095 715 4321</strong>.</p>
            <p style="color: #6B7280;">Il team SerraStyle</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Errore invio" }, { status: 500 });
  }
}
