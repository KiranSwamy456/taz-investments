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
  PORTFOLIO_YEARS,
  type PortfolioCompany,
  type PortfolioSector,
  type PortfolioStage,
} from "@/lib/portfolioData";
import { cn } from "@/lib/utils";

function FilterRow<T extends string | number>({
  label,
  options,
  value,
  onChange,
  allLabel = "All",
}: {
  label: string;
  options: readonly T[];
  value: T | "all";
  onChange: (v: T | "all") => void;
  allLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
      <span className="w-20 shrink-0 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onChange("all")}
          className={cn(
            "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
            value === "all"
              ? "border-accent bg-accent/10 text-white"
              : "border-border text-muted-foreground hover:border-white/20 hover:text-white"
          )}
        >
          {allLabel}
        </button>
        {options.map((opt) => (
          <button
            key={String(opt)}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
              value === opt
                ? "border-accent bg-accent/10 text-white"
                : "border-border text-muted-foreground hover:border-white/20 hover:text-white"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function GalleryCard({ company }: { company: PortfolioCompany }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40 md:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-background font-display text-sm font-bold text-white"
          aria-hidden
        >
          {company.initials}
        </div>
        <div className="flex flex-wrap justify-end gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <span>{company.sector}</span>
          <span className="text-border">·</span>
          <span>{company.stage}</span>
          <span className="text-border">·</span>
          <span>{company.year}</span>
        </div>
      </div>
      <h3 className="font-display text-xl font-medium text-white md:text-2xl">{company.name}</h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{company.oneLiner}</p>
      <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-6">
        {company.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
          >
            {link.label}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </article>
  );
}

function SpotlightCard({ company, index }: { company: PortfolioCompany; index: number }) {
  if (!company.spotlight) return null;
  const imageFirst = index % 2 === 0;

  return (
    <article
      className={cn(
        "grid grid-cols-1 items-center gap-10 border-b border-border pb-16 last:border-0 last:pb-0 md:grid-cols-12 md:gap-14",
        index > 0 && "pt-16"
      )}
    >
      <div className={cn("md:col-span-6", imageFirst ? "md:order-1" : "md:order-2 md:col-start-7")}>
        <ImageHoverBlock aspectClassName="aspect-[16/10]" revealDelay={index * 0.1} className="w-full">
          <Image
            src={company.image}
            alt={company.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ImageHoverBlock>
      </div>
      <div className={cn("md:col-span-5", imageFirst ? "md:order-2 md:col-start-8" : "md:order-1")}>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-background font-display text-sm font-bold text-white">
          {company.initials}
        </div>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
          {company.sector} · {company.stage} · {company.year}
        </p>
        <h3 className="font-display text-2xl font-medium leading-tight text-white md:text-3xl lg:text-4xl">
          {company.name}
        </h3>
        <p className="mt-4 text-lg font-medium text-white/90">{company.spotlight.headline}</p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{company.spotlight.body}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          {company.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-accent"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function PortfolioContent() {
  const [sector, setSector] = useState<PortfolioSector | "all">("all");
  const [stage, setStage] = useState<PortfolioStage | "all">("all");
  const [year, setYear] = useState<number | "all">("all");

  const filtered = useMemo(() => {
    return PORTFOLIO_COMPANIES.filter((c) => {
      if (sector !== "all" && c.sector !== sector) return false;
      if (stage !== "all" && c.stage !== stage) return false;
      if (year !== "all" && c.year !== year) return false;
      return true;
    });
  }, [sector, stage, year]);

  return (
    <>
      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Featured spotlights
          </span>
          <h2 className="mb-12 max-w-3xl font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            Deeper stories from the portfolio.
          </h2>
          <div>
            {FEATURED_SPOTLIGHTS.map((company, index) => (
              <SpotlightCard key={company.id} company={company} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section data-scroll-tone className="border-t border-border bg-card px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Filterable gallery
              </span>
              <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
                {filtered.length} {filtered.length === 1 ? "company" : "companies"}
              </h2>
            </div>
            {(sector !== "all" || stage !== "all" || year !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setSector("all");
                  setStage("all");
                  setYear("all");
                }}
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="mb-14 flex flex-col gap-6 rounded-2xl border border-border bg-background p-6 md:p-8">
            <FilterRow label="Sector" options={PORTFOLIO_SECTORS} value={sector} onChange={setSector} />
            <FilterRow label="Stage" options={PORTFOLIO_STAGES} value={stage} onChange={setStage} />
            <FilterRow label="Year" options={PORTFOLIO_YEARS} value={year} onChange={setYear} />
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((company) => (
                <GalleryCard key={company.id} company={company} />
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
                  setYear("all");
                }}
              >
                Reset
              </button>
            </p>
          )}
        </div>
      </section>

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
