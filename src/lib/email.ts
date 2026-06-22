import nodemailer from "nodemailer";

// Indirizzo aziendale: riceve le notifiche di preventivi/contatti.
// Di default coincide con l'account Gmail usato per l'invio.
export const COMPANY_EMAIL = process.env.COMPANY_EMAIL || process.env.GMAIL_USER || "";

// Transporter Gmail. Richiede GMAIL_USER + GMAIL_APP_PASSWORD nel .env.local.
// La App Password si genera su https://myaccount.google.com/security
// (serve la Verifica in due passaggi attiva).
export function getTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

// Mittente mostrato nelle email. Gmail invia comunque dall'indirizzo GMAIL_USER.
export const FROM = `SerraStyle <${process.env.GMAIL_USER || ""}>`;
