import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Prodotti – Finestre, Porte e Serramenti in Alluminio e PVC",
  description:
    "Scopri la gamma completa di serramenti SerraStyle: finestre, porte blindate, sistemi scorrevoli, verande, tapparelle e zanzariere. Tutto su misura.",
};

const categories = [
  "Tutti",
  "Finestre",
  "Porte",
  "Sistemi Scorrevoli",
  "Verande",
  "Accessori",
  "Oscuranti",
];

const materials = [
  {
    name: "Alluminio",
    desc: "Resistente, duraturo e leggero. Profili sottili per massima luminosità. Infiniti colori RAL e finiture speciali.",
    pros: ["Alta resistenza strutturale", "Manutenzione quasi zero", "Personalizzazione colori illimitata", "Ideale per grandi formati"],
  },
  {
    name: "PVC",
    desc: "Eccellente isolamento termico e acustico a costi contenuti. La scelta preferita per il risparmio energetico.",
    pros: ["Miglior rapporto qualità/prezzo", "Ottima tenuta termica", "No ossidazione né corrosione", "Facile da pulire"],
  },
  {
    name: "Legno-Alluminio",
    desc: "Il meglio dei due mondi: calore del legno all'interno, protezione dell'alluminio all'esterno.",
    pros: ["Design naturale e caldo", "Alta resistenza alle intemperie", "Isolamento eccellente", "Valorizza l'immobile"],
  },
];

export default function ProdottiPage() {
  const grouped = categories.slice(1).map((cat) => ({
    category: cat,
    items: products.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="La nostra gamma"
        title="Prodotti su misura per ogni spazio"
        subtitle="Ogni serramento nasce dalla misurazione precisa del tuo spazio. Nessun prodotto standard: tutto è progettato e realizzato per te."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Prodotti" },
        ]}
      />

      {/* All Products */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <Card key={p.id} className="group overflow-hidden">
                {/* Visual */}
                <div className="h-44 bg-gradient-to-br from-[#1B3A4B]/8 to-[#1B3A4B]/3 flex items-center justify-center relative">
                  <div className="w-20 h-28 border-2 border-[#1B3A4B]/25 group-hover:border-[#C8973A] transition-colors rounded-sm">
                    <div className="h-1/2 border-b-2 border-[#1B3A4B]/15 group-hover:border-[#C8973A]/50 transition-colors" />
                  </div>
                  {p.badge && (
                    <div className="absolute top-3 left-3">
                      <Badge>{p.badge}</Badge>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-[#C8973A] text-[10px] font-bold tracking-[0.2em] uppercase">
                    {p.category}
                  </span>
                  <h3 className="font-serif font-bold text-[#0F2231] mt-1 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-sm">
                      {p.material}
                    </span>
                    <Button href="/preventivo" size="sm" variant="outline">
                      Preventivo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="I materiali"
            title="Quale materiale fa per te?"
            subtitle="Ogni materiale ha caratteristiche diverse. Ti aiutiamo a scegliere quello più adatto alle tue esigenze e al tuo budget."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materials.map((m, i) => (
              <div key={m.name} className={`rounded-sm p-8 ${i === 0 ? "bg-[#0F2231] text-white" : "bg-white border border-gray-100"}`}>
                <h3 className={`font-serif text-2xl font-bold mb-3 ${i === 0 ? "text-[#C8973A]" : "text-[#0F2231]"}`}>
                  {m.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${i === 0 ? "text-white/70" : "text-gray-500"}`}>
                  {m.desc}
                </p>
                <ul className="space-y-2">
                  {m.pros.map((pro) => (
                    <li key={pro} className={`flex items-center gap-2.5 text-sm ${i === 0 ? "text-white/80" : "text-gray-700"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8973A] shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Certificazioni"
            title="Qualità verificata e certificata"
            className="mb-10"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { code: "CE", label: "Marcatura CE", desc: "Conformità standard europei" },
              { code: "Uw", label: "Trasmittanza Uw", desc: "Fino a 0.8 W/m²K" },
              { code: "Rw", label: "Isolamento acustico", desc: "Fino a 42 dB" },
              { code: "10Y", label: "Garanzia", desc: "10 anni su prodotti e posa" },
            ].map((c) => (
              <div key={c.code} className="text-center p-6 border border-gray-100 rounded-sm hover:border-[#C8973A] transition-colors group">
                <div className="font-serif text-3xl font-bold text-[#1B3A4B] group-hover:text-[#C8973A] transition-colors">{c.code}</div>
                <div className="font-semibold text-sm text-[#0F2231] mt-2">{c.label}</div>
                <div className="text-xs text-gray-400 mt-1">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Quale prodotto ti serve?" subtitle="Parlaci del tuo progetto. Troveremo la soluzione giusta insieme." />
    </>
  );
}
