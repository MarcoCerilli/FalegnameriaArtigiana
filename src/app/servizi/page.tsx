import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services, type Service } from "@/lib/services";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ResponsiveHeroImage } from "@/components/responsive-hero-image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Scopri tutti i servizi artigianali di Mave Arredamenti a Terracina: falegnameria su misura, tappezzeria nautica, infissi Schüco, zanzariere e portoni blindati.",
  alternates: {
    canonical: "/servizi",
  },
  openGraph: {
    title: "Servizi Artigianali | Mave Arredamenti Terracina",
    description:
      "Falegnameria su misura, tappezzeria nautica, infissi Schüco, zanzariere e portoni blindati a Terracina.",
    url: "/servizi",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servizi Artigianali | Mave Arredamenti",
    description:
      "Tutti i servizi su misura per casa e imbarcazioni a Terracina.",
    images: ["/opengraph-image.jpg"],
  },
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/servizi/${service.slug}`}
      className="block group h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <Card className="h-full bg-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border border-border hover:border-primary flex flex-col">
        <CardHeader className="flex-grow">
          <div className="mb-4 inline-flex p-3.5 rounded-2xl bg-secondary group-hover:bg-accent transition-colors duration-300 w-fit">
            <Icon
              className="h-9 w-9 text-primary group-hover:text-accent-foreground transition-colors"
              aria-hidden="true"
            />
          </div>
          <CardTitle className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="pt-2 text-muted-foreground text-base leading-relaxed">
            {service.shortDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
            Scopri di più
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function ServiziPage() {
  const heroDesktop =
    PlaceHolderImages.find((p) => p.id === "hero-servizi-desktop")?.imageUrl ||
    "/images/hero-servizi-desktop.jpg";
  const heroMobile =
    PlaceHolderImages.find((p) => p.id === "hero-servizi-mobile")?.imageUrl ||
    "/images/hero-servizi-mobile.jpg";

  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] max-h-[560px] flex items-center justify-center text-center overflow-hidden bg-zinc-900">
        <ResponsiveHeroImage
          desktopSrc={heroDesktop}
          mobileSrc={heroMobile}
          alt="I servizi artigianali di Mave Arredamenti a Terracina"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight drop-shadow-xl">
            I Nostri{" "}
            <span className="text-accent italic font-light tracking-tight">
              Servizi
            </span>
          </h1>

          <div className="h-1.5 w-20 bg-accent mx-auto mt-6 rounded-full" />

          <p className="mt-6 text-lg md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
            Dalla precisione della{" "}
            <span className="font-semibold underline decoration-accent underline-offset-4">
              falegnameria
            </span>{" "}
            alla sicurezza dei{" "}
            <span className="font-semibold underline decoration-accent underline-offset-4">
              portoni blindati
            </span>
            , offriamo soluzioni su misura con la massima qualità artigianale.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {/* Highlight Catalogo Infissi Schüco */}
          <div className="mt-16 rounded-3xl bg-[#242c24] text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Catalogo Tecnico
              </p>
              <h2 className="font-headline text-3xl md:text-4xl text-white">
                Cerchi infissi in alluminio Schüco?
              </h2>
              <p className="text-white/85 leading-relaxed">
                Consulta le schede dei modelli ad anta a vista, anta a
                scomparsa e panoramiche ad alto isolamento disponibili per la
                posa a Terracina e provincia.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 font-bold shrink-0"
            >
              <Link href="/servizi/infissi/catalogo">
                Sfoglia il Catalogo
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
