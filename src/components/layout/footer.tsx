import Logo from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Logo />
            <p className="mt-4 text-muted-foreground">
              La maestria artigiana per la tua casa e la tua barca.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg text-primary">Navigazione</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg text-primary">Contatti</h3>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>L'Artigiano</p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@artigiano.it" className="hover:text-foreground transition-colors">info@artigiano.it</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+391234567890" className="hover:text-foreground transition-colors">+39 123 456 7890</a>
              </div>
              <p className="text-sm mt-2">P.IVA 12345678901</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} L'Artigiano. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
