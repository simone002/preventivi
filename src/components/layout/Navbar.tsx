"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navBg = scrolled || !isHome
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-[#0F2231]" : "text-white";
  const logoColor = scrolled || !isHome ? "text-[#1B3A4B]" : "text-white";
  const accentColor = "text-[#C8973A]";

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0F2231] text-white/80 text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Via del Serramento 12, 95100 Catania (CT)</span>
          <div className="flex items-center gap-6">
            <a href="tel:+390957154321" className="flex items-center gap-1.5 hover:text-[#C8973A] transition-colors">
              <Phone size={12} />
              <span>095 715 4321</span>
            </a>
            <span className="text-white/40">|</span>
            <span>Lun–Sab 8:30–18:30</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || !isHome ? "top-0" : "md:top-8 top-0",
          navBg
        )}
        style={{ top: scrolled || !isHome ? 0 : undefined }}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className={cn(
                "w-8 h-8 rounded-sm flex items-center justify-center font-bold text-sm transition-colors",
                scrolled || !isHome ? "bg-[#1B3A4B] text-white" : "bg-white/20 text-white backdrop-blur-sm"
              )}>
                SS
              </div>
              <div>
                <span className={cn("font-serif font-bold text-xl leading-none block transition-colors", logoColor)}>
                  SerraStyle
                </span>
                <span className={cn("text-[10px] tracking-[0.2em] uppercase leading-none transition-colors",
                  scrolled || !isHome ? "text-[#C8973A]" : "text-white/60"
                )}>
                  Serramenti & Design
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors relative group",
                    textColor,
                    pathname === link.href ? accentColor : ""
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-0 left-4 right-4 h-0.5 bg-[#C8973A] transition-transform origin-left",
                    pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/preventivo" variant={scrolled || !isHome ? "accent" : "ghost"} size="sm">
                Preventivo Gratuito
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className={cn("lg:hidden p-2 transition-colors", textColor)}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-3 px-4 text-sm font-medium rounded-sm transition-colors",
                    pathname === link.href
                      ? "bg-[#1B3A4B] text-white"
                      : "text-[#0F2231] hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 mt-2">
                <Button href="/preventivo" variant="accent" fullWidth>
                  Richiedi Preventivo Gratuito
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
