import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { CraftPopup } from "@/components/craft-popup";

export const metadata: Metadata = {
  // Titolo ottimizzato per la ricerca (max 60 caratteri)
  title: "Mave Arredamenti | Falegnameria e Tappezzeria Nautica Terracina",

  // Descrizione che spinge al click (max 160 caratteri)
  description:
    "Eccellenza artigiana di Simonelli Massimo a Terracina. Arredi su misura, tappezzeria nautica di lusso, infissi e portoni blindati. Trasforma la tua casa e la tua barca.",

  // Keywords mirate (meno importanti oggi, ma utili per coerenza interna)
  keywords:
    "falegnameria Terracina, tappezzeria nautica Lazio, arredi su misura, restauro barche, infissi in legno, Simonelli Massimo, zanzariere Terracina",

  // Open Graph per quando condividi il sito su WhatsApp o Social
  openGraph: {
    title: "Mave Arredamenti | Dal Legno al Mare",
    description:
      "Soluzioni artigianali su misura per casa e nautica a Terracina.",
    url: "https://www.mavearredamenti.it", // Sostituisci con il tuo dominio reale
    siteName: "Mave Arredamenti",
    locale: "it_IT",
    type: "website",
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
