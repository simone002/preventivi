"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  nome: z.string().min(2, "Inserisci il tuo nome"),
  email: z.string().email("Email non valida"),
  telefono: z.string().optional(),
  oggetto: z.string().min(3, "Inserisci l'oggetto del messaggio"),
  messaggio: z.string().min(20, "Il messaggio deve essere di almeno 20 caratteri"),
  privacy: z.boolean().refine((v) => v === true, "Devi accettare la privacy policy"),
});

type FormData = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";

const inp = (err?: boolean) =>
  cn(
    "w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all",
    err ? "border-red-400 focus:ring-red-200 bg-red-50" : "border-gray-200 focus:ring-[#1B3A4B]/20 focus:border-[#1B3A4B] bg-white"
  );

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
        <h3 className="font-serif text-xl font-bold text-[#0F2231] mb-2">Messaggio inviato!</h3>
        <p className="text-gray-500 text-sm mb-4">Ti risponderemo entro 24 ore. Controlla anche la tua email.</p>
        <button onClick={() => setStatus("idle")} className="text-[#1B3A4B] text-sm underline hover:text-[#C8973A]">
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-3 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle size={16} /> Errore nell'invio. Riprova o chiamaci al 095 715 4321.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome <span className="text-red-500">*</span></label>
          <input {...register("nome")} type="text" placeholder="Mario Rossi" className={inp(!!errors.nome)} />
          {errors.nome && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.nome.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-red-500">*</span></label>
          <input {...register("email")} type="email" placeholder="mario@email.it" className={inp(!!errors.email)} />
          {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefono</label>
        <input {...register("telefono")} type="tel" placeholder="333 1234567" className={inp()} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Oggetto <span className="text-red-500">*</span></label>
        <input {...register("oggetto")} type="text" placeholder="Informazioni sui vostri prodotti" className={inp(!!errors.oggetto)} />
        {errors.oggetto && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.oggetto.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Messaggio <span className="text-red-500">*</span></label>
        <textarea {...register("messaggio")} rows={5} placeholder="Scrivi il tuo messaggio..." className={cn(inp(!!errors.messaggio), "resize-none")} />
        {errors.messaggio && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.messaggio.message}</p>}
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input {...register("privacy")} type="checkbox" className="mt-0.5 accent-[#1B3A4B]" />
        <span className="text-xs text-gray-500">Accetto la <a href="/privacy" className="text-[#1B3A4B] underline">Privacy Policy</a>. <span className="text-red-500">*</span></span>
      </label>
      {errors.privacy && <p className="text-xs text-red-500 flex items-center gap-1 ml-7"><AlertCircle size={12} />{errors.privacy.message}</p>}
      <Button type="submit" variant="primary" fullWidth disabled={status === "loading"} size="lg">
        {status === "loading" ? <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send size={16} /> Invia messaggio</>}
      </Button>
    </form>
  );
}
