import type { LucideIcon } from "lucide-react";
import { Hammer, Sailboat, DoorOpen, Wind, ShieldCheck } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageId: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "falegnameria",
    title: "Falegnameria",
    shortDescription: "Creazioni in legno su misura, dalla casa alla barca.",
    longDescription: "Realizzo mobili su misura, arredi, e strutture in legno per interni ed esterni. La mia specializzazione include anche la falegnameria nautica, con soluzioni personalizzate per ottimizzare gli spazi e garantire la durabilità in ambiente marino. Ogni pezzo è unico, lavorato con passione e precisione.",
    imageId: "service-falegnameria",
    icon: Hammer,
  },
  {
    slug: "tappezzeria-nautica",
    title: "Tappezzeria Nautica",
    shortDescription: "Rinnova e proteggi la tua imbarcazione con stile.",
    longDescription: "Offro servizi completi di tappezzeria nautica: rifacimento di cuscinerie interne ed esterne, tendalini, cappottine e coperture protettive. Utilizzo solo materiali di alta qualità, resistenti agli agenti atmosferici e alla salsedine, per garantire comfort, funzionalità e un'estetica impeccabile.",
    imageId: "service-tappezzeria",
    icon: Sailboat,
  },
  {
    slug: "infissi",
    title: "Installazione Infissi",
    shortDescription: "Isolamento, sicurezza e design per la tua casa.",
    longDescription: "Installo infissi in PVC, alluminio e legno, selezionando i migliori prodotti per garantire un eccellente isolamento termico e acustico, oltre a un alto livello di sicurezza. Fornisco una consulenza personalizzata per scegliere la soluzione più adatta allo stile della tua abitazione e alle tue esigenze energetiche.",
    imageId: "service-infissi",
    icon: DoorOpen,
  },
  {
    slug: "zanzariere",
    title: "Installazione Zanzariere",
    shortDescription: "Protezione efficace e discreta contro gli insetti.",
    longDescription: "Installazione di zanzariere su misura per finestre e portefinestre. Propongo diverse tipologie di zanzariere – a rullo, plissettate, a battente – per adattarsi a ogni tipo di apertura. Le mie soluzioni uniscono praticità, resistenza e un design minimale che si integra perfettamente con i tuoi infissi.",
    imageId: "service-zanzariere",
    icon: Wind,
  },
  {
    slug: "portoni-blindati",
    title: "Installazione Portoni Blindati",
    shortDescription: "La sicurezza della tua casa inizia dalla porta d'ingresso.",
    longDescription: "Fornisco e installo portoni blindati certificati, che uniscono la massima sicurezza antieffrazione a un'estetica curata. Potrai scegliere tra un'ampia gamma di pannelli personalizzabili per adattare il portone allo stile del tuo condominio o della tua casa indipendente, senza compromessi sulla tranquillità.",
    imageId: "service-portoni",
    icon: ShieldCheck,
  },
];
