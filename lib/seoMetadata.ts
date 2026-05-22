import type { Metadata } from "next";
import { conference } from "@/data/conference";

type PageSeoInput = {
  title: string;
  description: string;
  path: `/${string}`;
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

const ogImage = {
  url: "/og-image-2026-v3.jpg",
  width: 1200,
  height: 630,
  alt: conference.shortTitle
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false
}: PageSeoInput): Metadata {
  const url = `${conference.canonicalUrl}${path}`;
  const resolvedTitle = absoluteTitle ? title : `${title} | ${conference.shortTitle}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: conference.shortTitle,
      images: [ogImage],
      locale: "ru_RU",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [ogImage.url]
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: true
          }
        }
      : {})
  };
}
