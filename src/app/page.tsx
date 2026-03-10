"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Hammer,
  Sailboat,
  ShieldCheck,
  DoorOpen,
  Wind,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCarousel } from "@/components/project-carousel";

const heroImage = PlaceHolderImages.find((p) => p.id === "hero-main");
const aboutHomeImage = PlaceHolderImages.find((p) => p.id === "home-filosofia");

const featuredProjects = [
  { imageUrl: "/images/cucina.jpg", description: "Arredi su Misura" },
  { imageUrl: "/images/bagno.jpeg", description: "Dettagli in Rovere" },
  { imageUrl: "/images/cuscineria.jpg", description: "Rifiniture Nautiche" },
  { imageUrl: "/images/tettoia.jpg", description: "Soluzioni per Esterni" },
  { imageUrl: "/images/lampada.jpeg", description: "Design Artigianale" },
];

const services = [
  { name: "Falegnameria", icon: Hammer, href: "/servizi/falegnameria" },
  { name: "Tappezzeria Nautica", icon: Sailboat, href: "/servizi/tappezzeria-nautica" },
  { name: "Infissi", icon: DoorOpen, href: "/servizi/infissi" },
  { name: "Zanzariere", icon: Wind, href: "/servizi/zanzariere" },
  { name: "Portoni Blindati", icon: ShieldCheck, href: "/servizi/portoni-blindati" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] md:h-[80vh] min-h-[550px] overflow-hidden bg-zinc-950">
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-mobile.jpg"
            alt={heroImage?.description || "Mave Artigianato"}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="hidden md:block absolute inset-0 w-full h-full">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              priority
              className="object-cover object-center"
            />
          )}
        </div>

        <div className="absolute inset-0 bg-black/45 z-0" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center text-white">
          <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl leading-[1.1] drop-shadow-2xl px-2">
            Mave: Passione{" "}<br className="sm:hidden" /> e Maestria, <br />
            <span className="text-accent italic font-light">
              dal Legno al Mare.
            </span>
          </h1>

          <p className="mt-6 md:mt-8 text-lg md:text-2xl max-w-2xl mx-auto text-white/90 font-light px-4 drop-shadow-md">
            Soluzioni su misura per la tua casa <br className="sm:hidden" /> e
            la tua imbarcazione.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full">
            <Button
              asChild
              size="lg"
              className="w-full max-w-[280px] sm:w-auto bg-accent text-accent-foreground py-7 sm:py-8 text-lg sm:text-xl shadow-2xl hover:scale-105 transition-transform"
            >
              <Link href="/contatti">Preventivo Gratuito</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full max-w-[280px] sm:w-auto bg-white/10 backdrop-blur-md text-white border-white/40 py-7 sm:py-8 text-lg sm:text-xl hover:bg-white/20"
            >
              <Link href="#servizi">I nostri servizi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVIZI SECTION */}
      <section id="servizi" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-headline text-4xl md:text-5xl text-primary italic">
              Servizi Artigianali
            </h2>
            <div className="h-1.5 w-24 bg-accent mx-auto mt-6 rounded-full shadow-sm" />
            <p className="mt-8 text-xl text-muted-foreground italic font-light">
              Dalla falegnameria nautica agli infissi ad alte prestazioni, ogni
              dettaglio è curato per durare nel tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service) => (
              <Link href={service.href} key={service.name} className="group">
                <Card className="h-full border-none transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-card/50 backdrop-blur-sm overflow-hidden ring-1 ring-black/5">
                  <CardHeader className="flex flex-col items-center pt-12 pb-10">
                    <div className="p-5 rounded-2xl bg-secondary group-hover:bg-accent transition-all duration-500 shadow-inner">
                      <service.icon className="w-12 h-12 text-primary group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <CardTitle className="font-headline text-2xl mt-8 group-hover:text-primary transition-colors text-center px-2">
                      {service.name}
                    </CardTitle>
                    <div className="text-sm font-bold text-primary opacity-0 group-hover:opacity-100 mt-6 flex items-center gap-2 transition-all translate-y-2 group-hover:translate-y-0">
                      SCOPRI DI PIÙ <ArrowRight size={16} />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHI SIAMO / VALORI SECTION - Con Effetto Professionale anti-bande bianche */}
      <section className="py-24 md:py-32 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* COLONNA IMMAGINE - GLASSMORPHISM STYLE */}
            <div className="lg:col-span-5 relative group order-2 lg:order-1">
              <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
                {aboutHomeImage && (
                  <>
                    {/* 1. Sfondo sfocato per eliminare vuoti bianchi */}
                    <Image
                      src={aboutHomeImage.imageUrl}
                      alt=""
                      fill
                      className="object-cover blur-3xl opacity-30 scale-110"
                      unoptimized
                    />
                    {/* 2. Overlay di contrasto */}
                    <div className="absolute inset-0 bg-black/5" />
                    {/* 3. Immagine reale centrata e intera */}
                    <Image
                      src={aboutHomeImage.imageUrl}
                      alt={aboutHomeImage.description}
                      fill
                      className="object-contain p-4 drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
                      unoptimized
                    />
                  </>
                )}
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
            </div>

            {/* COLONNA TESTO */}
            <div className="lg:col-span-7 space-y-10 order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary italic leading-tight">
                  Il Valore dell'Artigianalità{" "}<br />
                  <span className="text-stone-400 not-italic text-2xl md:text-3xl font-light">
                    secondo Simonelli Massimo
                  </span>
                </h2>
                <div className="h-1.5 w-24 bg-accent rounded-full shadow-lg shadow-accent/20" />
              </div>

              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                <p className="lg:border-l-4 lg:border-accent/30 lg:pl-6 py-2">
                  "Sono un artigiano, non un commerciante. La mia filosofia si
                  basa sulla dedizione al dettaglio, sulla scelta dei materiali
                  migliori e su un rapporto diretto e di fiducia con il
                  cliente."
                </p>
                <div className="not-italic text-base md:text-lg text-muted-foreground/80 space-y-4">
                  <p>
                    Ogni progetto è un pezzo unico, realizzato con tecniche
                    tradizionali e un'attenzione moderna alla funzionalità e al
                    design.
                  </p>
                  <p>
                    Dal restauro alla creazione nautica su misura, metto la mia
                    esperienza al vostro servizio per trasformare il legno in
                    emozione.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 py-7 md:py-8 text-lg md:text-xl shadow-xl transition-all hover:shadow-primary/30 hover:-translate-y-1"
                >
                  <Link href="/chi-siamo">La mia storia</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE CAROSELLO */}
      <section className="py-24 bg-background overflow-hidden border-y border-stone-100">
        <div className="container mx-auto px-4 mb-16 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-primary italic">
            Lavori{" "}
            <span className="text-accent not-italic font-bold">
              In Evidenza
            </span>
          </h2>
          <div className="h-1.5 w-20 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <ProjectCarousel images={featuredProjects} />

        <div className="text-center mt-16">
          <Link
            href="/galleria"
            className="text-primary hover:text-accent font-bold tracking-[0.2em] uppercase text-sm transition-all flex items-center justify-center gap-3 group"
          >
            Sfoglia la galleria completa
            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-black/20 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-headline text-5xl md:text-7xl leading-tight">
            Hai un progetto{" "}<br />
            <span className="text-accent italic font-light">speciale?</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto opacity-90 font-light leading-relaxed">
            Contattami per una consulenza personalizzata. Trasformiamo insieme
            la tua idea in una creazione che dura nel tempo.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-12 bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-8 text-2xl shadow-2xl transition-transform hover:scale-105"
          >
            <Link href="/contatti">Parliamone ora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}