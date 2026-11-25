import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ResponsiveHeroImage } from "@/components/responsive-hero-image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contatti e Preventivi",
  description:
    "Contatta Mave Arredamenti di Massimo Simonelli a Terracina per un preventivo gratuito su falegnameria, tappezzeria nautica, infissi Schüco e portoni blindati.",
  alternates: {
    canonical: "/contatti",
  },
  openGraph: {
    title: "Contatti e Preventivi | Mave Arredamenti Terracina",
    description:
      "Richiedi un preventivo gratuito o un sopralluogo a Terracina e in provincia di Latina.",
    url: "/contatti",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contatti e Preventivi | Mave Arredamenti",
    description:
      "Parla con Mave Arredamenti per progetti su misura casa e nautica a Terracina.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function ContattiPage() {
  const heroDesktop =
    PlaceHolderImages.find((p) => p.id === "hero-contatti-desktop")?.imageUrl ||
    "/images/hero-contatti.jpg";
  const heroMobile =
    PlaceHolderImages.find((p) => p.id === "hero-contatti-mobile")?.imageUrl ||
    "/images/hero-contatti-mobile.jpg";

  return (
    <div className="bg-background min-h-screen">
      {/* HERO CONTATTI BOXED */}
      <div className="max-w-6xl mx-auto px-3 sm:px-5 pt-2">
        <section className="relative w-full h-[320px] md:h-[380px] flex items-center justify-center overflow-hidden bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] shadow-xl">
          <ResponsiveHeroImage
            desktopSrc={heroDesktop}
            mobileSrc={heroMobile}
            alt="Contatta Mave Arredamenti a Terracina per un preventivo gratuito"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-black/38 to-black/48" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_75%_at_50%_50%,rgba(15,20,15,0.48)_0%,rgba(15,20,15,0.14)_75%,transparent_100%)]" />

          <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl text-white leading-tight italic drop-shadow-2xl">
              Parliamo del tuo{" "}
              <span className="text-accent not-italic font-light tracking-tight">
                Progetto
              </span>
            </h1>
            <div className="h-1.5 w-24 bg-accent mt-5 rounded-full shadow-lg" />
            <p className="mt-5 text-lg md:text-2xl text-white/95 italic max-w-2xl mx-auto drop-shadow-md font-light">
              Ogni grande lavoro inizia con una chiacchierata e un sopralluogo
              senza impegno.
            </p>
          </div>
        </section>
      </div>

      {/* SEZIONE CONTATTO */}
      <section className="max-w-6xl mx-auto px-3 sm:px-5 py-14 md:py-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-card p-8 rounded-3xl border border-border shadow-xl space-y-7">
              <h2 className="font-headline text-3xl text-primary text-center lg:text-left">
                Informazioni
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-xl text-accent-foreground shrink-0">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">
                      Sede Laboratorio
                    </p>
                    <a
                      href="https://maps.google.com/?q=Via+Giorgione+04019+Terracina+LT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-foreground hover:text-primary underline underline-offset-4 decoration-border leading-snug inline-block mt-1"
                    >
                      Via Giorgione SNC,
                      <br />
                      04019 Terracina (LT)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-xl text-accent-foreground shrink-0">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">
                      Telefono
                    </p>
                    <a
                      href="tel:+393479417554"
                      className="text-base font-semibold text-foreground hover:text-primary underline underline-offset-4 decoration-border inline-block mt-1"
                    >
                      Massimo: +39 347 9417554
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-xl text-accent-foreground shrink-0">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">
                      Email
                    </p>
                    <a
                      href="mailto:mavearredamenti@gmail.com"
                      className="text-base text-foreground hover:text-primary underline underline-offset-4 decoration-border break-all inline-block mt-1"
                    >
                      mavearredamenti@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <Button
                  asChild
                  className="w-full rounded-full bg-[#1f8a4c] hover:bg-[#166d3b] text-white font-bold"
                >
                  <a
                    href="https://wa.me/393479417554?text=Ciao%2C%20vorrei%20richiedere%20informazioni%20per%20un%20progetto."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Scrivici su WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-dashed border-primary/40 bg-card/50 text-center">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                &ldquo;Preferisco il rumore della pialla a quello del telefono,
                ma rispondo sempre entro 24 ore.&rdquo;
              </p>
            </div>
          </aside>

          <div className="lg:col-span-2 bg-card p-6 md:p-10 rounded-3xl border border-border shadow-sm">
            <h2 className="font-headline text-3xl text-primary mb-6">
              Invia una richiesta
            </h2>
            <Suspense
              fallback={
                <div className="h-96 rounded-2xl bg-secondary/30 animate-pulse" />
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
