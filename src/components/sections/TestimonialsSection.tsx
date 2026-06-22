import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#0F2231]">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Recensioni clienti"
          title="Cosa dicono di noi"
          subtitle="La fiducia dei nostri clienti è la nostra risorsa più preziosa."
          light
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-sm p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#C8973A] text-[#C8973A]" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C8973A]/20 flex items-center justify-center text-[#C8973A] font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
