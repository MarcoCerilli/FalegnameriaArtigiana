"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
// @ts-ignore
import "yet-another-react-lightbox/styles.css";

export interface GalleryPhoto {
  id: number;
  src: string;
  desc: string;
}

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [index, setIndex] = useState(-1);

  const slides = photos.map((photo) => ({
    src: photo.src,
    title: photo.desc,
  }));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            role="button"
            tabIndex={0}
            aria-label={`Ingrandisci: ${photo.desc}`}
            onClick={() => setIndex(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIndex(i);
              }
            }}
            className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-[2rem] bg-zinc-200 border border-zinc-300 shadow-lg cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {/* 1. SFONDO SFOCATO */}
            <Image
              src={photo.src}
              alt=""
              fill
              quality={30}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover blur-xl opacity-50 scale-110"
            />

            {/* 2. IMMAGINE REALE */}
            <div className="relative h-full w-full p-4 flex items-center justify-center z-10">
              <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                <Image
                  src={photo.src}
                  alt={photo.desc}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
