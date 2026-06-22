import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Realizzazioni – I nostri progetti a Catania e provincia",
  description:
    "Scopri le realizzazioni SerraStyle: residenziale, commerciale, sanitario. Ogni progetto racconta la nostra esperienza e qualità nei serramenti a Catania.",
};

const categoryColors: Record<string, string> = {
  Residenziale: "bg-blue-500",
  Commerciale: "bg-emerald-500",
  Sanitario: "bg-purple-500",
  Ricettivo: "bg-amber-500",
};

export default function RealizzazioniPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio lavori"
        title="Ogni finestra racconta una storia"
        subtitle="Dalle ville private ai grandi edifici commerciali. Ogni progetto è unico, ogni installazione è realizzata con la massima cura."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Realizzazioni" },
        ]}
      />

      {/* Stats bar */}
      <div className="bg-[#C8973A]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { n: "48+", l: "Anni di attività" },
              { n: "3.200+", l: "Clienti serviti" },
              { n: "15.000+", l: "Serramenti installati" },
              { n: "4", l: "Province coperte" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl font-bold">{s.n}</div>
                <div className="text-white/80 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="I nostri lavori"
            title="Realizzazioni recenti"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <article
                key={proj.id}
                className="group bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image placeholder with pattern */}
                <div className={`h-52 relative overflow-hidden ${i % 2 === 0 ? "bg-gradient-to-br from-[#0F2231] to-[#2D5F78]" : "bg-gradient-to-br from-[#1B3A4B] to-[#0F2231]"}`}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)`
                  }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-32 border-2 border-white/20 rounded-sm group-hover:border-[#C8973A]/50 transition-colors">
                      <div className="h-1/2 border-b border-white/10" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="accent">{proj.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm text-white/80 text-xs px-2 py-1 rounded-sm">
                    <Calendar size={10} />
                    {proj.year}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-lg font-bold text-[#0F2231] mb-2">
                    {proj.title}
                  </h2>
                  <div className="flex items-center gap-1.5 text-[#C8973A] text-xs font-medium mb-4">
                    <MapPin size={12} />
                    {proj.location}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="I settori"
            title="Lavoriamo in ogni settore"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                sector: "Residenziale",
                desc: "Appartamenti, ville e condomini. Soluzioni personalizzate per ogni tipologia di abitazione.",
                items: ["Finestre e balconi", "Porte d'ingresso", "Sistemi oscuranti", "Verande"],
              },
              {
                sector: "Commerciale",
                desc: "Negozi, uffici e centri commerciali. Facciate continue e vetrine di impatto visivo.",
                items: ["Facciate continue", "Vetrine", "Porte automatiche", "Lucernari"],
              },
              {
                sector: "Sanitario",
                desc: "Cliniche e ospedali. Serramenti tecnici con proprietà acustiche e igieniche certificate.",
                items: ["Isolamento acustico Rw 42dB", "Porte tecniche", "Vetri speciali", "Certificazioni"],
              },
              {
                sector: "Ricettivo",
                desc: "Hotel, B&B e strutture turistiche. Estetica di pregio e risparmio energetico per le utenze.",
                items: ["Design su misura", "Isolamento termico", "Manutenzione contrattuale", "Rispetto vincoli"],
              },
            ].map((s) => (
              <div key={s.sector} className="bg-white border border-gray-100 rounded-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-serif font-bold text-[#0F2231] mb-2">{s.sector}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 rounded-full bg-[#C8973A]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Il tuo progetto è il prossimo" subtitle="Contattaci per discutere il tuo intervento. Preventivo gratuito e sopralluogo senza impegno." />
    </>
  );
}
