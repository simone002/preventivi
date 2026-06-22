import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  variant?: "dark" | "accent";
}

export function CtaBanner({
  title = "Richiedi il tuo preventivo gratuito",
  subtitle = "Sopralluogo tecnico, progettazione e preventivo senza impegno. Risposta entro 24 ore.",
  variant = "dark",
}: CtaBannerProps) {
  const bg =
    variant === "dark"
      ? "bg-[#0F2231]"
      : "bg-gradient-to-r from-[#C8973A] to-[#E8B85A]";

  return (
    <section className={`${bg} py-20`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p
          className={`text-lg mb-10 max-w-xl mx-auto ${
            variant === "dark" ? "text-white/70" : "text-white/90"
          }`}
        >
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/preventivo" variant={variant === "dark" ? "accent" : "ghost"} size="lg">
            Preventivo Online <ArrowRight size={18} />
          </Button>
          <a
            href="tel:+390957154321"
            className="inline-flex items-center gap-2 text-white font-medium text-lg hover:text-[#C8973A] transition-colors"
          >
            <Phone size={20} />
            095 715 4321
          </a>
        </div>
      </div>
    </section>
  );
}
