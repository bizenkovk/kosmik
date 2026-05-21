import type { Metadata } from "next";
import Link from "next/link";
import { conference, resultsContent } from "@/data/conference";

export const metadata: Metadata = {
  title: "Итоги конференции",
  description:
    "Итоги конференции КоСМиК.ру-2026: материалы, секции, фотографии, ссылки на сборник и монографию после публикации.",
  alternates: {
    canonical: `${conference.canonicalUrl}/results`
  }
};

export default function ResultsPage() {
  const status = conference.resultsStatus;

  return (
    <main className="bg-[#F3EBDD]">
      <section className="hero-field relative overflow-hidden px-4 py-16 text-[#1F1A17] sm:px-6 lg:px-8">
        <div className="hero-grid absolute inset-0 opacity-[0.65]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9F1D2D]">
            Архив конференции
          </p>
          <h1 className="serif mt-4 text-4xl font-semibold sm:text-6xl">
            Итоги конференции
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6B625C]">
            Раздел подготовлен для пост-релизной версии сайта.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {status !== "published" ? (
            <div className="rounded-md border border-[#A32635]/[0.36] bg-white p-8 shadow-[0_18px_52px_rgba(90,70,55,0.08)]">
              <h2 className="serif text-3xl font-semibold text-[#1F1A17]">
                Итоги конференции будут опубликованы после завершения мероприятия.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#6B625C]">
                После публикации здесь появятся итоговый текст, секции, фотографии, программа и ссылки на материалы конференции.
              </p>
            </div>
          ) : (
            <div className="grid gap-8">
              <article className="rounded-md border border-[#9F1D2D]/[0.14] bg-white p-8">
                <h2 className="serif text-3xl font-semibold text-[#1F1A17]">
                  Краткие итоги
                </h2>
                <p className="mt-4 text-base leading-7 text-[#6B625C]">{resultsContent.summary}</p>
                {resultsContent.participantCount ? (
                  <p className="mt-5 text-lg font-semibold text-[#9F1D2D]">
                    Участников: {resultsContent.participantCount}
                  </p>
                ) : null}
              </article>

              {resultsContent.sections.length ? (
                <article className="rounded-md border border-[#9F1D2D]/[0.14] bg-white p-8">
                  <h2 className="serif text-3xl font-semibold text-[#1F1A17]">Секции</h2>
                  <ul className="mt-5 grid gap-3 text-[#6B625C]">
                    {resultsContent.sections.map((section) => (
                      <li key={section} className="border-t border-[#9F1D2D]/10 pt-3">
                        {section}
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}

              {resultsContent.gallery.length ? (
                <article className="rounded-md border border-[#9F1D2D]/[0.14] bg-white p-8">
                  <h2 className="serif text-3xl font-semibold text-[#1F1A17]">Фото</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {resultsContent.gallery.map((photo) => (
                      <img
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        className="aspect-[4/3] rounded-md object-cover"
                      />
                    ))}
                  </div>
                </article>
              ) : null}

              <article className="rounded-md border border-[#9F1D2D]/[0.14] bg-white p-8">
                <h2 className="serif text-3xl font-semibold text-[#1F1A17]">Материалы</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    ["Программа", resultsContent.programUrl],
                    ["Сборник", resultsContent.collectionUrl],
                    ["Монография", resultsContent.monographUrl],
                    ["Пост-релиз", resultsContent.postReleaseUrl]
                  ].map(([label, href]) =>
                    href ? (
                      <Link
                        key={label}
                        href={href}
                        className="inline-flex min-h-11 items-center rounded-md border border-[#9F1D2D] bg-[#9F1D2D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8F1A28]"
                      >
                        {label}
                      </Link>
                    ) : null
                  )}
                </div>
                {resultsContent.thanks ? (
                  <p className="mt-6 text-base leading-7 text-[#6B625C]">{resultsContent.thanks}</p>
                ) : null}
              </article>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
