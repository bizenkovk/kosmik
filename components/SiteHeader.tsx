"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { conference } from "@/data/conference";
import { GoalLink } from "@/components/GoalLink";

const navItems = [
  { label: "О конференции", href: "/#about" },
  { label: "Сроки", href: "/#dates" },
  { label: "Программа", href: "/program" },
  { label: "Организаторы", href: "/#organizers" },
  { label: "Оргкомитет", href: "/#committee" },
  { label: "Публикация", href: "/#publication" },
  { label: "Контакты", href: "/#contacts" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const registrationOpen = conference.registrationStatus === "open";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-[#D8C6AF] bg-white/[0.94] shadow-[0_12px_34px_rgba(90,70,55,0.10)] backdrop-blur-xl"
          : "border-[#D8C6AF] bg-white/[0.92]"
      ].join(" ")}
    >
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="serif text-lg font-semibold tracking-[0] text-[#1F1A17] transition hover:text-[#9F1D2D]"
          aria-label="На главную страницу КоСМиК.ру-2026"
        >
          {conference.shortTitle}
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#6B625C] transition hover:text-[#9F1D2D]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <GoalLink
            href={conference.registrationUrl}
            external
            goal="click_registration"
            disabled={!registrationOpen}
            ariaLabel={
              registrationOpen
                ? "Зарегистрироваться на конференцию"
                : "Регистрация на конференцию завершена"
            }
            className="border border-[#9F1D2D]/70 bg-[#9F1D2D] text-white hover:bg-[#8F1A28]"
          >
            {registrationOpen ? "Регистрация" : "Регистрация завершена"}
          </GoalLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#D8C6AF] text-[#1F1A17] transition hover:border-[#A32635] hover:text-[#9F1D2D] xl:hidden"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="sr-only">{menuOpen ? "Закрыть меню" : "Открыть меню"}</span>
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={[
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition",
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[7px] h-0.5 w-5 bg-current transition",
                menuOpen ? "opacity-0" : ""
              ].join(" ")}
            />
            <span
              className={[
                "absolute bottom-0 left-0 h-0.5 w-5 bg-current transition",
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-[#D8C6AF] bg-white/[0.98] px-4 py-5 shadow-2xl xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-[#1F1A17] transition hover:bg-[#F3EBDD] hover:text-[#9F1D2D]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <GoalLink
              href={conference.registrationUrl}
              external
              goal="click_registration"
              disabled={!registrationOpen}
              ariaLabel={
                registrationOpen
                  ? "Зарегистрироваться на конференцию"
                  : "Регистрация на конференцию завершена"
              }
              className="mt-2 border border-[#9F1D2D]/70 bg-[#9F1D2D] text-white"
            >
              {registrationOpen ? "Регистрация" : "Регистрация завершена"}
            </GoalLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
