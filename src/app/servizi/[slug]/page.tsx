import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from '@/lib/services';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);

  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl text-primary">{service.title}</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              {serviceImage && (
                <Image
                  src={serviceImage.imageUrl}
                  alt={serviceImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={serviceImage.imageHint}
                />
              )}
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <p>{service.longDescription}</p>
              <Button asChild className="mt-8 not-prose">
                <Link href="/contatti">Richiedi un preventivo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl">Hai un progetto in mente?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Ogni progetto è unico. Contattami per discutere le tue specifiche esigenze e trovare la soluzione perfetta.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contatti">Parliamone</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Servizio non trovato'
    };
  }

  return {
    title: `${service.title} | Massimo Artigiano`,
    description: service.shortDescription,
  };
}
