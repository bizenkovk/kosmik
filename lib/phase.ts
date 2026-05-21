import type { SitePhase } from "@/data/conference";

export function getPhaseCta(phase: SitePhase) {
  switch (phase) {
    case "before_registration_deadline":
      return {
        label: "Зарегистрироваться",
        href: "registration",
        note: "Регистрация открыта до 21 сентября 2026 г.",
        goal: "click_registration" as const
      };
    case "after_registration_deadline":
      return {
        label: "Смотреть программу",
        href: "/program",
        note: "Регистрация завершена.",
        goal: undefined
      };
    case "after_event_before_materials_deadline":
      return {
        label: "Направить материалы для публикации",
        href: "/publication-requirements",
        note: "Материалы принимаются до 15 октября 2026 г.",
        goal: "click_publication_requirements" as const
      };
    case "archive":
      return {
        label: "Смотреть итоги",
        href: "/results",
        note: "Сайт работает как архив конференции.",
        goal: undefined
      };
  }
}

export function suggestSitePhase(params: {
  today: Date;
  registrationDeadline: string;
  eventDate: string;
  materialsDeadline: string;
}): SitePhase {
  const day = new Date(params.today.toDateString()).getTime();
  const registration = new Date(`${params.registrationDeadline}T23:59:59+03:00`).getTime();
  const event = new Date(`${params.eventDate}T23:59:59+03:00`).getTime();
  const materials = new Date(`${params.materialsDeadline}T23:59:59+03:00`).getTime();

  if (day <= registration) {
    return "before_registration_deadline";
  }

  if (day <= event) {
    return "after_registration_deadline";
  }

  if (day <= materials) {
    return "after_event_before_materials_deadline";
  }

  return "archive";
}
