import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { services } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Recupero Immagine del Servizio per il box in basso
  const serviceImage = PlaceHolderImages.find((p) => p.id === service.imageId);

  return (
    <div className="flex flex-col">
      {/* --- HERO MINIMAL CON SFONDO MATERICO (NO FOTO FULL WIDTH) --- */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden bg-zinc-700">
        {/* Effetto Profondità: Gradiente Radiale */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-600 to-black opacity-60" />

        {/* Texture Noise per rendere il grigio "materico" e non piatto */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <Link
            href="/#servizi"
            className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Torna ai servizi
          </Link>

          <h1 className="font-headline text-5xl md:text-8xl text-white leading-tight">
            {service.title.split(" ")[0]}{" "}
            <span className="text-accent italic font-light tracking-tight">
              {service.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <div className="h-1.5 w-24 bg-accent mx-auto mt-6 rounded-full shadow-lg" />
        </div>
      </section>

      {/* --- SEZIONE CONTENUTO (CON FOTO PRODOTTO) --- */}
      <section className="py-16 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-24 items-center justify-center max-w-7xl mx-auto text-center lg:text-left">
            {/* Colonna Testo */}
            <div className="lg:col-span-3 space-y-10 flex flex-col items-center lg:items-start order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="font-headline text-4xl md:text-6xl text-primary italic leading-tight">
                  L'eccellenza nel{" "}
                  <span className="text-stone-400 not-italic">Su Misura</span>
                </h2>
                <div className="h-1.5 w-24 bg-accent rounded-full mx-auto lg:mx-0 shadow-sm" />
              </div>

              <div className="text-muted-foreground leading-relaxed italic text-xl md:text-2xl font-light">
                <p>{service.longDescription}</p>
              </div>

              <ul className="space-y-5 text-left inline-block">
                {[
                  "Materiali di prima scelta",
                  "Lavorazione artigianale",
                  "Finiture personalizzate",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-5 text-primary font-semibold text-lg md:text-2xl"
                  >
                    <CheckCircle2 className="text-accent h-7 w-7 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 py-8 text-xl shadow-xl transition-transform hover:scale-105"
                >
                  <Link href="/contatti">Richiedi un preventivo</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 relative group w-full order-1 lg:order-2">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100 bg-white p-4">
                {serviceImage && (
                  <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                    <Image
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      fill
                      className="object-cover brightness-[1.03] transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Noise texture applicata sopra l'immagine arrotondata */}
                    <div
                      className="absolute inset-0 opacity-[0.03] pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
