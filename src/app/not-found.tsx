import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background py-20 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-secondary text-primary">
          <Compass className="h-10 w-10" aria-hidden="true" />
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Errore 404
        </p>

        <h1 className="font-headline text-4xl md:text-6xl text-foreground leading-tight">
          Pagina non <span className="text-primary italic">trovata</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
          La pagina che stai cercando potrebbe essere stata spostata o non
          essere più disponibile. Torna alla vetrina principale oppure esplora i
          nostri servizi artigianali.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Torna alla Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="/servizi">Scopri i Servizi</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="rounded-full px-8 text-primary"
          >
            <Link href="/contatti">Contattaci</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
