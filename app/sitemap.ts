import type { MetadataRoute } from "next";
import { conference } from "@/data/conference";

export const dynamic = "force-static";

const routes = ["", "/program", "/publication-requirements", "/results", "/privacy", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${conference.canonicalUrl}${route}`,
    lastModified: new Date("2026-05-18"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
