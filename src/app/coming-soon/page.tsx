import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Sfondo con una delle tue immagini */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-main.jpg"
          alt="Mave Arredamenti Background"
          fill
          className="object-cover opacity-30 brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-sm md:text-base">
            Mave Arredamenti
          </h2>
          
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
            Stiamo <span className="text-accent italic font-light">piallando</span> <br />
            gli ultimi dettagli.
          </h1>

          <p className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            La nostra nuova vetrina digitale è quasi pronta. 
            Stiamo mettendo la stessa cura che usiamo nel nostro laboratorio 
            per offrirti un&apos;esperienza su misura.
          </p>

          <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Tasto WhatsApp per conversioni immediate */}
            <Button 
              asChild 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-7 text-lg shadow-2xl transition-transform hover:scale-105"
            >
              <a href="https://wa.me/39XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Contattaci su WhatsApp
              </a>
            </Button>
            
            <p className="text-white/60 font-medium tracking-widest uppercase text-xs">
              Terracina (LT) • Dal 19XX
            </p>
          </div>
        </div>
      </div>

      {/* Noise texture per coerenza con il resto del sito */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}