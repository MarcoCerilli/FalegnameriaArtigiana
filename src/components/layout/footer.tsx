import Logo from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#242c24] border-t border-white/10 text-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Parte Superiore: Logo e Navigazione */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-8 border-b border-white/10">
          <div className="space-y-3 max-w-md">
            <Logo />
            <p className="text-xs md:text-sm text-white/60 leading-relaxed italic">
              La maestria per la tua casa e la tua imbarcazione. <br />
              <span className="text-accent font-semibold">Dal legno al mare</span>, eccellenza nel su misura.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Parte Centrale: Contatti e Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 gap-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm w-full">
            
            {/* Indirizzo */}
            <div className="space-y-2">
                <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Sede
                </h3>
                <p className="text-xs text-white/70">Via Giorgione SNC, 04019 Terracina (LT)</p>
            </div>

            {/* Telefoni */}
            <div className="space-y-2">
                <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Contatti
                </h3>
                <div className="flex flex-col gap-1.5 text-xs text-white/70 font-medium">
                  <a href="tel:+393479417554" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span className="text-accent/50">M.</span> 347 9417554
                  </a>
                  <a href="tel:+393471809003" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span className="text-accent/50">L.</span> 347 1809003
                  </a>
                </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
                <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Scrivici
                </h3>
                <div className="flex flex-col gap-1.5 text-xs text-white/70">
                  <a href="mailto:massimosimonelli@hotmail.it" className="hover:text-accent transition-colors truncate">
                    massimosimonelli@hotmail.it
                  </a>
                  <a href="mailto:fonziluana@hotmail.it" className="hover:text-accent transition-colors truncate">
                    fonziluana@hotmail.it
                  </a>
                </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <Link 
              href="#" 
              aria-label="Instagram"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-accent hover:text-[#242c24] transition-all"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link 
              href="#" 
              aria-label="Facebook"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#1877F2] transition-all"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Bottom Bar - Schiarita per leggibilità */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/50 uppercase tracking-[0.25em] font-medium">
          <p className="hover:text-white/80 transition-colors">
            &copy; {new Date().getFullYear()} Mave Arredamenti | Terracina
          </p>
          <div className="flex gap-6 items-center">
            <Link href="/privacy" className="hover:text-accent transition-colors underline underline-offset-4 decoration-white/10">
              Privacy & Cookies
            </Link>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10 font-mono text-[9px] text-accent/90 shadow-inner">
              P.IVA 03215480595
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}