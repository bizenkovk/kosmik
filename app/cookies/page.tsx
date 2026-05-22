import type { Metadata } from "next";
import Link from "next/link";
import { conference } from "@/data/conference";
import { createPageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Политика использования cookie-файлов — КоСМиК.ру-2026",
  description:
    "Информация об использовании cookie-файлов, localStorage и Яндекс.Метрики на сайте конференции КоСМиК.ру-2026.",
  path: "/cookies",
  absoluteTitle: true
});

type CookieTableRow = {
  category: string;
  purpose: string;
  example: string;
  period: string;
};

type CookieSection = {
  title: string;
  intro?: string;
  items: string[];
};

const cookieRows: CookieTableRow[] = [
  {
    category: "LocalStorage сайта",
    purpose: "сохранение факта принятия уведомления о cookie",
    example: "kosmik_cookie_consent",
    period: "до удаления пользователем или очистки localStorage"
  },
  {
    category: "Аналитические cookie Яндекс.Метрики",
    purpose:
      "анализ посещаемости сайта, источников переходов, просмотренных страниц и поведения пользователей на сайте в обезличенном виде",
    example: "_ym_uid, _ym_d, _ym_isad и иные cookie, устанавливаемые Яндекс.Метрикой",
    period: "срок определяется настройками Яндекс.Метрики и браузера пользователя"
  },
  {
    category: "LocalStorage Яндекс.Метрики",
    purpose:
      "хранение анонимных идентификаторов браузера и технических параметров для статистики посещений",
    example: "служебные localStorage-свойства Яндекс.Метрики",
    period: "срок определяется настройками Яндекс.Метрики и браузера пользователя"
  }
];

const cookieSections: CookieSection[] = [
  {
    title: "1. Общие положения",
    items: [
      "1.1. Настоящая Политика использования cookie-файлов определяет порядок применения cookie-файлов и аналогичных технических средств на сайте kosmik.ians.academy.",
      "1.2. Сайт kosmik.ians.academy является сайтом конференции «КоСМиК.ру-2026».",
      "1.3. Оператор сайта:",
      "АНО «Международная академия естествознания».",
      "Контактный адрес: support@rae.ru.",
      "1.4. Cookie-файлы и аналогичные технологии используются для обеспечения корректной работы сайта, сохранения пользовательских настроек, анализа посещаемости и улучшения структуры сайта.",
      "1.5. Настоящая Политика является дополнением к документу «Политика обработки персональных данных», размещенному на сайте."
    ]
  },
  {
    title: "2. Что такое cookie-файлы",
    items: [
      "2.1. Cookie-файлы — это небольшие фрагменты данных, которые сохраняются на устройстве пользователя при посещении сайта.",
      "2.2. Cookie-файлы помогают сайту распознавать устройство пользователя, сохранять отдельные настройки, фиксировать факт принятия уведомления о cookie и получать статистику использования сайта.",
      "2.3. Кроме cookie-файлов сайт может использовать аналогичные технические средства, включая localStorage и иные идентификаторы браузера."
    ]
  },
  {
    title: "3. Какие cookie используются на сайте",
    items: [
      "3.1. На сайте могут использоваться следующие категории cookie-файлов и аналогичных технологий:",
      "3.1.1. Технические cookie и localStorage сайта. Они используются для корректного отображения страниц, работы интерфейса сайта и сохранения факта принятия уведомления о cookie.",
      "3.1.2. Аналитические cookie и localStorage Яндекс.Метрики. Они используются для анализа посещаемости сайта, источников переходов, просмотра страниц и общей оценки работы сайта.",
      "3.2. На сайте может использоваться сервис Яндекс.Метрика. Яндекс.Метрика может применять cookie-файлы, localStorage и анонимные идентификаторы браузера для формирования обезличенной статистики посещений сайта."
    ]
  },
  {
    title: "5. Для чего используются cookie",
    intro: "Cookie-файлы и аналогичные технологии используются для следующих целей:",
    items: [
      "обеспечение корректной работы сайта;",
      "сохранение факта принятия уведомления о cookie;",
      "анализ посещаемости сайта;",
      "оценка востребованности разделов сайта;",
      "улучшение структуры и содержания сайта;",
      "выявление технических ошибок и улучшение пользовательского опыта."
    ]
  },
  {
    title: "6. Управление cookie",
    items: [
      "6.1. Пользователь может ограничить или запретить использование cookie-файлов в настройках своего браузера.",
      "6.2. Пользователь может удалить ранее сохраненные cookie-файлы и данные localStorage через настройки браузера.",
      "6.3. Если пользователь ограничит использование cookie-файлов, отдельные функции сайта или средства аналитики могут работать некорректно.",
      "6.4. Факт принятия уведомления о cookie сохраняется в localStorage браузера пользователя с ключом kosmik_cookie_consent и значением accepted."
    ]
  },
  {
    title: "7. Cookie-плашка",
    items: [
      "7.1. При первом посещении сайта пользователю показывается уведомление о cookie-файлах.",
      "7.2. В уведомлении размещается текст:",
      "«Мы используем cookie-файлы и сервис Яндекс.Метрика для анализа посещаемости сайта и улучшения его работы. Нажимая “Принять”, вы соглашаетесь с использованием cookie-файлов в соответствии с Политикой использования cookie-файлов.»",
      "7.3. В уведомлении размещаются кнопки: «Принять» и «Подробнее».",
      "7.4. Кнопка «Принять» сохраняет факт принятия уведомления и скрывает его.",
      "7.5. Кнопка «Подробнее» ведет на страницу /cookies."
    ]
  },
  {
    title: "8. Яндекс.Метрика",
    items: [
      "8.1. Сайт может использовать Яндекс.Метрику для сбора обезличенной статистики посещений.",
      "8.2. Яндекс.Метрика может обрабатывать технические данные: IP-адрес, сведения о браузере, типе устройства, операционной системе, времени посещения сайта, просмотренных страницах и источнике перехода.",
      "8.3. Такие данные используются для анализа работы сайта и не предназначены для самостоятельной идентификации пользователя Оператором.",
      "8.4. Если на сайте подключена Яндекс.Метрика, ее запуск осуществляется после принятия cookie-файлов пользователем."
    ]
  },
  {
    title: "9. Связь с Политикой обработки персональных данных",
    items: [
      "9.1. Если cookie-файлы или технические идентификаторы позволяют прямо или косвенно определить пользователя, такие данные обрабатываются в соответствии с Политикой обработки персональных данных.",
      "9.2. Документ «Политика обработки персональных данных» размещен на сайте."
    ]
  },
  {
    title: "10. Изменение Политики использования cookie-файлов",
    items: [
      "10.1. Оператор вправе изменять настоящую Политику.",
      "10.2. Новая редакция Политики вступает в силу с момента размещения на сайте, если иное не указано в новой редакции."
    ]
  },
  {
    title: "11. Контактная информация",
    items: [
      "Оператор: АНО «Международная академия естествознания».",
      "Сайт: kosmik.ians.academy.",
      "Контактный адрес: support@rae.ru."
    ]
  }
];

function renderCookieText(text: string) {
  const supportEmail = conference.supportEmail;
  const privacyLabel = "Политика обработки персональных данных";

  if (text.includes(privacyLabel)) {
    const chunks = text.split(privacyLabel);

    return chunks.map((chunk, index) => (
      <span key={`${chunk}-${index}`}>
        {chunk}
        {index < chunks.length - 1 ? (
          <Link href="/privacy" className="font-semibold text-[#9F1D2D] underline">
            {privacyLabel}
          </Link>
        ) : null}
      </span>
    ));
  }

  const chunks = text.split(supportEmail);

  if (chunks.length === 1) {
    return text;
  }

  return chunks.map((chunk, index) => (
    <span key={`${chunk}-${index}`}>
      {chunk}
      {index < chunks.length - 1 ? (
        <a href={`mailto:${supportEmail}`} className="font-semibold text-[#9F1D2D] underline">
          {supportEmail}
        </a>
      ) : null}
    </span>
  ));
}

export default function CookiesPage() {
  return (
    <main className="bg-[#F3EBDD]">
      <section className="hero-field relative overflow-hidden px-4 py-16 text-[#1F1A17] sm:px-6 lg:px-8">
        <div className="hero-grid absolute inset-0 opacity-[0.45]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9F1D2D]">
            COOKIE
          </p>
          <h1 className="serif mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl">
            Политика использования cookie-файлов
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6B625C]">
            На этой странице описано, какие cookie-файлы и аналогичные технологии используются
            на сайте kosmik.ians.academy и для каких целей.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-md border border-[#9F1D2D]/[0.14] bg-[#F8F1E7] p-6 shadow-[0_18px_52px_rgba(90,70,55,0.08)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9F1D2D]">
            Редакция от 21 мая 2026 г.
          </p>
          <div className="mt-8 grid gap-9 text-base leading-7 text-[#6B625C]">
            {cookieSections.slice(0, 3).map((section) => (
              <section
                key={section.title}
                className="border-t border-[#9F1D2D]/10 pt-7 first:border-t-0 first:pt-0"
              >
                <h2 className="serif text-2xl font-semibold leading-tight text-[#1F1A17]">
                  {section.title}
                </h2>
                {section.intro ? <p className="mt-4">{section.intro}</p> : null}
                <div className="mt-4 grid gap-3">
                  {section.items.map((item) => (
                    <p key={item}>{renderCookieText(item)}</p>
                  ))}
                </div>
              </section>
            ))}

            <section className="border-t border-[#9F1D2D]/10 pt-7">
              <h2 className="serif text-2xl font-semibold leading-tight text-[#1F1A17]">
                4. Таблица используемых cookie и аналогичных технологий
              </h2>
              <div className="mt-6 overflow-x-auto rounded-md border border-[#9F1D2D]/[0.14]">
                <table className="min-w-[760px] border-collapse bg-[#EFE3D2] text-left text-sm leading-6">
                  <thead className="bg-[#E8D9C6] text-[#1F1A17]">
                    <tr>
                      <th className="border-b border-[#9F1D2D]/10 px-4 py-3 font-semibold">
                        Категория
                      </th>
                      <th className="border-b border-[#9F1D2D]/10 px-4 py-3 font-semibold">
                        Назначение
                      </th>
                      <th className="border-b border-[#9F1D2D]/10 px-4 py-3 font-semibold">
                        Пример
                      </th>
                      <th className="border-b border-[#9F1D2D]/10 px-4 py-3 font-semibold">
                        Срок
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieRows.map((row) => (
                      <tr key={row.category} className="align-top">
                        <td className="border-t border-[#9F1D2D]/10 px-4 py-3 font-semibold text-[#1F1A17]">
                          {row.category}
                        </td>
                        <td className="border-t border-[#9F1D2D]/10 px-4 py-3">{row.purpose}</td>
                        <td className="border-t border-[#9F1D2D]/10 px-4 py-3">{row.example}</td>
                        <td className="border-t border-[#9F1D2D]/10 px-4 py-3">{row.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {cookieSections.slice(3).map((section) => (
              <section key={section.title} className="border-t border-[#9F1D2D]/10 pt-7">
                <h2 className="serif text-2xl font-semibold leading-tight text-[#1F1A17]">
                  {section.title}
                </h2>
                {section.intro ? <p className="mt-4">{section.intro}</p> : null}
                <div className="mt-4 grid gap-3">
                  {section.items.map((item) => (
                    <p key={item}>{renderCookieText(item)}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="border-t border-[#9F1D2D]/10 pt-7">
              <Link
                href="/privacy"
                className="inline-flex min-h-11 items-center rounded-md border border-[#9F1D2D]/25 bg-[#F1E8D8] px-4 py-2 text-sm font-semibold text-[#9F1D2D] transition hover:border-[#9F1D2D] hover:bg-[#EFE3D2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]"
              >
                Политика обработки персональных данных
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
