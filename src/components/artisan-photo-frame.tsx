import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type PhotoAspectClass =
  | "aspect-[4/3]"
  | "aspect-[3/4]"
  | "aspect-[4/5]"
  | "aspect-[16/10]"
  | "aspect-square";

export type PhotoFrameMode = "cover" | "mat";

interface ArtisanPhotoFrameProps {
  src: string;
  alt: string;
  sizes: string;
  aspectClass?: PhotoAspectClass;
  mode?: PhotoFrameMode;
  objectPosition?: string;
  priority?: boolean;
  badge?: string;
  caption?: string;
  subcaption?: string;
  topRightAction?: ReactNode;
  className?: string;
}

/**
 * Unified architectural print frame for heterogeneous client photos.
 * - "cover": edge-to-edge fill inside a crisp bordered card when aspect ratios match.
 * - "mat": museum passe-partout linen backdrop for extreme ratios inside uniform grids.
 */
export function ArtisanPhotoFrame({
  src,
  alt,
  sizes,
  aspectClass = "aspect-[4/3]",
  mode = "cover",
  objectPosition = "object-center",
  priority = false,
  badge,
  caption,
  subcaption,
  topRightAction,
  className,
}: ArtisanPhotoFrameProps) {
  return (
    <div
      className={cn(
        "group/frame bg-card rounded-[1.5rem] border border-border/85 p-2 sm:p-2.5 shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-black/[0.03] flex flex-col overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-[1.1rem]",
          aspectClass,
          mode === "mat"
            ? "bg-gradient-to-br from-[#f1efe8] via-[#f8f7f3] to-[#e9e6dd] p-3 sm:p-4"
            : "bg-[#efede6]",
        )}
      >
        {mode === "mat" ? (
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={sizes}
              className="object-contain drop-shadow-md transition-transform duration-500 group-hover/frame:scale-[1.03]"
            />
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn(
              "object-cover transition-transform duration-500 group-hover/frame:scale-[1.03]",
              objectPosition,
            )}
          />
        )}

        <div className="absolute inset-0 rounded-[1.1rem] ring-1 ring-inset ring-black/[0.06] pointer-events-none" />

        {badge && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm border border-border/60 pointer-events-none">
            {badge}
          </span>
        )}

        {topRightAction && (
          <div className="absolute top-3 right-3 z-10">{topRightAction}</div>
        )}
      </div>

      {(caption || subcaption) && (
        <div className="px-2 pt-3 pb-1.5 space-y-1">
          {subcaption && (
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
              {subcaption}
            </p>
          )}
          {caption && (
            <p className="font-headline text-lg md:text-xl text-foreground leading-snug">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
