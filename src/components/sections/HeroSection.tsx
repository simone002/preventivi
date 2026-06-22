import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { stats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0A1929] via-[#0F2231] to-[#1B3A4B]"
        aria-hidden="true"
      />

      {/* Geometric accent */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-10" aria-hidden="true">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white rounded-sm rotate-12" />
        <div className="absolute top-40 right-40 w-64 h-64 border border-[#C8973A] rounded-sm -rotate-6" />
        <div className="absolute bottom-40 right-10 w-48 h-48 border border-white rounded-sm rotate-45" />
      </div>

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C8973A] to-transparent" />

      <div className="relative container mx-auto px-4 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        {/* Content */}
        <div className="flex-1 max-w-2xl">
          <span className="inline-block text-[#C8973A] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
            Dal 1975 a Catania
          </span>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Apri le porte
            <br />
            <span className="text-[#C8973A]">al tuo stile</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Serramenti su misura in alluminio e PVC. Fornitura e posa di
            finestre, porte e sistemi oscuranti per la tua casa o azienda.
            Qualità certificata, design senza tempo.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button href="/preventivo" variant="accent" size="lg">
              Richiedi Preventivo Gratuito
              <ArrowRight size={18} />
            </Button>
            <Button href="/realizzazioni" variant="ghost" size="lg">
              Vedi i nostri lavori
            </Button>
          </div>

          {/* Trust markers */}
          <div className="flex flex-wrap gap-4">
            {["Marcatura CE", "Garanzia 10 anni", "Installatori Certificati"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#C8973A]/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8973A]" />
                  </div>
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Stats card */}
        <div className="lg:flex-shrink-0 lg:ml-auto lg:w-72">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8">
            <p className="text-[#C8973A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              I nostri numeri
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scopri</span>
        <ChevronDown size={16} className="text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
