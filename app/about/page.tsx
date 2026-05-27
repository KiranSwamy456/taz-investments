import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About Us — Taz Investments",
  description:
    "Origin story, values, team, advisory board, and how founders can apply to work with Taz Investments.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        label="About us"
        title="The firm behind the capital."
        description="Origin story, values, team, and advisory board — plus how founders apply and what we bring beyond the check."
      />
      <AboutContent />
    </SiteShell>
  );
}
