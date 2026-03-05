import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

// Recuperiamo l'immagine Hero come prima
const heroImage = PlaceHolderImages.find(p => p.id === 'hero-galleria');

// Creiamo dinamicamente l'array per le 45 immagini estratte dal PDF
const pdfGalleryImages = Array.from({ length: 45 }, (_, i) => ({
  id: `pdf-gallery-${i + 1}`,
  imageUrl: `/images/arredo_mave.${i + 1}.jpg`, // Percorso basato sul tuo script extract.mjs
  description: `Dettaglio arredo artigianale ${i + 1}`,
  imageHint: "Progetto realizzato da Falegnameria Artigiana"
}));

export default function GalleriaPage() {
  return (
    <>
      {/* Sezione Hero - Invariata */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
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
        <div className="relative z-10 p-4 max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl text-white">Galleria Progetti</h1>
            <p className="mt-4 text-xl text-white/90">
              Una selezione di lavori completati che mostrano la cura, la qualità e la passione che metto in ogni progetto.
            </p>
        </div>
      </section>

      {/* Sezione Griglia - Ora usa pdfGalleryImages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pdfGalleryImages.map((image) => (
              <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg bg-gray-100">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  // unoptimized // Aggiungilo se non vuoi che Next.js processi le 45 foto ogni volta in locale
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}