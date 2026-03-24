import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { CraftPopup } from "@/components/craft-popup";

// Definizione del Viewport per il mobile
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, 
  themeColor: "#4a3c2c", // Marrone scuro richiamo legno
};

export const metadata: Metadata = {
  // Titolo ottimizzato per la ricerca
  title: "Mave Arredamenti | Falegnameria e Tappezzeria Nautica Terracina",

  // Descrizione per Google (max 160 caratteri)
  description:
    "Eccellenza artigiana di Simonelli Massimo a Terracina. Arredi su misura, tappezzeria nautica di lusso, infissi e portoni blindati. Trasforma la tua casa e la tua barca.",

  // Configurazione Icone (Punta ai file nella cartella /src/app)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon-180x180.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-icon-192x192.png",
      },
    ],
  },

  // Keywords mirate
  keywords:
    "falegnameria Terracina, tappezzeria nautica Terracina, arredi su misura Terracina, restauro barche Terracina, infissi in legno Terracina, Simonelli Massimo Terracina, zanzariere Terracina",

  // URL Canonica
  alternates: {
    canonical: "https://www.mavearredamenti.it",
  },

  // Open Graph per Social e WhatsApp
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
        url: "https://www.mavearredamenti.it/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mave Arredamenti - Artigianato su misura a Terracina",
      },
    ],
  },

  // Metadata per Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Mave Arredamenti | Dal Legno al Mare",
    description:
      "Soluzioni artigianali su misura per casa e nautica a Terracina.",
    images: ["https://www.mavearredamenti.it/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
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