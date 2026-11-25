import type { Metadata, Viewport } from "next";
import { Alegreya, Belleza } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { services } from "@/lib/services";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
  themeColor: "#242c24",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mavearredamenti.it"),
  title: {
    default: "Mave Arredamenti | Falegnameria e Tappezzeria Nautica Terracina",
    template: "%s | Mave Arredamenti",
  },
  description:
    "Eccellenza artigiana di Massimo Simonelli a Terracina. Arredi su misura, tappezzeria nautica, infissi Schüco, zanzariere e portoni blindati per casa e barca.",
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
    "Massimo Simonelli Terracina",
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
  "@id": "https://www.mavearredamenti.it/#business",
  name: "Mave Arredamenti",
  description:
    "Falegnameria artigianale, tappezzeria nautica, installazione infissi Schüco, zanzariere e portoni blindati su misura a Terracina.",
  url: "https://www.mavearredamenti.it",
  image: "https://www.mavearredamenti.it/opengraph-image.jpg",
  logo: "https://www.mavearredamenti.it/logo.jpg",
  telephone: "+393479417554",
  email: "mavearredamenti@gmail.com",
  vatID: "IT03215480595",
  priceRange: "€€",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.2904,
    longitude: 13.2442,
  },
  areaServed: [
    "Terracina",
    "Latina",
    "San Felice Circeo",
    "Fondi",
    "Sabaudia",
    "Sperlonga",
    "Gaeta",
  ],
  sameAs: ["https://www.instagram.com/mave_arredamenti/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi Artigianali Mave Arredamenti",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `https://www.mavearredamenti.it/servizi/${service.slug}`,
      },
    })),
  },
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-accent focus:text-[#1a231a] focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:shadow-lg"
        >
          Salta al contenuto principale
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
