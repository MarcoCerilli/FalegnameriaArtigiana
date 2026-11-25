"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
// @ts-ignore
import "yet-another-react-lightbox/styles.css";
// @ts-ignore
import "yet-another-react-lightbox/plugins/captions.css";
// @ts-ignore
import "yet-another-react-lightbox/plugins/counter.css";
import {
  GALLERY_CATEGORIES,
  type GalleryCategory,
  type GalleryPhoto,
} from "@/lib/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [selectedCategory, setSelectedCategory] = useState<
    "Tutti" | GalleryCategory
  >("Tutti");
  const [index, setIndex] = useState(-1);

  const filteredPhotos =
    selectedCategory === "Tutti"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  const slides = filteredPhotos.map((photo) => ({
    src: photo.src,
    title: photo.desc,
    description: photo.category,
  }));

  return (
    <>
      {/* Filtri per categoria */}
      <div
        className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
        role="group"
        aria-label="Filtra lavori per categoria"
      >
        {GALLERY_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                setSelectedCategory(category);
                setIndex(-1);
              }}
              className={cn(
                "rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-secondary/60",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="text-center text-sm text-muted-foreground mb-8">
        {filteredPhotos.length}{" "}
        {filteredPhotos.length === 1
          ? "realizzazione selezionata"
          : "realizzazioni selezionate"}
      </p>

      {/* Griglia foto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {filteredPhotos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            aria-label={`Ingrandisci: ${photo.desc}`}
            onClick={() => setIndex(i)}
            className="group relative h-[380px] md:h-[420px] w-full text-left overflow-hidden rounded-[2rem] bg-gradient-to-br from-stone-200 via-stone-100 to-secondary/40 border border-border shadow-md hover:shadow-xl transition-all cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="relative h-full w-full p-4 flex items-center justify-center">
              <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                <Image
                  src={photo.src}
                  alt={photo.desc}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>

            <div
              className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent p-6 pt-16 
              opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100
              transition-all duration-300 md:translate-y-2 md:group-hover:translate-y-0"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-1">
                {photo.category}
              </span>
              <p className="text-white text-lg font-headline leading-tight mb-2">
                {photo.desc}
              </p>
              <div className="flex items-center text-accent text-xs font-bold uppercase tracking-widest">
                Ingrandisci <Maximize2 size={14} className="ml-2" aria-hidden="true" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Captions, Counter]}
      />
    </>
  );
}
