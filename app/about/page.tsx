import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "Firm — Taz Investments",
  description:
    "TIC is a venture capital firm anchored in Saudi Arabia and the MENA region. We back founders building category-defining companies — early, with conviction, and with more than a cheque.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        label="Firm"
        title="We were here before it was obvious."
        description="TIC is a venture capital firm anchored in Saudi Arabia and the MENA region. We back founders building category-defining companies — early, with conviction, and with more than a cheque."
        primaryCta={{ label: "Apply", href: "/thesis" }}
        secondaryCta={{ label: "Our Portfolio", href: "/portfolio" }}
      />
      <AboutContent />
    </SiteShell>
  );
}
