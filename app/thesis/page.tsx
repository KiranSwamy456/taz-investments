import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { ThesisContent } from "@/components/sections/ThesisContent";

export const metadata: Metadata = {
  title: "Thesis — Taz Investments",
  description:
    "We back the founders building the next chapter of Saudi Arabia's economy — and we've been doing it before it was obvious.",
};

export default function ThesisPage() {
  return (
    <SiteShell>
      <PageHero
        label="Thesis"
        title="The future of MENA isn't waiting."
        titleLine2="Neither are we."
        titleSingleLine
        description="We back the founders building the next chapter of Saudi Arabia's economy — and we've been doing it before it was obvious."
      />
      <ThesisContent />
    </SiteShell>
  );
}
