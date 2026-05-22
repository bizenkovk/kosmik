import Link from "next/link";
import { conference, footerContent } from "@/data/conference";
import { GoalLink } from "@/components/GoalLink";
import type { MetrikaGoal } from "@/lib/metrika";

export function Footer() {
  return (
    <footer className="border-t border-[#C6A15B]/25 bg-[#46302B] text-[#E8D8C8]">
      <div className="mx-auto grid max-w-7xl items-start gap-7 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.22fr_0.95fr_0.95fr_1.08fr] lg:px-8">
        <div>
          <p className="serif text-2xl font-semibold text-[#F7EFE6]">{conference.shortTitle}</p>
          <p className="mt-2 max-w-sm text-[0.95rem] leading-6 text-[#C8B8A8]">
            {footerContent.subtitle}
          </p>
          <p className="mt-3 text-[0.95rem] font-semibold text-[#C6A15B]">
            {footerContent.date}
          </p>
        </div>

        {footerContent.groups.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A15B]">
              {group.title}
            </p>
            <div className="mt-3 grid gap-2 text-[0.95rem] font-semibold leading-6 text-[#E8D8C8]">
              {group.links.map((item) => {
                const goal = "goal" in item ? (item.goal as MetrikaGoal | undefined) : undefined;
                const external = "external" in item ? item.external : undefined;

                if (external || goal) {
                  return (
                    <GoalLink
                      key={item.href}
                      href={item.href}
                      external={external}
                      goal={goal}
                      className="!min-h-0 !justify-start !rounded-none !p-0 text-left text-[0.95rem] font-semibold leading-6 text-[#E8D8C8] hover:text-[#C6A15B]"
                    >
                      {item.label}
                    </GoalLink>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    className="transition hover:text-[#C6A15B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[#C6A15B]/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm text-[#C8B8A8] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>{footerContent.copyright}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href={footerContent.privacyLink.href}
              className="font-semibold text-[#E8D8C8] transition hover:text-[#C6A15B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]"
            >
              {footerContent.privacyLink.label}
            </Link>
            <Link
              href={footerContent.cookieLink.href}
              className="font-semibold text-[#E8D8C8] transition hover:text-[#C6A15B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]"
            >
              {footerContent.cookieLink.label}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#C6A15B]/14">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 py-4 text-[0.9rem] font-semibold text-[#C8B8A8] sm:flex-row sm:items-center sm:justify-end sm:gap-4 sm:px-6 lg:px-8">
          <span>{footerContent.supportCredit.label}</span>
          <img
            src={footerContent.supportCredit.logoSrc}
            alt={footerContent.supportCredit.logoAlt}
            className="h-7 w-auto max-w-[220px] object-contain opacity-95"
          />
        </div>
      </div>
    </footer>
  );
}
