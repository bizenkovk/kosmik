export type ProgramStatus = "pending" | "published";

export type ProgramItem = {
  time?: string;
  title: string;
  type:
    | "plenary"
    | "section"
    | "roundtable"
    | "masterclass"
    | "meeting"
    | "contest"
    | "break";
  format?: "очно" | "дистанционно" | "смешанный формат";
  location?: string;
  moderators?: string[];
  speakers?: {
    name: string;
    affiliation?: string;
    topic?: string;
  }[];
  description?: string;
};

export const program = {
  status: "pending" as ProgramStatus,
  downloadUrl: "/files/program.pdf",
  date: "2026-09-30",
  title: "Программа конференции «КоСМиК.ру-2026»",
  notice:
    "Программа конференции будет опубликована позже. Подробная программа с указанием формата отдельных мероприятий будет опубликована дополнительно.",
  blocks: [
    {
      title: "Пленарное заседание",
      type: "plenary",
      format: "дистанционно",
      description:
        "Пленарное заседание проводится с участием представителей организаторов и приглашенных участников."
    },
    {
      title: "Секционные заседания",
      type: "section",
      format: "смешанный формат",
      description:
        "Секционные заседания проводятся по основным направлениям конференции."
    },
    {
      title: "Круглый стол «Традиции и инновации в современной русистике»",
      type: "roundtable",
      format: "дистанционно",
      description:
        "Обсуждение актуальных вопросов современной русистики, научных школ, преемственности и инновационных подходов."
    },
    {
      title: "Мастер-класс",
      type: "masterclass",
      description:
        "Формат мастер-класса будет уточнен в подробной программе конференции."
    },
    {
      title: "«Ученые встречи»",
      type: "meeting",
      description:
        "Специальный формат профессионального общения участников конференции."
    },
    {
      title:
        "Конкурс научных проектов молодых исследователей «Русский язык: Достоинство и Достояние»",
      type: "contest",
      description:
        "Конкурс проводится для студентов, учащихся, кадетов и курсантов. Форматы участия: доклады, статьи, презентации, эссе."
    }
  ] satisfies ProgramItem[]
};
