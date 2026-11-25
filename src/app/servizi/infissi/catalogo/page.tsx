import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Palette, CheckCircle2, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CatalogoSchuco } from "@/components/catalogo-schuco";
import { MODELLI_INFISSI_SCHUCO } from "@/lib/catalogo-schuco";

export const metadata: Metadata = {
  title: "Catalogo Infissi Schüco",
  description:
    "Scopri il catalogo infissi in alluminio Schüco installati da Mave Arredamenti a Terracina: finestre ad anta a vista, anta a scomparsa e panoramiche ad alto isolamento.",
  alternates: {
    canonical: "/servizi/infissi/catalogo",
  },
  openGraph: {
    title: "Catalogo Infissi Schüco | Mave Arredamenti Terracina",
    description:
      "Finestre e sistemi in alluminio Schüco ad alto isolamento termico e acustico installati a Terracina.",
    url: "/servizi/infissi/catalogo",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalogo Infissi Schüco | Mave Arredamenti",
    description:
      "Sistemi Schüco ad anta a vista, anta a scomparsa e panoramiche a Terracina.",
    images: ["/opengraph-image.jpg"],
  },
};

const catalogJsonLd = {
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
          name: "Catalogo Infissi Schüco",
          item: "https://www.mavearredamenti.it/servizi/infissi/catalogo",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Catalogo Infissi in Alluminio Schüco",
      itemListElement: MODELLI_INFISSI_SCHUCO.map((modello, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: modello.nome,
        description: `${modello.cat} - ${modello.prestazione} (${modello.plus})`,
      })),
    },
  ],
};

export default function CatalogoSchucoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(catalogJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* --- HEADER --- */}
      <section className="relative pt-16 pb-20 bg-[#242c24] text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/servizi/infissi"
            className="inline-flex items-center gap-2 text-accent mb-10 hover:opacity-80 transition-all text-xs uppercase tracking-[0.2em] font-bold"
          >
            <ArrowLeft size={14} aria-hidden="true" /> Torna al servizio Infissi
          </Link>

          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-start md:items-center justify-between">
            <div className="inline-flex p-4 rounded-2xl bg-white/95 shadow-lg shrink-0">
              <Image
                src="/logos/shuco.png"
                alt="Schüco Partner"
                width={180}
                height={50}
                className="object-contain"
                priority
              />
            </div>

            <div className="max-w-3xl">
              <h1 className="font-headline text-5xl md:text-7xl leading-tight mb-5">
                Sistemi <span className="text-accent italic">Schüco</span>
              </h1>
              <p className="text-white/85 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                L&apos;alluminio Schüco incontra l&apos;esperienza artigiana
                Mave. Soluzioni d&apos;avanguardia per isolamento termico,
                acustico e design a Terracina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CatalogoSchuco />

      {/* --- SEZIONE TECNICA --- */}
      <section className="py-16 bg-secondary/40 rounded-[2.5rem] mx-4 md:mx-6 mb-12 border border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Ruler size={24} aria-hidden="true" />
                <h2 className="font-headline text-3xl md:text-4xl leading-tight">
                  Ingegneria del{" "}
                  <span className="text-foreground italic">Profilo</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                Ogni sistema Schüco è progettato per garantire stabilità
                strutturale, resistenza alla salsedine e isolamento termico
                tramite materiali di ultima generazione.
              </p>
              <div className="grid grid-cols-1 gap-3 pt-2 text-sm font-medium text-foreground">
                {[
                  "Taglio termico integrato ad alta densità",
                  "Sedi per guarnizioni EPDM a lunga durata",
                  "Profili in alluminio a spessori rinforzati",
                ].map((t) => (
                  <div key={t} className="flex gap-2.5 items-center">
                    <CheckCircle2
                      className="text-primary shrink-0"
                      size={18}
                      aria-hidden="true"
                    />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square max-w-sm mx-auto w-full bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white group">
              <Image
                src="/catalogo/sezione-tecnica.png"
                alt="Sezione Tecnica profilo Schüco"
                fill
                sizes="(max-width: 1024px) 100vw, 384px"
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SEZIONE MAZZETTE --- */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl text-center mb-10">
          <Badge className="bg-primary/10 text-primary mb-3 border-none text-xs tracking-widest uppercase font-bold px-4 py-1">
            Showroom &amp; Consulenza Terracina
          </Badge>
          <h2 className="font-headline text-3xl md:text-4xl leading-tight">
            Colori &amp; <span className="text-primary italic">Finiture</span>
          </h2>
        </div>

        <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-md border-2 border-card">
            <Image
              src="/catalogo/colori/colori2.jpeg"
              alt="Campionario mazzetta colori RAL per infissi Schüco"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-6 text-white font-bold uppercase tracking-widest text-xs">
              Campionario RAL
            </p>
          </div>

          <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-md border-2 border-card">
            <Image
              src="/catalogo/colori/colori1.jpeg"
              alt="Finiture Sablé ed effetto legno per serramenti Schüco"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-6 text-white font-bold uppercase tracking-widest text-xs">
              Sablé &amp; Effetto Legno
            </p>
          </div>
        </div>
      </section>

      {/* --- CONSULENZA A DOMICILIO --- */}
      <section className="py-20 bg-secondary/25 border-t border-border mt-12">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Palette
              className="mx-auto text-primary"
              size={44}
              aria-hidden="true"
            />
            <div className="space-y-3">
              <h2 className="font-headline text-4xl md:text-5xl text-foreground leading-tight">
                Scegli i colori{" "}
                <span className="text-primary italic">a casa tua</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Durante il sopralluogo portiamo direttamente da te i{" "}
                <strong className="text-foreground">
                  campionari reali Schüco
                </strong>{" "}
                per valutare finiture, vetro e isolamento adatti alla tua casa.
              </p>
            </div>
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-full px-10 py-6 font-bold uppercase text-xs tracking-[0.2em] transition-all shadow-xl"
              >
                <Link href="/contatti?servizio=infissi">
                  Prenota un sopralluogo gratuito
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
