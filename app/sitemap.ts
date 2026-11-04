import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.dradanielacosta.com.br", changeFrequency: "monthly", priority: 1 },
    { url: "https://www.dradanielacosta.com.br/palestras", changeFrequency: "yearly", priority: 0.4 },
    { url: "https://www.dradanielacosta.com.br/privacidade", changeFrequency: "yearly", priority: 0.2 },
  ];
}
