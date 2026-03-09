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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex h-20 items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Logo />
          </Link>
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[14px] font-bold uppercase tracking-widest transition-colors py-2",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
                {/* Sottolineatura elegante in giallo lime per la pagina attiva */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full animate-in fade-in zoom-in duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* BOTTONI */}
        <div className="flex items-center gap-4">
          <Button 
            asChild 
            className="hidden md:flex bg-primary text-white hover:bg-primary/90 rounded-full px-8 shadow-md hover:shadow-lg transition-all border-b-2 border-primary/20"
          >
            <Link href="/contatti">Contattaci</Link>
          </Button>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <nav className="container flex flex-col p-8 gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-xl font-headline italic transition-all p-2",
                  pathname === link.href 
                    ? "text-primary border-l-4 border-accent pl-4" 
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              size="lg"
              className="w-full mt-4 bg-primary text-white" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/contatti">Richiedi un Preventivo</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}