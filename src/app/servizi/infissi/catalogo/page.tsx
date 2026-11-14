import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Palette, CheckCircle2, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CatalogoSchuco } from "@/components/catalogo-schuco";

export const metadata: Metadata = {
  title: "Catalogo Infissi Schüco",
  description:
    "Scopri il catalogo infissi in alluminio Schüco installati da Mave Arredamenti a Terracina: finestre ad anta a vista, anta a scomparsa e panoramiche ad alto isolamento.",
  alternates: {
    canonical: "/servizi/infissi/catalogo",
  },
};

export default function CatalogoSchucoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* --- HEADER --- */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/servizi"
            className="inline-flex items-center gap-2 text-accent mb-12 hover:opacity-80 transition-all text-[10px] uppercase tracking-[0.2em] font-black"
          >
            <ArrowLeft size={14} /> Torna ai servizi
          </Link>

          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-20 items-start md:items-center justify-end">
            <div className="inline-flex p-4 rounded-xl bg-white/30 backdrop-blur-sm border border-white/10 shadow-sm hover:border-white/20 transition-all duration-300 shrink-0">
              <Image
                src="/logos/shuco.png"
                alt="Schüco Official Partner"
                width={200}
                height={55}
                className="object-contain drop-shadow-sm filter brightness-105"
                priority
              />
            </div>

            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                Sistemi <span className="text-accent italic">Schüco</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg font-medium leading-relaxed max-w-xl">
                L'alluminio Schüco incontra l'esperienza Mave. Soluzioni
                d'avanguardia per isolamento e design a Terracina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CatalogoSchuco />

      {/* --- SEZIONE TECNICA (COMPATTA) --- */}
      <section className="py-16 bg-secondary/40 rounded-[2.5rem] mx-6 mb-12 border border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Ruler size={24} />
                <h2 className="text-3xl font-black uppercase tracking-tighter leading-tight">
                  Ingegneria del <br />
                  <span className="text-primary italic">Profilo</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed italic max-w-md">
                Ogni sistema Schüco è progettato per garantire stabilità e
                isolamento termico tramite materiali di ultima generazione.
              </p>
              <div className="grid grid-cols-1 gap-3 pt-2 text-[9px] font-bold uppercase tracking-[0.15em]">
                {[
                  "Taglio termico integrato ad alta densità",
                  "Sedi per guarnizioni EPDM a lunga durata",
                  "Profili a spessori rinforzati",
                ].map((t, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <CheckCircle2 className="text-accent" size={14} /> {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square max-w-sm mx-auto w-full bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white group">
              <Image
                src="/catalogo/sezione-tecnica.png"
                alt="Sezione Tecnica Schüco"
                fill
                sizes="(max-width: 1024px) 100vw, 384px"
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SEZIONE MAZZETTE (SLIM) --- */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl text-center mb-10">
          <Badge className="bg-primary/10 text-primary mb-3 border-none text-[9px] tracking-widest uppercase font-black">
            Showroom Terracina
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
            Colori & <span className="text-primary italic">Finiture</span>
          </h2>
        </div>

        <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-md border-2 border-card">
            <Image
              src="/catalogo/colori/colori2.jpeg"
              alt="Mazzetta RAL"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-white font-black uppercase tracking-widest text-[10px]">
              Campionario RAL
            </p>
          </div>

          <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-md border-2 border-card">
            <Image
              src="/catalogo/colori/colori1.jpeg"
              alt="Finiture Sablé"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-white font-black uppercase tracking-widest text-[10px]">
              Sablé & Legno
            </p>
          </div>
        </div>
      </section>

      {/* --- CONSULENZA A DOMICILIO --- */}
      <section className="py-24 bg-secondary/10 border-t border-border mt-12">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Palette className="mx-auto text-primary" size={48} />
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground leading-none">
                Scegli i colori <br />
                <span className="text-primary italic">a casa tua</span>
              </h3>
              <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto">
                I nostri tecnici verranno da te con i{" "}
                <strong>campionari reali Schüco</strong> per valutare le
                finiture migliori.
              </p>
            </div>
            <div className="pt-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-full px-12 h-16 font-black uppercase text-[11px] tracking-[0.2em] transition-all border-none shadow-2xl shadow-primary/20"
              >
                <Link href="/contatti">Prenota un sopralluogo gratuito</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
