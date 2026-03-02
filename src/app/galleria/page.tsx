import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));
const heroImage = PlaceHolderImages.find(p => p.id === 'hero-galleria');

export default function GalleriaPage() {
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
