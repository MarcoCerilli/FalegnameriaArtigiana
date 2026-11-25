import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { services } from "@/lib/services";
import { GALLERY_PHOTOS } from "@/lib/gallery";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Servizio non trovato",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `/servizi/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/servizi/${service.slug}`,
      images: ["/opengraph-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: ["/opengraph-image.jpg"],
    },
  };
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
  const relatedPhotos = GALLERY_PHOTOS.filter((photo) =>
    service.relatedGalleryIds.includes(photo.id),
  ).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.mavearredamenti.it",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Servizi",
            item: "https://www.mavearredamenti.it/servizi",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://www.mavearredamenti.it/servizi/${service.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: service.title,
        description: service.longDescription,
        provider: {
          "@id": "https://www.mavearredamenti.it/#business",
        },
        areaServed: [
          "Terracina",
          "Latina",
          "San Felice Circeo",
          "Fondi",
          "Sabaudia",
        ],
        url: `https://www.mavearredamenti.it/servizi/${service.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO SERVIZIO */}
      <section className="relative py-20 md:py-28 flex items-center justify-center text-center overflow-hidden bg-[#242c24] text-white">
        {serviceImage && (
          <Image
            src={serviceImage.imageUrl}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#242c24]/75 via-[#242c24]/65 to-[#242c24]/90" />

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white/75 mb-6"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <Link
              href="/servizi"
              className="hover:text-accent transition-colors"
            >
              Servizi
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-accent">{service.title}</span>
          </nav>

          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl text-white leading-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-accent italic font-light">
            {service.tagline}
          </p>
          <div className="h-1.5 w-24 bg-accent mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* DETTAGLIO SERVIZIO */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link
            href="/servizi"
            className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-10 hover:opacity-75 transition-opacity group"
          >
            <ArrowLeft
              size={15}
              className="group-hover:-translate-x-1 transition-transform"
              aria-hidden="true"
            />
            Tutti i servizi
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-7 order-2 lg:order-1">
              <div className="space-y-3">
                <h2 className="font-headline text-3xl md:text-5xl text-primary italic leading-tight">
                  L&apos;eccellenza nel{" "}
                  <span className="text-foreground not-italic">Su Misura</span>
                </h2>
                <div className="h-1.5 w-20 bg-accent rounded-full" />
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>{service.longDescription}</p>
                <p>{service.detailsParagraph}</p>
              </div>

              <ul className="space-y-3.5 pt-2">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 text-foreground font-medium text-base md:text-lg"
                  >
                    <CheckCircle2
                      className="text-primary h-6 w-6 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-bold shadow-lg"
                >
                  <Link href={`/contatti?servizio=${service.slug}`}>
                    Richiedi un preventivo gratuito
                  </Link>
                </Button>

                {service.catalogHref && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-base font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link href={service.catalogHref}>
                      Esplora il Catalogo Schüco
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-card">
                {serviceImage && (
                  <Image
                    src={serviceImage.imageUrl}
                    alt={serviceImage.description}
                    fill
                    sizes="(max-width: 1024px) 100vw, 448px"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REALIZZAZIONI CORRELATE */}
      {relatedPhotos.length > 0 && (
        <section className="py-16 bg-secondary/25 border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="font-headline text-3xl text-primary">
                  Alcune Realizzazioni
                </h2>
                <p className="text-muted-foreground mt-1">
                  Esempi reali dal nostro portfolio lavori.
                </p>
              </div>
              <Link
                href="/galleria"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4"
              >
                Vedi tutta la galleria
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm"
                >
                  <div className="relative h-64 bg-stone-100">
                    <Image
                      src={photo.src}
                      alt={photo.desc}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-3"
                    />
                  </div>
                  <p className="p-4 text-sm font-medium text-foreground text-center">
                    {photo.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ SERVIZIO */}
      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-headline text-3xl md:text-4xl text-primary text-center mb-10">
            Domande Frequenti
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <summary className="cursor-pointer font-headline text-xl text-foreground list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-primary font-sans text-xl transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
