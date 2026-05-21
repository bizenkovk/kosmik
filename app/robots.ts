import type { MetadataRoute } from "next";
import { conference } from "@/data/conference";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${conference.canonicalUrl}/sitemap.xml`
  };
}
