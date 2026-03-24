import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/images/"],
        // Blocchiamo l'indicizzazione delle cartelle di sviluppo e API
        disallow: [
          "/ai/", // I tuoi flussi Genkit e file dev
          "/api/", // Le rotte nodemailer e contatti
          "/coming-soon", // Pagina temporanea di cantiere
          "/private/", // Eventuali aree riservate
        ],
      },
    ],
    // Specifichiamo l'URL assoluto della sitemap per Search Console
    sitemap: "https://www.mavearredamenti.it/sitemap.xml",
  };
}
