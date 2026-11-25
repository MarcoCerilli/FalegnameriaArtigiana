"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";

function isLinkActive(pathname: string, href: string): boolean {
  if (href === "/servizi") {
    return (
      pathname === "/servizi" ||
      (pathname.startsWith("/servizi/") &&
        !pathname.startsWith("/servizi/infissi/catalogo"))
    );
  }
  return pathname === href;
}

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pillLinks = NAV_LINKS.filter((link) => link.href !== "/contatti");
  const isContactActive = pathname === "/contatti";

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-5 pt-2.5 pb-1.5 pointer-events-none">
      <div className="pointer-events-auto max-w-6xl mx-auto rounded-full bg-[#242c24]/95 border border-white/15 backdrop-blur-md shadow-xl px-2.5 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between gap-2 sm:gap-3">
        {/* LOGO */}
        <div className="flex items-center z-10 shrink-0 pl-0.5">
          <Link
            href="/"
            aria-label="Mave Arredamenti - Torna alla Home"
            className="flex items-center hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
          >
            <Logo compact />
          </Link>
        </div>

        {/* NAVPILL DESKTOP CENTRALE */}
        <nav
          aria-label="Navigazione principale"
          className="hidden lg:flex items-center gap-1 rounded-full bg-white/[0.06] border border-white/10 p-1"
        >
          {pillLinks.map((link) => {
            const isActive = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.13em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "bg-accent text-[#1a231a] shadow-sm"
                    : "text-white/85 hover:text-white hover:bg-white/10",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA CONTATTI DESKTOP */}
        <div className="hidden lg:flex items-center shrink-0">
          <Button
            asChild
            className={cn(
              "rounded-full px-5 h-9 font-bold text-xs uppercase tracking-[0.13em] transition-all duration-200",
              isContactActive
                ? "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-[#1a231a]"
                : "bg-accent text-[#1a231a] hover:bg-accent/90 shadow-md hover:shadow-accent/20",
            )}
          >
            <Link
              href="/contatti"
              aria-current={isContactActive ? "page" : undefined}
            >
              Contattaci
            </Link>
          </Button>
        </div>

        {/* AZIONI MOBILE NAVPILL */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
          <Link
            href="/contatti"
            aria-current={isContactActive ? "page" : undefined}
            className={cn(
              "rounded-full px-3 sm:px-3.5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all",
              isContactActive
                ? "border border-accent text-accent bg-accent/10"
                : "bg-accent text-[#1a231a] shadow-sm",
            )}
          >
            Preventivo
          </Link>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="text-accent bg-white/10 hover:bg-white/15 rounded-full transition-colors h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBILE PILL CARD */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="pointer-events-auto lg:hidden mt-2 rounded-3xl border border-white/15 bg-[#1a231a]/95 backdrop-blur-md shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <nav
            aria-label="Navigazione mobile"
            className="flex flex-col p-4 gap-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive = isLinkActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all text-center",
                    isActive
                      ? "bg-accent text-[#1a231a] shadow-sm"
                      : "bg-white/5 text-white/85 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/privacy"
              aria-current={pathname === "/privacy" ? "page" : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all text-center",
                pathname === "/privacy"
                  ? "bg-accent text-[#1a231a] shadow-sm"
                  : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white",
              )}
            >
              Privacy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
