import type { Metadata, Viewport } from "next";
import { Alegreya, Belleza } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { CraftPopup } from "@/components/craft-popup";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-alegreya",
  display: "swap",
});

const belleza = Belleza({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-belleza",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4a3c2c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mavearredamenti.it"),
  title: {
    default: "Mave Arredamenti | Falegnameria e Tappezzeria Nautica Terracina",
    template: "%s | Mave Arredamenti",
  },
  description:
    "Eccellenza artigiana di Simonelli Massimo a Terracina. Arredi su misura, tappezzeria nautica di lusso, infissi e portoni blindati. Trasforma la tua casa e la tua barca.",
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
  keywords: [
    "falegnameria Terracina",
    "tappezzeria nautica Terracina",
    "arredi su misura Terracina",
    "restauro barche Terracina",
    "infissi in legno Terracina",
    "infissi Schüco Terracina",
    "Simonelli Massimo Terracina",
    "zanzariere Terracina",
    "portoni blindati Terracina",
  ],
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
  twitter: {
    card: "summary_large_image",
    title: "Mave Arredamenti | Dal Legno al Mare",
    description:
      "Soluzioni artigianali su misura per casa e nautica a Terracina.",
    images: ["https://www.mavearredamenti.it/opengraph-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Mave Arredamenti",
  description:
    "Falegnameria artigianale, tappezzeria nautica, installazione infissi Schüco, zanzariere e portoni blindati su misura a Terracina.",
  url: "https://www.mavearredamenti.it",
  telephone: "+393479417554",
  email: "mavearredamenti@gmail.com",
  founder: {
    "@type": "Person",
    name: "Massimo Simonelli",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Giorgione SNC",
    addressLocality: "Terracina",
    addressRegion: "LT",
    postalCode: "04019",
    addressCountry: "IT",
  },
  areaServed: ["Terracina", "Latina", "San Felice Circeo", "Fondi", "Sabaudia"],
  sameAs: ["https://www.instagram.com/mave_arredamenti/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${alegreya.variable} ${belleza.variable} scroll-smooth`}
    >
      <body className="font-body antialiased flex flex-col min-h-screen selection:bg-accent/30 selection:text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
