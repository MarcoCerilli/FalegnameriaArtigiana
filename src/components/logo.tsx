import { LayoutGrid } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Icona con Scale e Shadow dinamica */}
      <div className="relative flex items-center justify-center h-10 w-10 overflow-hidden rounded-xl bg-primary shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-accent/20">
        <LayoutGrid className="h-5 w-5 text-accent z-10" strokeWidth={2.5} />
        {/* Riflesso interno decorativo */}
        <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-accent/20 blur-sm group-hover:bg-accent/30 transition-colors" />
      </div>

      {/* Blocco testo con Animazione Translate laterale */}
      <div className="flex flex-col transition-transform duration-300 ease-out group-hover:translate-x-1">
        <div className="flex items-baseline gap-1">
          {/* Verde leggermente più profondo per leggibilità su bianco */}
          <span className="font-headline text-2xl italic font-black text-[#2a362a] leading-none tracking-tighter">
            Mave
          </span>
          {/* Accent rimane brillante per risaltare */}
          <span className="font-headline text-2xl italic font-light text-accent leading-none tracking-tighter">
            Arredamenti
          </span>
        </div>

        {/* Sottotitolo con linea che si allunga al hover */}
        <div className="flex items-center gap-2 mt-0.5">
          <div className="h-[1px] w-4 bg-accent transition-all duration-500 group-hover:w-6" />
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
            di Simonelli Massimo
          </p>
        </div>
      </div>
    </div>
  );
}