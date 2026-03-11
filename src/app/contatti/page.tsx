import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ContattiPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-contatti");

  return (
    <div className="bg-background min-h-screen">
      {/* SEZIONE HERO CON IMMAGINE */}
      {/* SEZIONE HERO OTTIMIZZATA PER DESKTOP E MOBILE */}
      <section className="relative w-full overflow-hidden bg-zinc-900">
        <div className="relative w-full aspect-[21/9] md:aspect-[25/9] min-h-[400px]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              priority
              // Usiamo object-top o un valore percentuale per non tagliare il centro
              className="object-cover object-[center_30%]"
              unoptimized
            />
          )}

          {/* Overlay più scuro per staccare il testo bianco dallo sfondo chiaro della foto */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl text-white leading-tight italic drop-shadow-2xl">
              Parliamo del tuo{" "}
              <span className="text-accent not-italic font-light tracking-tight">
                Progetto
              </span>
            </h1>
            <div className="h-1.5 w-24 bg-accent mt-6 rounded-full shadow-lg" />

            <p className="mt-8 text-lg md:text-2xl text-white/90 italic max-w-2xl mx-auto drop-shadow-md font-light">
              Ogni grande lavoro inizia con una chiacchierata.
            </p>
          </div>
        </div>
      </section>

      {/* SEZIONE CONTATTO */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Colonna Info */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-card p-8 rounded-3xl border-2 border-primary/10 shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all" />
              <h3 className="font-headline text-2xl text-primary mb-6 text-center lg:text-left">
                Informazioni
              </h3>

              <div className="space-y-8">
                {/* SEDE */}
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-xl text-accent-foreground shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">
                      Sede
                    </p>
                    <p className="text-lg text-muted-foreground italic leading-tight">
                      Via Giorgione SNC,
                      <br /> 04019 Terracina (LT)
                    </p>
                  </div>
                </div>

                {/* CONTATTI TELEFONICI */}
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-xl text-accent-foreground shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">
                      Contatti
                    </p>
                    <div className="text-lg text-muted-foreground space-y-1">
                      <p>
                        <span className="font-semibold text-primary/70">
                          Massimo:
                        </span>{" "}
                        347 9417554
                      </p>
                      <p>
                        <span className="font-semibold text-primary/70">
                          Luana:
                        </span>{" "}
                        347 1809003
                      </p>
                    </div>
                  </div>
                </div>

                {/* SCRIVICI (EMAIL) */}
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-xl text-accent-foreground shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">
                      Scrivici
                    </p>
                    <div className="text-sm md:text-base text-muted-foreground break-all">
                      <p>massimosimonelli@hotmail.it</p>
                      <p>fonziluana@hotmail.it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-dashed border-primary/30 text-center">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Preferisco il rumore della pialla a quello del telefono, ma
                rispondo sempre entro 24 ore."
              </p>
            </div>
          </aside>

          {/* Colonna Form */}
          <div className="lg:col-span-2 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm">
            <h3 className="font-headline text-3xl text-primary mb-8">
              Invia una richiesta
            </h3>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
