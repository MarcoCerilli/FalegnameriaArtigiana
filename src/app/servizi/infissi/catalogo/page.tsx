"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ShieldCheck, 
  ThermometerSnowflake, 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Icona WhatsApp SVG per massima fedeltà e controllo colore
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CATEGORIES = ["Tutti", "PVC", "Alluminio", "Legno-Alu", "Tecnico"];

// URL dell'unica immagine placeholder che abbiamo scelto (coordinata con Mave Arredamenti)
const PLACEHOLDER_IMG_URL = "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop";

const modelliInfissi = [
  { 
    id: "1", 
    nome: "Evo 76 Classic", 
    cat: "PVC", 
    trasm: "0.78 Uw", 
    sic: "Classe RC2", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Best Seller" 
  },
  { 
    id: "2", 
    nome: "Natura Soft", 
    cat: "PVC", 
    trasm: "0.80 Uw", 
    sic: "Classe RC2", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Effetto Legno" 
  },
  { 
    id: "3", 
    nome: "Urban Antracite", 
    cat: "PVC", 
    trasm: "0.76 Uw", 
    sic: "Classe RC3", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Minimal" 
  },
  { 
    id: "4", 
    nome: "AluMinimal 70", 
    cat: "Alluminio", 
    trasm: "1.1 Uw", 
    sic: "Classe RC2", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Design" 
  },
  { 
    id: "5", 
    nome: "AluStrong Blind", 
    cat: "Alluminio", 
    trasm: "1.2 Uw", 
    sic: "Classe RC3", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Sicurezza" 
  },
  { 
    id: "6", 
    nome: "Industrial Grey", 
    cat: "Alluminio", 
    trasm: "1.1 Uw", 
    sic: "Classe RC2", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Loft Style" 
  },
  { 
    id: "7", 
    nome: "Prestige Gold", 
    cat: "Legno-Alu", 
    trasm: "0.85 Uw", 
    sic: "Classe RC2", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Esclusivo" 
  },
  { 
    id: "8", 
    nome: "Heritage Wood", 
    cat: "Legno-Alu", 
    trasm: "0.90 Uw", 
    sic: "Classe RC2", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Classico" 
  },
  { 
    id: "9", 
    nome: "Essenze Rovere", 
    cat: "Legno-Alu", 
    trasm: "0.88 Uw", 
    sic: "Classe RC2", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Naturale" 
  },
  { 
    id: "10", 
    nome: "Panorama Slide", 
    cat: "Alluminio", 
    trasm: "1.3 Uw", 
    sic: "Soglia 0mm", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Panoramico" 
  },
  { 
    id: "11", 
    nome: "SkyView XL", 
    cat: "Alluminio", 
    trasm: "1.2 Uw", 
    sic: "Motorizzato", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Premium" 
  },
  { 
    id: "12", 
    nome: "Profilo 7 Camere", 
    cat: "Tecnico", 
    trasm: "Sezione", 
    sic: "Tecnologia", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "R&D" 
  },
  { 
    id: "13", 
    nome: "Vetro Fonoisolante", 
    cat: "Tecnico", 
    trasm: "45dB", 
    sic: "Acustica", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Silenzio" 
  },
  { 
    id: "14", 
    nome: "Ferramenta Maico", 
    cat: "Tecnico", 
    trasm: "RC3 Kit", 
    sic: "Blindato", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Meccanica" 
  },
  { 
    id: "15", 
    nome: "Sistemi Oscuranti", 
    cat: "Tecnico", 
    trasm: "Grate", 
    sic: "Protezione", 
    img: PLACEHOLDER_IMG_URL, // <--- Usa la costante
    tag: "Esterni" 
  }
];

export default function CatalogoInfissiPage() {
  const [filter, setFilter] = useState("Tutti");
  const filteredModels = filter === "Tutti" ? modelliInfissi : modelliInfissi.filter(m => m.cat === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Usa il Primary Verde (102 18% 38%) */}
      <section className="relative py-16 bg-primary text-primary-foreground border-b border-white/10">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link href="/servizi/infissi" className="inline-flex items-center gap-2 text-accent mb-4 hover:opacity-80 transition-opacity text-[10px] uppercase tracking-[0.2em] font-bold">
            <ArrowLeft size={12} /> Torna ai servizi
          </Link>
          <h1 className="text-4xl md:text-5xl font-headline italic mb-4">
            Catalogo <span className="text-accent">Mave Arredamenti</span>
          </h1>
          <p className="opacity-90 max-w-xl mx-auto text-sm italic font-light leading-relaxed">
            Eccellenza tecnica e design artigianale. Ogni serramento è un pezzo unico per la tua casa.
          </p>
        </div>
      </section>

      {/* Filtri Sticky */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all border",
                filter === cat 
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                  : "bg-secondary/30 text-muted-foreground border-transparent hover:border-border"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Griglia Card */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredModels.map((m) => (
            <div key={m.id} className="group bg-card rounded-3xl border border-border/60 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              <div className="relative h-52 overflow-hidden">
                <Image 
                  src={m.img} 
                  alt={m.nome} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  unoptimized 
                />
                <Badge className="absolute top-3 left-3 bg-white/95 text-primary font-bold text-[9px] px-2 py-0.5 uppercase border-none">
                  {m.tag}
                </Badge>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-[9px] font-black text-accent uppercase tracking-[0.2em]">{m.cat}</span>
                  <h3 className="text-xl font-headline italic text-primary leading-tight mt-1">{m.nome}</h3>
                </div>

                <div className="grid grid-cols-2 gap-2 py-4 border-t border-border/40 mb-5 text-[11px]">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[8px] uppercase text-muted-foreground font-bold flex items-center gap-1 leading-none mb-1">
                       <ThermometerSnowflake size={10} className="text-primary" /> Isolamento
                    </span>
                    <span className="font-bold text-foreground">{m.trasm}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[8px] uppercase text-muted-foreground font-bold flex items-center gap-1 leading-none mb-1">
                       <ShieldCheck size={10} className="text-primary" /> Sicurezza
                    </span>
                    <span className="font-bold text-foreground">{m.sic}</span>
                  </div>
                </div>

                <Button asChild className="mt-auto w-full bg-primary text-white h-11 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all hover:opacity-90">
                  <a href={`https://wa.me/393479417554?text=Ciao Mave Arredamenti, vorrei informazioni sul modello ${m.nome}`}>
                    <WhatsAppIcon className="mr-2 h-4 w-4 text-accent" /> 
                    Richiedi Info
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Finale - Coordinata con il Verde Arredamento */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-primary rounded-[2.5rem] p-12 text-primary-foreground text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-headline italic mb-4 text-accent">Il tuo progetto su misura</h2>
            <p className="text-sm opacity-80 italic mb-8 max-w-lg mx-auto leading-relaxed">
              Mave Arredamenti: integriamo i migliori sistemi di apertura con il design dei tuoi spazi interni.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-white text-[10px] font-black uppercase tracking-widest px-10 py-6 rounded-xl" asChild>
              <Link href="/contatti">Parla con un consulente</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}