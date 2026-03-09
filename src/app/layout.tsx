import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import { CraftPopup } from '@/components/craft-popup';

export const metadata: Metadata = {
  title: 'Mave di Simonelli Massimo',
  description: 'Falegnameria, tappezzeria nautica, infissi, e altro. La maestria per la tua casa e la tua barca.',
  keywords: "falegnameria, tappezzeria nautica, infissi, zanzariere, portoni blindati, artigiano, su misura, Mave, Simonelli Massimo",
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
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
        <CraftPopup />
      </body>
    </html>
  );
}
