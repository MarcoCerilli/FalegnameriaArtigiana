import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy",
  description:
    "Informativa sul trattamento dei dati personali e sull'utilizzo dei cookie di Mave Arredamenti di Massimo Simonelli a Terracina.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-8 hover:opacity-75 transition-opacity"
        >
          <ArrowLeft size={14} /> Torna alla Home
        </Link>

        <h1 className="font-headline text-4xl md:text-5xl text-primary mb-4">
          Privacy &amp; Cookie Policy
        </h1>
        <div className="h-1.5 w-20 bg-accent rounded-full mb-10" />

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-headline text-2xl text-foreground">
              1. Titolare del Trattamento
            </h2>
            <p>
              Il Titolare del trattamento dei dati personali è{" "}
              <strong className="text-foreground">
                Mave Arredamenti di Massimo Simonelli
              </strong>
              , con sede in Via Giorgione SNC, 04019 Terracina (LT), P.IVA
              03215480595, raggiungibile all&apos;indirizzo email{" "}
              <a
                href="mailto:mavearredamenti@gmail.com"
                className="text-primary underline underline-offset-4"
              >
                mavearredamenti@gmail.com
              </a>{" "}
              o al numero{" "}
              <a
                href="tel:+393479417554"
                className="text-primary underline underline-offset-4"
              >
                +39 347 9417554
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-2xl text-foreground">
              2. Tipologia di Dati Trattati e Finalità
            </h2>
            <p>
              I dati personali raccolti tramite il modulo di contatto presente
              sul sito (nome, indirizzo email, numero di telefono facoltativo e
              contenuto del messaggio) vengono utilizzati esclusivamente per
              rispondere alle richieste di informazioni o preventivi inviate
              dall&apos;utente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-2xl text-foreground">
              3. Modalità di Trattamento e Conservazione
            </h2>
            <p>
              I dati sono trattati nel rispetto del Regolamento (UE) 2016/679
              (GDPR) mediante strumenti informatici idonei a garantirne la
              sicurezza e la riservatezza. I dati non vengono ceduti a terzi né
              utilizzati per finalità di marketing automatizzato, e sono
              conservati per il tempo strettamente necessario a evadere la
              richiesta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-2xl text-foreground">
              4. Cookie
            </h2>
            <p>
              Questo sito utilizza esclusivamente cookie tecnici strettamente
              necessari al corretto funzionamento della navigazione. Non vengono
              utilizzati cookie di profilazione di terze parti.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-2xl text-foreground">
              5. Diritti dell&apos;Interessato
            </h2>
            <p>
              Ai sensi degli articoli 15-22 del GDPR, l&apos;utente può
              richiedere in qualsiasi momento l&apos;accesso, la rettifica, la
              cancellazione o la limitazione del trattamento dei propri dati
              scrivendo a{" "}
              <a
                href="mailto:mavearredamenti@gmail.com"
                className="text-primary underline underline-offset-4"
              >
                mavearredamenti@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
