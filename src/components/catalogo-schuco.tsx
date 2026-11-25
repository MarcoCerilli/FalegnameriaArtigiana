"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ThermometerSun, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  MODELLI_INFISSI_SCHUCO,
  SCHUCO_CATEGORIES,
} from "@/lib/catalogo-schuco";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function CatalogoSchuco() {
  const [filter, setFilter] = useState("Tutti");
  const filteredModels =
    filter === "Tutti"
      ? MODELLI_INFISSI_SCHUCO
      : MODELLI_INFISSI_SCHUCO.filter((m) => m.cat === filter);

  return (
    <>
      {/* --- FILTRI --- */}
      <div className="max-w-6xl mx-auto px-3 sm:px-5 pt-5">
        <div
          className="rounded-2xl md:rounded-full bg-card/95 backdrop-blur-md border border-border/85 shadow-sm px-3 py-2.5 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filtra modelli Schüco per tipologia"
        >
          {SCHUCO_CATEGORIES.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-secondary/60",
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* --- GRID MODELLI --- */}
      <section className="py-12 md:py-16 max-w-6xl mx-auto px-3 sm:px-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl text-primary">
              Gamma Sistemi in Alluminio
            </h2>
            <p className="text-muted-foreground mt-1">
              {filteredModels.length}{" "}
              {filteredModels.length === 1
                ? "modello disponibile"
                : "modelli disponibili"}
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground self-start sm:self-auto"
          >
            <Link href="/contatti?servizio=infissi">
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Richiedi consulenza via email
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredModels.map((m) => (
            <article
              key={m.id}
              className="group bg-card rounded-[2rem] border border-border overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[280px] sm:h-[300px] m-2.5 rounded-[1.25rem] overflow-hidden bg-gradient-to-br from-[#f2f0e9] via-[#faf9f5] to-[#e9e6dd] ring-1 ring-inset ring-black/[0.06] flex items-center justify-center p-6">
                <Image
                  src={m.img}
                  alt={m.nome}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-wider border-none px-3.5 py-1 pointer-events-none">
                  {m.tag}
                </Badge>
              </div>
              <div className="p-5 sm:p-7 flex flex-col flex-grow bg-card">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                  {m.cat}
                </span>
                <h3 className="font-headline text-2xl text-foreground mb-4">
                  {m.nome}
                </h3>
                <div className="space-y-3 mb-8 pt-5 border-t border-border">
                  <div className="flex items-center gap-3">
                    <ThermometerSun
                      size={18}
                      className="text-primary shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold text-foreground">
                      {m.prestazione}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck
                      size={18}
                      className="text-primary shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold text-foreground">
                      {m.plus}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-auto w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground h-12 rounded-xl font-bold uppercase text-xs tracking-widest border-none transition-colors"
                >
                  <a
                    href={`https://wa.me/393479417554?text=${encodeURIComponent(`Buongiorno, vorrei informazioni sul modello ${m.nome}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" /> Richiedi
                    Preventivo
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
