import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageHoverBlock } from "@/components/ImageHoverBlock";
import {
  aboutImages,
  ADVISORS,
  APPLICATION_STEPS,
  BEYOND_CAPITAL,
  TEAM,
  VALUES,
  WHO_WE_BACK,
} from "@/lib/aboutData";

export function AboutContent() {
  return (
    <>
      {/* ——— Firm: Origin ——— */}
      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Firm · Origin story
              </span>
              <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
                Built for founders who want straight answers.
              </h2>
              <blockquote className="mt-10 border-l-2 border-accent pl-6 text-xl font-medium leading-relaxed text-white/90 md:text-2xl">
                We started Taz because too many rounds drag on — unclear terms, vague feedback, and capital that
                disappears when markets move.
              </blockquote>
            </div>
            <div className="flex flex-col gap-8 lg:col-span-7">
              <ImageHoverBlock aspectClassName="aspect-[16/10]" revealDelay={0}>
                <Image
                  src={aboutImages.origin}
                  alt="Taz Investments team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </ImageHoverBlock>
              <div className="grid gap-6 md:grid-cols-2">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Taz Investments is an early-stage firm focused on seed and Series A. We are based in New York and
                  work with teams across North America, with selective backing in the UK and EU when the path is
                  clear.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our job is not to cheerlead — it is to help operators ship revenue, keep governance clean, and
                  raise again without rewriting the entire story. Every partner has been on the operator or
                  diligence side of the table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Firm: Values ——— */}
      <section data-scroll-tone className="border-t border-border bg-card px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Firm · Values
          </span>
          <h2 className="mb-14 max-w-2xl font-display text-3xl font-medium text-white md:text-4xl">
            What we will not compromise on.
          </h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <div key={value.title} className="bg-background p-8 md:p-10">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-medium text-white md:text-2xl">{value.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Firm: Team ——— */}
      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Firm · Team
          </span>
          <h2 className="mb-14 font-display text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            Partners who stay in the work.
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((person, index) => (
              <article key={person.id} className="flex flex-col">
                <ImageHoverBlock aspectClassName="aspect-[3/4] mb-5" revealDelay={index * 0.06}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </ImageHoverBlock>
                <h3 className="font-display text-lg font-medium text-white">{person.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-accent">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Firm: Advisory board ——— */}
      <section data-scroll-tone className="border-t border-border bg-background px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Firm · Advisory board
              </span>
              <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
                Sector depth when you need it.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Operators and finance leaders who advise portfolio companies — not day-to-day fund management.
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6">
              {ADVISORS.map((advisor) => (
                <div
                  key={advisor.id}
                  className="rounded-2xl border border-border bg-card p-6 md:flex md:gap-8 md:p-8"
                >
                  <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-background font-display text-sm font-bold text-white md:mb-0">
                    {advisor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-white">{advisor.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {advisor.org}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{advisor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— Founders ——— */}
      <section
        data-scroll-tone
        className="border-t border-border bg-card px-6 py-20 md:px-12 md:py-28"
        id="founders"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
                Founders
              </span>
              <h2 className="font-display text-3xl font-medium text-white md:text-4xl lg:text-5xl">
                Who Taz backs — and how to apply.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with operators building real businesses. If this sounds like you, start with the process
              below — we keep it short and clear.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="mb-6 font-display text-xl font-medium text-white md:text-2xl">Who we back</h3>
              <ul className="space-y-4">
                {WHO_WE_BACK.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 hidden lg:block">
                <ImageHoverBlock aspectClassName="aspect-[4/5]" revealDelay={0.15}>
                  <Image
                    src={aboutImages.founders}
                    alt="Founding team in discussion"
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </ImageHoverBlock>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="mb-8 font-display text-xl font-medium text-white md:text-2xl">
                4-step application process
              </h3>
              <ol className="space-y-0">
                {APPLICATION_STEPS.map((step, i) => (
                  <li
                    key={step.step}
                    className="relative border-l border-border pl-8 pb-10 last:pb-0"
                  >
                    <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-black">
                      {i + 1}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Step {step.step}
                    </p>
                    <h4 className="mt-2 font-display text-lg font-medium text-white">{step.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-20 border-t border-border pt-16">
            <h3 className="mb-10 font-display text-xl font-medium text-white md:text-2xl">
              What Taz brings beyond capital
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {BEYOND_CAPITAL.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/30 md:p-8"
                >
                  <h4 className="font-display text-lg font-medium text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-center rounded-[2rem] border border-border bg-background px-8 py-14 text-center md:py-20">
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Ready to start?
            </p>
            <h3 className="max-w-xl font-display text-2xl font-medium text-white md:text-3xl lg:text-4xl">
              Apply now — share your deck and we will respond with a clear next step.
            </h3>
            <Link
              href="/contact"
              data-solid-control
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
            >
              Apply now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
