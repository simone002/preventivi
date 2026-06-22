import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1929] text-white">
      {/* CTA Banner */}
      <div className="bg-[#C8973A]">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-2xl font-bold text-white">
              Pronto a trasformare la tua casa?
            </p>
            <p className="text-white/80 text-sm mt-1">
              Richiedi un preventivo gratuito, senza impegno.
            </p>
          </div>
          <Link
            href="/preventivo"
            className="inline-flex items-center gap-2 bg-white text-[#C8973A] font-semibold px-6 py-3 rounded-sm hover:bg-[#0F2231] hover:text-white transition-colors whitespace-nowrap"
          >
            Preventivo Gratuito <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#C8973A] rounded-sm flex items-center justify-center font-bold text-sm text-white">
                SS
              </div>
              <span className="font-serif font-bold text-xl">SerraStyle</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Specialisti in serramenti di qualità dal 1975. Infissi, porte,
              finestre e sistemi oscuranti per residenziale e commerciale.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-[#C8973A] transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#C8973A] mb-5">
              Navigazione
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/30 group-hover:bg-[#C8973A] group-hover:w-5 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/preventivo"
                  className="text-sm text-[#C8973A] hover:text-white transition-colors flex items-center gap-2 group font-medium"
                >
                  <span className="w-3 h-px bg-[#C8973A] group-hover:w-5 transition-all" />
                  Preventivo Gratuito
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#C8973A] mb-5">
              Prodotti
            </h4>
            <ul className="space-y-2.5">
              {[
                "Finestre in Alluminio",
                "Finestre in PVC",
                "Porte d'Ingresso",
                "Porte Blindate",
                "Sistemi Scorrevoli",
                "Verande e Tettoie",
                "Zanzariere",
                "Tapparelle",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/prodotti"
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/30 group-hover:bg-[#C8973A] group-hover:w-5 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#C8973A] mb-5">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C8973A] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">
                  Via del Serramento 12<br />95100 Catania (CT)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#C8973A] shrink-0" />
                <a
                  href="tel:+390957154321"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  095 715 4321
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C8973A] shrink-0" />
                <a
                  href="mailto:info@serrastyle.it"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  info@serrastyle.it
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#C8973A] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">
                  Lun–Ven: 8:30–18:30<br />
                  Sabato: 9:00–13:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {currentYear} SerraStyle S.r.l. – P.IVA 12345678901</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie" className="hover:text-white/70 transition-colors">
              Cookie Policy
            </Link>
            <span>Realizzato con Next.js 15</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
