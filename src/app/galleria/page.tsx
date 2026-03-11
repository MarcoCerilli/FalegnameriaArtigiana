import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroImage = PlaceHolderImages.find((p) => p.id === "hero-galleria");

const galleryPhotos = [
  { id: 1, src: "/gallery/arredo_mave.1.jpg", desc: "Cucina artigianale in massello" },
  { id: 2, src: "/gallery/arredo_mave.2.jpg", desc: "Rivestimento pozzetto in Teak" },
  { id: 3, src: "/gallery/arredo_mave.3.jpg", desc: "Armadio a muro su misura" },
  { id: 4, src: "/gallery/arredo_mave.4.jpg", desc: "Dettaglio mobili per interni yacht" },
  { id: 5, src: "/gallery/arredo_mave.5.jpg", desc: "Portone blindato con pannello in legno" },
  { id: 6, src: "/gallery/arredo_mave.6.jpg", desc: "Infissi ad alto isolamento termico" },
  { id: 7, src: "/gallery/arredo_mave.7.jpg", desc: "Tavolo da pranzo in rovere naturale" },
  { id: 8, src: "/gallery/arredo_mave.8.jpg", desc: "Restauro mobili d'epoca" },
  { id: 9, src: "/gallery/arredo_mave.9.jpg", desc: "Separè per soggiorno " },
  { id: 10, src: "/gallery/arredo_mave.10.jpg", desc: "Zanzariere integrate su misura" },
  { id: 11, src: "/gallery/arredo_mave.11.jpg", desc: "Scale interne in legno pregiato" },
  { id: 12, src: "/gallery/arredo_mave.12.jpg", desc: "Arredo bagno personalizzato" },
  { id: 13, src: "/gallery/arredo_mave.13.jpg", desc: "Lavorazione artigianale sottocoperta" },
  { id: 14, src: "/gallery/arredo_mave.14.jpg", desc: "Porte interne di design" },
  { id: 15, src: "/gallery/arredo_mave.15.jpg", desc: "Dettagli tecnici di falegnameria" },
  { id: 16, src: "/gallery/arredo_mave.16.jpg", desc: "Complementi d'arredo per il mare" },
  { id: 17, src: "/gallery/arredo_mave.17.jpg", desc: "Lbreria su misura" },
  { id: 18, src: "/gallery/arredo_mave.18.jpg", desc: "Finiture artigianali di pregio" },
  { id: 19, src: "/gallery/arredo_mave.19.jpg", desc: "Strutture in legno per esterni" },
  { id: 20, src: "/gallery/arredo_mave.20.jpg", desc: "Progetto completo arredo nautico" },
];

export default function GalleriaPage() {
  return (
    <>
      {/* SEZIONE HERO */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            unoptimized
            priority
          />
        )}

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          {/* FIX SPAZIO TITOLO */}
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight">
            Galleria{" "}
            <span className="text-accent italic font-light tracking-tight">
              Progetti
            </span>
          </h1>

          <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full shadow-lg" />

          <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed italic">
            Ogni creazione racconta una storia di legno, mare e dedizione
            assoluta al dettaglio.
          </p>
        </div>
      </section>

      {/* GRIGLIA PROGETTI CON EFFETTO PROFESSIONALE */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative h-[400px] overflow-hidden rounded-[2rem] shadow-xl bg-card transition-all duration-500 hover:shadow-accent/20 border border-white/10"
              >
                {/* 1. SFONDO SFOCATO (Colors extraction effect) */}
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  className="object-cover blur-2xl opacity-30 scale-110 group-hover:opacity-50 transition-opacity duration-500"
                  unoptimized
                />
                
                {/* 2. OVERLAY SCURO LEGGERO */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />

                {/* 3. IMMAGINE REALE (INTERA E PROTETTA) */}
                <div className="relative h-full w-full p-4 flex items-center justify-center">
                   <div className="relative h-full w-full">
                      <Image
                        src={photo.src}
                        alt={photo.desc}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-contain drop-shadow-2xl transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                        unoptimized
                      />
                   </div>
                </div>

                {/* Overlay Informativo - Appare al passaggio */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 translate-y-2 group-hover:translate-y-0">
                  <div className="h-1 w-8 bg-accent mb-3 rounded-full" />
                  <p className="text-white text-lg font-headline italic leading-snug">
                    {photo.desc}
                  </p>
                </div>

                {/* Ring riflettente per effetto vetro */}
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="pb-24 pt-12 bg-background text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-4">
          <p className="text-muted-foreground font-headline italic text-xl mb-8">
            Hai visto un dettaglio che vorresti per la tua casa o la tua barca?
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-7 text-lg shadow-xl shadow-accent/20 transition-all hover:scale-105"
          >
            <Link href="/contatti" className="flex items-center gap-2">
              Inizia il tuo progetto su misura
              <ArrowRight size={20} />
            </Link>
          </Button>

          <div className="mt-8 flex justify-center gap-1">
            <div className="h-1 w-1 bg-accent/30 rounded-full" />
            <div className="h-1 w-10 bg-accent/30 rounded-full" />
            <div className="h-1 w-1 bg-accent/30 rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
}