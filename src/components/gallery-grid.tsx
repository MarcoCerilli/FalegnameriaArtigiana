"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
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
  type PhotoOrientation,
} from "@/lib/gallery";
import { cn } from "@/lib/utils";
import {
  ArtisanPhotoFrame,
  type PhotoAspectClass,
} from "@/components/artisan-photo-frame";

function getAspectForOrientation(
  orientation: PhotoOrientation,
): PhotoAspectClass {
  if (orientation === "wide") return "aspect-[16/10]";
  if (orientation === "landscape") return "aspect-[4/3]";
  return "aspect-[3/4]";
}

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
        className="flex flex-wrap items-center justify-center gap-2.5 mb-8"
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

      <p className="text-center text-sm text-muted-foreground mb-10">
        {filteredPhotos.length}{" "}
        {filteredPhotos.length === 1
          ? "realizzazione selezionata"
          : "realizzazioni selezionate"}
      </p>

      {/* Griglia Masonry Editoriale */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
        {filteredPhotos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            aria-label={`Ingrandisci: ${photo.desc}`}
            onClick={() => setIndex(i)}
            className="break-inside-avoid block w-full text-left rounded-[1.5rem] cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArtisanPhotoFrame
              src={photo.src}
              alt={photo.desc}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              aspectClass={getAspectForOrientation(photo.orientation)}
              mode="cover"
              subcaption={photo.category}
              caption={photo.desc}
              topRightAction={
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-foreground shadow-sm border border-border/60 opacity-90 md:opacity-0 md:group-hover/frame:opacity-100 md:group-focus-visible:opacity-100 transition-opacity">
                  <Maximize2 size={14} aria-hidden="true" />
                </span>
              }
            />
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
