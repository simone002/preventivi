import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "SerraStyle – Infissi, Serramenti e Porte | Catania",
    template: "%s | SerraStyle",
  },
  description:
    "Specialisti in infissi, finestre, porte e serramenti in alluminio e PVC a Catania. Qualità, design e risparmio energetico. Richiedi il tuo preventivo gratuito.",
  keywords: [
    "infissi catania",
    "serramenti catania",
    "finestre alluminio",
    "porte blindate",
    "preventivo infissi",
    "taglio termico",
    "risparmio energetico",
  ],
  authors: [{ name: "SerraStyle" }],
  creator: "SerraStyle",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.serrastyle.it",
    siteName: "SerraStyle",
    title: "SerraStyle – Infissi e Serramenti | Catania",
    description:
      "Specialisti in infissi, finestre, porte e serramenti in alluminio e PVC a Catania.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SerraStyle – Infissi e Serramenti | Catania",
    description:
      "Specialisti in infissi, finestre, porte e serramenti in alluminio e PVC a Catania.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
