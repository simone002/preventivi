import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { CheckCircle, Phone, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Preventivo Gratuito Serramenti – SerraStyle Catania",
  description:
    "Richiedi il tuo preventivo gratuito online. Sopralluogo tecnico senza impegno, risposta entro 24 ore. Serramenti su misura a Catania.",
};

const guarantees = [
  { icon: <CheckCircle size={20} />, label: "Risposta entro 24 ore" },
  { icon: <Phone size={20} />, label: "Sopralluogo gratuito" },
  { icon: <Shield size={20} />, label: "Preventivo senza impegno" },
  { icon: <Clock size={20} />, label: "Tempi di esecuzione certi" },
];

export default function PreventivoPage() {
  return (
    <>
      <PageHero
        eyebrow="Preventivo gratuito"
        title="Inizia con un preventivo su misura"
        subtitle="Compila il modulo in pochi minuti. Un nostro tecnico ti contatterà entro 24 ore per concordare il sopralluogo gratuito."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Preventivo Gratuito" },
        ]}
      />

      {/* Guarantees bar */}
      <div className="bg-[#C8973A]">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {guarantees.map((g) => (
              <div key={g.label} className="flex items-center gap-2.5 text-white text-sm font-medium">
                <span className="text-white/70">{g.icon}</span>
                {g.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-8">
                <h2 className="font-serif text-2xl font-bold text-[#0F2231] mb-2">
                  Richiesta preventivo
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Tutti i campi contrassegnati con <span className="text-red-500">*</span> sono obbligatori.
                </p>
                <QuoteForm />
              </div>
            </div>

            {/* Right: info */}
            <div className="space-y-6">
              {/* How it works */}
              <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-7">
                <h3 className="font-serif font-bold text-[#0F2231] mb-5">
                  Come funziona
                </h3>
                <div className="space-y-5">
                  {[
                    { n: "1", t: "Compili il modulo", d: "Indica il tipo di intervento e i tuoi dati. Bastano 3 minuti." },
                    { n: "2", t: "Ti contattiamo", d: "Entro 24 ore lavorative un nostro tecnico ti chiama per concordare il sopralluogo." },
                    { n: "3", t: "Sopralluogo gratuito", d: "Veniamo da te, prendiamo le misure e valutiamo la situazione esistente. Zero costi." },
                    { n: "4", t: "Ricevi il preventivo", d: "Entro 48 ore dal sopralluogo ricevi un preventivo dettagliato e trasparente." },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-4">
                      <div className="w-7 h-7 rounded-full bg-[#1B3A4B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {step.n}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[#0F2231]">{step.t}</p>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Incentives */}
              <div className="bg-[#0F2231] rounded-sm p-7">
                <h3 className="font-serif font-bold text-white mb-4">
                  Hai diritto a un bonus?
                </h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Per la sostituzione degli infissi sono previsti incentivi
                  statali che possono coprire fino al 65% della spesa.
                </p>
                <ul className="space-y-2">
                  {["Bonus Casa 50%", "Ecobonus 50%", "Superbonus 65%"].map(
                    (b) => (
                      <li key={b} className="flex items-center gap-2.5 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8973A]" />
                        {b}
                      </li>
                    )
                  )}
                </ul>
                <p className="text-[#C8973A] text-xs mt-4">
                  Il nostro team gestisce tutta la pratica burocratica per te.
                </p>
              </div>

              {/* Direct contact */}
              <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-7">
                <h3 className="font-serif font-bold text-[#0F2231] mb-3">
                  Preferisci chiamare?
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Siamo disponibili dal lunedì al venerdì 8:30–18:30, il sabato 9:00–13:00.
                </p>
                <a
                  href="tel:+390957154321"
                  className="inline-flex items-center gap-3 bg-[#1B3A4B] text-white px-5 py-3 rounded-sm hover:bg-[#2D5F78] transition-colors w-full justify-center font-medium"
                >
                  <Phone size={16} />
                  095 715 4321
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
