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

  // 1. Immagine specifica del servizio (quella che va nel riquadro dei dettagli)
  const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);

  // 2. Immagine per la HERO (cerchiamo 'hero-servizi' o una specifica per la pagina)
  // Puoi anche decidere di usare 'hero-main' se vuoi cambiare aria
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-servizi') || serviceImage;

  return (
    <>
      {/* --- SEZIONE HERO (Testata) --- */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl} // <-- Ora usa heroImage
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl text-white">{service.title}</h1>
          <p className="mt-4 text-xl text-white/90">{service.shortDescription}</p>
        </div>
      </section>

      {/* --- SEZIONE DETTAGLI --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="font-headline text-3xl text-primary">Dettagli del Servizio</h2>
              <p>{service.longDescription}</p>
              <Button asChild className="mt-8 not-prose">
                <Link href="/contatti">Richiedi un preventivo</Link>
              </Button>
            </div>
            
            {/* Qui l'immagine resta quella specifica del servizio (es: il Portone) */}
            <div className="relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-2xl bg-stone-100">
              {serviceImage && (
                <Image
                  src={serviceImage.imageUrl} // <-- Resta serviceImage
                  alt={serviceImage.description}
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
              )}
            </div>
          </div>
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
    title: `${service.title} | Mave di Simonelli Massimo`,
    description: service.shortDescription,
  };
}
