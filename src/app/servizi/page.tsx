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
            Scopri di più{" "}
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
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-servizi");
  return (
    <>
     <section className="relative h-[70vh] flex items-center justify-center text-center">
  {heroImage && (
    <Image
      src={heroImage.imageUrl}
      alt={heroImage.description}
      fill
      className="object-cover object-center scale-100 transform"
      priority
      unoptimized
      data-ai-hint={heroImage.imageHint}
    />
  )}
  {/* Overlay scuro per far risaltare il bicolore */}
  <div className="absolute inset-0 bg-black/50" />
  
  <div className="relative z-10 p-4 max-w-4xl mx-auto">
    {/* Titolo Bicolore */}
    <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight">
      I Miei <span className="text-accent italic font-light tracking-tight">Servizi</span>
    </h1>
    
    {/* Linea decorativa centrata */}
    <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full shadow-lg" />
    
    <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed italic">
      Dalla precisione della <span className="text-white font-semibold">falegnameria</span> alla robustezza dei <span className="text-white font-semibold">portoni blindati</span>, 
      offro soluzioni su misura garantendo sempre la massima qualità artigianale.
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
