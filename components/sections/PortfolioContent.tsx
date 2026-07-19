"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImageHoverBlock } from "@/components/ImageHoverBlock";
import {
  FEATURED_SPOTLIGHTS,
  PORTFOLIO_COMPANIES,
  PORTFOLIO_SECTORS,
  PORTFOLIO_STAGES,
  type FeaturedSpotlight,
  type PortfolioCompany,
} from "@/lib/portfolioData";
import { cn } from "@/lib/utils";

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-colors md:text-xs",
        active
          ? "border-accent bg-accent/10 text-white"
          : "border-border text-muted-foreground hover:border-white/20 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

function GalleryCard({ company, index }: { company: PortfolioCompany; index: number }) {
  return (
    <Link
      href={`/portfolio/${company.id}`}
      className={cn(
        "group relative flex flex-col overflow-hidden border border-border bg-card transition-colors hover:border-accent/50",
        index % 3 === 0 ? "md:min-h-[28rem]" : ""
      )}
    >
      <div className="h-1 w-full bg-accent" aria-hidden />

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent font-display text-sm font-bold text-accent-foreground"
            aria-hidden
          >
            {company.initials}
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="font-display text-xl font-medium text-white md:text-2xl">{company.name}</h3>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-accent md:text-[11px]">
              {company.sector} · {company.stage} · {company.geo}
            </p>
          </div>
        </div>

        <p className="mt-6 font-display text-base font-medium italic leading-snug text-white/90 md:text-lg">
          {company.oneLiner}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{company.descriptor}</p>

        {company.meta.length > 0 ? (
          <ul className="mt-6 space-y-2.5 border-t border-accent/30 pt-5">
            {company.meta.map((row) => (
              <li key={row.label} className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-white/80">{row.label}:</span> {row.value}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 border-t border-accent/30 pt-5" aria-hidden />
        )}

        {company.highlight ? (
          <p className="mt-auto pt-5 text-sm font-semibold leading-snug text-accent">{company.highlight}</p>
        ) : null}

        <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/70 transition-colors group-hover:text-accent">
          Read case study
          <ArrowUpRight className="h-3.5 w-3.5" />
        </p>
      </div>
    </Link>
  );
}

/** Full-width story blocks — different from gallery masonry cards */
function SpotlightStory({ item, index }: { item: FeaturedSpotlight; index: number }) {
  const imageLeft = index % 2 === 0;

  return (
    <article className={cn("border-t border-border", index % 2 === 1 ? "bg-card" : "bg-background")}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
        <div className={cn("relative lg:col-span-6", imageLeft ? "lg:order-1" : "lg:order-2")}>
          <ImageHoverBlock
            aspectClassName="aspect-[16/11] lg:aspect-auto lg:min-h-[28rem] lg:h-full"
            revealDelay={index * 0.08}
            className="w-full"
            overlayPosition="top"
            overlay={
              <span className="rounded-full border border-white/15 bg-background/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent backdrop-blur-md">
                {item.tags.split(" · ")[0]}
              </span>
            }
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ImageHoverBlock>
        </div>

        <div
          className={cn(
            "flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:col-span-6 lg:px-14",
            imageLeft ? "lg:order-2" : "lg:order-1"
          )}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center bg-accent font-display text-sm font-bold text-accent-foreground">
              {item.initials}
            </div>
            <div>
              <h3 className="font-display text-2xl font-medium text-white md:text-3xl">{item.name}</h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-accent md:text-[11px]">
                {item.tags}
              </p>
            </div>
          </div>

          <h4 className="mt-8 font-display text-xl font-medium leading-snug text-white md:text-2xl lg:text-[1.65rem]">
            {item.headline}
          </h4>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{item.body}</p>

          {item.metrics && item.metrics.length > 0 ? (
            <div className="mt-8 grid grid-cols-3 gap-3 border-y border-border py-6">
              {item.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-2xl font-medium text-accent md:text-3xl">{m.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-5">
            {item.links.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function PortfolioContent() {
  const [sector, setSector] = useState<string | "all">("all");
  const [stage, setStage] = useState<string | "all">("all");

  const filtered = useMemo(() => {
    return PORTFOLIO_COMPANIES.filter((c) => {
      if (sector !== "all" && c.sector !== sector) return false;
      if (stage !== "all" && c.stage !== stage) return false;
      return true;
    });
  }, [sector, stage]);

  return (
    <>
      <section data-scroll-tone className="border-t border-border px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
                Gallery
              </span>
              <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
                {filtered.length} {filtered.length === 1 ? "company" : "companies"}
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Initials, sector / stage / geo, one-liner, descriptor, and meta — every company we stand behind.
              </p>
            </div>
            {(sector !== "all" || stage !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setSector("all");
                  setStage("all");
                }}
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="mb-12 space-y-5 border border-border bg-card/50 p-5 md:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
              <span className="w-16 shrink-0 pt-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Sector
              </span>
              <div className="flex flex-wrap gap-2">
                <FilterChip active={sector === "all"} onClick={() => setSector("all")}>
                  All
                </FilterChip>
                {PORTFOLIO_SECTORS.map((s) => (
                  <FilterChip key={s} active={sector === s} onClick={() => setSector(s)}>
                    {s}
                  </FilterChip>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
              <span className="w-16 shrink-0 pt-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Stage
              </span>
              <div className="flex flex-wrap gap-2">
                <FilterChip active={stage === "all"} onClick={() => setStage("all")}>
                  All
                </FilterChip>
                {PORTFOLIO_STAGES.map((s) => (
                  <FilterChip key={s} active={stage === s} onClick={() => setStage(s)}>
                    {s}
                  </FilterChip>
                ))}
              </div>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="columns-1 gap-6 md:columns-2 md:gap-8">
              {filtered.map((company, index) => (
                <div key={company.id} className="mb-6 break-inside-avoid md:mb-8">
                  <GalleryCard company={company} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-lg text-muted-foreground">
              No companies match these filters.{" "}
              <button
                type="button"
                className="text-white underline underline-offset-4"
                onClick={() => {
                  setSector("all");
                  setStage("all");
                }}
              >
                Reset
              </button>
            </p>
          )}
        </div>
      </section>

      <section data-scroll-tone className="border-t border-border px-6 pb-8 pt-16 md:px-12 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
            Featured spotlights
          </span>
          <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            Deeper stories from the portfolio.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Full-width narratives — not gallery cards. Conviction, traction, and what comes after the cheque.
          </p>
        </div>
      </section>

      {FEATURED_SPOTLIGHTS.map((item, index) => (
        <section key={item.id} data-scroll-tone>
          <SpotlightStory item={item} index={index} />
        </section>
      ))}

      <section data-scroll-tone className="border-t border-border px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
            Building something in our sectors?{" "}
            <Link
              href="/contact"
              className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-accent"
            >
              Share your deck
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
