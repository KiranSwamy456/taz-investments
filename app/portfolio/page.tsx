import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioContent } from "@/components/sections/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio — Taz Investments",
  description:
    "Filterable portfolio gallery by sector, stage, and year — with logos, one-liners, links, and featured spotlights.",
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <PageHero
        label="Portfolio"
        title="Companies we back with conviction."
        description="Filterable gallery by sector, stage, and year. Each company includes a logo mark, one-liner, and links — plus featured spotlights with deeper stories."
      />
      <PortfolioContent />
    </SiteShell>
  );
}
