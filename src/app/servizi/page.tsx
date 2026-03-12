import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services, type Service } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link href={`/servizi/${service.slug}`} className="block group h-full">
      <Card className="h-full bg-card transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border-2 border-border hover:border-primary group">
        <CardHeader>
          <div className="mb-4">
            {/* L'icona ora brilla con il giallo lime (accent) al passaggio del mouse */}
            <Icon className="h-12 w-12 text-primary group-hover:text-accent transition-colors duration-300" />
          </div>
          <CardTitle className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="pt-2 text-muted-foreground">
            {service.shortDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Il link "Scopri di più" diventa più evidente */}
          <p className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
            Scopri di più
            <span className="text-accent group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function ServiziPage() {
  const heroGeneral = PlaceHolderImages.find((p) => p.id === "hero-servizi");

  // Supponendo che tu abbia aggiunto queste ID nel file placeholder-images
  const heroDesktop =
    PlaceHolderImages.find((p) => p.id === "hero-servizi-desktop") ||
    heroGeneral; // fallback all'immagine generale se non trovi quella specifica
  const heroMobile =
    PlaceHolderImages.find((p) => p.id === "hero-servizi-mobile") ||
    heroGeneral; // fallback all'immagine generale se non trovi quella specifica

  return (
    <>
      <section className="relative h-[75vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* IMMAGINE DESKTOP */}
        {heroDesktop && (
          <div className="hidden md:block absolute inset-0 bg-stone-900">
            <Image
              src={heroDesktop.imageUrl}
              alt={heroDesktop.description}
              fill
              // 1. Schiarito a 1.15
              // 2. scale-105: ridotto leggermente lo zoom rispetto a prima per "allontanare"
              // 3. object-cover: mantiene il riempimento ma con una scala più dolce
              className="object-cover object-center brightness-[1.15] contrast-[1.05] scale-100 transition-transform duration-700"
              priority
            />

            {/* TEXTURE NOISE: quasi invisibile (0.03) ma utile per la grana */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* OVERLAY: Ridotto al minimo (5%) solo per dare un filo di contrasto al testo bianco */}
            <div className="absolute inset-0 bg-black/5" />

            {/* Gradiente extra solo sul fondo per staccare il testo se necessario */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        )}

        {/* IMMAGINE MOBILE (visibile sotto md) */}
        {heroMobile && (
          <div className="block md:hidden absolute inset-0">
            <Image
              src={heroMobile.imageUrl}
              alt={heroMobile.description}
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
          </div>
        )}

        {/* Overlay scuro per leggibilità testo */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          {/* Titolo Bicolore */}
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight">
            I Miei{" "}
            <span className="text-accent italic font-light tracking-tight">
              Servizi
            </span>
          </h1>

          {/* Linea decorativa centrata */}
          <div className="h-1.5 w-20 bg-accent mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(var(--accent),0.5)]" />

          <p className="mt-8 text-lg md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed italic font-medium">
            Dalla precisione della{" "}
            <span className="text-white font-bold underline decoration-accent/50 underline-offset-4">
              falegnameria
            </span>{" "}
            alla robustezza dei{" "}
            <span className="text-white font-bold underline decoration-accent/50 underline-offset-4">
              portoni blindati
            </span>
            , offro soluzioni su misura garantendo sempre la massima qualità
            artigianale.
          </p>
        </div>
      </section>

      {/* Griglia Servizi */}
      <section className="py-16 md:py-24 bg-background">
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
