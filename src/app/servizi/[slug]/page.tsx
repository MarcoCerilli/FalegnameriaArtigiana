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

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceImage = PlaceHolderImages.find((p) => p.id === service.imageId);
  const heroImage =
    PlaceHolderImages.find((p) => p.id === "hero-servizi") || serviceImage;

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
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Torna ai servizi
          </Link>

          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight">
            {service.title.split(" ")[0]}{" "}
            <span className="text-accent italic font-light tracking-tight">
              {service.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full" />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Aumentata la larghezza massima a 6xl per dare respiro al formato orizzontale */}
          <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
            {/* Colonna Testo - Prende 3 spazi su 5 per dare importanza al nuovo testo grande */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <h2 className="font-headline text-4xl md:text-5xl text-primary italic leading-tight">
                  L'eccellenza nel{" "}
                  <span className="text-stone-400 not-italic">Su Misura</span>
                </h2>
                <div className="h-1.5 w-20 bg-accent rounded-full" />
              </div>

              <div className="text-muted-foreground leading-relaxed italic text-xl md:text-2xl">
                <p>{service.longDescription}</p>
              </div>

              <ul className="space-y-4">
                {[
                  "Materiali di prima scelta",
                  "Lavorazione artigianale",
                  "Finiture personalizzate",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-primary font-semibold text-lg md:text-xl"
                  >
                    <CheckCircle2 className="text-accent h-6 w-6 shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 py-7 text-lg shadow-lg"
                >
                  <Link href="/contatti">Richiedi un preventivo</Link>
                </Button>
              </div>
            </div>

            {/* --- COLONNA IMMAGINE ORIZZONTALE --- */}
            {/* Prende 2 spazi su 5 */}
            <div className="lg:col-span-2 relative group w-full">
              {/* Glow adattato alla forma orizzontale */}
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl group-hover:bg-accent/30 transition-all duration-700 w-full" />

              {/* CAMBIO PROPORZIONI: 
            - Da max-w-sm a max-w-full (per allargarla)
            - Da h-[500px] a h-[300px] o h-[350px] (per abbassarla)
            - aspect-video forza un formato 16:9 professionale
        */}
              <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-square max-w-lg mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-card transition-all duration-700 group-hover:scale-[1.02]">
                {serviceImage && (
                  <Image
                    src={serviceImage.imageUrl}
                    alt={serviceImage.description}
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-black/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return { title: "Servizio non trovato" };
  }

  return {
    title: `${service.title} | Mave di Simonelli Massimo`,
    description: service.shortDescription,
  };
}
