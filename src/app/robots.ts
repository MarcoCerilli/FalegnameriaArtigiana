import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/', // Qui puoi bloccare cartelle che non vuoi su Google
      },
    ],
    // Qui indichi a Google dove trovare la sitemap
    sitemap: 'https://www.maveartigianato.it/sitemap.xml',
  };
}