"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageHoverBlock } from "@/components/ImageHoverBlock";
import { RaiseForm } from "@/components/sections/RaiseForm";
import type { CaseStudy } from "@/lib/caseStudiesData";
import { getPortfolioGallery } from "@/lib/portfolioGallery";

const TOP_SECTION_TITLES = new Set(["The Context", "The Company"]);

function StorySection({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  return (
    <section
      data-scroll-tone
      className={`border-t border-border px-6 py-16 md:px-12 md:py-24 ${
        index % 2 === 1 ? "bg-card" : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-2xl font-medium text-accent md:text-3xl">{title}</h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{body}</p>
      </div>
    </section>
  );
}

export function CaseStudyContent({ study }: { study: CaseStudy }) {
  const topSections = study.sections.filter((s) => TOP_SECTION_TITLES.has(s.title));
  const restSections = study.sections.filter((s) => !TOP_SECTION_TITLES.has(s.title));
  const gallery = getPortfolioGallery(study.slug);

  return (
    <>
      {/* 1 — Title text */}
      <section data-scroll-tone className="border-b border-border px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portfolio"
            className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Portfolio
          </Link>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center bg-accent font-display text-base font-bold text-accent-foreground md:h-16 md:w-16 md:text-lg"
                  aria-hidden
                >
                  {study.initials}
                </div>
                <div>
                  <h1 className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
                    {study.name}
                  </h1>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-accent md:text-xs">
                    {study.sector} · {study.stage} · {study.geo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2–3 — The Context & The Company */}
      {topSections.map((section, index) => (
        <StorySection
          key={section.title}
          title={section.title}
          body={section.body}
          index={index}
        />
      ))}

      {/* 4 — Image */}
      <section data-scroll-tone className="border-b border-border px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <ImageHoverBlock
            aspectClassName="aspect-[16/9] md:aspect-[21/9]"
            revealDelay={0}
            className="w-full"
          >
            <Image
              src={study.image}
              alt={study.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </ImageHoverBlock>
        </div>
      </section>

      {gallery.length > 0 ? (
        <section data-scroll-tone className="border-b border-border px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, index) => (
              <ImageHoverBlock
                key={src}
                aspectClassName="aspect-[4/3]"
                revealDelay={index * 0.04}
                className="w-full"
              >
                <Image
                  src={src}
                  alt={`${study.name} portfolio ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </ImageHoverBlock>
            ))}
          </div>
        </section>
      ) : null}

      {/* Metrics */}
      <section data-scroll-tone className="border-b border-border px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3">
          {(study.metrics && study.metrics.length > 0
            ? study.metrics
            : [
                { value: study.sector, label: "Sector" },
                { value: study.stage, label: "Stage" },
                { value: study.geo, label: "Geography" },
              ]
          ).map((m) => (
            <div key={m.label} className="border-l-[3px] border-accent pl-5">
              <p className="font-display text-3xl font-medium text-accent md:text-4xl">{m.value}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {restSections.map((section, index) => (
        <StorySection
          key={section.title}
          title={section.title}
          body={section.body}
          index={index + topSections.length}
        />
      ))}

      {study.quote ? (
        <section data-scroll-tone className="border-t border-border px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-3xl">
            <blockquote className="border-l-[3px] border-accent pl-6 font-display text-xl font-medium italic leading-snug text-white md:text-2xl">
              {study.quote}
            </blockquote>
          </div>
        </section>
      ) : null}

      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
              Raise with us
            </span>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
              {study.cta}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Share your deck. We&apos;ll respond with a clear yes, no, or what we need to move forward.
            </p>
            <Link
              href="/portfolio"
              className="mt-8 inline-flex text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
            >
              ← Back to portfolio
            </Link>
          </div>
          <div className="lg:col-span-7">
            <RaiseForm />
          </div>
        </div>
      </section>
    </>
  );
}
