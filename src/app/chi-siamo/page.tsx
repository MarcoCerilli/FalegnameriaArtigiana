import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-massimo');

export default function ChiSiamoPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl text-primary">Massimo, l'Artigiano</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              "Il mio lavoro è la mia passione. Sono un artigiano, non un commerciante."
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-96 md:h-[600px] rounded-lg overflow-hidden shadow-xl">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="font-headline text-3xl text-primary">La mia filosofia</h2>
              <p>
                Fin da ragazzo, ho sempre avuto una passione per la lavorazione del legno e per la creazione di oggetti con le mie mani. Questa passione è diventata il mio mestiere, un percorso che porto avanti con dedizione e un costante desiderio di migliorare.
              </p>
              <p>
                Credo fermamente nel valore del lavoro artigianale. Per me, essere un artigiano significa mettere l'anima in ogni progetto, curare ogni dettaglio come se fosse per casa mia, e costruire un rapporto di fiducia e trasparenza con chi si affida a me. Non troverete da me prodotti in serie, ma soluzioni pensate e realizzate su misura per le vostre esigenze.
              </p>
              <h2 className="font-headline text-3xl text-primary mt-8">Esperienza e Versatilità</h2>
              <p>
                Nel corso degli anni, ho ampliato le mie competenze dalla falegnameria tradizionale a quella nautica, un mondo che richiede precisione e materiali speciali. La stessa attenzione al dettaglio l'ho poi trasferita nell'installazione di infissi, zanzariere e portoni blindati, perché credo che la qualità di una casa si veda anche da questi elementi fondamentali.
              </p>
              <p>
                Sia che si tratti di creare un mobile unico, rinnovare gli interni della vostra barca o migliorare la sicurezza e il comfort della vostra abitazione, il mio obiettivo è sempre lo stesso: fornire un lavoro impeccabile che duri nel tempo.
              </p>
              <Button asChild className="mt-8 not-prose">
                <Link href="/contatti">Contattami per un progetto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
