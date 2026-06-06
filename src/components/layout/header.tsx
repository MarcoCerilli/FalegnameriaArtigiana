"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftLinks = NAV_LINKS.slice(0, 3);
  const rightLinks = NAV_LINKS.slice(3, 5); // Escludiamo 'Contatti' per usare il bottone

  return (
    // Sfondo scurito: Verde Bosco Profondo con blur
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#242c24]/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between relative">
        
        {/* NAV DESKTOP (Sinistra) */}
        <nav className="hidden lg:flex flex-1 justify-end items-center gap-8 pr-12">
          {leftLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[13px] font-bold uppercase tracking-[0.15em] transition-colors py-2",
                  isActive ? "text-accent" : "text-white/70 hover:text-white hover:scale-105 transition-transform",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-accent rounded-full animate-in fade-in zoom-in duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* LOGO (Centro Assoluto) */}
        <div className="flex justify-center items-center z-10 shrink-0">
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <Logo />
          </Link>
        </div>

        {/* NAV DESKTOP E BOTTONE (Destra) */}
        <nav className="hidden lg:flex flex-1 justify-start items-center gap-8 pl-12">
          {rightLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[13px] font-bold uppercase tracking-[0.15em] transition-colors py-2",
                  isActive ? "text-accent" : "text-white/70 hover:text-white hover:scale-105 transition-transform",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-accent rounded-full animate-in fade-in zoom-in duration-300" />
                )}
              </Link>
            );
          })}
          <Button
            asChild
            className="bg-accent text-[#1a231a] hover:bg-accent/90 font-bold rounded-full px-8 shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Link href="/contatti">Contattaci</Link>
          </Button>
        </nav>

        {/* MOBILE ALIGNMENT (Logo a sinistra su mobile, Toggle a destra) */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Su mobile il logo l'abbiamo già messo al centro ma dobbiamo gestire il layout flex:
              La struttura sopra assumeva logo al centro ma per mobile serve flex-between */}
          <div className="flex-1" />
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 rounded-full transition-colors absolute right-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#1a231a] shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <nav className="container flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-headline italic transition-all p-3 rounded-xl",
                  pathname === link.href
                    ? "bg-accent/10 text-accent border-l-4 border-accent"
                    : "text-white/70 hover:bg-white/5 hover:text-white hover:pl-4",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
