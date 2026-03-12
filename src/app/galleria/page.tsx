import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GalleriaPage() {
  // Recupero Hero con Fallback
  const heroDesktop = PlaceHolderImages.find((p) => p.id === "hero-galleria-desktop") || 
                      PlaceHolderImages.find((p) => p.id === "hero-galleria");
  
  const heroMobile = PlaceHolderImages.find((p) => p.id === "hero-galleria-mobile") || 
                     heroDesktop;

  const galleryPhotos = [
    { id: 1, src: "/gallery/arredo_mave.1.jpg", desc: "Cucina artigianale in massello" },
    { id: 2, src: "/gallery/arredo_mave.2.jpg", desc: "Rivestimento pozzetto in Teak" },
    { id: 3, src: "/gallery/arredo_mave.3.jpg", desc: "Armadio a muro su misura" },
    { id: 4, src: "/gallery/arredo_mave.4.jpg", desc: "Dettaglio mobili per interni yacht" },
    { id: 5, src: "/gallery/arredo_mave.5.jpg", desc: "Portone blindato con pannello in legno" },
    { id: 6, src: "/gallery/arredo_mave.6.jpg", desc: "Infissi ad alto isolamento termico" },
    { id: 7, src: "/gallery/arredo_mave.7.jpg", desc: "Tavolo da pranzo in rovere naturale" },
    { id: 8, src: "/gallery/arredo_mave.8.jpg", desc: "Restauro mobili d'epoca" },
    { id: 9, src: "/gallery/arredo_mave.9.jpg", desc: "Separè per soggiorno" },
    { id: 10, src: "/gallery/arredo_mave.10.jpg", desc: "Zanzariere integrate su misura" },
    { id: 11, src: "/gallery/arredo_mave.11.jpg", desc: "Scale interne in legno pregiato" },
    { id: 12, src: "/gallery/arredo_mave.12.jpg", desc: "Arredo bagno personalizzato" },
    { id: 13, src: "/gallery/arredo_mave.13.jpg", desc: "Lavorazione artigianale sottocoperta" },
    { id: 14, src: "/gallery/arredo_mave.14.jpg", desc: "Porte interne di design" },
    { id: 15, src: "/gallery/arredo_mave.15.jpg", desc: "Dettagli tecnici di falegnameria" },
    { id: 16, src: "/gallery/arredo_mave.16.jpg", desc: "Complementi d'arredo per il mare" },
    { id: 17, src: "/gallery/arredo_mave.17.jpg", desc: "Libreria su misura" },
    { id: 18, src: "/gallery/arredo_mave.18.jpg", desc: "Finiture artigianali di pregio" },
    { id: 19, src: "/gallery/arredo_mave.19.jpg", desc: "Strutture in legno per esterni" },
    { id: 20, src: "/gallery/arredo_mave.20.jpg", desc: "Progetto completo arredo nautico" },
  ];

  return (
    <>
      {/* SEZIONE HERO */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center overflow-hidden bg-zinc-950">
        {/* DESKTOP */}
        {heroDesktop && (
          <div className="hidden md:block absolute inset-0">
            <Image
              src={heroDesktop.imageUrl}
              alt={heroDesktop.description}
              fill
              className="object-cover brightness-[0.85] contrast-[1.05]"
              priority
            />
          </div>
        )}
        {/* MOBILE */}
        {heroMobile && (
          <div className="block md:hidden absolute inset-0">
            <Image
              src={heroMobile.imageUrl}
              alt={heroMobile.description}
              fill
              className="object-cover brightness-[0.8]"
              priority
            />
          </div>
        )}

        <div className="absolute inset-0 bg-black/20 shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />

        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-8xl text-white leading-tight drop-shadow-2xl">
            Galleria{" "}
            <span className="text-accent italic font-light tracking-tight">
              Progetti
            </span>
          </h1>

          <div className="h-1.5 w-24 bg-accent mx-auto mt-8 rounded-full shadow-lg" />

          <p className="mt-8 text-xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed italic font-light">
            Ogni creazione racconta una storia di legno, mare e dedizione
            assoluta al dettaglio.
          </p>
        </div>

        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
      </section>

      {/* GRIGLIA PROGETTI */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl bg-zinc-100 transition-all duration-700 hover:shadow-accent/30 border border-white/10"
              >
                {/* 1. SFONDO SFOCATO */}
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  className="object-cover blur-3xl opacity-20 scale-125 group-hover:opacity-40 transition-opacity duration-700"
                />
                
                {/* 2. OVERLAY SCURO */}
                <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-black/10 transition-colors duration-500" />

                {/* 3. IMMAGINE REALE */}
                <div className="relative h-full w-full p-6 flex items-center justify-center">
                   <div className="relative h-full w-full">
                      <Image
                        src={photo.src}
                        alt={photo.desc}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-cover rounded-[1.5rem] shadow-2xl transition-transform duration-700 ease-in-out group-hover:scale-[1.05]"
                      />
                   </div>
                </div>

                {/* Overlay Informativo */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 translate-y-4 group-hover:translate-y-0">
                  <div className="h-1 w-10 bg-accent mb-4 rounded-full" />
                  <p className="text-white text-xl font-headline italic leading-snug">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE (Dettaglio: aggiunto padding maggiore) */}
      <section className="pb-32 pt-12 bg-background text-center relative overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground font-headline italic text-2xl mb-10">
            Hai visto un dettaglio che vorresti per la tua casa o la tua barca?
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 py-8 text-xl shadow-2xl transition-all hover:scale-110 active:scale-95"
          >
            <Link href="/contatti" className="flex items-center gap-3">
              Inizia il tuo progetto su misura
              <ArrowRight size={24} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}