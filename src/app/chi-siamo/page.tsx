import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ResponsiveHeroImage } from "@/components/responsive-hero-image";
import { Compass, Hammer, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "La storia e la filosofia artigiana di Mave Arredamenti di Massimo Simonelli a Terracina: passione per il legno, falegnameria nautica e lavorazioni su misura.",
  alternates: {
    canonical: "/chi-siamo",
  },
  openGraph: {
    title: "Chi Siamo | Mave Arredamenti Terracina",
    description:
      "La storia artigiana di Massimo Simonelli e Mave Arredamenti a Terracina: legno su misura e tappezzeria nautica.",
    url: "/chi-siamo",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chi Siamo | Mave Arredamenti",
    description:
      "Passione per il legno, falegnameria su misura e nautica a Terracina.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function ChiSiamoPage() {
  const heroDesktop =
    PlaceHolderImages.find((p) => p.id === "hero-chi-siamo-desktop")?.imageUrl ||
    "/images/hero-chi-siamo.jpg";
  const heroMobile =
    PlaceHolderImages.find((p) => p.id === "hero-chi-siamo-mobile")?.imageUrl ||
    "/images/hero-chi-siamo-mobile.jpg";
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-massimo");

  const values = [
    {
      icon: Hammer,
      title: "Tradizione Artigiana",
      text: "Lavorazioni curate manualmente in ogni incastro, finitura e verniciatura.",
    },
    {
      icon: Compass,
      title: "Esperienza Nautica",
      text: "Precisione costruttiva e materiali testati per resistere al sole e al mare.",
    },
    {
      icon: ShieldCheck,
      title: "Qualità Certificata",
      text: "Selezione rigorosa di legni, tessuti marini e sistemi di sicurezza Schüco.",
    },
  ];

  return (
    <>
      <section className="relative w-full h-[380px] md:h-[460px] flex items-center justify-center text-center overflow-hidden bg-zinc-900">
        <ResponsiveHeroImage
          desktopSrc={heroDesktop}
          mobileSrc={heroMobile}
          alt="Laboratorio artigiano Mave Arredamenti a Terracina"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-2xl">
            La Nostra{" "}
            <span className="text-accent italic font-light">Storia</span>
          </h1>

          <div className="h-1.5 w-24 bg-accent mx-auto mt-5 rounded-full shadow-lg" />

          <p className="mt-6 text-xl md:text-3xl text-white font-medium italic drop-shadow-md">
            &ldquo;Il mio lavoro è la mia passione.&rdquo;
          </p>
          <p className="mt-3 text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
            Ogni creazione di Mave Arredamenti porta con sé il valore del tempo,
            della ricerca dei materiali e della cura manuale.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group flex justify-center w-full">
              <div className="relative w-full max-w-md h-[400px] md:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-card">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            </div>

            <div className="space-y-6 text-foreground">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl text-primary italic leading-tight">
                  La filosofia di Massimo Simonelli
                </h2>
                <div className="h-1 w-16 bg-accent mt-3 rounded-full" />
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Fin da ragazzo, Massimo Simonelli ha coltivato una profonda
                  passione per la lavorazione del legno e per la creazione di
                  oggetti costruiti a regola d&apos;arte. Quella passione è
                  diventata il cuore di Mave Arredamenti a Terracina.
                </p>
                <p>
                  Crediamo fermamente nel valore del lavoro artigianale: seguire
                  ogni cliente di persona, progettare senza compromessi
                  industriali e curare ogni dettaglio come se fosse per la
                  propria casa.
                </p>
              </div>

              <div className="pt-4">
                <h2 className="font-headline text-2xl md:text-3xl text-primary italic">
                  Esperienza e Versatilità
                </h2>
                <div className="h-1 w-16 bg-accent mt-3 mb-4 rounded-full" />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Nel corso degli anni, il laboratorio ha affiancato alla
                  falegnameria tradizionale la falegnameria{" "}
                  <span className="text-primary font-semibold italic">
                    nautica
                  </span>
                  , un settore che richiede precisione millimetrica e materiali
                  marini selezionati. La stessa attenzione accompagna
                  l&apos;installazione di infissi Schüco, zanzariere e portoni
                  blindati.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 shadow-lg"
                >
                  <Link href="/contatti">Contattaci per un progetto</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-card p-7 rounded-3xl border border-border shadow-sm space-y-3"
              >
                <div className="inline-flex p-3 rounded-xl bg-secondary text-primary">
                  <val.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-headline text-2xl text-foreground">
                  {val.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
