"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ShieldCheck,
  ThermometerSun,
  Palette,
  CheckCircle2,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CATEGORIES = ["Tutti", "Anta a vista", "Anta a scomparsa", "Panoramica"];

const modelliInfissi = [
  {
    id: "aws-75-pd",
    nome: "Schüco AWS 75 PD.SI",
    cat: "Panoramica",
    prestazione: "Design Panorama",
    plus: "Super Isolamento SI",
    img: "/catalogo/finestre/panoramica.webp",
    tag: "Panoramica",
  },
  {
    id: "aws-90-bs",
    nome: "Schüco AWS 90 BS.SI+",
    cat: "Anta a scomparsa",
    prestazione: "Standard Casa Passiva",
    plus: "Uf = 0.96 W/m²K",
    img: "/catalogo/finestre/scomparsa1.webp",
    tag: "Scomparsa",
  },
  {
    id: "aws-75-bs",
    nome: "Schüco AWS 75 BS.HI+",
    cat: "Anta a scomparsa",
    prestazione: "Elevato Isolamento",
    plus: "Profilo Snello",
    img: "/catalogo/finestre/aws-75-m-abschliessbarer-griff.webp",
    tag: "Scomparsa",
  },
  {
    id: "aws-65-bs",
    nome: "Schüco AWS 65 BS.HI+",
    cat: "Anta a scomparsa",
    prestazione: "Versatilità e Design",
    plus: "Anta Minimal",
    img: "/catalogo/finestre/Finestre Schüco AWS 65 BS.HI+.webp",
    tag: "Scomparsa",
  },
  {
    id: "aws-90-si",
    nome: "Schüco AWS 90.SI+",
    cat: "Anta a vista",
    prestazione: "Isolamento Estremo",
    plus: "Massima Efficienza",
    img: "/catalogo/finestre/Finestre Schüco AWS 90.SI+.webp",
    tag: "A vista",
  },
  {
    id: "aws-75-si",
    nome: "Schüco AWS 75.SI+",
    cat: "Anta a vista",
    prestazione: "Isolamento Top",
    plus: "Il più venduto",
    img: "/catalogo/finestre/Finestre Schüco AWS 75.SI+.webp",
    tag: "A vista",
  },
  {
    id: "aws-65",
    nome: "Schüco AWS 65",
    cat: "Anta a vista",
    prestazione: "Moderno e Funzionale",
    plus: "Soluzione Standard",
    img: "/catalogo/finestre/Finestre Schüco AWS 65.webp",
    tag: "A vista",
  },
  {
    id: "aws-90-ac",
    nome: "Schüco AWS 90 AC.SI",
    cat: "Anta a vista",
    prestazione: "Isolamento Acustico",
    plus: "Silent Comfort",
    img: "/catalogo/finestre/aws90ac-si.webp",
    tag: "Acustica",
  },
];

export default function CatalogoSchucoPage() {
  const [filter, setFilter] = useState("Tutti");
  const filteredModels =
    filter === "Tutti"
      ? modelliInfissi
      : modelliInfissi.filter((m) => m.cat === filter);

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

          {/* Cambiato in flex-row-reverse per mettere il logo a destra su desktop */}
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-20 items-start md:items-center justify-end">
            <div className="inline-flex p-7 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 shadow-xl shrink-0">
              <Image
                src="/logos/shuco.png"
                alt="Schüco Official Partner"
                width={220}
                height={60}
                className="object-contain drop-shadow-sm"
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

      {/* --- FILTRI --- */}
      <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border py-6">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-6 py-2 text-[11px] font-black uppercase tracking-widest transition-all border-2",
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-transparent text-muted-foreground border-transparent hover:border-secondary",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- GRID MODELLI --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredModels.map((m) => (
            <div
              key={m.id}
              className="group bg-card rounded-[2rem] border border-border overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-[350px] bg-secondary/30 flex items-center justify-center p-8">
                <Image
                  src={m.img}
                  alt={m.nome}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                />
                <Badge className="absolute top-6 left-6 bg-accent text-accent-foreground font-black text-[9px] uppercase tracking-widest border-none px-4 py-1.5 pointer-events-none">
                  {m.tag}
                </Badge>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-card">
                <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest mb-1">
                  {m.cat}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">
                  {m.nome}
                </h3>
                <div className="space-y-4 mb-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <ThermometerSun size={18} className="text-primary" />
                    <p className="text-sm font-bold">{m.prestazione}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-primary" />
                    <p className="text-sm font-bold">{m.plus}</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground h-14 rounded-xl font-black uppercase text-[10px] tracking-widest border-none transition-colors"
                >
                  <a
                    href={`https://wa.me/393479417554?text=Info Schüco ${m.nome}`}
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" /> Richiedi
                    Preventivo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

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
