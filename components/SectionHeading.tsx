type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, text, light }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={[
            "text-sm font-semibold uppercase tracking-[0.2em]",
            light ? "text-[#C6A15B]" : "text-[#A32635]"
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={[
          "serif text-3xl font-semibold leading-tight tracking-[0] sm:text-5xl",
          eyebrow ? "mt-3" : "",
          light ? "text-[#F7EFE6]" : "text-[#1F1A17]"
        ].join(" ")}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={[
            "mt-4 text-base leading-7 sm:text-lg",
            light ? "text-[#E2D1C4]" : "text-[#6B625C]"
          ].join(" ")}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
