import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-gradient-to-br from-[#0A1929] to-[#1B3A4B] pt-36 pb-20 relative overflow-hidden",
        className
      )}
    >
      {/* Geometric accents */}
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none" aria-hidden>
        <div className="w-96 h-96 border border-white rounded-sm rotate-12 translate-x-32 -translate-y-16" />
      </div>
      <div className="absolute left-0 bottom-0 w-1 h-1/2 bg-gradient-to-t from-[#C8973A] to-transparent" />

      <div className="container mx-auto px-4">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-white/40 text-sm">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight size={14} />}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#C8973A]">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <span className="inline-block text-[#C8973A] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            {eyebrow}
          </span>
        )}

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
