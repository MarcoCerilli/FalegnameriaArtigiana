"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, Hammer, Palette, ShieldCheck, ThermometerSun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CATEGORIES = ["Tutti", "Finestre", "Scorrevoli", "Facciate", "Sistemi Smart"];

const modelliInfissi = [
  {
    id: "s1",
    nome: "Schüco AWS 75.SI",
    cat: "Finestre",
    materiale: "Alluminio",
    finitura: "Super Insulation",
    img: "/catalogo/schuco-aws75.jpg",
    tag: "Efficienza",
  },
  {
    id: "s2",
    nome: "Schüco ASE 60",
    cat: "Scorrevoli",
    materiale: "Profilo Sottile",
    finitura: "Soglia a filo",
    img: "/catalogo/schuco-ase60.jpg",
    tag: "Design",
  },
  {
    id: "s3",
    nome: "AWS 90 AC.SI",
    cat: "Finestre",
    materiale: "Isolamento Acustico",
    finitura: "Premium Grey",
    img: "/catalogo/schuco-acustico.jpg",
    tag: "Comfort",
  },
  {
    id: "s4",
    nome: "FWS 50",
    cat: "Facciate",
    materiale: "Vetro Continuo",
    finitura: "Minimale",
    img: "/catalogo/schuco-facciata.jpg",
    tag: "Architettura",
  },
];

export default function CatalogoSchucoPage() {
  const [filter, setFilter] = useState("Tutti");
  const filteredModels =
    filter === "Tutti"
      ? modelliInfissi
      : modelliInfissi.filter((m) => m.cat === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/servizi"
            className="inline-flex items-center gap-2 text-accent mb-4 hover:opacity-80 transition-opacity text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            <ArrowLeft size={12} /> Torna ai servizi
          </Link>
          <h1 className="text-4xl md:text-5xl font-headline italic mb-4">
            Sistemi <span className="text-accent">Schüco</span>
          </h1>
          <p className="opacity-90 max-w-xl mx-auto text-sm italic font-light leading-relaxed">
            Eccellenza tecnologica in alluminio per il massimo isolamento termico e acustico.
          </p>
        </div>
      </section>

      {/* Filtri */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all border",
                filter === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-secondary/30 text-muted-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sezione Prodotti */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredModels.map((m) => (
            <div
              key={m.id}
              className="group bg-card rounded-2xl border border-border/40 overflow-hidden flex flex-col"
            >
              <div className="relative h-[350px] overflow-hidden bg-stone-100">
                <Image
                  src={m.img}
                  alt={m.nome}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-1000"
                  unoptimized
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-white font-bold text-[9px] px-3 py-1 uppercase">
                  {m.tag}
                </Badge>
              </div>
              <div className="p-6 bg-white flex flex-col flex-grow">
                <span className="text-[9px] font-black text-accent uppercase tracking-[0.2em]">
                  {m.cat}
                </span>
                <h3 className="text-xl font-headline italic text-primary mt-1 mb-4">
                  {m.nome}
                </h3>
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/40 mb-6 text-[11px]">
                  <div>
                    <span className="text-[8px] uppercase text-muted-foreground font-bold flex items-center gap-1">
                      <ThermometerSun size={10} /> Prestazione
                    </span>
                    <span className="font-bold">{m.finitura}</span>
                  </div>
                  <div>
                    <span className="text-[8px] uppercase text-muted-foreground font-bold flex items-center gap-1">
                      <ShieldCheck size={10} /> Sicurezza
                    </span>
                    <span className="font-bold">RC2 / RC3</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary text-white h-12 rounded-xl text-[10px] font-black uppercase tracking-widest"
                >
                  <a href={`https://wa.me/393479417554?text=Info su infisso Schüco ${m.nome}`}>
                    <WhatsAppIcon className="mr-2 h-4 w-4" /> Richiedi Consulenza
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEZIONE ACCESSORI - COMPATTA */}
      <section className="py-12 bg-[#F8F7F5] border-y border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white border border-stone-100">
                <Image
                  src="/catalogo/accessori-maniglie.jpg"
                  alt="Componenti Schüco"
                  fill
                  className="object-contain p-4"
                  unoptimized
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-5">
              <div className="inline-flex items-center gap-2 text-stone-400 uppercase tracking-widest text-[9px] font-bold">
                <span className="w-6 h-[1px] bg-stone-300"></span>
                Hardware & Design
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-headline italic text-primary">
                  Sistemi di <span className="text-stone-500">Apertura</span>
                </h2>
                <p className="text-stone-600 italic text-xs md:text-sm leading-relaxed">
                  Dalle maniglie di design ai sistemi di automazione a scomparsa Schüco SimplySmart.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-stone-100 shadow-sm flex items-center gap-3">
                  <Sparkles size={14} className="text-stone-400" />
                  <div>
                    <p className="text-[8px] uppercase font-black text-stone-400 mb-1">Finiture</p>
                    <p className="text-[10px] font-bold text-primary italic">Inox, Nero, RAL Custom</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-100 shadow-sm flex items-center gap-3">
                  <ShieldCheck size={14} className="text-stone-400" />
                  <div>
                    <p className="text-[8px] uppercase font-black text-stone-400 mb-1">Smart Home</p>
                    <p className="text-[10px] font-bold text-primary italic">Apertura Meccatronica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary rounded-[3rem] p-12 text-primary-foreground text-center">
          <h2 className="text-3xl font-headline italic mb-4 text-accent">
            Progettazione Tecnica
          </h2>
          <p className="text-sm opacity-80 italic mb-8 max-w-lg mx-auto leading-relaxed">
            Siamo partner certificati per la posa e la progettazione di sistemi Schüco. 
            Trasformiamo le tue idee in soluzioni ad alta efficienza energetica.
          </p>
          <Button
            size="lg"
            className="bg-accent text-primary hover:bg-white text-[10px] font-black uppercase tracking-widest px-10 py-6 rounded-xl"
            asChild
          >
            <Link href="/contatti">Richiedi un sopralluogo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}