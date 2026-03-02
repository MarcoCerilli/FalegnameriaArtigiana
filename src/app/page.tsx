import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Hammer, Sailboat, ShieldCheck, DoorOpen, Wind, HardHat } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-main');
const aboutImage = PlaceHolderImages.find(p => p.id === 'about-massimo');

const services = [
  { name: 'Falegnameria', icon: Hammer, href: '/servizi/falegnameria' },
  { name: 'Tappezzeria Nautica', icon: Sailboat, href: '/servizi/tappezzeria-nautica' },
  { name: 'Infissi', icon: DoorOpen, href: '/servizi/infissi' },
  { name: 'Zanzariere', icon: Wind, href: '/servizi/zanzariere' },
  { name: 'Portoni Blindati', icon: ShieldCheck, href: '/servizi/portoni-blindati' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 max-w-4xl">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl tracking-tight text-shadow-lg">
            Artigiano: Passione e Maestria, dal Legno al Mare.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Soluzioni su misura per la tua casa e la tua imbarcazione, con la garanzia di un lavoro artigianale fatto a regola d'arte.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contatti">Richiedi un Preventivo</Link>
          </Button>
        </div>
      </section>

      <section id="servizi" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl text-primary">I Nostri Servizi</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Offriamo una gamma completa di servizi artigianali per soddisfare ogni tua esigenza, con la massima cura per i dettagli e la qualità dei materiali.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service) => (
              <Link href={service.href} key={service.name} className="group">
                <Card className="h-full text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <service.icon className="w-12 h-12 text-primary group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
                <Link href="/servizi">Scopri tutti i servizi</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
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
            <div>
              <h2 className="font-headline text-3xl md:text-4xl text-primary">Il Valore dell'Artigianato</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Sono un artigiano, non un commerciante. La mia filosofia si basa sulla dedizione al dettaglio, sulla scelta dei materiali migliori e su un rapporto diretto e di fiducia con il cliente.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Ogni progetto è un pezzo unico, realizzato con tecniche tradizionali e un'attenzione moderna alla funzionalità e al design. Dal restauro di un mobile antico alla creazione di un arredo nautico su misura, metto la mia esperienza al vostro servizio.
              </p>
              <Button asChild className="mt-8">
                <Link href="/chi-siamo">La mia storia</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl">Pronto a dare forma al tuo progetto?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Contattami per discutere delle tue idee. Sarò felice di offrirti una consulenza personalizzata e un preventivo gratuito.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contatti">Parliamone</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
