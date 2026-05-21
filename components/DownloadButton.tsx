import { GoalLink } from "@/components/GoalLink";
import type { MetrikaGoal } from "@/lib/metrika";

type DownloadButtonProps = {
  href: string;
  available: boolean;
  children: string;
  unavailableText: string;
  goal?: MetrikaGoal;
  className?: string;
};

export function DownloadButton({
  href,
  available,
  children,
  unavailableText,
  goal,
  className
}: DownloadButtonProps) {
  if (!available) {
    return (
      <div className="grid gap-2">
        <GoalLink
          href={href}
          disabled
          className="w-full border border-[#9F1D2D]/[0.18] bg-[#9F1D2D]/[0.07] text-[#9F1D2D]"
        >
          {children}
        </GoalLink>
        <p className="text-sm text-[#6B625C]">{unavailableText}</p>
      </div>
    );
  }

  return (
    <GoalLink
      href={href}
      goal={goal}
      className={
        className ?? "border border-[#9F1D2D] bg-[#9F1D2D] text-white hover:bg-[#8F1A28]"
      }
    >
      {children}
    </GoalLink>
  );
}
