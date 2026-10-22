import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dra. Daniela Costa | Mente, Corpo e Hormônios",
    short_name: "Dra. Daniela Costa",
    description: "Medicina Integrada em Guarulhos, telemedicina e consulta domiciliar.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e7",
    theme_color: "#43372e",
    lang: "pt-BR",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
