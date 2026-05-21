import { committeeMembers, homeContent } from "@/data/conference";

export function CommitteeBlock() {
  const featured = committeeMembers.filter((member) => member.featured);
  const rest = committeeMembers
    .filter((member) => !member.featured)
    .sort((a, b) => a.name.localeCompare(b.name, "ru"));

  return (
    <div className="grid gap-8">
      <div className="grid auto-rows-fr gap-5 lg:grid-cols-2">
        {featured.map((member) => (
          <article
            key={member.name}
            className="relative overflow-hidden rounded-md border border-[#A32635]/[0.38] bg-white p-8 shadow-[0_26px_80px_rgba(90,70,55,0.13)]"
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#A32635] via-[#C6A15B] to-transparent" />
            <p className="inline-flex rounded-md border border-[#A32635]/24 bg-[#46302B] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#C6A15B]">
              {member.role}
            </p>
            <h3 className="serif mt-6 text-3xl font-semibold leading-tight text-[#1F1A17] xl:text-4xl">
              {member.name}
            </h3>
            <p className="mt-6 text-base leading-8 text-[#6B625C]">{member.description}</p>
          </article>
        ))}
      </div>

      <details className="group rounded-md border border-[#A32635]/44 bg-white p-6 shadow-[0_22px_70px_rgba(90,70,55,0.12)]">
        <summary className="cursor-pointer list-none text-base font-semibold text-[#1F1A17] transition hover:text-[#9F1D2D]">
          <span className="inline-flex min-h-[4.5rem] w-full items-center justify-between gap-4 rounded-md border border-[#A32635]/50 bg-[#F3EBDD] px-5 py-4 shadow-[0_14px_40px_rgba(143,26,40,0.13)] transition hover:-translate-y-0.5 hover:border-[#9F1D2D] hover:bg-white hover:shadow-[0_18px_48px_rgba(143,26,40,0.16)] sm:px-6">
            <span>{homeContent.committee.expandLabel}</span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[#9F1D2D] bg-[#9F1D2D] text-white transition group-open:rotate-180 group-hover:bg-[#8F1A28]" aria-hidden="true">
              <span className="h-3 w-3 rotate-45 border-b-2 border-r-2 border-current -translate-y-0.5" />
            </span>
          </span>
        </summary>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {rest.map((member) => (
            <article key={member.name} className="border-t border-[#9F1D2D]/[0.12] pt-4">
              <h3 className="font-semibold text-[#1F1A17]">{member.name}</h3>
              {member.role !== "Член оргкомитета" ? (
                <p className="mt-1 text-sm font-medium text-[#A32635]">{member.role}</p>
              ) : null}
              <p className="mt-2 text-sm leading-6 text-[#6B625C]">{member.description}</p>
            </article>
          ))}
        </div>
      </details>
    </div>
  );
}
