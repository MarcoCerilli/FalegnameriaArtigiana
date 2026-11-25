export interface ModelloSchuco {
  id: string;
  nome: string;
  cat: string;
  prestazione: string;
  plus: string;
  img: string;
  tag: string;
}

export const SCHUCO_CATEGORIES = [
  "Tutti",
  "Anta a vista",
  "Anta a scomparsa",
  "Panoramica",
];

export const MODELLI_INFISSI_SCHUCO: ModelloSchuco[] = [
  {
    id: "aws-75-pd",
    nome: "Schüco AWS 75 PD.SI",
    cat: "Panoramica",
    prestazione: "Design Panorama",
    plus: "Super Isolamento SI",
    img: "/catalogo/finestre/panoramica.webp",
    tag: "Panoramica",
  },
  {
    id: "aws-90-bs",
    nome: "Schüco AWS 90 BS.SI+",
    cat: "Anta a scomparsa",
    prestazione: "Standard Casa Passiva",
    plus: "Uf = 0.96 W/m²K",
    img: "/catalogo/finestre/scomparsa1.webp",
    tag: "Scomparsa",
  },
  {
    id: "aws-75-bs",
    nome: "Schüco AWS 75 BS.HI+",
    cat: "Anta a scomparsa",
    prestazione: "Elevato Isolamento",
    plus: "Profilo Snello",
    img: "/catalogo/finestre/aws-75-m-abschliessbarer-griff.webp",
    tag: "Scomparsa",
  },
  {
    id: "aws-65-bs",
    nome: "Schüco AWS 65 BS.HI+",
    cat: "Anta a scomparsa",
    prestazione: "Versatilità e Design",
    plus: "Anta Minimal",
    img: "/catalogo/finestre/Finestre Schüco AWS 65 BS.HI+.webp",
    tag: "Scomparsa",
  },
  {
    id: "aws-90-si",
    nome: "Schüco AWS 90.SI+",
    cat: "Anta a vista",
    prestazione: "Isolamento Estremo",
    plus: "Massima Efficienza",
    img: "/catalogo/finestre/Finestre Schüco AWS 90.SI+.webp",
    tag: "A vista",
  },
  {
    id: "aws-75-si",
    nome: "Schüco AWS 75.SI+",
    cat: "Anta a vista",
    prestazione: "Isolamento Top",
    plus: "Il più venduto",
    img: "/catalogo/finestre/Finestre Schüco AWS 75.SI+.webp",
    tag: "A vista",
  },
  {
    id: "aws-65",
    nome: "Schüco AWS 65",
    cat: "Anta a vista",
    prestazione: "Moderno e Funzionale",
    plus: "Soluzione Standard",
    img: "/catalogo/finestre/Finestre Schüco AWS 65.webp",
    tag: "A vista",
  },
  {
    id: "aws-90-ac",
    nome: "Schüco AWS 90 AC.SI",
    cat: "Anta a vista",
    prestazione: "Isolamento Acustico",
    plus: "Silent Comfort",
    img: "/catalogo/finestre/aws90ac-si.webp",
    tag: "Acustica",
  },
];
