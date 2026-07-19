import Link from "next/link";

type HeroCta = {
  label: string;
  href: string;
};

type PageHeroProps = {
  label: string;
  title: string;
  /** Optional second headline line (e.g. Thesis hero) */
  titleLine2?: string;
  /** Keep the first title on one line (scales down on narrow screens) */
  titleSingleLine?: boolean;
  description?: string;
  /** Primary CTA (accent fill) */
  primaryCta?: HeroCta;
  /** Secondary CTA (text / ghost) */
  secondaryCta?: HeroCta;
};

export function PageHero({
  label,
  title,
  titleLine2,
  titleSingleLine,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section data-scroll-tone className="border-b border-border px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <span className="mb-6 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <h1
          className={
            titleSingleLine
              ? "max-w-none font-display text-[clamp(1.35rem,5.2vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-white"
              : "max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          }
        >
          <span className={titleSingleLine ? "block whitespace-nowrap" : "block"}>{title}</span>
          {titleLine2 ? (
            <span className="mt-2 block md:mt-3">{titleLine2}</span>
          ) : null}
        </h1>
        {description ? (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap items-center gap-4 md:gap-6">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                data-solid-control="white"
                className="inline-flex items-center justify-center bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-2 py-3.5 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-white"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
