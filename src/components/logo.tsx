import { LayoutGrid } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Icona con contrasto invertito */}
      <div className="relative flex items-center justify-center h-10 w-10 overflow-hidden rounded-xl bg-white/10 border border-white/10 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
        <LayoutGrid className="h-5 w-5 text-accent group-hover:text-[#242c24] z-10 transition-colors" strokeWidth={2.5} />
      </div>

      <div className="flex flex-col transition-transform duration-300 ease-out group-hover:translate-x-1">
        <div className="flex items-baseline gap-1.5">
          {/* MAVE: Schiarito in Crema */}
          <span className="font-headline text-2xl italic font-black text-[#f5f5f0] leading-none tracking-tighter uppercase">
            Mave
          </span>
          
          {/* ARREDAMENTI: Verde Acido (Accent) */}
          <span className="font-headline text-2xl italic font-light text-accent leading-none tracking-tighter">
            Arredamenti
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <div className="h-[1px] w-4 bg-accent/50 transition-all duration-500 group-hover:w-8 group-hover:bg-accent" />
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
            di Simonelli Massimo
          </p>
        </div>
      </div>
    </div>
  );
}