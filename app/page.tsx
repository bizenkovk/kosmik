import { CommitteeBlock } from "@/components/CommitteeBlock";
import { DownloadButton } from "@/components/DownloadButton";
import { GoalLink } from "@/components/GoalLink";
import { OrganizerGrid } from "@/components/OrganizerGrid";
import { SectionHeading } from "@/components/SectionHeading";
import {
  contactCards,
  conference,
  homeContent,
  keyDates,
  programSummaryCards,
  publicationGroups,
  tracks
} from "@/data/conference";
import { hasPublicFile } from "@/lib/fileAvailability";
import { getPhaseCta } from "@/lib/phase";

const infoLetterPdfAvailable = hasPublicFile("/files/info-letter.pdf");
const infoLetterDocxAvailable = hasPublicFile("/files/info-letter.docx");
const infoLetterDocAvailable = hasPublicFile("/files/info-letter.doc");
const heroTitleYear = "-2026";

function renderAnnotatedWords(text: string, annotatedWords: string[]) {
  const words = text.split(" ");

  return words.map((word, index) => (
    <span key={`${word}-${index}`}>
      <span
        className={
          annotatedWords.includes(word) ? "relative inline-block text-[#1F1A17]" : "text-[#5E554D]"
        }
      >
        {word}
        {annotatedWords.includes(word) ? (
          <span className="absolute -bottom-0.5 left-0 h-px w-full bg-[#9F1D2D]/55" />
        ) : null}
      </span>
      {index < words.length - 1 ? " " : null}
    </span>
  ));
}

function HeroCorpusTextCard({
  card
}: {
  card: typeof homeContent.hero.corpusTextCard;
}) {
  const thesisLines = card.text.includes(", ")
    ? card.text.replace(", ", ",\n").split("\n")
    : [card.text];

  return (
    <div
      className="relative hidden min-h-[440px] self-center xl:block"
      data-hero-corpus-card="true"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 inset-y-3 rounded-md border border-[#C6A15B]/55 bg-white/[0.84] shadow-[0_34px_96px_rgba(90,70,55,0.20)] backdrop-blur-[2px]" />
      <div className="absolute inset-0 overflow-hidden rounded-md">
        <div className="absolute inset-x-0 inset-y-3 rounded-md bg-[radial-gradient(circle_at_74%_22%,rgba(143,26,40,0.07),transparent_42%),linear-gradient(135deg,rgba(255,250,243,0.95),rgba(243,235,221,0.88))]" />
        <div className="absolute inset-x-0 inset-y-3 rounded-md opacity-[0.16] [background-image:linear-gradient(rgba(90,70,55,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(90,70,55,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />
        <span className="serif absolute right-8 top-14 select-none text-[8rem] font-semibold leading-none text-[#1F1A17]/[0.018]">
          Я
        </span>
      </div>
      <div className="absolute left-11 top-3 z-10 h-[2px] w-36 rounded-full bg-[#8F2A2F]/85" />

      <div className="relative my-3 flex h-[calc(100%-1.5rem)] flex-col justify-center px-11 py-10">
        <div className="absolute bottom-9 left-0 top-9 w-px bg-gradient-to-b from-[#9F1D2D]/76 via-[#C6A15B]/24 to-transparent" />
        <div>
          <h2 className="serif text-[2.42rem] font-semibold leading-[1.04] text-[#1F1A17]">
            {card.title}
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-[#8F2A2F]/90">
            {card.subtitle}
          </p>
        </div>

        <div className="relative mt-8">
          <p className="serif max-w-[430px] text-[1.18rem] font-medium leading-[1.62] text-[#1F1A17]/92">
            {thesisLines.map((line) => (
              <span key={line} className="block">
                {renderAnnotatedWords(line, card.annotatedWords)}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-8 grid gap-2.5">
          {card.relations.map((relation) => (
            <p
              key={`${relation.label}-${relation.target}`}
              className="grid grid-cols-[5.5rem_auto_1fr] items-center gap-3 font-mono text-[0.82rem] leading-6 text-[#5E554D]"
            >
              <span className="text-[#9F1D2D]/82">{relation.label}</span>
              <span className="text-[#9F1D2D]/58">→</span>
              <span className="border-b border-[#9F1D2D]/18 pb-0.5 text-[#1F1A17]/78">{relation.target}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const phaseCta = getPhaseCta(conference.sitePhase);
  const infoLetterHref = infoLetterPdfAvailable
    ? "/files/info-letter.pdf"
    : infoLetterDocxAvailable
      ? "/files/info-letter.docx"
      : "/files/info-letter.doc";
  const infoLetterAvailable = infoLetterPdfAvailable || infoLetterDocxAvailable || infoLetterDocAvailable;
  const heroFacts = homeContent.hero.facts;
  const corpusTextCard = homeContent.hero.corpusTextCard;
  const titlePrefix = conference.shortTitle.endsWith(heroTitleYear)
    ? conference.shortTitle.slice(0, -heroTitleYear.length)
    : conference.shortTitle;
  const titleSuffix = conference.shortTitle.endsWith(heroTitleYear) ? heroTitleYear : "";

  return (
    <main>
      <section className="hero-field relative isolate overflow-hidden text-[#1F1A17]">
        <div className="hero-grid absolute inset-0 opacity-55" aria-hidden="true" />
        <div className="star-field slow-drift absolute inset-0 opacity-[0.18]" aria-hidden="true" />
        <div className="serif pointer-events-none absolute right-[4%] top-24 hidden select-none text-[10rem] font-semibold leading-none text-[#1F1A17]/[0.035] xl:block" aria-hidden="true">
          КоСМиК
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:grid-cols-[minmax(0,1.18fr)_minmax(410px,0.82fr)] xl:gap-14 2xl:gap-16">
          <div className="max-w-3xl min-w-0 reveal-up">
            <p className="max-w-full break-words text-xs font-semibold uppercase leading-6 tracking-[0.14em] text-[#9F1D2D] sm:text-sm sm:tracking-[0.22em]">
              {homeContent.hero.eyebrow}
            </p>
            <h1 className="serif mt-5 max-w-full text-[2.34rem] font-bold leading-[0.95] tracking-[0] text-[#1F1A17] drop-shadow-[0_10px_24px_rgba(90,70,55,0.08)] sm:text-[4.2rem] md:whitespace-nowrap lg:text-[4.65rem] xl:text-[4.7rem]">
              <span>{titlePrefix}</span>
              {titleSuffix ? <span className="whitespace-nowrap">{titleSuffix}</span> : null}
            </h1>
            <p className="serif mt-5 max-w-none break-words text-lg leading-tight text-[#6B625C] sm:text-[1.55rem] lg:whitespace-nowrap lg:text-[1.62rem] xl:text-[1.66rem]">
              {homeContent.hero.subtitle}
            </p>
            <p className="mt-6 max-w-2xl break-words text-base leading-7 text-[#4C453D] sm:text-lg sm:leading-8">
              {conference.description}
            </p>

            <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <GoalLink
                href={phaseCta.href === "registration" ? conference.registrationUrl : phaseCta.href}
                external={phaseCta.href === "registration"}
                goal={phaseCta.goal}
                ariaLabel={phaseCta.label}
                className="border border-[#A32635] bg-[#A32635] text-white hover:bg-[#9F1D2D]"
              >
                {phaseCta.label}
              </GoalLink>
              <GoalLink
                href="/program"
                className="border border-[#D8C6AF] bg-white/[0.72] text-[#1F1A17] hover:border-[#A32635] hover:text-[#9F1D2D]"
              >
                {homeContent.hero.buttons.program}
              </GoalLink>
              <GoalLink
                href="/publication-requirements"
                goal="click_publication_requirements"
                className="border border-[#D8C6AF] bg-transparent text-[#1F1A17] hover:border-[#A32635] hover:text-[#9F1D2D]"
              >
                {homeContent.hero.buttons.publication}
              </GoalLink>
            </div>
            <p className="mt-4 text-sm text-[#6B625C]">{phaseCta.note}</p>

            <dl className="mt-7 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
              {heroFacts.map((item) => (
                <div key={item.label} className="min-w-0 rounded-md border border-[#D8C6AF] bg-white/[0.58] p-4">
                  <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#9F1D2D] sm:text-xs sm:tracking-[0.18em]">
                    {item.label}
                  </dt>
                  <dd className="mt-2 min-w-0 break-words text-sm font-bold leading-5 text-[#1F1A17] sm:text-base">
                    {item.value}
                  </dd>
                  {"note" in item && typeof item.note === "string" && item.note ? (
                    <p className="mt-1.5 text-[0.72rem] font-semibold leading-4 text-[#6B625C] sm:text-xs">
                      {item.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>

          <HeroCorpusTextCard card={corpusTextCard} />
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-[#46302B] px-4 py-20 text-[#F7EFE6] sm:px-6 lg:px-8">
        <div className="hero-grid absolute inset-0 opacity-[0.04]" aria-hidden="true" />
        <div className="absolute right-20 top-16 h-96 w-96 rounded-full bg-[#6F1D2A]/[0.035] blur-[154px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={homeContent.tracks.eyebrow}
            title={homeContent.tracks.title}
            text={homeContent.tracks.text}
            light
          />
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {tracks.map((track) => (
              <article
                key={track.title}
                className="relative overflow-hidden rounded-md border border-[#C6A15B]/[0.24] bg-[#5A4038] p-8 shadow-[0_18px_52px_rgba(70,48,43,0.15)] transition hover:-translate-y-1 hover:border-[#C6A15B]/28 sm:p-9"
              >
                <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#9F1D2D]/32 via-[#C6A15B]/54 to-transparent" />
                <div className="flex items-start justify-between gap-6">
                  <p className="font-mono text-sm font-semibold text-[#C6A15B]">{track.number}</p>
                  <span className="mt-1 h-px flex-1 bg-[#C6A15B]/22" />
                </div>
                <h3 className="serif mt-5 text-3xl font-semibold leading-tight text-[#F7EFE6]">{track.title}</h3>
                <p className="mt-5 text-[0.96rem] leading-8 text-[#E2D1C4]">{track.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dates" className="bg-[#F1E8D8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow={homeContent.dates.eyebrow} title={homeContent.dates.title} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {keyDates.map((item, index) => (
              <article key={item.title} className="relative rounded-md border border-[#9F1D2D]/[0.12] bg-[#F3EBDD] p-6 pl-7 shadow-[0_14px_42px_rgba(90,70,55,0.05)]">
                <span className="absolute bottom-6 left-0 top-6 w-px bg-[#A32635]/55" />
                <span className="absolute -left-[7px] top-7 h-3 w-3 rounded-full bg-[#A32635]" />
                <span className="inline-flex rounded-md border border-[#A32635]/35 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#9F1D2D]">
                  {item.badge}
                </span>
                <p className="mt-4 text-sm font-semibold text-[#A32635]">Этап {index + 1}</p>
                <h3 className="mt-2 font-semibold text-[#1F1A17]">{item.title}</h3>
                <p className="serif mt-4 text-[1.65rem] font-semibold leading-tight text-[#1F1A17]">
                  {item.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="program-overview" className="bg-[#F1E8D8] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              eyebrow={homeContent.programOverview.eyebrow}
              title={homeContent.programOverview.title}
              text={homeContent.programOverview.text}
            />
            <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
              {programSummaryCards.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-[150px] flex-col rounded-md border border-[#9F1D2D]/[0.12] bg-[#F8F1E7] p-5 shadow-[0_12px_34px_rgba(90,70,55,0.045)]"
                >
                  <span className="h-[3px] w-16 rounded-full bg-[#9F1D2D]/70" aria-hidden="true" />
                  <h3 className="serif mt-4 text-2xl font-semibold leading-tight text-[#1F1A17]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#6B625C]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="organizers" className="relative overflow-hidden bg-[#46302B] px-4 py-20 text-[#F7EFE6] sm:px-6 lg:px-8">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#C6A15B]/24 to-transparent" aria-hidden="true" />
        <div className="hero-grid absolute inset-0 opacity-[0.04]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={homeContent.organizers.eyebrow}
            title={homeContent.organizers.title}
            text={homeContent.organizers.text}
            light
          />
          <div className="mt-10">
            <OrganizerGrid />
          </div>
        </div>
      </section>

      <section id="committee" className="paper-grid bg-[#F3EBDD] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={homeContent.committee.eyebrow} title={homeContent.committee.title} />
          <div className="mt-10">
            <CommitteeBlock />
          </div>
        </div>
      </section>

      <section id="publication" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow={homeContent.publication.eyebrow}
                title={homeContent.publication.title}
                text={homeContent.publication.text}
              />
              <div className="mt-7 grid max-w-2xl items-start gap-3 sm:grid-cols-2">
                <GoalLink
                  href="/publication-requirements"
                  goal="click_publication_requirements"
                  className="h-full w-full border border-[#9F1D2D] bg-[#9F1D2D] text-white hover:bg-[#8F1A28]"
                >
                  {homeContent.publication.buttons.requirements}
                </GoalLink>
                <DownloadButton
                  href={infoLetterHref}
                  available={infoLetterAvailable}
                  goal="click_info_letter_download"
                  className="h-full w-full border border-[#A32635]/45 bg-white text-[#9F1D2D] hover:border-[#9F1D2D] hover:bg-[#F3EBDD]"
                  unavailableText="Файл будет опубликован дополнительно."
                >
                  {homeContent.publication.buttons.infoLetter}
                </DownloadButton>
              </div>
            </div>
            <div className="grid gap-5">
              {publicationGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-md border border-[#9F1D2D]/[0.12] bg-[#F1E8D8] p-6 shadow-[0_14px_42px_rgba(90,70,55,0.06)]"
                >
                  <h3 className="serif text-2xl font-semibold text-[#1F1A17]">{group.title}</h3>
                  <ul className="mt-5 grid gap-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-t border-[#9F1D2D]/10 pt-3 text-[0.95rem] font-medium leading-7 text-[#6B625C]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="bg-[#F3EBDD] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={homeContent.contacts.eyebrow} title={homeContent.contacts.title} />
          <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2">
            {contactCards.map((contact) => (
              <article
                key={contact.label}
                className="relative flex h-full flex-col rounded-md border border-[#9F1D2D]/[0.12] bg-white p-6 shadow-[0_14px_38px_rgba(90,70,55,0.055)] transition hover:-translate-y-0.5 hover:border-[#9F1D2D]/30 hover:shadow-[0_18px_48px_rgba(90,70,55,0.08)]"
              >
                <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-[#9F1D2D] via-[#C6A15B]/70 to-transparent" />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#A32635]">
                  {contact.label}
                </p>
                <a
                  className="mt-4 inline-flex max-w-full break-all text-lg font-semibold text-[#1F1A17] transition hover:text-[#9F1D2D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
                <p className="mt-3 text-sm leading-6 text-[#6B625C]">{contact.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
