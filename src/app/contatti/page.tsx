import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image"; // Importante
import { PlaceHolderImages } from "@/lib/placeholder-images"; // Importante

export default function ContattiPage() {
  // RECUPERO DEL PLACEHOLDER
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-contatti");

  return (
    <div className="bg-background min-h-screen">
      {/* SEZIONE HERO CON IMMAGINE */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        )}
        {/* Overlay scuro per rendere leggibile il testo bianco */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          {/* FIX SPAZIO TITOLO: aggiunto {" "} */}
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight italic">
            Parliamo del tuo{" "}
            <span className="text-accent not-italic font-light tracking-tight">
              Progetto
            </span>
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full shadow-lg" />
          
          <p className="mt-8 text-xl md:text-2xl text-white/90 italic max-w-2xl mx-auto drop-shadow-md">
            Che si tratti di un arredo nautico o di un infisso su misura, ogni grande lavoro inizia con una chiacchierata.
          </p>
        </div>
      </section>

      {/* SEZIONE CONTATTO */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Colonna Info */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-card p-8 rounded-3xl border-2 border-primary/10 shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all" />
              <h3 className="font-headline text-2xl text-primary mb-6 text-center lg:text-left">Informazioni</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Telefono", val: "+39 3XX XXX XXXX" },
                  { icon: Mail, label: "Email", val: "info@maveartigianato.it" },
                  { icon: MapPin, label: "Laboratorio", val: "Terracina (LT), Italia", italic: true }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-accent p-3 rounded-xl text-accent-foreground">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">{item.label}</p>
                      <p className={`text-lg text-muted-foreground ${item.italic ? 'italic' : ''}`}>{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-2xl border border-dashed border-primary/30 text-center">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Preferisco il rumore della pialla a quello del telefono, ma rispondo sempre entro 24 ore."
              </p>
            </div>
          </aside>

          {/* Colonna Form */}
          <div className="lg:col-span-2 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm">
            <h3 className="font-headline text-3xl text-primary mb-8">Invia una richiesta</h3>
            <ContactForm />
          </div>

        </div>
      </main>
    </div>
  );
}