import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { ThesisContent } from "@/components/sections/ThesisContent";

export const metadata: Metadata = {
  title: "Thesis — Taz Investments",
  description:
    "Investment philosophy, focus sectors, stage and geography, typical cheque size, and founder criteria.",
};

export default function ThesisPage() {
  return (
    <SiteShell>
      <PageHero
        label="Thesis"
        title="How we decide where capital goes."
        description="Investment philosophy, focus sectors, stage and geography, typical cheque size, and founder criteria — in one place for founders and LPs."
      />
      <ThesisContent />
    </SiteShell>
  );
}
