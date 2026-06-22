import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contatti – Trovaci a Catania | SerraStyle",
  description:
    "Contatta SerraStyle a Catania. Showroom in Via del Serramento 12. Telefono, email, orari e modulo di contatto. Risposta entro 24 ore.",
};

const contactInfo = [
  {
    icon: <MapPin size={20} />,
    label: "Indirizzo showroom",
    value: "Via del Serramento 12\n95100 Catania (CT)",
    link: "https://maps.google.com",
  },
  {
    icon: <Phone size={20} />,
    label: "Telefono",
    value: "095 715 4321",
    link: "tel:+390957154321",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "info@serrastyle.it",
    link: "mailto:info@serrastyle.it",
  },
  {
    icon: <Clock size={20} />,
    label: "Orari",
    value: "Lun–Ven: 8:30–18:30\nSabato: 9:00–13:00\nDomenica: chiuso",
    link: null,
  },
];

export default function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Parliamoci"
        title="Siamo a Catania, per voi"
        subtitle="Vieni a trovarci nel nostro showroom o contattaci. Saremo felici di rispondere alle tue domande e aiutarti a trovare la soluzione giusta."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contatti" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#0F2231] mb-8">
                Come raggiungerci
              </h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#1B3A4B]/5 flex items-center justify-center text-[#1B3A4B] shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C8973A] tracking-wider uppercase mb-1">
                        {c.label}
                      </p>
                      {c.link ? (
                        <a
                          href={c.link}
                          className="text-gray-700 text-sm whitespace-pre-line hover:text-[#1B3A4B] transition-colors inline-flex items-start gap-1 group"
                          target={c.link.startsWith("http") ? "_blank" : undefined}
                          rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {c.value}
                          {c.link.startsWith("http") && (
                            <ExternalLink size={12} className="shrink-0 mt-0.5 text-gray-400 group-hover:text-[#1B3A4B]" />
                          )}
                        </a>
                      ) : (
                        <p className="text-gray-700 text-sm whitespace-pre-line">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="h-64 bg-gradient-to-br from-[#1B3A4B]/10 to-[#1B3A4B]/5 rounded-sm border border-gray-100 flex items-center justify-center group hover:border-[#C8973A] transition-colors cursor-pointer relative overflow-hidden">
                <div className="text-center">
                  <MapPin size={32} className="text-[#1B3A4B]/40 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">Mappa interattiva</p>
                  <p className="text-gray-300 text-xs mt-1">Via del Serramento 12, Catania</p>
                </div>
                {/* Grid overlay to simulate map */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, #1B3A4B, #1B3A4B 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #1B3A4B, #1B3A4B 1px, transparent 1px, transparent 40px)"
                }} />
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1B3A4B] text-sm font-medium mt-3 hover:text-[#C8973A] transition-colors"
              >
                <ExternalLink size={14} />
                Apri in Google Maps
              </a>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#0F2231] mb-8">
                Inviaci un messaggio
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Showroom info */}
      <section className="bg-[#FAFAFA] py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white border border-gray-100 rounded-sm p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-3">🏪</div>
                <h3 className="font-serif font-bold text-[#0F2231] mb-2">Showroom 600 m²</h3>
                <p className="text-gray-500 text-sm">Oltre 50 campioni funzionanti di finestre, porte e oscuranti. Tocca con mano la differenza.</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="font-serif font-bold text-[#0F2231] mb-2">Laboratorio interno</h3>
                <p className="text-gray-500 text-sm">Produciamo internamente per garantire qualità e rispettare i tempi concordati con te.</p>
              </div>
              <div>
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-serif font-bold text-[#0F2231] mb-2">Area progettazione</h3>
                <p className="text-gray-500 text-sm">Visualizza il tuo serramento in 3D prima di ordinarlo. Design digitale al servizio della tua scelta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
