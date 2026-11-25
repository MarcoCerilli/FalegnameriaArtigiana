export type GalleryCategory =
  | "Arredi & Cucine"
  | "Nautica"
  | "Porte & Scale"
  | "Esterni & Dettagli";

export interface GalleryPhoto {
  id: number;
  src: string;
  desc: string;
  category: GalleryCategory;
}

export const GALLERY_CATEGORIES: ("Tutti" | GalleryCategory)[] = [
  "Tutti",
  "Arredi & Cucine",
  "Nautica",
  "Porte & Scale",
  "Esterni & Dettagli",
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    src: "/gallery/arredo_mave.1.jpg",
    desc: "Cucina artigianale in massello",
    category: "Arredi & Cucine",
  },
  {
    id: 2,
    src: "/gallery/arredo_mave.2.jpg",
    desc: "Rivestimento pozzetto in Teak",
    category: "Nautica",
  },
  {
    id: 3,
    src: "/gallery/arredo_mave.3.jpg",
    desc: "Armadio a muro su misura",
    category: "Arredi & Cucine",
  },
  {
    id: 4,
    src: "/gallery/arredo_mave.4.jpg",
    desc: "Dettaglio mobili per interni yacht",
    category: "Nautica",
  },
  {
    id: 5,
    src: "/gallery/arredo_mave.5.jpg",
    desc: "Portone blindato con pannello in legno",
    category: "Porte & Scale",
  },
  {
    id: 7,
    src: "/gallery/arredo_mave.7.jpg",
    desc: "Tavolo da pranzo in rovere naturale",
    category: "Arredi & Cucine",
  },
  {
    id: 8,
    src: "/gallery/arredo_mave.8.jpg",
    desc: "Restauro mobili d'epoca",
    category: "Arredi & Cucine",
  },
  {
    id: 9,
    src: "/gallery/arredo_mave.9.jpg",
    desc: "Separè per soggiorno",
    category: "Arredi & Cucine",
  },
  {
    id: 11,
    src: "/gallery/arredo_mave.11.jpg",
    desc: "Scale interne in legno pregiato",
    category: "Porte & Scale",
  },
  {
    id: 12,
    src: "/gallery/arredo_mave.12.jpg",
    desc: "Arredo bagno personalizzato",
    category: "Arredi & Cucine",
  },
  {
    id: 13,
    src: "/gallery/arredo_mave.13.jpg",
    desc: "Lavorazione artigianale sottocoperta",
    category: "Nautica",
  },
  {
    id: 14,
    src: "/gallery/arredo_mave.14.jpg",
    desc: "Porte interne di design",
    category: "Porte & Scale",
  },
  {
    id: 15,
    src: "/gallery/arredo_mave.15.jpg",
    desc: "Dettagli tecnici di falegnameria",
    category: "Esterni & Dettagli",
  },
  {
    id: 16,
    src: "/gallery/arredo_mave.16.jpg",
    desc: "Complementi d'arredo per il mare",
    category: "Nautica",
  },
  {
    id: 17,
    src: "/gallery/arredo_mave.17.jpg",
    desc: "Libreria su misura",
    category: "Arredi & Cucine",
  },
  {
    id: 18,
    src: "/gallery/arredo_mave.18.jpg",
    desc: "Finiture artigianali di pregio",
    category: "Esterni & Dettagli",
  },
  {
    id: 19,
    src: "/gallery/arredo_mave.19.jpg",
    desc: "Strutture in legno per esterni",
    category: "Esterni & Dettagli",
  },
  {
    id: 20,
    src: "/gallery/arredo_mave.20.jpg",
    desc: "Letto sospeso con testiera e LED integrati in rovere massello",
    category: "Arredi & Cucine",
  },
  {
    id: 21,
    src: "/gallery/arredo_mave.21.jpg",
    desc: "Porta scorrevole design",
    category: "Porte & Scale",
  },
  {
    id: 22,
    src: "/gallery/arredo_mave.22.jpg",
    desc: "Cantinetta vino refrigerata su misura",
    category: "Arredi & Cucine",
  },
  {
    id: 23,
    src: "/gallery/arredo_mave.23.jpg",
    desc: "Armadio laminato con mensola e cassetto laccato",
    category: "Arredi & Cucine",
  },
];
