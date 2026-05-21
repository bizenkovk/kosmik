import type { ProgramItem } from "@/data/program";

const typeLabels: Record<ProgramItem["type"], string> = {
  plenary: "пленарное заседание",
  section: "секция",
  roundtable: "круглый стол",
  masterclass: "мастер-класс",
  meeting: "ученые встречи",
  contest: "конкурс",
  break: "перерыв"
};

export function ProgramTimeline({ items }: { items: ProgramItem[] }) {
  return (
    <div className="relative grid gap-5">
      <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-[#A32635]/40 md:block" />
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className="relative rounded-md border border-[#9F1D2D]/[0.14] bg-white p-5 shadow-[0_16px_48px_rgba(90,70,55,0.08)] md:ml-10"
        >
          <span className="absolute -left-[31px] top-7 hidden h-3 w-3 rounded-full border border-[#C6A15B] bg-[#46302B] md:block" />
          <div className="flex flex-wrap items-center gap-3">
            {item.time ? (
              <span className="rounded-md bg-[#46302B] px-3 py-1 text-sm font-semibold text-[#F7EFE6]">
                {item.time}
              </span>
            ) : null}
            <span className="rounded-md border border-[#A32635]/[0.42] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#9F1D2D]">
              {typeLabels[item.type]}
            </span>
            {item.format ? (
              <span className="text-sm font-medium text-[#6B625C]">{item.format}</span>
            ) : null}
          </div>
          <h2 className="serif mt-4 text-2xl font-semibold text-[#1F1A17]">{item.title}</h2>
          {item.location ? <p className="mt-2 text-sm text-[#6B625C]">{item.location}</p> : null}
          {item.description ? (
            <p className="mt-4 text-base leading-7 text-[#6B625C]">{item.description}</p>
          ) : null}
          {item.moderators?.length ? (
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#1F1A17]">Модераторы</p>
              <p className="mt-1 text-sm leading-6 text-[#6B625C]">{item.moderators.join(", ")}</p>
            </div>
          ) : null}
          {item.speakers?.length ? (
            <div className="mt-5 grid gap-3">
              <p className="text-sm font-semibold text-[#1F1A17]">Доклады</p>
              {item.speakers.map((speaker) => (
                <div key={`${speaker.name}-${speaker.topic}`} className="border-t border-[#9F1D2D]/10 pt-3">
                  <p className="font-medium text-[#1F1A17]">{speaker.name}</p>
                  {speaker.affiliation ? (
                    <p className="text-sm text-[#6B625C]">{speaker.affiliation}</p>
                  ) : null}
                  {speaker.topic ? (
                    <p className="mt-1 text-sm leading-6 text-[#6B625C]">«{speaker.topic}»</p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
