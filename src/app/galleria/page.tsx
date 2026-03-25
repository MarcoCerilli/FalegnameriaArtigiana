"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
// @ts-ignore
import "yet-another-react-lightbox/styles.css";

export default function GalleriaPage() {
  const [index, setIndex] = useState(-1);

  const heroDesktop =
    PlaceHolderImages.find((p) => p.id === "hero-galleria-desktop")?.imageUrl ||
    "/images/hero-main.jpg";
  const heroMobile =
    PlaceHolderImages.find((p) => p.id === "hero-galleria-mobile")?.imageUrl ||
    heroDesktop;

  const galleryPhotos = [
    {
      id: 1,
      src: "/gallery/arredo_mave.1.jpg",
      desc: "Cucina artigianale in massello",
    },
    {
      id: 2,
      src: "/gallery/arredo_mave.2.jpg",
      desc: "Rivestimento pozzetto in Teak",
    },
    {
      id: 3,
      src: "/gallery/arredo_mave.3.jpg",
      desc: "Armadio a muro su misura",
    },
    {
      id: 4,
      src: "/gallery/arredo_mave.4.jpg",
      desc: "Dettaglio mobili per interni yacht",
    },
    {
      id: 5,
      src: "/gallery/arredo_mave.5.jpg",
      desc: "Portone blindato con pannello in legno",
    },
    {
      id: 7,
      src: "/gallery/arredo_mave.7.jpg",
      desc: "Tavolo da pranzo in rovere naturale",
    },
    {
      id: 8,
      src: "/gallery/arredo_mave.8.jpg",
      desc: "Restauro mobili d'epoca",
    },
    { id: 9, src: "/gallery/arredo_mave.9.jpg", desc: "Separè per soggiorno" },
    {
      id: 11,
      src: "/gallery/arredo_mave.11.jpg",
      desc: "Scale interne in legno pregiato",
    },
    {
      id: 12,
      src: "/gallery/arredo_mave.12.jpg",
      desc: "Arredo bagno personalizzato",
    },
    {
      id: 13,
      src: "/gallery/arredo_mave.13.jpg",
      desc: "Lavorazione artigianale sottocoperta",
    },
    {
      id: 14,
      src: "/gallery/arredo_mave.14.jpg",
      desc: "Porte interne di design",
    },
    {
      id: 15,
      src: "/gallery/arredo_mave.15.jpg",
      desc: "Dettagli tecnici di falegnameria",
    },
    {
      id: 16,
      src: "/gallery/arredo_mave.16.jpg",
      desc: "Complementi d'arredo per il mare",
    },
    { id: 17, src: "/gallery/arredo_mave.17.jpg", desc: "Libreria su misura" },
    {
      id: 18,
      src: "/gallery/arredo_mave.18.jpg",
      desc: "Finiture artigianali di pregio",
    },
    {
      id: 19,
      src: "/gallery/arredo_mave.19.jpg",
      desc: "Strutture in legno per esterni",
    },
    {
      id: 20,
      src: "/gallery/arredo_mave.20.jpg",
      desc: "Progetto completo arredo nautico",
    },
    {
      id: 21,
      src: "/gallery/arredo_mave.21.jpg",
      desc: "Porta scorrevole design",
    },
  ];

  const slides = galleryPhotos.map((photo) => ({
    src: photo.src,
    title: photo.desc,
  }));

  return (
    <>
      {/* SEZIONE HERO CON EFFETTO ALLEGGERITO */}
      <section className="relative h-[55vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden bg-zinc-950">
        {/* Immagine Mobile */}
        <div className="md:hidden absolute inset-0">
          <Image
            src={heroMobile}
            alt="MAVE"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.55] contrast-[1.05]"
          />
        </div>
        {/* Immagine Desktop */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src={heroDesktop}
            alt="MAVE Progetti"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.75] contrast-[1.05]"
          />
        </div>

        {/* Effetto Noise e Gradienti (Light) */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.4)_100%)]" />

        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-8xl text-white leading-tight drop-shadow-2xl">
            Galleria{" "}
            <span className="text-accent italic font-light tracking-tight">
              Progetti
            </span>
          </h1>
          {/* SOTTOTITOLO HERO: Rimosso 'hidden' così si vede anche su mobile */}
          <p className="text-white/80 mt-4 font-headline text-lg md:text-xl drop-shadow-md">
            MAVE Arredamenti di Massimo Simonelli
          </p>
          <div className="h-1.5 w-24 bg-accent mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* GRIGLIA PROGETTI */}
      <section className="py-12 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {galleryPhotos.map((photo, i) => (
              <div
                key={photo.id}
                onClick={() => setIndex(i)}
                className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-[2rem] bg-zinc-200 border border-zinc-300 shadow-lg cursor-zoom-in"
              >
                {/* 1. SFONDO SFOCATO */}
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="25vw"
                  className="object-cover blur-xl opacity-50 scale-110"
                />

                {/* 2. IMMAGINE REALE */}
                <div className="relative h-full w-full p-4 flex items-center justify-center z-10">
                  <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                    <Image
                      src={photo.src}
                      alt={photo.desc}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* 3. OVERLAY SOTTOTITOLI: Visibile sempre su mobile, hover su desktop */}
                <div
                  className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-6 pt-20 
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 
                  transition-all duration-500 md:translate-y-2 md:group-hover:translate-y-0"
                >
                  <div className="h-1 w-10 bg-accent mb-3 rounded-full" />
                  <p className="text-white text-lg font-headline italic leading-tight mb-2">
                    {photo.desc}
                  </p>
                  <div className="flex items-center text-accent text-xs font-bold uppercase tracking-widest">
                    Ingrandisci <Maximize2 size={14} className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />

      {/* CTA FINALE */}
      <section className="pb-24 pt-12 bg-background text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-muted-foreground font-headline italic text-xl md:text-2xl mb-8">
            Ogni dettaglio è personalizzabile secondo le tue esigenze.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 h-auto text-lg shadow-xl"
          >
            <Link href="/contatti" className="flex items-center gap-2">
              Inizia il tuo progetto <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
