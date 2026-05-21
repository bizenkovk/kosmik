"use client";

import { useEffect } from "react";

const COOKIE_CONSENT_KEY = "kosmik_cookie_consent";
const COOKIE_CONSENT_ACCEPTED = "accepted";
const COOKIE_CONSENT_EVENT = "kosmik_cookie_consent_accepted";

declare global {
  interface Window {
    __kosmikMetrikaInitialized?: boolean;
  }
}

type YandexMetrikaQueue = ((...args: unknown[]) => void) & {
  a?: unknown[][];
  l?: number;
};

function hasCookieConsent() {
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === COOKIE_CONSENT_ACCEPTED;
  } catch {
    return false;
  }
}

function initYandexMetrika(counterId: string) {
  const id = Number(counterId);

  if (!id || window.__kosmikMetrikaInitialized) {
    return;
  }

  window.__kosmikMetrikaInitialized = true;
  let queuedMetrika = window.ym as YandexMetrikaQueue | undefined;

  if (!queuedMetrika) {
    queuedMetrika = ((...args: unknown[]) => {
      queuedMetrika!.a = queuedMetrika!.a || [];
      queuedMetrika!.a.push(args);
    }) as YandexMetrikaQueue;
  }

  queuedMetrika.l = Date.now();
  window.ym = queuedMetrika as Window["ym"];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://mc.yandex.ru/metrika/tag.js";
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode?.insertBefore(script, firstScript);

  queuedMetrika(id, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: false
  });
}

export function YandexMetrika() {
  useEffect(() => {
    const counterId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

    if (!counterId) {
      return;
    }

    if (hasCookieConsent()) {
      initYandexMetrika(counterId);
    }

    const onConsentAccepted = () => initYandexMetrika(counterId);
    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentAccepted);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentAccepted);
    };
  }, []);

  return null;
}
