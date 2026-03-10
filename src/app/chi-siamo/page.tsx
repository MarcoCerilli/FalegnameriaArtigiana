import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

const aboutImage = PlaceHolderImages.find((p) => p.id === "about-massimo");
const heroImage = PlaceHolderImages.find((p) => p.id === "hero-chi-siamo");

export default function ChiSiamoPage() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-zinc-900">
        {/* 1. Cambiamo l'altezza: usiamo un range di pixel invece di aspect-ratio troppo spinti 
         per evitare che il browser "mangi" la foto per tappare i buchi laterali. */}
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center transition-transform duration-[10s] hover:scale-105"
              priority
              unoptimized
            />
          )}

          {/* 3. Overlay a "Vignetta": scurisce gli angoli per far risaltare la scala 
           e il testo, allontanando visivamente il centro. */}
          <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
            <div className="relative z-10 max-w-5xl mx-auto">
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-2xl">
                La Mia
                <span className="text-accent italic font-light">Storia</span>
              </h1>

              <div className="h-1.5 w-28 bg-accent mx-auto mt-6 rounded-full shadow-lg" />

              <div className="mt-10 space-y-6">
                <p className="text-2xl md:text-4xl text-white font-medium italic drop-shadow-md">
                  "Il mio lavoro è la mia passione."
                </p>
                <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-sm font-light">
                  Sono un
                  <span className="text-accent font-semibold">artigiano</span>.
                  Ogni creazione porta con sé il valore del tempo e della cura
                  manuale.
                </p>
              </div>
            </div>
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
                    className="object-cover scale-100 object-center transition-transform duration-700 group-hover:scale-105"
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
                falegnameria tradizionale a quella
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
