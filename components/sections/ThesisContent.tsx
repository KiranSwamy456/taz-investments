import Image from "next/image";
import { ImageHoverBlock } from "@/components/ImageHoverBlock";
import { investmentImages } from "@/lib/investmentMedia";

const SECTORS = [
  "Fintech & payments",
  "B2B software",
  "Healthcare services",
  "Industrial & logistics",
  "Climate & infrastructure",
] as const;

const FOUNDER_CRITERIA = [
  "Operators who have shipped revenue, not just product",
  "Clear ownership of unit economics and burn",
  "Honest about risks — we push back when models drift",
  "Cap tables and governance that survive the next round",
  "Willingness to move fast with disciplined reporting",
] as const;

type BlockProps = {
  index: number;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
};

function ThesisBlock({ index, eyebrow, title, children, image, imageAlt, imageFirst }: BlockProps) {
  const media = (
    <ImageHoverBlock
      aspectClassName="aspect-[4/3] md:aspect-[5/4]"
      revealDelay={index * 0.08}
      className="w-full"
    >
      <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
    </ImageHoverBlock>
  );

  return (
    <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className={`md:col-span-5 ${imageFirst ? "md:order-1" : "md:order-2 md:col-start-8"}`}>{media}</div>
        <div className={`md:col-span-6 ${imageFirst ? "md:order-2 md:col-start-7" : "md:order-1"}`}>
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </span>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export function ThesisContent() {
  return (
    <>
      <ThesisBlock
        index={0}
        eyebrow="Investment philosophy"
        title="We back teams building real revenue."
        image={investmentImages.thesisPhilosophy}
        imageAlt="Partners discussing investment strategy"
        imageFirst
      >
        <p className="text-lg leading-relaxed text-muted-foreground">
          Taz is investor-first: we screen fairly, write in plain language, and stay aligned from first check
          through every growth round. We are not cheerleaders — we are partners who will tell you when the model
          drifts and help you fix it before the board does.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Capital is a bridge between thesis and outcome. We keep reserves for follow-on, keep terms simple,
          and show up when markets move.
        </p>
      </ThesisBlock>

      <ThesisBlock
        index={1}
        eyebrow="Focus sectors"
        title="Where we spend time and capital."
        image={investmentImages.thesisSectors}
        imageAlt="Analytics and sector research"
      >
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          We go deep in categories where cashflow, regulation, and distribution matter — not trend-chasing.
          Most of our work sits at the intersection of software and regulated or operationally heavy businesses.
        </p>
        <ul className="flex flex-wrap gap-3">
          {SECTORS.map((sector) => (
            <li
              key={sector}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/90"
            >
              {sector}
            </li>
          ))}
        </ul>
      </ThesisBlock>

      <ThesisBlock
        index={2}
        eyebrow="Stage & geography"
        title="Seed and Series A, with a clear home base."
        image={investmentImages.thesisGeography}
        imageAlt="City skyline representing focus markets"
        imageFirst
      >
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Stage</p>
            <p className="text-2xl font-display font-medium text-white md:text-3xl">Seed · Series A</p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Lead or co-lead checks where we can set terms founders can plan around. Selective pre-seed when
              the team and market are exceptional.
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Geography</p>
            <p className="text-2xl font-display font-medium text-white md:text-3xl">US-first · Global selectively</p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Primary focus on North America. We will back strong teams in the UK, EU, and select markets when
              the go-to-market and regulatory path are clear.
            </p>
          </div>
        </div>
      </ThesisBlock>

      <section data-scroll-tone className="border-t border-border bg-card px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center md:gap-16">
            <div className="md:col-span-5">
              <ImageHoverBlock aspectClassName="aspect-[4/3]" revealDelay={0.32}>
                <Image
                  src={investmentImages.thesisCheque}
                  alt="Founders closing a funding round"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </ImageHoverBlock>
            </div>
            <div className="md:col-span-7">
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Typical cheque size
              </span>
              <h2 className="mb-8 font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
                Sized for ownership that matters.
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Seed</p>
                  <p className="mt-2 font-display text-3xl font-medium text-white md:text-4xl">$500K – $2M</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Initial institutional cheques with room in the fund for follow-on.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Series A</p>
                  <p className="mt-2 font-display text-3xl font-medium text-white md:text-4xl">$2M – $8M</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Lead rounds where we can help set governance and the next financing path.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Exact sizing depends on round dynamics, ownership targets, and reserves — we share a clear
                range in our first meeting, not after weeks of silence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ThesisBlock
        index={4}
        eyebrow="Founder criteria"
        title="What we look for before we wire."
        image={investmentImages.thesisFounders}
        imageAlt="Founding team collaborating"
      >
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          We move in two meetings or less when the story is tight. These are the patterns we reward — and the
          gaps we will ask you to close.
        </p>
        <ul className="space-y-4">
          {FOUNDER_CRITERIA.map((item) => (
            <li key={item} className="flex gap-4 text-lg leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </ThesisBlock>

      <section data-scroll-tone className="border-t border-border px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
            If this sounds like your round,{" "}
            <a href="/contact" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-accent">
              start a conversation
            </a>
            . We respond with a clear yes, no, or what we need to move forward.
          </p>
        </div>
      </section>
    </>
  );
}
