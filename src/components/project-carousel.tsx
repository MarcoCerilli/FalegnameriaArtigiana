"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

interface ProjectCarouselProps {
  images: { imageUrl: string; description: string }[];
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplay.current],
  );

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    // CONTENITORE PRINCIPALE (Relative per posizionare le frecce)
    <div className="relative group max-w-7xl mx-auto px-4 py-12">
      {/* Glow di sfondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 blur-[120px] rounded-full -z-10" />

      {/* VIEWPORT EMBLA */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex -ml-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] md:flex-[0_0_55%] lg:flex-[0_0_45%] min-w-0 pl-6"
            >
              {/* CARD ESTERNA */}
              <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-stone-50 group/card transition-all duration-500 hover:shadow-accent/20">
                {/* 1. LIVELLO SFONDO: Invece del nero, usiamo un mix di bianco sporco e sfocatura estrema */}
                <Image
                  src={image.imageUrl}
                  alt=""
                  fill
                  className="object-cover blur-3xl opacity-20 scale-125"
                  unoptimized
                />

                {/* Overlay per dare l'effetto "carta o legno chiaro" */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

                {/* 2. LIVELLO PRIMO PIANO: L'immagine reale */}
                <div className="relative h-full w-full p-4 md:p-8">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover/card:scale-[1.03]"
                    unoptimized
                  />
                </div>

                {/* 3. DIDASCALIA: Testo scuro (Primary) su fondo chiaro sfumato */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white via-white/80 to-transparent">
                  <div className="h-1 w-10 bg-accent mb-3 rounded-full shadow-sm" />
                  <p className="font-headline italic text-xl md:text-2xl leading-tight text-primary">
                    {image.description}
                  </p>
                </div>

                {/* Rifinitura: bordo interno leggero */}
                <div className="absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-black/5 pointer-events-none" />
              </div>
              {/* Fine Card */}
            </div>
          ))}
        </div>
      </div>

      {/* PULSANTI DI NAVIGAZIONE (Ora dentro il relativo principale) */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg border-none hover:bg-accent hover:text-white transition-all -translate-x-1/2 hidden md:flex z-20"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg border-none hover:bg-accent hover:text-white transition-all translate-x-1/2 hidden md:flex z-20"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* INDICATORI (Dots) */}
      <div className="flex justify-center gap-2 mt-8">
        {images.slice(0, 5).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary/20" />
        ))}
      </div>
    </div> // FINE CONTENITORE PRINCIPALE
  );
}
