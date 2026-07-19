import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { CaseStudyContent } from "@/components/sections/CaseStudyContent";
import { getCaseStudy, getAllCaseStudySlugs } from "@/lib/caseStudiesData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study — Taz Investments" };
  return {
    title: `${study.name} — Portfolio | Taz Investments`,
    description: study.sections[0]?.body.slice(0, 160) ?? `Case study: ${study.name}`,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <SiteShell>
      <CaseStudyContent study={study} />
    </SiteShell>
  );
}
