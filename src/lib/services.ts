import type { LucideIcon } from "lucide-react";
import { Hammer, Sailboat, DoorOpen, Wind, ShieldCheck } from "lucide-react";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  detailsParagraph: string;
  highlights: string[];
  faqs: ServiceFaq[];
  seoTitle: string;
  seoDescription: string;
  imageId: string;
  imageOrientation: "landscape" | "portrait";
  icon: LucideIcon;
  relatedGalleryIds: number[];
  catalogHref?: string;
};

export const services: Service[] = [
  {
    slug: "falegnameria",
    title: "Falegnameria",
    tagline: "Arredi in legno e lavorazioni nautiche su misura",
    shortDescription: "Creazioni in legno su misura, dalla casa alla barca.",
    longDescription:
      "Realizziamo mobili su misura, cucine artigianali, armadi a muro, librerie, scale e strutture in legno per interni ed esterni. La nostra esperienza abbraccia anche la falegnameria nautica, con rivestimenti in teak e soluzioni salvaspazio pensate per resistere all'ambiente marino.",
    detailsParagraph:
      "Dal rilievo delle misure a domicilio alla scelta delle essenze e delle finiture, ogni progetto nasce nel laboratorio di Terracina per adattarsi al millimetro agli spazi della tua abitazione o della tua imbarcazione lungo tutto il litorale pontino.",
    highlights: [
      "Progettazione su misura al millimetro per casa e yacht",
      "Essenze selezionate: rovere massello, noce e teak marino",
      "Restauro conservativo di mobili e serramenti d'epoca",
      "Rilievo tecnico, trasporto e montaggio curati direttamente",
    ],
    faqs: [
      {
        question: "Effettuate sopralluoghi gratuiti a Terracina e dintorni?",
        answer:
          "Sì, eseguiamo sopralluoghi e rilievi misure su appuntamento a Terracina, San Felice Circeo, Sabaudia, Fondi e in tutta la provincia di Latina.",
      },
      {
        question: "Realizzate anche arredi interni per barche e yacht?",
        answer:
          "Certamente: ci occupiamo di mobili sottocoperta, tavoli nautici, paiolati e rivestimenti pozzetto in teak resistenti a salsedine e umidità.",
      },
      {
        question: "È possibile personalizzare essenze, colori e ferramenta?",
        answer:
          "Sì, ogni mobile è progettato insieme al cliente scegliendo legni, laccature, illuminazione LED integrata e meccanismi di apertura.",
      },
    ],
    seoTitle: "Falegnameria su Misura a Terracina | Mobili e Legno Nautico",
    seoDescription:
      "Falegnameria artigianale a Terracina: cucine, armadi, scale e arredi in legno su misura per casa e imbarcazioni. Richiedi un sopralluogo gratuito.",
    imageId: "service-falegnameria",
    imageOrientation: "landscape",
    icon: Hammer,
    relatedGalleryIds: [1, 3, 7, 17, 20, 23],
  },
  {
    slug: "tappezzeria-nautica",
    title: "Tappezzeria Nautica",
    tagline: "Comfort, cuciture resistenti e stile per la tua barca",
    shortDescription: "Rinnova e proteggi la tua imbarcazione con stile.",
    longDescription:
      "Offriamo servizi completi di tappezzeria nautica per imbarcazioni da diporto e yacht: rifacimento di cuscinerie prendisole e interne, tendalini, cappottine, bimini e coperture protettive su misura.",
    detailsParagraph:
      "Selezioniamo esclusivamente tessuti tecnici marini idrorepellenti, imbottiture a cellula chiusa e filati anti-UV resistenti alla salsedine, lavorati con cuciture rinforzate per garantire durata nel tempo ed estetica impeccabile in ogni stagione.",
    highlights: [
      "Cuscinerie esterne e interne sagomate su misura",
      "Tendalini, cappottine e teli di copertura invernale/estiva",
      "Tessuti nautici anti-UV, antimuffa e idrorepellenti",
      "Rilievo sagome direttamente in porto tra Terracina, Circeo e Gaeta",
    ],
    faqs: [
      {
        question: "Intervenite direttamente presso i porti turistici?",
        answer:
          "Sì, effettuiamo rilievo dime e montaggio direttamente a bordo nei porti di Terracina, San Felice Circeo, Sperlonga, Gaeta e zone limitrofe.",
      },
      {
        question: "Che materiali utilizzate per i cuscini esterni?",
        answer:
          "Utilizziamo ecopelli nautiche certificate, tessuti acrilici traspiranti resistenti ai raggi UV e gomme drenanti a cellula chiusa.",
      },
      {
        question: "Potete riparare o sostituire solo alcune parti del tendalino?",
        answer:
          "Valutiamo sempre se è possibile ripristinare trasparenti crystal, cerniere nautiche o cuciture prima di proporre il rifacimento completo.",
      },
    ],
    seoTitle: "Tappezzeria Nautica a Terracina e Circeo | Cuscinerie e Tendalini",
    seoDescription:
      "Tappezzeria nautica artigianale a Terracina: cuscinerie per barche, tendalini, cappottine e rivestimenti resistenti a salsedine e raggi UV.",
    imageId: "service-tappezzeria",
    imageOrientation: "portrait",
    icon: Sailboat,
    relatedGalleryIds: [2, 4, 13, 16],
  },
  {
    slug: "infissi",
    title: "Installazione Infissi",
    tagline: "Sistemi Schüco in alluminio, PVC e legno ad alte prestazioni",
    shortDescription: "Isolamento, sicurezza e design per la tua casa.",
    longDescription:
      "Installiamo infissi in alluminio a taglio termico Schüco, PVC e legno, selezionati per assicurare il massimo isolamento termo-acustico, tenuta agli agenti atmosferici marini e sicurezza antieffrazione.",
    detailsParagraph:
      "Seguiamo l'intero percorso: consulenza tecnica e scelta del profilo dal nostro catalogo, campionatura colori a domicilio, smaltimento dei vecchi serramenti e posa qualificata per ottimizzare comfort abitativo e risparmio energetico.",
    highlights: [
      "Partner per sistemi in alluminio Schüco (AWS 65, 75, 90)",
      "Soluzioni ad anta a vista, anta a scomparsa e panoramiche",
      "Elevato abbattimento termico e acustico per zone costiere",
      "Posa in opera certificata e consulenza finiture a domicilio",
    ],
    faqs: [
      {
        question: "Quali linee di finestre Schüco installate?",
        answer:
          "Installiamo profili ad anta a vista (AWS 65, AWS 75.SI+, AWS 90.SI+, AWS 90 AC.SI), ad anta a scomparsa (BS) e soluzioni panoramiche (AWS 75 PD.SI).",
      },
      {
        question: "Gli infissi in alluminio resistono alla salsedine di Terracina?",
        answer:
          "Sì, i profili Schüco con trattamenti superficiali certificati e guarnizioni EPDM offrono un'ottima resistenza alla corrosione salina tipica delle zone di mare.",
      },
      {
        question: "Posso vedere le finiture e i colori prima di ordinare?",
        answer:
          "Portiamo direttamente a casa tua le mazzette colori RAL, Sablé ed effetto legno durante il sopralluogo gratuito.",
      },
    ],
    seoTitle: "Installazione Infissi Schüco a Terracina | Alluminio e PVC",
    seoDescription:
      "Installazione infissi Schüco in alluminio, PVC e legno a Terracina. Massimo isolamento termico e acustico, catalogo modelli e sopralluogo gratuito.",
    imageId: "service-infissi",
    imageOrientation: "portrait",
    icon: DoorOpen,
    relatedGalleryIds: [14, 15, 19, 21],
    catalogHref: "/servizi/infissi/catalogo",
  },
  {
    slug: "zanzariere",
    title: "Installazione Zanzariere",
    tagline: "Protezione discreta, scorrevole e su misura per ogni apertura",
    shortDescription: "Protezione efficace e discreta contro gli insetti.",
    longDescription:
      "Progettiamo e installiamo zanzariere su misura per finestre, portefinestre e verande. Disponiamo di sistemi a rullo verticale, plissettati a ingombro ridotto, laterali senza guida a pavimento e a battente.",
    detailsParagraph:
      "Ogni zanzariera è realizzata con telai in alluminio verniciato coordinabili al colore degli infissi esistenti e reti ad alta visibilità resistenti al vento, per proteggere gli ambienti senza rinunciare alla luce naturale.",
    highlights: [
      "Modelli plissettati, a rullo frizionato, scorrevoli e a battente",
      "Guide ribassate sicure per il passaggio su portefinestre",
      "Profili in alluminio personalizzabili in tinta RAL ed effetto legno",
      "Rilievo preciso e installazione rapida anche su fuori squadra",
    ],
    faqs: [
      {
        question: "Quale zanzariera è più adatta per una portefinestra molto usata?",
        answer:
          "Consigliamo i modelli plissettati o a scorrimento laterale con guida bassa da pochi millimetri, pratici, resistenti e privi di barriere d'inciampo.",
      },
      {
        question: "È possibile abbinare il colore del telaio ai vecchi infissi?",
        answer:
          "Sì, forniamo profili in tutte le tonalità RAL, finiture anodizzate, sablé ed effetto legno coordinate ai serramenti già presenti.",
      },
      {
        question: "Sostituite anche sole reti danneggiate?",
        answer:
          "Quando la struttura meccanica è integra valutiamo la sostituzione della rete o degli accessori usurati.",
      },
    ],
    seoTitle: "Zanzariere su Misura a Terracina | Plissettate e a Rullo",
    seoDescription:
      "Installazione zanzariere su misura a Terracina per finestre e portefinestre: modelli plissettati, a rullo e a battente con telai coordinati.",
    imageId: "service-zanzariere",
    imageOrientation: "portrait",
    icon: Wind,
    relatedGalleryIds: [15, 18, 19],
  },
  {
    slug: "portoni-blindati",
    title: "Installazione Portoni Blindati",
    tagline: "Sicurezza certificata e rivestimenti artigianali in legno",
    shortDescription: "La sicurezza della tua casa inizia dalla porta d'ingresso.",
    longDescription:
      "Forniamo e installiamo portoni blindati certificati per appartamenti, ville e locali commerciali, unendo serrature di ultima generazione ad alto grado antieffrazione con pannelli di rivestimento dal design ricercato.",
    detailsParagraph:
      "Grazie alla nostra esperienza di falegnameria, realizziamo pannelli esterni e interni in legno massello, pantografati o laccati per armonizzare perfettamente il portone blindato con la facciata condominiale o con le porte interne di casa.",
    highlights: [
      "Porte blindate certificate in classi antieffrazione elevate",
      "Cilindri europei ad alta sicurezza con defender anti-strappo",
      "Pannelli di rivestimento su misura in legno massello o moderni",
      "Ottimo isolamento termo-acustico tra ingresso e abitazione",
    ],
    faqs: [
      {
        question: "Potete realizzare il pannello esterno identico al regolamento condominiale?",
        answer:
          "Sì, grazie al laboratorio di falegnameria riproduciamo finiture, bugne e colorazioni coerenti con i portoni esistenti nel condominio.",
      },
      {
        question: "È possibile avere finiture diverse tra lato interno ed esterno?",
        answer:
          "Certamente: il lato esterno può seguire l'estetica dell'edificio mentre il lato interno si coordina alle porte e all'arredo di casa.",
      },
      {
        question: "Come avviene l'installazione del nuovo portone blindato?",
        answer:
          "Eseguiamo lo smontaggio del vecchio telaio, l'ancoraggio del controtelaio in acciaio, la posa e la registrazione finale delle serrature.",
      },
    ],
    seoTitle: "Portoni Blindati a Terracina | Sicurezza e Legno su Misura",
    seoDescription:
      "Fornitura e installazione portoni blindati certificati a Terracina con pannelli in legno personalizzabili per ville e condomini.",
    imageId: "service-portoni",
    imageOrientation: "portrait",
    icon: ShieldCheck,
    relatedGalleryIds: [5, 14, 18, 21],
  },
];
