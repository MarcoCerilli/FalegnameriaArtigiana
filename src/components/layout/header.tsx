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
      {/* max-w-7xl impedisce agli elementi di scappare ai bordi del monitor */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex h-20 items-center justify-between">
        
        {/* LOGO A SINISTRA */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        {/* NAV CENTRALE (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[15px] font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* BOTTONI A DESTRA */}
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 rounded-full px-6">
            <Link href="/contatti">Contattaci</Link>
          </Button>

          {/* Il tuo bottone toggle per mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* MENU MOBILE (A tendina sotto l'header) */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background animate-in slide-in-from-top-5 duration-300">
          <nav className="container flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-medium p-2 rounded-md transition-colors",
                  pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="/contatti">Contattaci</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}