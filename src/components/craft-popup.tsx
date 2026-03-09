"use client";
import { useState, useEffect } from 'react';
import { X, Hammer, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CraftPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000); 
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in fade-in slide-in-from-left-10 duration-700">
      <div className="bg-card text-card-foreground shadow-2xl p-6 rounded-2xl max-w-[320px] relative border-2 border-primary/20">
        {/* Tasto chiusura */}
        <button 
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-primary transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {/* Usiamo l'accento (giallo/lime) per l'icona */}
            <div className="bg-accent p-2 rounded-lg">
              <Hammer className="text-accent-foreground" size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Mave Artigianato
            </span>
          </div>

          <div>
            <h4 className="font-headline text-lg font-bold leading-tight">
              Progetti su misura?
            </h4>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Realizzo arredi e tappezzeria nautica con precisione artigianale.
            </p>
          </div>

          <Link 
            href="/galleria" 
            onClick={() => setShow(false)}
            className="flex items-center justify-between mt-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm py-3 px-4 rounded-xl transition-all group shadow-md"
          >
            Scopri la Galleria
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}