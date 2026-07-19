import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

const routes = [
  "/",
  "/auth/login",
  "/auth/sign-up",
  "/auth/forgot-password",
  "/auth/update-password",
  "/auth/sign-up-success",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-19");

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.5,
  }));
}
