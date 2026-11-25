import Logo from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#242c24] border-t border-white/10 text-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Parte Superiore: Logo e Navigazione */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-8 border-b border-white/10">
          <div className="space-y-3 max-w-md">
            <Logo />
            <p className="text-sm text-white/80 leading-relaxed italic">
              La maestria artigiana per la tua casa e la tua imbarcazione.{" "}
              <br />
              <span className="text-accent font-semibold">
                Dal legno al mare
              </span>
              , eccellenza nel su misura a Terracina.
            </p>
          </div>

          <nav aria-label="Navigazione footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-bold uppercase tracking-widest text-white/75 hover:text-accent transition-colors"
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
              <h2 className="text-xs font-bold text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Sede
              </h2>
              <a
                href="https://maps.google.com/?q=Via+Giorgione+04019+Terracina+LT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/85 hover:text-accent transition-colors inline-block"
              >
                Via Giorgione SNC, 04019 Terracina (LT)
              </a>
            </div>

            {/* Telefono */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" /> Contatti
              </h2>
              <div className="flex flex-col gap-1.5 text-sm text-white/85 font-medium">
                <a
                  href="tel:+393479417554"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-accent">Massimo:</span> +39 347 9417554
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" /> Scrivici
              </h2>
              <div className="flex flex-col gap-1.5 text-sm text-white/85">
                <a
                  href="mailto:mavearredamenti@gmail.com"
                  className="hover:text-accent transition-colors truncate"
                >
                  mavearredamenti@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/mave_arredamenti/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguici su Instagram"
              className="p-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-accent hover:text-[#242c24] transition-all"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/75 font-medium">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Mave Arredamenti | Terracina</p>
            <span className="hidden sm:block text-white/30">|</span>
            <p>
              Sito sviluppato da{" "}
              <a
                href="https://marcocerilli.it"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors font-semibold underline underline-offset-4 decoration-white/25"
              >
                M Solutions Web di Marco Cerilli
              </a>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors underline underline-offset-4 decoration-white/25"
            >
              Privacy &amp; Cookie Policy
            </Link>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15 font-mono text-xs text-accent">
              P.IVA 03215480595
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
