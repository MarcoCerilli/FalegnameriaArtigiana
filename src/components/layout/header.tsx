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

  const leftLinks = NAV_LINKS.slice(0, 3);
  const rightLinks = NAV_LINKS.slice(3, 5);

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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#242c24]/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between relative">
        {/* NAV DESKTOP (Sinistra) */}
        <nav
          aria-label="Navigazione principale sinistra"
          className="hidden lg:flex flex-1 justify-end items-center gap-8 pr-10"
        >
          {leftLinks.map((link) => {
            const isActive = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative text-[13px] font-bold uppercase tracking-[0.15em] transition-colors py-2",
                  isActive
                    ? "text-accent"
                    : "text-white/80 hover:text-white hover:scale-105 transition-transform",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* LOGO */}
        <div className="flex justify-start lg:justify-center items-center z-10 shrink-0">
          <Link
            href="/"
            aria-label="Mave Arredamenti - Torna alla Home"
            className="flex items-center hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
          >
            <Logo />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="flex lg:hidden flex-1 justify-end items-center">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="text-accent hover:bg-accent/10 active:bg-accent/20 rounded-full transition-colors h-12 w-12 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8" aria-hidden="true" />
            ) : (
              <Menu className="h-8 w-8" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* NAV DESKTOP E BOTTONE (Destra) */}
        <nav
          aria-label="Navigazione principale destra"
          className="hidden lg:flex flex-1 justify-start items-center gap-8 pl-10"
        >
          {rightLinks.map((link) => {
            const isActive = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative text-[13px] font-bold uppercase tracking-[0.15em] transition-colors py-2",
                  isActive
                    ? "text-accent"
                    : "text-white/80 hover:text-white hover:scale-105 transition-transform",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
          <Button
            asChild
            className="bg-accent text-[#1a231a] hover:bg-accent/90 font-bold rounded-full px-7 shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Link href="/contatti">Contattaci</Link>
          </Button>
        </nav>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-white/10 bg-[#1a231a] shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <nav
            aria-label="Navigazione mobile"
            className="container flex flex-col p-6 gap-3"
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
                    "text-lg font-headline transition-all p-3 rounded-xl",
                    isActive
                      ? "bg-accent/15 text-accent border-l-4 border-accent"
                      : "text-white/85 hover:bg-accent/10 hover:text-accent hover:pl-4",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
