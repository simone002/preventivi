// ===== TYPES =====
export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  material: string;
  badge?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

// ===== NAV =====
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Prodotti", href: "/prodotti" },
  { label: "Realizzazioni", href: "/realizzazioni" },
  { label: "Contatti", href: "/contatti" },
];

// ===== STATS =====
export const stats = [
  { value: "48+", label: "Anni di esperienza" },
  { value: "3.200+", label: "Clienti soddisfatti" },
  { value: "15.000+", label: "Serramenti installati" },
  { value: "100%", label: "Garanzia soddisfazione" },
];

// ===== SERVICES =====
export const services: Service[] = [
  {
    id: "consulenza",
    icon: "MessageSquare",
    title: "Consulenza Gratuita",
    description:
      "I nostri tecnici valutano le tue esigenze e ti guidano verso la soluzione ideale per la tua abitazione o azienda.",
    features: [
      "Sopralluogo gratuito",
      "Progettazione personalizzata",
      "Preventivo dettagliato",
      "Consulenza energetica",
    ],
  },
  {
    id: "installazione",
    icon: "Wrench",
    title: "Installazione Certificata",
    description:
      "Squadre specializzate eseguono l'installazione con la massima precisione, rispettando tempi e normative vigenti.",
    features: [
      "Tecnici certificati",
      "Materiali di prima qualità",
      "Smaltimento vecchi infissi",
      "Pulizia post-lavori",
    ],
  },
  {
    id: "manutenzione",
    icon: "Shield",
    title: "Manutenzione Annuale",
    description:
      "Il nostro piano di manutenzione annuale garantisce efficienza e durata nel tempo dei tuoi serramenti.",
    features: [
      "Controllo guarnizioni",
      "Regolazione ferramenta",
      "Verifica tenuta aria/acqua",
      "Lubrificazione meccanismi",
    ],
  },
  {
    id: "incentivi",
    icon: "Percent",
    title: "Pratiche Incentivi",
    description:
      "Ti assistiamo nell'accesso agli incentivi statali: Ecobonus, Bonus Casa e Superbonus per massimizzare il risparmio.",
    features: [
      "Bonus Casa 50%",
      "Ecobonus 65%",
      "Cessione del credito",
      "Documentazione completa",
    ],
  },
  {
    id: "progettazione",
    icon: "Ruler",
    title: "Progettazione Su Misura",
    description:
      "Ogni serramento è progettato e prodotto su misura per garantire la perfetta integrazione con la tua architettura.",
    features: [
      "Rilievo millimetrico",
      "Design personalizzato",
      "Ampia scelta colori",
      "Finiture speciali",
    ],
  },
  {
    id: "garanzia",
    icon: "Award",
    title: "Garanzia Estesa",
    description:
      "Offriamo garanzie estese fino a 10 anni su prodotti e installazione per una totale tranquillità.",
    features: [
      "Garanzia prodotto 10 anni",
      "Garanzia installazione",
      "Assistenza post-vendita",
      "Intervento in 48h",
    ],
  },
];

// ===== PRODUCTS =====
export const products: Product[] = [
  {
    id: "finestre-alluminio",
    category: "Finestre",
    title: "Finestre in Alluminio",
    description:
      "Profili slim con taglio termico per massima luminosità e isolamento. Resistenti, eleganti e durevoli nel tempo.",
    material: "Alluminio",
    badge: "Bestseller",
  },
  {
    id: "finestre-pvc",
    category: "Finestre",
    title: "Finestre in PVC",
    description:
      "Eccellente isolamento termico e acustico. Ideali per chi cerca il massimo risparmio energetico con budget contenuto.",
    material: "PVC",
  },
  {
    id: "porte-ingresso",
    category: "Porte",
    title: "Porte d'Ingresso",
    description:
      "Sicurezza, estetica e isolamento in un unico prodotto. Disponibili in alluminio, PVC e legno con pannelli decorativi.",
    material: "Alluminio / PVC / Legno",
    badge: "Novità",
  },
  {
    id: "porte-blindate",
    category: "Porte",
    title: "Porte Blindate",
    description:
      "Massima protezione certificata. Classe di resistenza 4 e 5, con serrature a doppia mappa e pannelli antiproiettile.",
    material: "Acciaio",
  },
  {
    id: "scorrevoli",
    category: "Sistemi Scorrevoli",
    title: "Porte Scorrevoli",
    description:
      "Sistemi a scomparsa e alzante-scorrevole per un design moderno e funzionale. Aperture ampie fino a 6 metri.",
    material: "Alluminio",
  },
  {
    id: "verande",
    category: "Verande",
    title: "Verande e Tettoie",
    description:
      "Amplia gli spazi vivibili con eleganza. Strutture in alluminio con vetri stratificati o policarbonato.",
    material: "Alluminio + Vetro",
  },
  {
    id: "zanzariere",
    category: "Accessori",
    title: "Zanzariere Su Misura",
    description:
      "Zanzariere a rullo, plissettate e scorrevoli per ogni tipo di serramento. Protezione totale dagli insetti.",
    material: "Alluminio / Acciaio",
  },
  {
    id: "tapparelle",
    category: "Oscuranti",
    title: "Tapparelle & Persiane",
    description:
      "Sistemi oscuranti in alluminio, PVC e legno per il controllo della luce e la privacy. Motorizzabili.",
    material: "Alluminio / PVC",
    badge: "Motorizzabile",
  },
];

// ===== PROJECTS =====
export const projects: Project[] = [
  {
    id: "villa-etna",
    title: "Villa Privata – Piano Lago",
    location: "Nicolosi (CT)",
    category: "Residenziale",
    year: "2024",
    description:
      "Sostituzione completa di 24 finestre e 3 porte-finestre con profili in alluminio a taglio termico. Miglioramento energetico classe A+.",
  },
  {
    id: "palazzo-uffici",
    title: "Palazzo Uffici Centro",
    location: "Catania Centro",
    category: "Commerciale",
    year: "2024",
    description:
      "Fornitura e installazione di facciate continue in alluminio per edificio di 8 piani. 420 mq di vetrazione strutturale.",
  },
  {
    id: "clinica-privata",
    title: "Clinica Medica Privata",
    location: "Misterbianco (CT)",
    category: "Sanitario",
    year: "2023",
    description:
      "Serramenti tecnici con vetri antirumore e porte blindate per 3 piani di clinica. Certificazione acustica classe 5.",
  },
  {
    id: "residence-mare",
    title: "Residence Vista Mare",
    location: "Aci Castello (CT)",
    category: "Residenziale",
    year: "2023",
    description:
      "Complesso di 18 appartamenti. Serramenti marini in alluminio anodizzato con trattamento anti-salsedine.",
  },
  {
    id: "hotel-boutique",
    title: "Hotel Boutique Storico",
    location: "Catania Centro",
    category: "Ricettivo",
    year: "2023",
    description:
      "Restauro conservativo con serramenti che rispettano il vincolo architettonico. Vetri bassoemissivi e ante in legno alluminio.",
  },
  {
    id: "villa-moderna",
    title: "Villa Contemporanea",
    location: "Gravina di Catania",
    category: "Residenziale",
    year: "2022",
    description:
      "Design minimalista con grandi aperture scorrevoli alzante fino a 4 m. Sistema domotico integrato per automazione totale.",
  },
];

// ===== TEAM =====
export const teamMembers: TeamMember[] = [
  {
    name: "Marco Ferrara",
    role: "Titolare & Fondatore",
    bio: "Oltre 30 anni nel settore dei serramenti. Appassionato di architettura e innovazione, guida l'azienda con visione e competenza.",
  },
  {
    name: "Elena Ferrara",
    role: "Responsabile Commerciale",
    bio: "Gestisce le relazioni con clienti e fornitori. La sua competenza tecnica trasforma ogni esigenza in una soluzione perfetta.",
  },
  {
    name: "Giovanni Russo",
    role: "Capo Tecnico Installatori",
    bio: "20 anni di esperienza sul campo. Coordina le squadre di installazione garantendo precisione e rispetto dei tempi.",
  },
  {
    name: "Alessia Bianchi",
    role: "Designer & Progettista",
    bio: "Arch. con specializzazione in involucro edilizio. Trasforma le idee dei clienti in progetti tecnici e visivamente distintivi.",
  },
];

// ===== TESTIMONIALS =====
export const testimonials = [
  {
    name: "Francesco L.",
    location: "Catania",
    text: "Professionalità impeccabile dalla consulenza all'installazione. Le nuove finestre hanno ridotto le bollette del 35%. Consigliatissimi!",
    rating: 5,
  },
  {
    name: "Maria G.",
    location: "Acireale",
    text: "Ci hanno seguito in tutto il percorso per il Bonus Casa. Lavoro perfetto, puntualità assoluta e personale gentilissimo.",
    rating: 5,
  },
  {
    name: "Studio Arch. Lombardi",
    location: "Catania",
    text: "Partner affidabile per i nostri cantieri. Qualità costante, rispetto delle consegne e flessibilità su misure speciali.",
    rating: 5,
  },
];
