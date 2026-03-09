import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const heroImage = PlaceHolderImages.find((p) => p.id === "hero-galleria");

const pdfGalleryImages = Array.from({ length: 45 }, (_, i) => ({
  id: `pdf-gallery-${i + 1}`,
  imageUrl: `/images/arredo_mave.${i + 1}.jpg`,
  description: `Dettaglio arredo artigianale ${i + 1}`,
  imageHint: "Progetto realizzato da Falegnameria Artigiana",
}));

export default function GalleriaPage() {
  return (
    <>
      {/* Sezione Hero Bicolore */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            unoptimized
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          {/* Titolo Bicolore */}
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight">
            Galleria <span className="text-accent italic font-light tracking-tight">Progetti</span>
          </h1>
          
          {/* Linea decorativa */}
          <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full shadow-lg" />
          
          <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed italic">
            Una selezione di lavori che mostrano la cura, la qualità e la passione che metto in ogni creazione artigianale.
          </p>
        </div>
      </section>

      {/* Sezione Griglia - Stile Artigianale */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pdfGalleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative h-[350px] overflow-hidden rounded-3xl shadow-xl bg-card border-4 border-white transition-all duration-500 hover:shadow-accent/20"
              >
                {/* Immagine con zoom */}
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  unoptimized
                />
                
                {/* Overlay con tocco di colore accent al passaggio */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="h-1 w-8 bg-accent mb-3 rounded-full" />
                    <p className="text-white text-lg font-headline italic">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Glow soffuso esterno (opzionale) */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}