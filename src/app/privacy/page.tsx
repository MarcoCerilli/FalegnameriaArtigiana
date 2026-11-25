import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del GDPR (UE 2016/679) e sull'utilizzo dei cookie di Mave Arredamenti di Massimo Simonelli a Terracina.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy & Cookie Policy | Mave Arredamenti",
    description:
      "Informativa sul trattamento dei dati personali e sull'utilizzo dei cookie di Mave Arredamenti a Terracina.",
    url: "/privacy",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy & Cookie Policy | Mave Arredamenti",
    description:
      "Informativa GDPR e Cookie Policy di Mave Arredamenti a Terracina.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-3 sm:px-5">
        <div className="rounded-[2rem] bg-card border border-border shadow-sm p-6 sm:p-10 md:p-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-8 hover:opacity-75 transition-opacity"
        >
          <ArrowLeft size={14} /> Torna alla Home
        </Link>

        <h1 className="font-headline text-4xl md:text-5xl text-primary mb-4">
          Privacy &amp; Cookie Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-4">
          Ultimo aggiornamento: Novembre 2026
        </p>
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
              2. Tipologia di Dati, Finalità e Base Giuridica
            </h2>
            <p>
              I dati personali raccolti tramite il modulo di contatto presente
              sul sito (nome, indirizzo email, numero di telefono facoltativo,
              servizi di interesse e contenuto del messaggio) sono trattati
              esclusivamente per rispondere alle richieste di informazioni,
              sopralluoghi o preventivi inviate dall&apos;utente.
            </p>
            <p>
              La base giuridica del trattamento è l&apos;esecuzione di misure
              precontrattuali adottate su richiesta dell&apos;interessato (art.
              6, par. 1, lett. b del Regolamento UE 2016/679 - GDPR). Il
              conferimento dei dati contrassegnati come obbligatori è necessario
              per poter evadere la richiesta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-2xl text-foreground">
              3. Modalità, Destinatari Tecnici e Conservazione
            </h2>
            <p>
              I dati sono trattati con strumenti informatici idonei a garantire
              sicurezza e riservatezza, senza processi decisionali automatizzati
              né profilazione commerciale. Per l&apos;infrastruttura di hosting
              del sito e per la gestione della corrispondenza elettronica
              possono intervenire fornitori tecnici nominati responsabili del
              trattamento (Google Cloud / Firebase App Hosting e Google
              Ireland Ltd. per il servizio Gmail).
            </p>
            <p>
              I dati non vengono ceduti né diffusi a terzi per finalità di
              marketing e sono conservati per il tempo necessario a gestire la
              richiesta (e comunque non oltre 12 mesi dall&apos;ultimo contatto,
              salvo l&apos;instaurazione di un rapporto contrattuale o obblighi
              di legge).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-2xl text-foreground">
              4. Cookie e Dati di Navigazione
            </h2>
            <p>
              Questo sito utilizza esclusivamente strumenti tecnici strettamente
              necessari al corretto funzionamento della navigazione (incluso lo
              stato temporaneo dell&apos;interfaccia in sessionStorage). Non
              vengono utilizzati cookie di profilazione, tracciamento
              pubblicitario o analytics di terze parti.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-2xl text-foreground">
              5. Diritti dell&apos;Interessato e Reclamo
            </h2>
            <p>
              Ai sensi degli articoli 15-22 del GDPR, l&apos;utente può
              richiedere in qualsiasi momento l&apos;accesso, la rettifica, la
              cancellazione, la portabilità o la limitazione del trattamento dei
              propri dati scrivendo a{" "}
              <a
                href="mailto:mavearredamenti@gmail.com"
                className="text-primary underline underline-offset-4"
              >
                mavearredamenti@gmail.com
              </a>
              . L&apos;interessato ha inoltre il diritto di proporre reclamo
              all&apos;Autorità Garante per la Protezione dei Dati Personali.
            </p>
          </section>
        </div>
        </div>
      </div>
    </div>
  );
}
