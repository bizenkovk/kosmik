"use client";

export type MetrikaGoal =
  | "click_registration"
  | "click_program_download"
  | "click_info_letter_download"
  | "click_publication_requirements"
  | "click_article_template_download"
  | "click_article_rules_download"
  | "click_article_sample_download"
  | "click_bibliography_rules_download"
  | "click_word_pdf_recommendations_download"
  | "click_footer_registration"
  | "click_footer_info_letter"
  | "click_footer_author_documents"
  | "click_footer_email_general"
  | "click_footer_email_support";

declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...args: unknown[]) => void;
  }
}

export function reachGoal(goal: MetrikaGoal, params?: Record<string, unknown>) {
  const metrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

  if (typeof window === "undefined" || !metrikaId || !window.ym) {
    return;
  }

  window.ym(Number(metrikaId), "reachGoal", goal, params);
}
