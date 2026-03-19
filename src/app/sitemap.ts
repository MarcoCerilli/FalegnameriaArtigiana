import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mavearredamenti.it';

  // 1. Rotte Statiche Principali
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/chi-siamo`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galleria`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // 2. Rotta Specifica Catalogo Infissi (struttura nidificata)
  const catalogueRoute = {
    url: `${baseUrl}/servizi/infissi/catalogo`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  };

  // 3. Servizi Dinamici (basati sulla cartella [slug])
  const services = [
    'falegnameria-su-misura',
    'tappezzeria-nautica',
    'infissi-alluminio-pvc',
    'zanzariere',
    'portoni-blindati',
  ];

  const serviceRoutes = services.map((slug) => ({
    url: `${baseUrl}/servizi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, catalogueRoute, ...serviceRoutes];
}