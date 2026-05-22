import type { Metadata } from "next";
import { GoalLink } from "@/components/GoalLink";
import { SectionHeading } from "@/components/SectionHeading";
import {
  authorDocuments,
  publicationContacts,
  publicationRequirementsIntro,
  publicationRequirementSections,
  type RequirementSection
} from "@/data/publicationRequirements";
import { createPageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Публикация материалов и документы для авторов",
  description:
    "Публикация материалов конференции КоСМиК.ру-2026: порядок подачи, требования к оформлению и документы для авторов.",
  path: "/publication-requirements"
});

function RequirementDetails({ section, open = false }: { section: RequirementSection; open?: boolean }) {
  return (
    <details
      className="group rounded-md border border-[#9F1D2D]/[0.14] bg-white shadow-[0_12px_40px_rgba(90,70,55,0.06)]"
      open={open}
    >
      <summary className="cursor-pointer list-none p-5 text-lg font-semibold text-[#1F1A17]">
        <span className="flex items-center justify-between gap-5">
          {section.title}
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#A32635]/[0.24] text-[#8F2A2F]">
            <span className="group-open:hidden">+</span>
            <span className="hidden group-open:inline">−</span>
          </span>
        </span>
      </summary>
      <div className="px-5 pb-5">
        {section.intro ? (
          <p className="border-t border-[#9F1D2D]/10 pt-4 text-sm leading-7 text-[#4C453D]">
            {section.intro}
          </p>
        ) : null}
        {section.items ? (
          <ul className="mt-4 grid gap-2.5 text-sm leading-6 text-[#6B625C]">
            {section.items.map((item) => (
              <li key={item} className="border-t border-[#9F1D2D]/10 pt-2.5">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        {section.groups ? (
          <div className="grid gap-4 border-t border-[#9F1D2D]/10 pt-4">
            {section.groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-[#1F1A17]">{group.title}</h3>
                <ul className="mt-2 grid gap-2 text-sm leading-6 text-[#6B625C]">
                  {group.items.map((item) => (
                    <li key={item} className="border-t border-[#9F1D2D]/10 pt-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </details>
  );
}

function getUniqueRequirementSections(sections: RequirementSection[]) {
  const seenTitles = new Set<string>();

  return sections.filter((section) => {
    if (seenTitles.has(section.title)) {
      return false;
    }

    seenTitles.add(section.title);
    return true;
  });
}

export default function PublicationRequirementsPage() {
  const uniqueRequirementSections = getUniqueRequirementSections(publicationRequirementSections);
  const firstRequirementSections = uniqueRequirementSections.slice(0, 2);
  const remainingRequirementSections = uniqueRequirementSections.slice(2);

  return (
    <main className="bg-[#F1E6D6]">
      <section className="hero-field relative overflow-hidden px-4 py-16 text-[#1F1A17] sm:px-6 lg:px-8">
        <div className="hero-grid absolute inset-0 opacity-[0.65]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9F1D2D]">
            Для авторов
          </p>
          <h1 className="serif mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl">
            Публикация материалов
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6B625C]">
            {publicationRequirementsIntro}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <div>
            <SectionHeading
              title="Порядок подачи и оформление материалов"
              text="На странице собраны сведения о порядке направления материалов, публикационных форматах и требованиях к оформлению. Полные правила и образцы доступны в файлах для авторов."
            />
            <div className="mt-7 grid gap-3">
              {firstRequirementSections.map((section) => (
                <RequirementDetails key={section.title} section={section} open />
              ))}

              <details className="group rounded-md border border-[#9F1D2D]/[0.14] bg-white shadow-[0_12px_40px_rgba(90,70,55,0.06)]">
                <summary className="cursor-pointer list-none p-5 text-lg font-semibold text-[#1F1A17]">
                  <span className="flex items-center justify-between gap-5">
                    Куда направлять материалы для публикации
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#A32635]/[0.24] text-[#8F2A2F]">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="border-t border-[#9F1D2D]/10 pt-4 text-sm leading-7 text-[#4C453D]">
                    Материалы направляются ответственным лицам по указанным электронным адресам.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {publicationContacts.map((contact) => (
                      <a
                        key={contact.email}
                        href={`mailto:${contact.email}`}
                        className="rounded-md border border-[#9F1D2D]/[0.12] bg-[#F3EBDD] p-3.5 transition hover:border-[#9F1D2D]/30 hover:bg-[#F1E8D8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]"
                      >
                        <span className="block text-sm font-semibold leading-6 text-[#1F1A17]">
                          {contact.name}
                        </span>
                        <span className="mt-1 block break-all text-sm font-medium text-[#9F1D2D]">
                          {contact.email}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </details>
              {remainingRequirementSections.map((section) => (
                <RequirementDetails key={section.title} section={section} />
              ))}
            </div>
          </div>

          <aside className="rounded-md border border-[rgba(120,80,65,0.14)] bg-[#F7EFE5] p-6 shadow-[0_14px_38px_rgba(90,70,55,0.055)] xl:sticky xl:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A32635]">
              Файлы для авторов
            </p>
            <h2 className="serif mt-3 text-2xl font-semibold text-[#1F1A17]">
              Материалы для скачивания
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6B625C]">
              Для подготовки материалов используйте файлы с правилами оформления, образцом статьи / раздела, требованиями к библиографическим ссылкам и рекомендациями по оформлению Word/PDF.
            </p>
            <div className="mt-5">
              <GoalLink
                href="/files/info-letter.doc"
                goal="click_info_letter_download"
                className="w-full border border-[#9F1D2D] bg-[#9F1D2D] text-white hover:bg-[#8F1A28]"
              >
                Скачать информационное письмо
              </GoalLink>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#A32635]">
                Файлы для оформления материалов
              </h3>
              <div className="mt-4 grid gap-3">
                {authorDocuments.map((document) => (
                  <article
                    key={document.href}
                    className="rounded-md border border-[rgba(120,80,65,0.14)] bg-[#EFE1D0] p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-semibold leading-6 text-[#1F1A17]">
                        {document.title}
                      </h4>
                      <span className="rounded border border-[#C6A15B]/45 px-2 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-[#8F2A2F]">
                        {document.format}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#6B625C]">{document.description}</p>
                    <GoalLink
                      href={document.href}
                      goal={document.goal}
                      className="mt-3 min-h-0 border border-[#9F1D2D]/30 bg-[#F8F1E7] px-4 py-2 text-[#9F1D2D] hover:border-[#9F1D2D] hover:bg-[#F6EDE2]"
                    >
                      Скачать
                    </GoalLink>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
