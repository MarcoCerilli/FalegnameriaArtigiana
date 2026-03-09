"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  images: { imageUrl: string; description: string }[];
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative group max-w-5xl mx-auto px-4 py-12">
      
      {/* Glow di sfondo che richiama il laboratorio */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_70%] min-w-0 px-4">
              <div className="relative h-[400px] md:h-[550px] w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-card">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Didascalia in sovrapposizione */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <div className="h-1 w-12 bg-accent mb-3 rounded-full" />
                  <p className="font-headline italic text-2xl">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pulsanti di Navigazione - Stile minimale */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg border-none hover:bg-accent hover:text-white transition-all -translate-x-1/2 hidden md:flex"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg border-none hover:bg-accent hover:text-white transition-all translate-x-1/2 hidden md:flex"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicatori (Dots) sotto */}
      <div className="flex justify-center gap-2 mt-8">
        {images.slice(0, 5).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary/20" />
        ))}
      </div>
    </div>
  );
}