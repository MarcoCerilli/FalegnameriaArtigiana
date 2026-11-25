import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  compact?: boolean;
  showWordmark?: boolean;
}

export default function Logo({
  compact = false,
  showWordmark = true,
}: LogoProps) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-xl bg-[#f7f6f2] p-1 shadow-sm ring-1 ring-white/25 transition-transform duration-300 group-hover:scale-105",
          compact ? "h-10 w-10 sm:h-11 sm:w-11" : "h-12 w-12 md:h-14 md:w-14",
        )}
      >
        <Image
          src="/logo-mark.png"
          alt="Mave Arredamenti Logo"
          fill
          sizes="56px"
          className="object-contain"
          priority
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className="font-headline text-lg sm:text-xl tracking-[0.14em] text-white">
            MAVE
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-accent mt-0.5">
            Arredamenti
          </span>
        </div>
      )}
    </div>
  );
}
