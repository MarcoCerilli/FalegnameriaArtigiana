import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services, type Service } from '@/lib/services';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link href={`/servizi/${service.slug}`} className="block group h-full">
      <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary">
        <CardHeader>
          <div className="mb-4">
            <Icon className="h-12 w-12 text-primary group-hover:text-accent-foreground" />
          </div>
          <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
          <CardDescription className="pt-2">{service.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm font-semibold text-primary group-hover:text-accent-foreground">
                Scopri di più &rarr;
            </p>
        </CardContent>
      </Card>
    </Link>
  );
}


export default function ServiziPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-servizi');
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center text-center">
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
        <div className="relative z-10 p-4 max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl text-white">I Miei Servizi</h1>
            <p className="mt-4 text-xl text-white/90">
              Dalla precisione della falegnameria alla robustezza dei portoni blindati, offro soluzioni complete e su misura per ogni esigenza, garantendo sempre la massima qualità e professionalità.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
