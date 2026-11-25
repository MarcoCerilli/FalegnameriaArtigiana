import Logo from "@/components/logo";
import { FooterNav } from "@/components/layout/footer-nav";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-3 sm:px-5 pt-4 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-6 bg-background">
      <div className="max-w-6xl mx-auto rounded-[2rem] bg-[#242c24] border border-white/10 text-[#f5f5f0] shadow-xl px-5 md:px-8 py-5">
        {/* Riga 1: Logo + tagline compatta | Navfooter Pill + Social */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3.5">
            <Logo compact />
            <p className="text-xs text-white/80 leading-snug italic">
              <span className="text-accent font-semibold not-italic">
                Dal legno al mare
              </span>{" "}
              &bull; Artigianato su misura a Terracina.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <FooterNav />
            <a
              href="https://www.instagram.com/mave_arredamenti/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguici su Instagram"
              className="p-2 rounded-full bg-white/10 border border-white/15 text-white hover:bg-accent hover:text-[#242c24] transition-all shrink-0"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Riga 2: Contatti inline + Note legali/credito compatti */}
        <div className="pt-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 text-xs text-white/80">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="https://maps.google.com/?q=Via+Giorgione+04019+Terracina+LT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <MapPin
                className="h-3.5 w-3.5 text-accent shrink-0"
                aria-hidden="true"
              />
              <span>Via Giorgione SNC, 04019 Terracina (LT)</span>
            </a>

            <a
              href="tel:+393479417554"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
            >
              <Phone
                className="h-3.5 w-3.5 text-accent shrink-0"
                aria-hidden="true"
              />
              <span>Massimo: +39 347 9417554</span>
            </a>

            <a
              href="mailto:mavearredamenti@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail
                className="h-3.5 w-3.5 text-accent shrink-0"
                aria-hidden="true"
              />
              <span>mavearredamenti@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-white/75">
            <span>&copy; {new Date().getFullYear()} Mave Arredamenti</span>
            <span className="text-white/25">|</span>
            <span>
              Sviluppato da{" "}
              <a
                href="https://marcocerilli.it"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors font-semibold underline underline-offset-4 decoration-white/25"
              >
                MSolutionsWeb
              </a>
            </span>
            <span className="text-white/25">|</span>
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors underline underline-offset-4 decoration-white/25"
            >
              Privacy &amp; Cookie
            </Link>
            <span className="bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 font-mono text-[11px] text-accent">
              P.IVA 03215480595
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
