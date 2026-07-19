import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageHoverBlock } from "@/components/ImageHoverBlock";
import {
  BY_THE_NUMBERS,
  HOW_WE_THINK,
  TEAM,
  WHAT_WE_LOOK_FOR,
} from "@/lib/aboutData";

export function AboutContent() {
  return (
    <>
      {/* ——— Firm: Our Story ——— */}
      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
            Our Story
          </span>
          <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            Built here. Backing what belongs here.
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-relaxed text-muted-foreground md:mt-12 md:text-xl">
            <p>
              Taz Investment Company — was founded on a conviction that most people in venture capital were
              slow to reach: the most important companies of the next decade will be built in Saudi Arabia and
              the broader MENA region. Not despite the challenges of building here. Because of them.
            </p>

            <blockquote className="relative border-l-2 border-accent py-1 pl-6 italic text-accent before:absolute before:-left-[7px] before:top-0 before:h-full before:w-0.5 before:bg-accent md:pl-8 md:text-xl">
              We don&apos;t come in for a round and disappear into the next fund cycle. From our first
              conversation to the milestone that makes the early bet worth it — we&apos;re in it.
            </blockquote>

            <p>
              We exist at the intersection of two things most venture firms treat as contradictory: deep
              regional expertise and genuinely global ambition. We back founders who are solving local
              problems at local depth — and we back them as we believe that depth is what creates global
              breakout potential, not a liability.
            </p>

            <p>
              That&apos;s the reason we exist. Everything else — the portfolio, the network, the thesis —
              follows from it.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Firm: How We Think ——— */}
      <section data-scroll-tone className="border-t border-border bg-card px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
            How We Think
          </span>
          <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Three things we believe. Every day.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            These aren&apos;t values on a wall. They&apos;re the decisions we make in every investment
            conversation.
          </p>

          <ol className="mt-16 space-y-14 md:mt-20 md:space-y-16">
            {HOW_WE_THINK.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-1 gap-4 border-t border-border pt-10 md:grid-cols-12 md:gap-10 md:pt-12"
              >
                <span className="font-display text-3xl font-medium text-accent md:col-span-2 md:text-4xl">
                  0{index + 1}
                </span>
                <div className="md:col-span-10">
                  <h3 className="font-display text-xl font-medium leading-snug text-white md:text-2xl lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Firm: What We Look For ——— */}
      <section data-scroll-tone className="border-t border-border px-6 pb-4 pt-20 md:px-12 md:pb-6 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <span className="block text-xs font-bold uppercase tracking-widest text-accent">
            What We Look For
          </span>
        </div>
      </section>

      {WHAT_WE_LOOK_FOR.map((item, index) => {
        const imageFirst = index % 2 === 0;
        return (
          <section
            key={item.title}
            data-scroll-tone
            className={`border-t border-border px-6 py-16 md:px-12 md:py-20 ${
              index % 2 === 1 ? "bg-card" : ""
            }`}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
              <div
                className={`md:col-span-5 ${imageFirst ? "md:order-1" : "md:order-2 md:col-start-8"}`}
              >
                <ImageHoverBlock aspectClassName="aspect-[4/3]" revealDelay={index * 0.06} className="w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </ImageHoverBlock>
              </div>
              <div className={`md:col-span-6 ${imageFirst ? "md:order-2 md:col-start-7" : "md:order-1"}`}>
                <h3 className="font-display text-2xl font-medium leading-snug text-accent md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{item.body}</p>
              </div>
            </div>
          </section>
        );
      })}

      {/* ——— Firm: Team ——— */}
      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
            The Team
          </span>
          <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            The people behind the partnership.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Partners with decades of operational experience across five countries. A shared belief that the best
            founders in MENA deserve backers who actually understand what they&apos;re building — and where
            they&apos;re building it.
          </p>

          <div className="mt-14 md:mt-16">
            {TEAM.map((person) => (
              <article
                key={person.id}
                className="border-t border-accent/80 py-10 first:border-t first:pt-10 md:py-12"
              >
                <h3 className="font-display text-2xl font-medium tracking-tight text-white md:text-3xl">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-accent">{person.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{person.location}</p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Firm: By The Numbers ——— */}
      <section data-scroll-tone className="border-t border-border bg-card px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
            By The Numbers
          </span>
          <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            The proof is in the portfolio.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Numbers that tell the story before a word of copy does.
          </p>

          <ul className="mt-14 grid grid-cols-2 gap-8 md:mt-16 md:grid-cols-3 md:gap-10 lg:grid-cols-5 lg:gap-6">
            {BY_THE_NUMBERS.map((stat) => (
              <li
                key={stat.label}
                className="border-t border-accent/60 pt-6 md:border-l md:border-t-0 md:pl-5 md:pt-0 first:md:border-l-0 first:md:pl-0"
              >
                <p className="font-display text-3xl font-medium tracking-tight text-accent md:text-4xl lg:text-[2.5rem]">
                  {stat.value}
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase leading-snug tracking-widest text-muted-foreground md:text-xs">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Firm: Closing CTA ——— */}
      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
            Are you building in MENA?
          </span>
          <h2 className="font-display text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            If you&apos;re building something that could reshape an industry in Saudi Arabia or the broader MENA
            region — and you want a partner who understands this market, not one who is experimenting with it
            for the first time — we want to hear from you.
          </p>
          <Link
            href="/thesis"
            data-solid-control="white"
            className="mt-10 inline-flex items-center gap-2 bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
          >
            Raise With Us
            <ArrowRight className="h-4 w-4" />
            Apply
          </Link>
        </div>
      </section>
    </>
  );
}
