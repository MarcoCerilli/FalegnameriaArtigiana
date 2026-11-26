import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { services } from "@/lib/services";
import {
  ArrowRight,
  Award,
  Compass,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import {
  ProjectCarousel,
  type FeaturedProjectSlide,
} from "@/components/project-carousel";
import { ResponsiveHeroImage } from "@/components/responsive-hero-image";
import { ArtisanPhotoFrame } from "@/components/artisan-photo-frame";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mave Arredamenti | Falegnameria e Tappezzeria Nautica Terracina",
    description:
      "Soluzioni artigianali su misura per casa e imbarcazioni a Terracina: falegnameria, tappezzeria nautica, infissi Schüco, zanzariere e portoni blindati.",
    url: "/",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mave Arredamenti | Falegnameria e Tappezzeria Nautica Terracina",
    description:
      "Arredi su misura, tappezzeria nautica, infissi Schüco e portoni blindati a Terracina.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function Home() {
  const heroDesktop =
    PlaceHolderImages.find((p) => p.id === "hero-main-desktop")?.imageUrl ||
    "/images/hero-main.jpg";
  const heroMobile =
    PlaceHolderImages.find((p) => p.id === "hero-main-mobile")?.imageUrl ||
    "/images/hero-mobile.jpg";

  const aboutHomeImage = PlaceHolderImages.find(
    (p) => p.id === "home-filosofia",
  );

  const featuredProjects: FeaturedProjectSlide[] = [
    {
      imageUrl: "/gallery/arredo_mave.7.jpg",
      description: "Tavolo in Rovere su Misura",
      fitMode: "cover",
    },
    {
      imageUrl: "/images/bagno.jpeg",
      description: "Dettagli in Rovere",
      fitMode: "cover",
    },
    {
      imageUrl: "/images/cuscineria.jpg",
      description: "Rifiniture Nautiche",
      fitMode: "cover",
    },
    {
      imageUrl: "/images/tettoia.jpg",
      description: "Soluzioni per Esterni",
      fitMode: "cover",
    },
    {
      imageUrl: "/images/lampada.jpeg",
      description: "Design Artigianale",
      fitMode: "cover",
    },
    {
      imageUrl: "/gallery/arredo_mave.13.jpg",
      description: "Interni Nautici su Misura",
      fitMode: "cover",
    },
  ];

  const trustPillars = [
    {
      icon: Ruler,
      title: "100% Su Misura",
      text: "Ogni lavoro nasce da un rilievo preciso e si adatta al millimetro.",
    },
    {
      icon: Award,
      title: "Sistemi Schüco",
      text: "Installazione profili in alluminio ad alta efficienza termica.",
    },
    {
      icon: Compass,
      title: "Casa & Nautica",
      text: "Dall'arredo d'interni alle cuscinerie e lavorazioni per imbarcazioni.",
    },
    {
      icon: ShieldCheck,
      title: "Sopralluogo Gratuito",
      text: "Consulenza diretta a Terracina, Circeo, Sabaudia, Fondi e Latina.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Sopralluogo e Ascolto",
      description:
        "Raccogliamo esigenze, misure e caratteristiche dell'ambiente o dell'imbarcazione direttamente sul posto.",
    },
    {
      step: "02",
      title: "Proposta e Materiali",
      description:
        "Selezioniamo insieme essenze, tessuti marini o profili Schüco, condividendo un preventivo chiaro e trasparente.",
    },
    {
      step: "03",
      title: "Lavorazione Artigiana",
      description:
        "Realizziamo e rifiniamo ogni componente nel nostro laboratorio di Terracina con cura manuale per ogni dettaglio.",
    },
    {
      step: "04",
      title: "Posa Qualificata",
      description:
        "Curiamo trasporto, montaggio e collaudo finale per garantire funzionalità, tenuta e durata nel tempo.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION BOXED */}
      <div className="max-w-6xl mx-auto w-full px-3 sm:px-5 pt-2">
        <section className="relative w-full h-[52vh] sm:h-[58vh] md:h-[60vh] min-h-[390px] max-h-[540px] overflow-hidden bg-zinc-950 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl flex items-center justify-center py-8 sm:py-0">
          <ResponsiveHeroImage
            desktopSrc={heroDesktop}
            mobileSrc={heroMobile}
            alt="Mave Arredamenti - Falegnameria artigianale e tappezzeria nautica a Terracina"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/26 to-black/38" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,rgba(15,20,15,0.34)_0%,rgba(15,20,15,0.06)_72%,transparent_100%)]" />

          <div className="relative z-10 flex flex-col items-center px-5 sm:px-6 text-center text-white max-w-4xl mx-auto">
            <p className="inline-flex items-center rounded-full bg-[#1a231a]/65 backdrop-blur-sm border border-white/15 px-3.5 sm:px-4 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-accent mb-3 sm:mb-4 shadow-sm whitespace-nowrap">
              Terracina &bull; Falegnameria e Nautica
            </p>

            <h1 className="font-headline text-[2rem] sm:text-5xl md:text-6xl leading-[1.08] drop-shadow-2xl">
              Mave: Passione e Maestria, <br />
              <span className="text-accent italic font-light">
                dal Legno al Mare.
              </span>
            </h1>

            <p className="mt-3 sm:mt-5 text-[15px] sm:text-lg md:text-xl max-w-xl mx-auto text-white/95 font-light leading-snug drop-shadow-md">
              Soluzioni artigianali su misura per la tua casa e la tua
              imbarcazione.
            </p>

            <div className="mt-5 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3.5 justify-center items-center w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="bg-accent text-[#1a231a] hover:bg-accent/90 font-bold py-3 sm:py-5 h-auto px-5 sm:px-7 text-sm sm:text-base rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
              >
                <Link href="/contatti">Preventivo Gratuito</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-black/35 backdrop-blur-md border-2 border-white/60 text-white font-semibold py-3 sm:py-5 h-auto px-5 sm:px-7 text-sm sm:text-base rounded-full transition-all duration-300 shadow-lg hover:bg-white hover:text-zinc-950 hover:border-white"
              >
                <Link href="#servizi">I nostri servizi</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* FASCIA GARANZIE BOXED */}
      <section className="max-w-6xl mx-auto w-full px-3 sm:px-5 mt-4">
        <div className="rounded-[1.75rem] bg-[#242c24] text-white px-6 py-6 md:px-8 shadow-lg border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-accent/15 text-accent shrink-0">
                  <pillar.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-headline text-lg text-white">
                    {pillar.title}
                  </h2>
                  <p className="text-sm text-white/80 leading-snug mt-0.5">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI SECTION */}
      <section id="servizi" className="py-16 md:py-22 bg-background">
        <div className="max-w-6xl mx-auto px-3 sm:px-5">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-headline text-4xl md:text-5xl text-primary italic">
              Servizi Artigianali
            </h2>
            <div className="h-1.5 w-24 bg-accent mx-auto mt-5 rounded-full shadow-sm" />
            <p className="mt-6 text-lg md:text-xl text-muted-foreground font-light">
              Dalla falegnameria nautica agli infissi ad alte prestazioni, ogni
              dettaglio è curato per durare nel tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
            {services.map((service) => (
              <Link
                href={`/servizi/${service.slug}`}
                key={service.slug}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
              >
                <Card className="h-full border border-border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card overflow-hidden">
                  <CardHeader className="flex flex-col items-center text-center px-5 pt-8 pb-7 h-full">
                    <div className="p-4 rounded-2xl bg-secondary group-hover:bg-accent transition-colors duration-300 shadow-inner">
                      <service.icon
                        className="w-10 h-10 text-primary group-hover:text-accent-foreground transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <CardTitle className="font-headline text-2xl mt-6 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-grow">
                      {service.shortDescription}
                    </p>
                    <div className="text-xs font-bold uppercase tracking-widest text-primary mt-6 flex items-center gap-2 transition-transform group-hover:translate-x-1">
                      Scopri di più{" "}
                      <ArrowRight size={15} aria-hidden="true" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHI SIAMO / VALORI SECTION BOXED */}
      <section className="max-w-6xl mx-auto w-full px-3 sm:px-5 my-4">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-secondary/40 border border-border/80 px-6 py-12 md:px-12 md:py-16 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="max-w-md mx-auto">
                {aboutHomeImage && (
                  <ArtisanPhotoFrame
                    src={aboutHomeImage.imageUrl}
                    alt={aboutHomeImage.description}
                    sizes="(max-width: 1024px) 100vw, 448px"
                    aspectClass="aspect-[3/4]"
                    mode="cover"
                    caption="Laboratorio Mave • Essenze Selezionate"
                    className="shadow-xl"
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="space-y-3 flex flex-col items-center lg:items-start">
                <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary italic leading-tight">
                  Il Valore dell&apos;Artigianalità <br />
                  <span className="text-foreground/80 not-italic text-2xl md:text-3xl font-light">
                    secondo Massimo Simonelli
                  </span>
                </h2>
                <div className="h-1.5 w-24 bg-accent rounded-full" />
              </div>

              <div className="space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <blockquote className="lg:border-l-4 lg:border-primary/40 lg:pl-6 py-1 italic text-foreground">
                  &ldquo;Sono un artigiano, non un commerciante. La mia
                  filosofia si basa sulla dedizione al dettaglio, sulla scelta
                  dei materiali migliori e su un rapporto diretto e di fiducia
                  con il cliente.&rdquo;
                </blockquote>
                <div className="text-base md:text-lg space-y-4">
                  <p>
                    Ogni progetto è un pezzo unico, realizzato nel nostro
                    laboratorio con tecniche tradizionali e un&apos;attenzione
                    moderna alla funzionalità e al design.
                  </p>
                  <p>
                    Dal restauro alla creazione nautica su misura, mettiamo
                    l&apos;esperienza al servizio dei clienti di Terracina e del
                    litorale pontino per trasformare il legno in emozione.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-lg shadow-xl transition-all hover:-translate-y-0.5"
                >
                  <Link href="/chi-siamo">La nostra storia</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COME LAVORIAMO */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-3 sm:px-5">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-headline text-4xl md:text-5xl text-primary italic">
              Come Lavoriamo
            </h2>
            <div className="h-1.5 w-20 bg-accent mx-auto mt-5 rounded-full" />
            <p className="mt-5 text-lg text-muted-foreground">
              Un metodo chiaro, dall&apos;idea iniziale alla posa in opera.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="bg-card rounded-3xl p-7 border border-border shadow-sm flex flex-col"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-secondary text-primary font-headline text-xl font-bold mb-5">
                  {item.step}
                </span>
                <h3 className="font-headline text-2xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAROSELLO LAVORI IN EVIDENZA BOXED */}
      <section className="max-w-6xl mx-auto w-full px-3 sm:px-5 my-4">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-secondary/35 border border-border/80 py-14 md:py-16 overflow-hidden">
          <div className="px-4 mb-10 text-center">
            <h2 className="font-headline text-4xl md:text-5xl text-primary italic">
              Lavori{" "}
              <span className="text-foreground not-italic font-bold">
                In Evidenza
              </span>
            </h2>
            <div className="h-1.5 w-20 bg-accent mx-auto mt-5 rounded-full shadow-sm" />
          </div>

          <ProjectCarousel images={featuredProjects} />

          <div className="text-center mt-10 px-4">
            <Link
              href="/galleria"
              className="inline-flex items-center justify-center gap-3 text-primary hover:opacity-80 font-bold tracking-[0.2em] uppercase text-sm transition-all group"
            >
              Sfoglia la galleria completa
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINALE BOXED */}
      <section className="max-w-6xl mx-auto w-full px-3 sm:px-5 pb-10 pt-4">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-primary text-primary-foreground px-6 py-14 md:py-20 shadow-2xl text-center relative overflow-hidden">
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl leading-tight">
            Hai un progetto <br />
            <span className="text-accent italic font-light">speciale?</span>
          </h2>
          <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-white/90 font-light leading-relaxed">
            Contattaci per una consulenza personalizzata o un sopralluogo
            gratuito. Trasformiamo insieme la tua idea in una creazione fatta
            per durare.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-lg font-bold shadow-2xl transition-transform hover:scale-105"
          >
            <Link href="/contatti">Parliamone ora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
