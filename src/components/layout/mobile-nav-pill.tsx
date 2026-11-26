"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DoorOpen, Hammer, Home, Images, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const MOBILE_PILL_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Servizi", href: "/servizi", icon: Hammer },
  { label: "Catalogo", href: "/servizi/infissi/catalogo", icon: DoorOpen },
  { label: "Galleria", href: "/galleria", icon: Images },
  { label: "Contatti", href: "/contatti", icon: Mail },
];

function isMobilePillActive(pathname: string, href: string): boolean {
  if (href === "/servizi") {
    return (
      pathname === "/servizi" ||
      (pathname.startsWith("/servizi/") &&
        !pathname.startsWith("/servizi/infissi/catalogo"))
    );
  }
  return pathname === href;
}

export function MobileNavPill() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Barra di navigazione rapida mobile"
      className="lg:hidden fixed inset-x-3 bottom-[max(0.25rem,env(safe-area-inset-bottom))] z-50 pointer-events-none"
    >
      <ul className="pointer-events-auto grid grid-cols-5 gap-1 max-w-md mx-auto rounded-full bg-[#242c24]/95 border border-white/15 shadow-2xl backdrop-blur-md px-1.5 py-1.5">
        {MOBILE_PILL_ITEMS.map((item) => {
          const active = isMobilePillActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-full py-1.5 px-1 text-[10px] leading-tight font-bold tracking-wide transition-all duration-200 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  active
                    ? "bg-white/[0.14] text-accent ring-1 ring-accent/40 shadow-sm"
                    : "text-white/75 hover:text-white hover:bg-white/10",
                )}
              >
                <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                <span className="truncate max-w-full leading-none">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
