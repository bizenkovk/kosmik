"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { reachGoal, type MetrikaGoal } from "@/lib/metrika";

type GoalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  goal?: MetrikaGoal;
  ariaLabel?: string;
  disabled?: boolean;
  external?: boolean;
  note?: string;
};

export function GoalLink({
  href,
  children,
  className,
  goal,
  ariaLabel,
  disabled,
  external,
  note
}: GoalLinkProps) {
  const resolvedClassName = [
    "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-sm font-semibold leading-snug transition whitespace-normal",
    disabled ? "cursor-not-allowed opacity-[0.55]" : "",
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");

  if (disabled) {
    return (
      <span className={resolvedClassName} aria-disabled="true" aria-label={ariaLabel}>
        <span>{children}</span>
        {note ? <span className="sr-only">{note}</span> : null}
      </span>
    );
  }

  const handleClick = () => {
    if (goal) {
      reachGoal(goal);
    }
  };

  const opensNewTab = external && !href.startsWith("mailto:") && !href.startsWith("tel:");

  if (external) {
    return (
      <a
        href={href}
        className={resolvedClassName}
        aria-label={ariaLabel}
        onClick={handleClick}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={resolvedClassName} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </Link>
  );
}
