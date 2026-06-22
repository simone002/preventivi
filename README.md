# SerraStyle – Sito Aziendale Serramenti

Progetto Next.js 15 + TypeScript + Tailwind CSS per sito aziendale di serramenti a Catania.

## Stack tecnologico

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form + Zod** (validazione form)
- **Lucide React** (icone)
- **Google Fonts** (Inter + Playfair Display)

## Struttura del progetto

```
src/
├── app/
│   ├── layout.tsx          # Layout root con metadata SEO
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design system e variabili CSS
│   ├── not-found.tsx       # Pagina 404
│   ├── sitemap.ts          # Sitemap automatica
│   ├── chi-siamo/          # Pagina Chi Siamo
│   ├── servizi/            # Pagina Servizi
│   ├── prodotti/           # Pagina Prodotti
│   ├── realizzazioni/      # Pagina Realizzazioni
│   ├── contatti/           # Pagina Contatti
│   └── preventivo/         # Form preventivo
├── components/
│   ├── ui/                 # Button, Card, Badge, SectionHeading
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # HeroSection, ServicesPreview, ecc.
│   └── forms/              # QuoteForm, ContactForm
├── lib/
│   ├── data.ts             # Tutti i dati del sito
│   └── utils.ts            # Utility functions
└── types/                  # TypeScript types
```

## Avvio in sviluppo

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

## Build per produzione

```bash
npm run build
npm start
```

## Deploy

### Vercel (consigliato)
```bash
npx vercel --prod
```

### Docker
```bash
docker build -t serrastyle .
docker run -p 3000:3000 serrastyle
```

## Personalizzazione

1. **Dati azienda**: modifica `src/lib/data.ts`
2. **Colori**: modifica le variabili CSS in `globals.css`
3. **Font**: cambia in `layout.tsx`
4. **SEO**: aggiorna metadata in ogni `page.tsx`
5. **Form**: integra con API reale in `QuoteForm.tsx` e `ContactForm.tsx`

## Integrazioni consigliate per produzione

- **Email**: Resend o Nodemailer per invio form
- **Analytics**: Google Analytics 4 o Plausible
- **CMS**: Sanity o Contentful per gestione contenuti
- **Mappa**: Google Maps API per showroom
- **Chat**: Tawk.to o Crisp per live chat

## Note SEO

Il sito è ottimizzato per:
- Meta tag Open Graph e Twitter Card
- Sitemap automatica in `/sitemap.xml`
- `robots.txt`
- Schema markup (da aggiungere per LocalBusiness)
- Core Web Vitals ottimizzati
