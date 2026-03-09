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
const aboutImage = PlaceHolderImages.find((p) => p.id === "about-massimo");

//Carosello
const featuredProjects = [
  { imageUrl: "/images/cucina.jpg", description: "Arredi su Misura" },
  { imageUrl: "/images/arredo_mave.5.jpg", description: "Dettagli in Rovere" },
  {
    imageUrl: "/images/cuscineria.jpg",
    description: "Rifiniture Nautiche",
  },
  {
    imageUrl: "/images/tettoia.jpg",
    description: "Soluzioni per Esterni",
  },
  { imageUrl: "/images/lampada.jpeg", description: "Design Artigianale" },
];

const services = [
  { name: "Falegnameria", icon: Hammer, href: "/servizi/falegnameria" },
  {
    name: "Tappezzeria Nautica",
    icon: Sailboat,
    href: "/servizi/tappezzeria-nautica",
  },
  { name: "Infissi", icon: DoorOpen, href: "/servizi/infissi" },
  { name: "Zanzariere", icon: Wind, href: "/servizi/zanzariere" },
  {
    name: "Portoni Blindati",
    icon: ShieldCheck,
    href: "/servizi/portoni-blindati",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            priority
            unoptimized
            className="object-cover object-center animate-slow-zoom transition-opacity duration-1000"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 p-4 max-w-5xl">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
            Mave: Passione e Maestria, <br />
            <span className="text-accent italic font-light">
              dal Legno al Mare.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Soluzioni su misura per la tua casa e la tua imbarcazione, con la
            garanzia di un lavoro artigianale fatto a regola d'arte.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg shadow-lg shadow-black/20"
            >
              <Link href="/contatti">Richiedi un Preventivo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white px-8 py-6 text-lg"
            >
              <Link href="#servizi">I nostri servizi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVIZI SECTION */}
      <section id="servizi" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-primary italic">
              Servizi Artigianali
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground italic">
              Dalla falegnameria nautica agli infissi ad alte prestazioni, ogni
              dettaglio è curato per durare nel tempo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service) => (
              <Link href={service.href} key={service.name} className="group">
                <Card className="h-full border-2 border-transparent transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 bg-card overflow-hidden">
                  <CardHeader className="flex flex-col items-center pt-10">
                    <div className="p-4 rounded-2xl bg-secondary group-hover:bg-accent transition-colors duration-500">
                      <service.icon className="w-10 h-10 text-primary group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <CardTitle className="font-headline text-xl mt-6 group-hover:text-primary transition-colors">
                      {service.name}
                    </CardTitle>
                    <p className="text-sm font-bold text-primary opacity-0 group-hover:opacity-100 mt-4 flex items-center gap-2 transition-all">
                      Dettagli <ArrowRight size={14} />
                    </p>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHI SIAMO / VALORI SECTION */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* COLONNA IMMAGINE */}
            <div className="relative group flex justify-center w-full">
              {/* 1. Effetto Luce (Accent) - Ora perfettamente centrato dietro la foto */}
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl group-hover:bg-accent/30 transition-all duration-700 max-w-sm md:max-w-md w-full" />

              {/* 2. Contenitore Immagine - Centrato con mx-auto */}
              <div className="relative w-full max-w-sm md:max-w-md h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-card">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                    priority
                  />
                )}
              </div>
            </div>

            {/* Colonna Testo */}
            <div className="space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl text-primary leading-tight italic">
                Il Valore dell'Artigianalità <br />
                <span className="text-stone-400 not-italic text-2xl font-light">
                  secondo Simonelli Massimo
                </span>
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full" />
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sono un artigiano, non un commerciante. La mia filosofia si
                  basa sulla dedizione al dettaglio, sulla scelta dei materiali
                  migliori e su un rapporto diretto e di fiducia con il cliente.
                </p>
                <p>
                  Ogni progetto è un pezzo unico, realizzato con tecniche
                  tradizionali e un'attenzione moderna alla funzionalità e al
                  design. Dal restauro alla creazione nautica su misura, metto
                  la mia esperienza al vostro servizio.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="mt-4 bg-primary text-white hover:bg-primary/90"
              >
                <Link href="/chi-siamo">La mia storia</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE CAROSELLO */}
      <section className="py-20 md:py-32 bg-secondary/10 overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-primary italic">
            Lavori <span className="text-accent not-italic">In Evidenza</span>
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <ProjectCarousel images={featuredProjects} />

        <div className="text-center mt-12">
          <Link
            href="/galleria"
            className="text-primary hover:text-accent font-bold tracking-widest uppercase text-xs transition-colors flex items-center justify-center gap-2 group"
          >
            Sfoglia la galleria completa
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Cerchio decorativo di sfondo */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl">
            Hai un progetto{" "}
            <span className="text-accent italic">speciale?</span>
          </h2>
          <p className="mt-6 text-xl max-w-2xl mx-auto opacity-90">
            Contattami per una consulenza personalizzata. Trasformiamo insieme
            la tua idea in realtà.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-xl shadow-xl"
          >
            <Link href="/contatti">Parliamone ora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
