import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from '@/lib/services';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

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
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-servizi') || serviceImage;

  return (
    <div className="flex flex-col">
      {/* --- SEZIONE HERO (Testata) --- */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover scale-105 animate-slow-zoom transition-transform duration-[10s]"
            priority
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <Link 
            href="/#servizi" 
            className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Torna ai servizi
          </Link>
          
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight">
            {service.title.split(' ')[0]} <span className="text-accent italic font-light tracking-tight">{service.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* --- SEZIONE DETTAGLI --- */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Colonna Testo */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-4xl text-primary italic">
                  L'eccellenza nel <span className="text-stone-400 not-italic">Su Misura</span>
                </h2>
                <div className="h-1 w-16 bg-accent rounded-full" />
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed italic">
                <p>{service.longDescription}</p>
              </div>

              {/* Lista Vantaggi (Opzionale, aggiunge valore visivo) */}
              <ul className="space-y-3">
                {['Materiali di prima scelta', 'Lavorazione artigianale', 'Finiture personalizzate'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary font-medium">
                    <CheckCircle2 className="text-accent h-5 w-5" /> {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 shadow-lg">
                  <Link href="/contatti">Richiedi un preventivo personalizzato</Link>
                </Button>
              </div>
            </div>
            
            {/* Colonna Immagine - Stile Cornice Mave */}
            <div className="relative group">
              {/* Effetto Glow */}
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
              
              <div className="relative w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-card transition-transform duration-700 group-hover:scale-[1.02]">
                {serviceImage && (
                  <Image
                    src={serviceImage.imageUrl}
                    alt={serviceImage.description}
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                )}
                {/* Overlay decorativo */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return { title: 'Servizio non trovato' };
  }

  return {
    title: `${service.title} | Mave di Simonelli Massimo`,
    description: service.shortDescription,
  };
}