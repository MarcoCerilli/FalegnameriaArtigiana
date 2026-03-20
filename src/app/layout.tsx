import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { CraftPopup } from "@/components/craft-popup";

// Definizione del Viewport per il mobile (AGGIUNTA CONSIGLIATA)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Permette lo zoom per accessibilità
  themeColor: "#4a3c2c", // Colore della barra indirizzi (es. un marrone scuro come il legno)
};

export const metadata: Metadata = {
  // Titolo ottimizzato per la ricerca (max 60 caratteri)
  title: "Mave Arredamenti | Falegnameria e Tappezzeria Nautica Terracina",

  // Descrizione che spinge al click (max 160 caratteri)
  description:
    "Eccellenza artigiana di Simonelli Massimo a Terracina. Arredi su misura, tappezzeria nautica di lusso, infissi e portoni blindati. Trasforma la tua casa e la tua barca.",

  // Keywords mirate (AGGIUNTA CONSIGLIATA: una lista più pulita e concisa)
  keywords:
    "falegnameria Terracina, tappezzeria nautica Terracina, arredi su misura Terracina, restauro barche Terracina, infissi in legno Terracina, Simonelli Massimo Terracina, zanzariere Terracina",

  // URL Canonica per evitare contenuti duplicati (AGGIUNTA CONSIGLIATA)
  alternates: {
    canonical: "https://www.mavearredamenti.it",
  },

  // Open Graph per quando condividi il sito su WhatsApp o Social
  openGraph: {
    title: "Mave Arredamenti | Dal Legno al Mare",
    description:
      "Soluzioni artigianali su misura per casa e nautica a Terracina.",
    url: "https://www.mavearredamenti.it",
    siteName: "Mave Arredamenti",
    locale: "it_IT",
    type: "website",
    images: [
      {
        // URL ASSOLUTA CORRETTA dell'immagine opengraph-image.jpg inserita in app
        url: "https://www.mavearredamenti.it/opengraph-image.jpg",
        width: 1200, // Dimensione consigliata per FB/WA
        height: 630,
        alt: "Mave Arredamenti - Artigianato su misura a Terracina",
      },
    ],
  },

  // Metadata per Twitter/X (AGGIUNTA CONSIGLIATA)
  twitter: {
    card: "summary_large_image", // Visualizzazione immagine grande
    title: "Mave Arredamenti | Dal Legno al Mare",
    description:
      "Soluzioni artigianali su misura per casa e nautica a Terracina.",
    images: ["https://www.mavearredamenti.it/opengraph-image.jpg"], // URL assoluta dell'immagine
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      {/* Aggiunta scroll-smooth per i link ancora */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap"
          rel="stylesheet"
        />
        {/* Next.js gestirà automaticamente il Viewport e altri tag head dai metadata */}
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen selection:bg-accent/30 selection:text-primary">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
        <CraftPopup />
      </body>
    </html>
  );
}
