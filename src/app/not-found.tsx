import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F2231] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-serif text-[10rem] font-bold text-white/5 leading-none select-none">
          404
        </div>
        <div className="-mt-16 relative z-10">
          <p className="text-[#C8973A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Pagina non trovata
          </p>
          <h1 className="font-serif text-3xl font-bold text-white mb-4">
            Questa pagina non esiste
          </h1>
          <p className="text-white/60 mb-8 max-w-sm mx-auto">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/" variant="accent">
              <Home size={16} /> Torna alla home
            </Button>
            <Button href="/contatti" variant="ghost">
              <ArrowLeft size={16} /> Contattaci
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
