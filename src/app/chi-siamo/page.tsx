import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

const aboutImage = PlaceHolderImages.find((p) => p.id === "about-massimo");
const heroImage = PlaceHolderImages.find((p) => p.id === "hero-chi-siamo");

export default function ChiSiamoPage() {
  return (
    <>
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover scale-100 transition-transform duration-700"
            priority
            unoptimized
            data-ai-hint={heroImage.imageHint}
          />
        )}
        {/* Overlay leggermente più profondo per dare intensità alla storia */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          {/* Titolo Bicolore: Storia in accento per renderla più intima */}
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight">
            La Mia{" "}
            <span className="text-accent italic font-light tracking-tight">
              Storia
            </span>
          </h1>

          {/* Linea decorativa centrata che richiama il laboratorio */}
          <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full shadow-lg shadow-accent/20" />

          <div className="mt-8 space-y-4">
            <p className="text-xl md:text-2xl text-white font-medium tracking-wide">
              "Il mio lavoro è la mia passione."
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Sono un{" "}
              <span className="text-accent font-semibold">artigiano</span>, non
              un commerciante. Ogni mia creazione porta con sé il valore del
              tempo e della cura manuale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* COLONNA IMMAGINE - Allineata allo stile Home */}
            <div className="relative group flex justify-center w-full">
              {/* Effetto Luce (Accent) dietro la foto */}
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl group-hover:bg-accent/30 transition-all duration-700 max-w-sm md:max-w-md w-full" />

              {/* Contenitore Immagine: Stessa grandezza della Home */}
              <div className="relative w-full max-w-sm md:max-w-md h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-card">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    unoptimized
                    priority
                    className="object-cover scale-100 object-bottom transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            </div>

            {/* COLONNA TESTO */}
            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="font-headline text-4xl text-primary italic leading-tight">
                La mia filosofia
              </h2>
              <div className="h-1 w-16 bg-accent mb-6 rounded-full" />

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fin da ragazzo, ho sempre avuto una passione per la
                  lavorazione del legno e per la creazione di oggetti con le mie
                  mani. Questa passione è diventata il mio mestiere, un percorso
                  che porto avanti con dedizione e un costante desiderio di
                  migliorare.
                </p>
                <p>
                  Credo fermamente nel valore del lavoro artigianale. Per me,
                  essere un artigiano significa mettere l'anima in ogni
                  progetto, curare ogni dettaglio come se fosse per casa mia.
                </p>
              </div>

              <h2 className="font-headline text-3xl text-primary mt-10 italic">
                Esperienza e Versatilità
              </h2>
              <div className="h-1 w-16 bg-accent mb-6 rounded-full" />

              <p className="text-muted-foreground leading-relaxed">
                Nel corso degli anni, ho ampliato le mie competenze dalla
                falegnameria tradizionale a quella{" "}
                <span className="text-primary font-semibold italic">
                  nautica
                </span>
                , un mondo che richiede precisione e materiali speciali. La
                stessa attenzione al dettaglio l'ho poi trasferita
                nell'installazione di infissi e sistemi di sicurezza.
              </p>

              <Button
                asChild
                size="lg"
                className="mt-10 not-prose bg-primary text-white hover:bg-primary/90 shadow-lg transition-all"
              >
                <Link href="/contatti">Contattami per un progetto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
