"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "kosmik_cookie_consent";
const COOKIE_CONSENT_ACCEPTED = "accepted";
const COOKIE_CONSENT_EVENT = "kosmik_cookie_consent_accepted";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(COOKIE_CONSENT_KEY) !== COOKIE_CONSENT_ACCEPTED);
    } catch {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_ACCEPTED);
    } catch {
      // If storage is unavailable, still hide the notice for the current session.
    }

    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-5xl rounded-xl border border-[#C6A15B]/35 bg-[#F8F1E7] p-4 text-[#1F1A17] shadow-[0_18px_58px_rgba(70,48,43,0.18)] sm:bottom-6 sm:p-5"
      aria-label="Уведомление об использовании cookie"
    >
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <p className="text-sm leading-6 text-[#4C453D] sm:text-[0.95rem]">
          Мы используем cookie-файлы и сервис Яндекс.Метрика для анализа посещаемости сайта и
          улучшения его работы. Нажимая “Принять”, вы соглашаетесь с использованием cookie-файлов
          в соответствии с Политикой использования cookie-файлов.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#9F1D2D] bg-[#9F1D2D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8F1A28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]"
            onClick={acceptCookies}
          >
            Принять
          </button>
          <Link
            href="/cookies"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#9F1D2D]/30 bg-white/60 px-5 py-2.5 text-sm font-semibold text-[#9F1D2D] transition hover:border-[#9F1D2D] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </aside>
  );
}
