import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GALLERY_PHOTOS } from "@/lib/gallery";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery-grid";
import { ResponsiveHeroImage } from "@/components/responsive-hero-image";

export const metadata: Metadata = {
  title: "Galleria Progetti",
  description:
    "Esplora la galleria dei lavori artigianali di Mave Arredamenti a Terracina: cucine su misura, rivestimenti nautici in teak, portoni blindati, scale e arredi in legno.",
  alternates: {
    canonical: "/galleria",
  },
  openGraph: {
    title: "Galleria Progetti | Mave Arredamenti Terracina",
    description:
      "Cucine in massello, lavorazioni nautiche, scale e arredi su misura realizzati da Mave Arredamenti.",
    url: "/galleria",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galleria Progetti | Mave Arredamenti",
    description:
      "Realizzazioni su misura in legno e tappezzeria nautica a Terracina.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function GalleriaPage() {
  const heroDesktop =
    PlaceHolderImages.find((p) => p.id === "hero-galleria-desktop")?.imageUrl ||
    "/images/hero-galleria-desktop.jpg";
  const heroMobile =
    PlaceHolderImages.find((p) => p.id === "hero-galleria-mobile")?.imageUrl ||
    "/images/hero-galleria-mobile.jpg";

  return (
    <>
      <div className="max-w-6xl mx-auto px-3 sm:px-5 pt-2">
        <section className="relative h-[40vh] min-h-[300px] max-h-[420px] flex items-center justify-center text-center overflow-hidden bg-zinc-950 rounded-[2rem] md:rounded-[2.5rem] shadow-xl">
          <ResponsiveHeroImage
            desktopSrc={heroDesktop}
            mobileSrc={heroMobile}
            alt="Galleria realizzazioni artigianali di Mave Arredamenti a Terracina"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,rgba(15,20,15,0.34)_0%,rgba(15,20,15,0.06)_75%,transparent_100%)]" />

          <div className="relative z-10 px-6 max-w-4xl mx-auto">
            <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight drop-shadow-2xl">
              Galleria{" "}
              <span className="text-accent italic font-light tracking-tight">
                Progetti
              </span>
            </h1>
            <p className="text-white/90 mt-3 font-headline text-lg md:text-2xl drop-shadow-md">
              Mave Arredamenti di Massimo Simonelli
            </p>
            <div className="h-1.5 w-24 bg-accent mx-auto mt-5 rounded-full" />
          </div>
        </section>
      </div>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <GalleryGrid photos={GALLERY_PHOTOS} />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-3 sm:px-5 pb-10 pt-2">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-secondary/40 border border-border/80 px-6 py-12 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground font-headline italic text-xl md:text-2xl mb-8">
              Ogni dettaglio è personalizzabile secondo le tue esigenze di
              spazio, stile e materiali.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto whitespace-normal text-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-5 h-auto text-base sm:text-lg shadow-xl"
            >
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2"
              >
                Inizia il tuo progetto{" "}
                <ArrowRight size={20} className="shrink-0" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
