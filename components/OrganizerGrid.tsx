import { organizers } from "@/data/conference";
import { findPublicAsset } from "@/lib/fileAvailability";

export function OrganizerGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {organizers.map((organizer) => {
        const logoSrc = findPublicAsset(`/logos/${organizer.logoBase}`, ["svg", "png"]);

        return (
          <article
            key={organizer.name}
            className="relative flex min-h-[278px] flex-col overflow-hidden rounded-md border border-[#C6A15B]/[0.24] bg-[#5A4038] p-4 text-center text-[#F7EFE6] shadow-[0_18px_52px_rgba(70,48,43,0.15)] transition hover:-translate-y-1 hover:border-[#C6A15B]/28 hover:bg-[#60463E] sm:p-5 xl:p-4 2xl:p-5"
          >
            <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-[#9F1D2D]/26 via-[#C6A15B]/50 to-transparent" />
            <div
              className={[
                "flex h-40 min-h-40 items-center justify-center rounded-md border px-3",
                logoSrc
                  ? "border-[#C6A15B]/35 bg-[#F8F1E7] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.42)]"
                  : "border-[#C6A15B]/24 bg-[#60463E]/72"
              ].join(" ")}
            >
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={`Логотип ${organizer.name}`}
                  className="max-h-32 max-w-full object-contain"
                />
              ) : (
                <div
                  className={[
                    "serif max-w-full whitespace-nowrap font-semibold leading-none text-[#C6A15B]/90",
                    organizer.name.length > 6
                      ? "text-[2rem]"
                      : organizer.name.length > 4
                        ? "text-[2.55rem]"
                        : "text-[3.35rem]"
                  ].join(" ")}
                >
                  {organizer.name}
                </div>
              )}
            </div>
            <div className="mt-6 flex flex-1 items-start justify-center">
              <p className="max-w-[15rem] text-[1rem] font-semibold leading-7 text-[#F7EFE6]">
                {organizer.fullName}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
