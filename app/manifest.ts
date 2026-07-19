import type { MetadataRoute } from "next";

import { siteConfig, siteUrl } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["portfolio", "technology", "design"],
    screenshots: [
      {
        src: `${siteUrl}/opengraph-image.png`,
        sizes: "1200x630",
        type: "image/png",
        label: "Jibrin portfolio preview",
      },
    ],
  };
}
