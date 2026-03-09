import Logo from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary/10 border-t border-border">
      {/* Ridotto il padding da py-12 a py-8 per abbassarlo */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Parte Superiore: Logo e Navigazione - Ridotto il pb e gap */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-primary/10">
          <div className="space-y-3 max-w-md">
            <Logo />
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">
              La maestria per la tua casa e la tua imbarcazione. <br />
              <span className="text-primary font-medium">Dal legno al mare</span>, eccellenza nel su misura.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Parte Centrale: Contatti e Social - Ridotto py da 10 a 6 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 gap-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm w-full">
            
            {/* Indirizzo */}
            <div className="space-y-2">
                <h3 className="font-headline text-md text-primary flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" /> Sede
                </h3>
                <p className="text-xs text-muted-foreground italic">Via Giorgione SNC, 04019 Terracina (LT)</p>
            </div>

            {/* Telefoni */}
            <div className="space-y-2">
                <h3 className="font-headline text-md text-primary flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" /> Contatti
                </h3>
                <div className="flex flex-col gap-0.5 text-xs">
                  <a href="tel:+393479417554" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="font-semibold text-primary/70">Massimo:</span> 347 9417554
                  </a>
                  <a href="tel:+393471809003" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="font-semibold text-primary/70">Luana:</span> 347 1809003
                  </a>
                </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
                <h3 className="font-headline text-md text-primary flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" /> Scrivici
                </h3>
                <div className="flex flex-col gap-0.5 text-xs text-muted-foreground">
                  <a href="mailto:massimosimonelli@hotmail.it" className="hover:text-primary transition-colors truncate">
                    massimosimonelli@hotmail.it
                  </a>
                  <a href="mailto:fonziluana@hotmail.it" className="hover:text-primary transition-colors truncate">
                    fonziluana@hotmail.it
                  </a>
                </div>
            </div>
          </div>

          {/* Social Icons con colori ufficiali in hover */}
          <div className="flex gap-3 self-center md:self-end pt-4 md:pt-0">
            <Link 
              href="#" 
              aria-label="Instagram"
              className="p-2.5 rounded-full bg-card border border-border text-muted-foreground hover:text-white hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] transition-all shadow-sm"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link 
              href="#" 
              aria-label="Facebook"
              className="p-2.5 rounded-full bg-card border border-border text-muted-foreground hover:text-white hover:bg-[#1877F2] transition-all shadow-sm"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar - Ridotto pt da 8 a 6 */}
        <div className="pt-6 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Mave di Simonelli Massimo</p>
          <div className="flex gap-6 items-center">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
            <span className="bg-primary/5 px-2 py-0.5 rounded border border-primary/10 font-mono">P.IVA 03215480595</span>
          </div>
        </div>
      </div>
    </footer>
  );
}