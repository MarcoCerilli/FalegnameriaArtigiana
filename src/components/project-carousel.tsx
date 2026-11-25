"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import {
  ArtisanPhotoFrame,
  type PhotoFrameMode,
} from "@/components/artisan-photo-frame";

export interface FeaturedProjectSlide {
  imageUrl: string;
  description: string;
  fitMode?: PhotoFrameMode;
}

interface ProjectCarouselProps {
  images: FeaturedProjectSlide[];
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const plugins = React.useMemo(
    () =>
      reduceMotion
        ? []
        : [Autoplay({ delay: 3500, stopOnInteraction: true })],
    [reduceMotion],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    plugins,
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  return (
    <div
      className="relative group max-w-6xl mx-auto px-4 md:px-10 py-4"
      role="region"
      aria-roledescription="carousel"
      aria-label="Lavori artigianali in evidenza"
    >
      {/* VIEWPORT EMBLA */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex -ml-6">
          {images.map((image) => (
            <div
              key={image.imageUrl}
              className="flex-[0_0_85%] md:flex-[0_0_52%] lg:flex-[0_0_42%] min-w-0 pl-6"
            >
              <ArtisanPhotoFrame
                src={image.imageUrl}
                alt={image.description}
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 52vw, 42vw"
                aspectClass="aspect-[4/3]"
                mode={image.fitMode ?? "cover"}
                caption={image.description}
                className="h-full shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* PULSANTI DI NAVIGAZIONE */}
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Progetto precedente"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/95 text-foreground shadow-lg border border-border hover:bg-accent hover:text-[#1a231a] transition-all hidden md:flex z-20"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </Button>

      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Progetto successivo"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/95 text-foreground shadow-lg border border-border hover:bg-accent hover:text-[#1a231a] transition-all hidden md:flex z-20"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </Button>

      {/* INDICATORI INTERATTIVI */}
      <div
        className="flex justify-center items-center gap-2.5 mt-8"
        role="tablist"
        aria-label="Seleziona progetto in evidenza"
      >
        {images.map((image, i) => {
          const active = i === selectedIndex;
          return (
            <button
              key={image.imageUrl}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Mostra progetto ${i + 1}: ${image.description}`}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                active
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-primary/30 hover:bg-primary/60",
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
