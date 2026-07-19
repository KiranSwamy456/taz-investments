import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioContent } from "@/components/sections/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio — Taz Investments",
  description:
    "Every company here was backed early, backed with conviction, and backed with more than a cheque. These are founders building industries — not just businesses.",
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <PageHero
        label="Portfolio"
        title="Our portfolio is proof of thesis."
        titleSingleLine
        description="Every company here was backed early, backed with conviction, and backed with more than a cheque. These are founders building industries — not just businesses."
      />
      <PortfolioContent />
    </SiteShell>
  );
}
