"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  nome: z.string().min(2, "Inserisci il tuo nome (min. 2 caratteri)"),
  cognome: z.string().min(2, "Inserisci il tuo cognome"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  telefono: z.string().min(9, "Inserisci un numero di telefono valido"),
  tipoIntervento: z.string().min(1, "Seleziona il tipo di intervento"),
  materiale: z.string().optional(),
  indirizzo: z.string().min(5, "Inserisci l'indirizzo dell'immobile"),
  citta: z.string().min(2, "Inserisci la città"),
  note: z.string().optional(),
  privacy: z
    .boolean()
    .refine((val) => val === true, "Devi accettare la privacy policy"),
});

type FormData = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";

const inputClass = (error?: boolean) =>
  cn(
    "w-full border rounded-sm px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all",
    error
      ? "border-red-400 focus:ring-red-200 bg-red-50"
      : "border-gray-200 focus:ring-[#1B3A4B]/20 focus:border-[#1B3A4B] bg-white"
  );

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/preventivo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Errore del server");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMsg("Si è verificato un errore. Riprova o chiamaci al 095 715 4321.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-10 text-center">
        <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
        <h3 className="font-serif text-2xl font-bold text-[#0F2231] mb-3">
          Richiesta inviata!
        </h3>
        <p className="text-gray-600 mb-2">
          Ti contatteremo entro <strong>24 ore lavorative</strong> per concordare il sopralluogo gratuito.
        </p>
        <p className="text-gray-500 text-sm mb-6">
          Controlla anche la casella email: ti abbiamo inviato una conferma.
        </p>
        <Button onClick={() => setStatus("idle")} variant="primary">
          Invia un'altra richiesta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-4 flex items-start gap-3">
          <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{errorMsg}</p>
        </div>
      )}

      {/* Personal info */}
      <div>
        <h3 className="font-semibold text-[#0F2231] mb-4 pb-2 border-b border-gray-100">
          Dati personali
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nome <span className="text-red-500">*</span>
            </label>
            <input {...register("nome")} type="text" placeholder="Mario" className={inputClass(!!errors.nome)} />
            {errors.nome && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.nome.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Cognome <span className="text-red-500">*</span>
            </label>
            <input {...register("cognome")} type="text" placeholder="Rossi" className={inputClass(!!errors.cognome)} />
            {errors.cognome && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.cognome.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input {...register("email")} type="email" placeholder="mario.rossi@email.it" className={inputClass(!!errors.email)} />
            {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Telefono <span className="text-red-500">*</span>
            </label>
            <input {...register("telefono")} type="tel" placeholder="333 1234567" className={inputClass(!!errors.telefono)} />
            {errors.telefono && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.telefono.message}</p>}
          </div>
        </div>
      </div>

      {/* Intervention details */}
      <div>
        <h3 className="font-semibold text-[#0F2231] mb-4 pb-2 border-b border-gray-100">
          Dettagli dell'intervento
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Tipo di intervento <span className="text-red-500">*</span>
            </label>
            <select {...register("tipoIntervento")} className={inputClass(!!errors.tipoIntervento)}>
              <option value="">Seleziona...</option>
              <option value="finestre">Finestre</option>
              <option value="porte">Porte d'ingresso</option>
              <option value="porte-blindate">Porte blindate</option>
              <option value="scorrevoli">Sistemi scorrevoli</option>
              <option value="veranda">Veranda / Tettoia</option>
              <option value="tapparelle">Tapparelle / Persiane</option>
              <option value="zanzariere">Zanzariere</option>
              <option value="altro">Altro</option>
            </select>
            {errors.tipoIntervento && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.tipoIntervento.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Materiale preferito</label>
            <select {...register("materiale")} className={inputClass(false)}>
              <option value="">Nessuna preferenza</option>
              <option value="alluminio">Alluminio</option>
              <option value="pvc">PVC</option>
              <option value="legno-alluminio">Legno / Alluminio</option>
              <option value="acciaio">Acciaio</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Indirizzo immobile <span className="text-red-500">*</span>
            </label>
            <input {...register("indirizzo")} type="text" placeholder="Via Roma 1" className={inputClass(!!errors.indirizzo)} />
            {errors.indirizzo && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.indirizzo.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Città <span className="text-red-500">*</span>
            </label>
            <input {...register("citta")} type="text" placeholder="Catania" className={inputClass(!!errors.citta)} />
            {errors.citta && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.citta.message}</p>}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Note aggiuntive</label>
        <textarea {...register("note")} rows={4} placeholder="Descrivi il tuo progetto: numero di infissi, piani, preferenze estetiche..." className={cn(inputClass(false), "resize-none")} />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input {...register("privacy")} type="checkbox" className="mt-0.5 w-4 h-4 accent-[#1B3A4B]" />
          <span className="text-sm text-gray-600">
            Ho letto e accetto la{" "}
            <a href="/privacy" className="text-[#1B3A4B] underline hover:text-[#C8973A]">Privacy Policy</a>{" "}
            e autorizzo il trattamento dei miei dati personali. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.privacy && <p className="mt-1 text-xs text-red-500 flex items-center gap-1 ml-7"><AlertCircle size={12} />{errors.privacy.message}</p>}
      </div>

      <Button type="submit" variant="accent" size="lg" fullWidth disabled={status === "loading"}>
        {status === "loading" ? (
          <><span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Invio in corso...</>
        ) : (
          <><Send size={18} />Invia richiesta preventivo</>
        )}
      </Button>

      <p className="text-center text-xs text-gray-400">
        Risposta garantita entro 24 ore lavorative. Sopralluogo gratuito e senza impegno.
      </p>
    </form>
  );
}
