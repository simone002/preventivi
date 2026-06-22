import Link from "next/link";
import {
  MessageSquare,
  Wrench,
  Shield,
  Percent,
  Ruler,
  Award,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={24} />,
  Wrench: <Wrench size={24} />,
  Shield: <Shield size={24} />,
  Percent: <Percent size={24} />,
  Ruler: <Ruler size={24} />,
  Award: <Award size={24} />,
};

interface ServicesPreviewProps {
  limit?: number;
  showLink?: boolean;
}

export function ServicesPreview({ limit = 3, showLink = true }: ServicesPreviewProps) {
  const displayed = services.slice(0, limit);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Cosa facciamo"
          title="Servizi completi per i tuoi serramenti"
          subtitle="Dalla consulenza iniziale all'installazione, fino alla manutenzione nel tempo. Ti seguiamo in ogni fase."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((service, idx) => (
            <Card key={service.id} className="p-8 group">
              <div className="w-12 h-12 rounded-sm bg-[#1B3A4B]/5 flex items-center justify-center text-[#1B3A4B] mb-5 group-hover:bg-[#1B3A4B] group-hover:text-white transition-colors">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F2231] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-[#C8973A] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {showLink && (
          <div className="text-center mt-12">
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 text-[#1B3A4B] font-semibold hover:text-[#C8973A] transition-colors group"
            >
              Scopri tutti i servizi
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
