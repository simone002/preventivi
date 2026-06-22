import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { teamMembers, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Chi Siamo – SerraStyle, serramenti a Catania dal 1975",
  description:
    "Dal 1975 a Catania. Scopri la storia di SerraStyle, il nostro team di esperti e i valori che ci guidano ogni giorno nella produzione di serramenti di qualità.",
};

const timeline = [
  { year: "1975", event: "Fondazione dell'azienda come officina artigianale di serramenti in alluminio a Catania." },
  { year: "1988", event: "Espansione della gamma con l'introduzione dei serramenti in PVC e l'apertura del secondo showroom." },
  { year: "1999", event: "Certificazione ISO 9001 e adeguamento alla Marcatura CE europea. Prime grandi commesse commerciali." },
  { year: "2008", event: "Ingresso nel settore dei sistemi domotici per l'automazione di serramenti e oscuranti." },
  { year: "2015", event: "Lancio del servizio di consulenza incentivi statali e accordi con le principali banche per cessione del credito." },
  { year: "2024", event: "Apertura del nuovo showroom di 600 mq con oltre 50 campioni funzionanti e area progettazione digitale." },
];

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        eyebrow="La nostra storia"
        title="Quasi 50 anni di infissi, passione e innovazione"
        subtitle="SerraStyle nasce nel 1975 come piccola officina artigianale. Oggi siamo un punto di riferimento per serramenti di qualità in Sicilia."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Chi Siamo" },
        ]}
      />

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C8973A] text-xs font-semibold tracking-[0.2em] uppercase">La nostra missione</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2231] mt-3 mb-6">
                Qualità che dura nel tempo, estetica che non passa mai di moda
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Crediamo che ogni finestra e ogni porta siano parte integrante
                  dell'identità di un'abitazione. Per questo non produciamo
                  serramenti: <strong className="text-[#0F2231]">creiamo soluzioni</strong> pensate per valorizzare
                  il tuo spazio e migliorare la qualità della vita.
                </p>
                <p>
                  La nostra forza sta nella combinazione di <strong className="text-[#0F2231]">esperienza artigianale</strong>{" "}
                  e tecnologia moderna. Ogni misura è presa con precisione millimetrica,
                  ogni prodotto è verificato prima della consegna.
                </p>
                <p>
                  Con oltre 3.200 famiglie e aziende soddisfatte, portiamo avanti
                  la tradizione di qualità iniziata nel 1975, guardando al futuro
                  con nuovi materiali, tecnologie e design.
                </p>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#FAFAFA] border border-gray-100 rounded-sm p-8 text-center">
                  <div className="font-serif text-4xl font-bold text-[#1B3A4B]">{s.value}</div>
                  <div className="text-gray-500 text-sm mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="La nostra storia"
            title="Un percorso lungo quasi 50 anni"
            className="mb-14"
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#C8973A]/20 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`md:flex gap-8 items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-white border border-gray-100 rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <p className="text-gray-600 text-sm leading-relaxed">{t.event}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-[#1B3A4B] border-4 border-white shadow-md items-center justify-center text-white text-xs font-bold shrink-0 relative z-10">
                    {t.year.slice(2)}
                  </div>
                  <div className="flex-1 md:hidden">
                    <span className="font-serif text-2xl font-bold text-[#C8973A]">{t.year}</span>
                  </div>
                  {/* Year label desktop */}
                  <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "" : "text-right"}`}>
                    <span className={`font-serif text-3xl font-bold text-[#C8973A]/40 ${i % 2 === 0 ? "ml-8" : "mr-8"}`}>
                      {t.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Il nostro team"
            title="Le persone dietro ogni serramento"
            subtitle="Un team di professionisti appassionati, uniti dalla stessa dedizione alla qualità."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#1B3A4B] to-[#2D5F78] flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                  <span className="font-serif text-2xl font-bold text-white">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-[#0F2231]">{member.name}</h3>
                <p className="text-[#C8973A] text-xs font-semibold tracking-wider uppercase mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#0F2231]">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="I nostri valori" title="Cosa ci guida ogni giorno" light className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⬡", title: "Qualità senza compromessi", desc: "Utilizziamo solo materiali certificati e collaboriamo con i migliori produttori europei." },
              { icon: "⬡", title: "Trasparenza totale", desc: "Preventivi chiari, senza sorprese. Ogni costo è dettagliato e spiegato prima dell'inizio dei lavori." },
              { icon: "⬡", title: "Rispetto dei tempi", desc: "Rispettiamo scadenze e accordi. La tua casa e la tua vita non si mettono in pausa per noi." },
              { icon: "⬡", title: "Innovazione continua", desc: "Aggiornamento costante su nuove tecnologie, materiali e normative per offrirti sempre il meglio." },
              { icon: "⬡", title: "Sostenibilità", desc: "Prodotti a bassa trasmittanza termica per ridurre i consumi e l'impatto ambientale della tua casa." },
              { icon: "⬡", title: "Relazione duratura", desc: "Il nostro rapporto non finisce con l'installazione: siamo al tuo fianco per tutta la vita del prodotto." },
            ].map((v) => (
              <div key={v.title} className="border border-white/10 rounded-sm p-7 hover:border-[#C8973A]/40 transition-colors">
                <div className="text-[#C8973A] text-2xl mb-4">◆</div>
                <h3 className="font-serif font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
