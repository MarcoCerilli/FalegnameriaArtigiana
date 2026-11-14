"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ThermometerSun } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
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

export function CatalogoSchuco() {
  const [filter, setFilter] = useState("Tutti");
  const filteredModels =
    filter === "Tutti"
      ? modelliInfissi
      : modelliInfissi.filter((m) => m.cat === filter);

  return (
    <>
      {/* --- FILTRI --- */}
      <div className="sticky top-[120px] z-30 bg-background/90 backdrop-blur-md border-b border-border py-6">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    href={`https://wa.me/393479417554?text=${encodeURIComponent(`Info Schüco ${m.nome}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
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
    </>
  );
}
