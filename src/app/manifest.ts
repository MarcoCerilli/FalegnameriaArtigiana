import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mave Arredamenti | Falegnameria e Tappezzeria Nautica",
    short_name: "Mave",
    description:
      "Falegnameria artigianale, tappezzeria nautica, infissi Schüco, zanzariere e portoni blindati su misura a Terracina.",
    start_url: "/",
    display: "standalone",
    background_color: "#f1f3f1",
    theme_color: "#242c24",
    icons: [
      {
        src: "/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
