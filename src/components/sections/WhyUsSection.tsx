import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    number: "01",
    title: "Esperienza consolidata",
    desc: "Oltre 48 anni nel settore. Conosciamo ogni dettaglio tecnico e ogni esigenza del cliente catanese.",
  },
  {
    number: "02",
    title: "Prodotti certificati",
    desc: "Solo materiali di primissima qualità con Marcatura CE, trasmittanza termica certificata e test acustici.",
  },
  {
    number: "03",
    title: "Su misura al millimetro",
    desc: "Ogni serramento è misurato, progettato e prodotto su misura. Nessun standard, solo soluzioni su misura.",
  },
  {
    number: "04",
    title: "Assistenza completa",
    desc: "Dall'incentivo fiscale alla manutenzione annuale: gestiamo tutto noi, dal preventivo alla garanzia.",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-padding bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#1B3A4B] to-[#0F2231] rounded-sm flex items-center justify-center relative overflow-hidden">
              {/* Abstract window/frame graphic */}
              <div className="absolute inset-8 border border-white/20 rounded-sm" />
              <div className="absolute inset-16 border border-[#C8973A]/30 rounded-sm" />
              <div className="absolute inset-24 border border-white/10 rounded-sm" />
              <div className="text-center">
                <div className="font-serif text-6xl font-bold text-white/10 select-none">1975</div>
                <div className="text-[#C8973A] text-xs tracking-[0.3em] uppercase mt-2">Anno di fondazione</div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C8973A]" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C8973A]" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C8973A]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C8973A]" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#C8973A] text-white p-5 rounded-sm shadow-xl">
              <div className="font-serif text-3xl font-bold">A+</div>
              <div className="text-xs text-white/80 mt-0.5">Classe energetica</div>
            </div>
          </div>

          {/* Right - content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Perché sceglierci"
              title="Qualità che si vede, efficienza che si sente"
              align="left"
              className="mb-10"
            />

            <div className="space-y-8">
              {reasons.map((r) => (
                <div key={r.number} className="flex gap-6">
                  <span className="font-serif text-3xl font-bold text-[#C8973A]/30 shrink-0 leading-none mt-1">
                    {r.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#0F2231] mb-2">{r.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
