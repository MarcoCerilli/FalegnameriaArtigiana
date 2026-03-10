import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { services } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceImage = PlaceHolderImages.find((p) => p.id === service.imageId);
  const heroImage =
    PlaceHolderImages.find((p) => p.id === "hero-servizi") || serviceImage;

  return (
    <div className="flex flex-col">
      {/* --- SEZIONE HERO --- */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
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

          {/* FIX TITOLO: Aggiunto lo spazio manuale {" "} tra le due parti */}
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight">
            {service.title.split(" ")[0]}{" "}
            <span className="text-accent italic font-light tracking-tight">
              {service.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* --- SEZIONE CONTENUTO --- */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center justify-center max-w-6xl mx-auto text-center lg:text-left">
            
            {/* Colonna Testo */}
            <div className="lg:col-span-3 space-y-8 flex flex-col items-center lg:items-start">
              <div className="space-y-4">
                <h2 className="font-headline text-4xl md:text-5xl text-primary italic leading-tight">
                  L'eccellenza nel{" "}
                  <span className="text-stone-400 not-italic">Su Misura</span>
                </h2>
                <div className="h-1.5 w-20 bg-accent rounded-full mx-auto lg:mx-0" />
              </div>

              <div className="text-muted-foreground leading-relaxed italic text-xl md:text-2xl">
                <p>{service.longDescription}</p>
              </div>

              <ul className="space-y-4 text-left inline-block">
                {[
                  "Materiali di prima scelta",
                  "Lavorazione artigianale",
                  "Finiture personalizzate",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-primary font-semibold text-lg md:text-xl">
                    <CheckCircle2 className="text-accent h-6 w-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button asChild size="lg" className="bg-primary text-white rounded-full px-10 py-7 text-lg shadow-lg">
                  <Link href="/contatti">Richiedi un preventivo</Link>
                </Button>
              </div>
            </div>

            {/* Colonna Immagine - EFFETTO PROFESSIONALE SENZA BANDE BIANCHE */}
            <div className="lg:col-span-2 relative group w-full">
              <div className="relative w-full aspect-[4/5] max-w-xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
                {serviceImage && (
                  <>
                    {/* 1. Sfondo sfocato (prende i colori della foto e li spalma) */}
                    <Image
                      src={serviceImage.imageUrl}
                      alt=""
                      fill
                      className="object-cover blur-3xl opacity-40 scale-110"
                      unoptimized
                    />
                    {/* 2. Overlay scuro per dare profondità */}
                    <div className="absolute inset-0 bg-black/5" />
                    
                    {/* 3. Immagine principale intera */}
                    <Image
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      fill
                      unoptimized
                      className="object-contain p-4 drop-shadow-2xl"
                    />
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}