import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { YandexMetrika } from "@/components/YandexMetrika";
import { conference, organizers } from "@/data/conference";

export const metadata: Metadata = {
  metadataBase: new URL(conference.canonicalUrl),
  title: {
    default:
      "КоСМиК.ру-2026 — конференция о современных моделях и кодах русского языка",
    template: "%s | КоСМиК.ру-2026"
  },
  description:
    "II Международная научно-практическая конференция «КоСМиК.ру-2026: Корпус Современных Моделей и Кодов русского языка». 30 сентября 2026 г., смешанный формат.",
  keywords: [
    "КоСМиК.ру-2026",
    "русский язык",
    "русистика",
    "конференция",
    "корпусная лингвистика",
    "МПГУ",
    "РАЕ",
    "МАЕ",
    "МАНПО",
    "РАНХиГС",
    "современные модели русского языка",
    "коды русского языка"
  ],
  alternates: {
    canonical: conference.canonicalUrl
  },
  icons: {
    icon: [
      { url: "/site-icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title:
      "КоСМиК.ру-2026 — конференция о современных моделях и кодах русского языка",
    description:
      "II Международная научно-практическая конференция «КоСМиК.ру-2026: Корпус Современных Моделей и Кодов русского языка». 30 сентября 2026 г., смешанный формат.",
    url: conference.canonicalUrl,
    siteName: conference.shortTitle,
    images: [
      {
        url: "/og-image-2026-v3.jpg",
        width: 1200,
        height: 630,
        alt: "КоСМиК.ру-2026"
      }
    ],
    locale: "ru_RU",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F3EBDD"
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: conference.shortTitle,
    url: conference.canonicalUrl,
    inLanguage: "ru-RU"
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Международная академия естествознания",
    alternateName: "МАЕ",
    url: conference.canonicalUrl,
    email: conference.supportEmail
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: conference.shortTitle,
    alternateName: conference.fullTitle,
    description: conference.description,
    startDate: conference.eventDate,
    endDate: conference.eventDate,
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    inLanguage: "ru-RU",
    url: conference.canonicalUrl,
    image: `${conference.canonicalUrl}/og-image-2026-v3.jpg`,
    location: {
      "@type": "VirtualLocation",
      url: `${conference.canonicalUrl}/program`
    },
    organizer: organizers.map((organizer) => ({
      "@type": "Organization",
      name: organizer.fullName
    }))
  }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={conference.language}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <YandexMetrika />
        <SiteHeader />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
