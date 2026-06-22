import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { products, projects } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SerraStyle – Infissi, Serramenti e Porte | Catania",
  description:
    "Serramenti su misura a Catania dal 1975. Finestre, porte e infissi in alluminio e PVC. Qualità certificata, design elegante, risparmio energetico garantito.",
};

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <HeroSection />
      <ServicesPreview limit={3} />
      <WhyUsSection />

      {/* Products preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="I nostri prodotti"
            title="Soluzioni per ogni esigenza"
            subtitle="Finestre, porte, sistemi scorrevoli e oscuranti. Ogni prodotto è su misura e certificato."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((p) => (
              <Card key={p.id} className="group">
                {/* Visual placeholder */}
                <div className="h-40 bg-gradient-to-br from-[#1B3A4B]/10 to-[#1B3A4B]/5 flex items-center justify-center relative overflow-hidden">
                  <div className="w-16 h-20 border-2 border-[#1B3A4B]/30 group-hover:border-[#C8973A] transition-colors rounded-sm" />
                  <div className="absolute w-8 h-12 border border-[#1B3A4B]/20 rounded-sm" />
                  {p.badge && (
                    <div className="absolute top-3 right-3">
                      <Badge>{p.badge}</Badge>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[#C8973A] text-xs font-semibold tracking-wider uppercase mb-1">
                    {p.category}
                  </p>
                  <h3 className="font-serif font-bold text-[#0F2231] mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{p.material}</span>
                    <Link
                      href="/prodotti"
                      className="text-xs font-semibold text-[#1B3A4B] hover:text-[#C8973A] transition-colors flex items-center gap-1 group/link"
                    >
                      Dettagli <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/prodotti" className="inline-flex items-center gap-2 text-[#1B3A4B] font-semibold hover:text-[#C8973A] transition-colors group">
              Vedi tutti i prodotti <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Le nostre realizzazioni"
            title="Progetti che parlano per noi"
            subtitle="Residenziale, commerciale, sanitario. Ogni progetto è una storia di qualità e soddisfazione."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((proj) => (
              <Card key={proj.id} className="group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#0F2231] to-[#2D5F78] relative flex items-end p-5">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)"
                    }} />
                  </div>
                  <div>
                    <Badge variant="accent">{proj.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 text-white/30 font-serif text-4xl font-bold">{proj.year}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-[#0F2231] mb-1">{proj.title}</h3>
                  <p className="text-[#C8973A] text-xs font-medium mb-3">{proj.location}</p>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/realizzazioni" className="inline-flex items-center gap-2 text-[#1B3A4B] font-semibold hover:text-[#C8973A] transition-colors group">
              Tutte le realizzazioni <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
