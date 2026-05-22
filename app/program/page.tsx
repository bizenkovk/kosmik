import type { Metadata } from "next";
import { DownloadButton } from "@/components/DownloadButton";
import { ProgramTimeline } from "@/components/ProgramTimeline";
import { conference } from "@/data/conference";
import { program } from "@/data/program";
import { formatRussianDate } from "@/lib/format";
import { hasPublicFile } from "@/lib/fileAvailability";
import { createPageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Программа конференции",
  description:
    "Программа конференции КоСМиК.ру-2026: дата, структура заседаний, форматы и материалы для скачивания.",
  path: "/program"
});

export default function ProgramPage() {
  const programFileAvailable = hasPublicFile(program.downloadUrl);
  const published = program.status === "published";

  if (!published) {
    return (
      <main className="bg-[#F3EBDD]">
        <section className="hero-field relative overflow-hidden px-4 py-16 text-[#1F1A17] sm:px-6 lg:px-8">
          <div className="hero-grid absolute inset-0 opacity-[0.65]" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9F1D2D]">
              {conference.shortTitle}
            </p>
            <h1 className="serif mt-4 text-4xl font-semibold sm:text-6xl">
              Программа конференции
            </h1>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-md border border-[#A32635]/[0.22] bg-white p-7 shadow-[0_18px_52px_rgba(90,70,55,0.08)]">
              <p className="serif text-2xl font-semibold leading-tight text-[#1F1A17]">
                {program.notice}
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#F3EBDD]">
      <section className="hero-field relative overflow-hidden px-4 py-16 text-[#1F1A17] sm:px-6 lg:px-8">
        <div className="hero-grid absolute inset-0 opacity-[0.65]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9F1D2D]">
            {conference.shortTitle}
          </p>
          <h1 className="serif mt-4 text-4xl font-semibold sm:text-6xl">
            Программа конференции
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6B625C]">
            {program.title}. Дата проведения: {formatRussianDate(program.date)}.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <div>
            <div className="mt-8">
              <ProgramTimeline items={program.blocks} />
            </div>
          </div>

          <aside className="rounded-md border border-[#9F1D2D]/[0.14] bg-white p-6 shadow-[0_16px_48px_rgba(90,70,55,0.08)] lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A32635]">
              Материалы
            </p>
            <h2 className="serif mt-3 text-2xl font-semibold text-[#1F1A17]">
              Скачать программу
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6B625C]">
              {published
                ? "После публикации подробная программа доступна отдельным файлом."
                : "Файл программы будет опубликован дополнительно."}
            </p>
            <div className="mt-5">
              <DownloadButton
                href={program.downloadUrl}
                available={published && programFileAvailable}
                goal="click_program_download"
                unavailableText="Файл программы будет опубликован дополнительно."
              >
                Скачать программу
              </DownloadButton>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
