import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { YandexMetrika } from "@/components/YandexMetrika";
import { conference } from "@/data/conference";

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
  openGraph: {
    title:
      "КоСМиК.ру-2026 — конференция о современных моделях и кодах русского языка",
    description:
      "II Международная научно-практическая конференция «КоСМиК.ру-2026: Корпус Современных Моделей и Кодов русского языка». 30 сентября 2026 г., смешанный формат.",
    url: conference.canonicalUrl,
    siteName: conference.shortTitle,
    images: [
      {
        url: "/og-image.jpg",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={conference.language}>
      <body>
        <YandexMetrika />
        <SiteHeader />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
