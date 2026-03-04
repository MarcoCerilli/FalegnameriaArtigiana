import Logo from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Parte Superiore: Logo e Info Principali in linea */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-10 border-b">
          <div className="space-y-4 max-w-md">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              La maestria per la tua casa e la tua barca. 
              Dal legno al mare, eccellenza nel su misura.
            </p>
          </div>

          {/* Navigazione Orizzontale */}
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Parte Centrale: Contatti e Social in linea */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 gap-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-muted-foreground w-full">
            <div className="space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Indirizzo</h3>
                <p>Via Giorgione SNC, 04019 Terracina (LT)</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> Telefoni</h3>
                <a href="tel:+393479417554" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <span>347 9417554 (Massimo)</span>
                </a>
                <a href="tel:+393471809003" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <span>347 1809003 (Luana)</span>
                </a>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> Email</h3>
                <a href="mailto:massimosimonelli@hotmail.it" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <span>massimosimonelli@hotmail.it</span>
                </a>
                <a href="mailto:fonziluana@hotmail.it" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <span>fonziluana@hotmail.it</span>
                </a>
            </div>
          </div>

          <div className="flex gap-5 self-center md:self-end">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright e Note Legali */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-muted-foreground/70 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Mave di Simonelli Massimo. Tutti i diritti riservati.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
            <span className="font-mono">P.IVA 03215480595</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
