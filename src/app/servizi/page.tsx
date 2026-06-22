import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/data";
import {
  MessageSquare,
  Wrench,
  Shield,
  Percent,
  Ruler,
  Award,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servizi – Consulenza, Installazione e Manutenzione Serramenti",
  description:
    "Offriamo consulenza gratuita, installazione certificata, manutenzione annuale e assistenza per incentivi statali. Scopri tutti i servizi SerraStyle a Catania.",
};

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={28} />,
  Wrench: <Wrench size={28} />,
  Shield: <Shield size={28} />,
  Percent: <Percent size={28} />,
  Ruler: <Ruler size={28} />,
  Award: <Award size={28} />,
};

const process = [
  { step: "01", title: "Contatto e consulenza", desc: "Ci contatti per telefono, email o tramite il form online. Fissiamo un appuntamento per il sopralluogo gratuito." },
  { step: "02", title: "Sopralluogo e rilievi", desc: "Il nostro tecnico effettua misurazioni precise e valuta le condizioni esistenti. Nessun costo, nessun obbligo." },
  { step: "03", title: "Progetto e preventivo", desc: "Riceviamo un progetto personalizzato con materiali, colori, prestazioni e preventivo dettagliato entro 48 ore." },
  { step: "04", title: "Produzione e consegna", desc: "I serramenti vengono prodotti su misura nei nostri laboratori. Ti informiamo su ogni fase di avanzamento." },
  { step: "05", title: "Installazione", desc: "Le nostre squadre specializzate installano in sicurezza, con smaltimento del vecchio e pulizia completa a fine lavori." },
  { step: "06", title: "Collaudo e garanzia", desc: "Collaudo finale con il cliente, consegna documentazione e attivazione della garanzia estesa fino a 10 anni." },
];

export default function ServiziPage() {
  return (
    <>
      <PageHero
        eyebrow="I nostri servizi"
        title="Un percorso completo, dalla A alla Z"
        subtitle="Non vendiamo solo serramenti: offriamo un servizio a 360° che ti accompagna dalla prima consulenza alla manutenzione nel tempo."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Servizi" },
        ]}
      />

      {/* All Services */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Cosa offriamo"
            title="Tutti i nostri servizi"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.id} className="p-8 group">
                <div className="w-14 h-14 rounded-sm bg-[#1B3A4B]/5 flex items-center justify-center text-[#1B3A4B] mb-6 group-hover:bg-[#1B3A4B] group-hover:text-white transition-all">
                  {iconMap[s.icon]}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0F2231] mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-[#C8973A] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Come lavoriamo"
            title="Il nostro processo in 6 passi"
            subtitle="Un metodo collaudato per garantire risultati perfetti e zero sorprese."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="flex gap-5">
                <div className="font-serif text-4xl font-bold text-[#C8973A]/25 shrink-0 leading-none mt-1 w-14 text-right">
                  {p.step}
                </div>
                <div className="pt-2 border-t-2 border-[#C8973A]/20 flex-1">
                  <h3 className="font-semibold text-[#0F2231] mb-2 mt-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incentives info */}
      <section className="section-padding bg-[#0F2231]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#C8973A] text-xs font-semibold tracking-[0.2em] uppercase">Risparmia con gli incentivi</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
                Hai diritto agli incentivi statali?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                La normativa 2025 prevede importanti agevolazioni per la sostituzione di infissi.
                I nostri consulenti ti guidano nell'accesso ai bonus disponibili.
              </p>
              <ul className="space-y-3">
                {[
                  "Bonus Casa 50% – Prima casa",
                  "Ecobonus 50% – Miglioramento energetico",
                  "Superbonus 65% – Con Cilas presentata",
                  "Cessione del credito e sconto in fattura",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#C8973A]/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#C8973A]" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-sm p-8">
              <p className="text-[#C8973A] text-sm font-semibold mb-3">Esempio risparmio</p>
              <div className="space-y-4">
                {[
                  { label: "Valore intervento", value: "€ 8.000" },
                  { label: "Bonus Casa 50%", value: "– € 4.000", accent: true },
                  { label: "Tuo esborso effettivo", value: "€ 4.000", bold: true },
                ].map((r) => (
                  <div key={r.label} className={`flex justify-between items-center py-3 border-b border-white/10 ${r.bold ? "border-0" : ""}`}>
                    <span className="text-white/70 text-sm">{r.label}</span>
                    <span className={`font-bold ${r.accent ? "text-emerald-400" : r.bold ? "text-white text-xl font-serif" : "text-white"}`}>
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs mt-4">*Ripartito in 10 rate annuali in detrazione IRPEF</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Inizia oggi, senza impegno" subtitle="Richiedi la consulenza gratuita e scopri quanto puoi risparmiare." />
    </>
  );
}
