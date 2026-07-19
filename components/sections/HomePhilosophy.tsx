import Image from "next/image";
import { ImageHoverBlock } from "@/components/ImageHoverBlock";
import { investmentImages } from "@/lib/investmentMedia";

const CRITERIA = [
  {
    label: "Market Focus",
    body: "Mainly emerging markets — Saudi Arabia primary, broader MENA, Asia and Africa.",
    image: investmentImages.thesisGeography,
  },
  {
    label: "Sector Focus",
    body: "IoT & Analytics · E-Commerce · Agriculture Technology · Retail & Fintech · Construction Tech · EdTech · CleanTech · Creative Economy · Deep Tech.",
    image: investmentImages.thesisSectors,
  },
  {
    label: "Stage of Venture",
    body: "Very early stage to seed funding — this is where we do our best work.",
    image: investmentImages.thesisFounders,
  },
  {
    label: "Ticket Size",
    body: "$50,000 – $10,000,000 USD · Depends on venture stage, team composition, and idea novelty · Mostly angel and seed rounds.",
    image: investmentImages.thesisCheque,
  },
  {
    label: "Investment Criteria",
    body: "Innovative idea · Scalable and replicable across geographies · Great team capabilities.",
    image: investmentImages.focusDeepTech,
  },
  {
    label: "What We Ask For",
    body: "Periodic reporting · Board positions · IP protection arrangements · Investor protections.",
    image: investmentImages.team1,
  },
] as const;

const STATS = [
  { value: "17", label: "Portfolio companies" },
  { value: "10+", label: "Sectors backed" },
  { value: "20+", label: "Countries in portfolio network" },
] as const;

export function HomePhilosophy() {
  return (
    <>
      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-3xl">
          <blockquote className="relative border-l-2 border-accent py-1 pl-6 italic text-accent before:absolute before:-left-[7px] before:top-0 before:h-full before:w-0.5 before:bg-accent md:pl-8 md:text-xl">
            We don&apos;t chase what&apos;s trending. We identify what needs to exist — and back the founders
            building it.
          </blockquote>

          <h2 className="mt-12 font-display text-3xl font-medium leading-tight text-white md:mt-16 md:text-4xl lg:text-5xl">
            Innovative. Scalable. Built for the region.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            We invest early in founders building category-defining companies across Saudi Arabia and the broader
            MENA region. Our conviction is simple: the most important companies of the next decade will be built
            here — and they deserve partners who understand the market from the ground up, not ones experimenting
            with it for the first time.
          </p>
        </div>
      </section>

      <section data-scroll-tone className="border-t border-border px-6 pb-8 pt-16 md:px-12 md:pb-10 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
            Investment Criteria
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-medium text-white md:text-4xl">
            How we choose where to put capital.
          </h2>
        </div>
      </section>

      <section data-scroll-tone className="px-6 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {CRITERIA.map((item, index) => (
            <article
              key={item.label}
              className="group flex flex-col overflow-hidden border border-border bg-card transition-colors hover:border-accent/40"
            >
              <ImageHoverBlock
                aspectClassName="aspect-[16/10]"
                revealDelay={index * 0.05}
                className="w-full"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </ImageHoverBlock>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent md:text-xs">
                  {item.label}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-scroll-tone className="border-t border-border bg-card px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {STATS.map((stat) => (
              <li key={stat.label} className="border-t border-accent/50 pt-6 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0 first:sm:border-l-0 first:sm:pl-0">
                <p className="font-display text-4xl font-medium tracking-tight text-accent md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground md:text-xs">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
