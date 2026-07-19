import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use — Taz Investments",
  description: "Terms governing use of the Taz Investment Company website.",
};

const SECTIONS = [
  {
    title: "Acceptance of terms",
    body: "By accessing or using the Taz Investment Company website, you agree to these Terms of Use. If you do not agree, please do not use the site.",
  },
  {
    title: "Informational purpose only",
    body: "Content on this site is for general information about TIC, our thesis, and our portfolio. Nothing here constitutes investment advice, an offer to sell, or a solicitation to buy securities. Any investment opportunity is made only through appropriate legal documentation and to qualified parties where permitted by law.",
  },
  {
    title: "No warranties",
    body: "The site is provided “as is.” We do not warrant that it will be uninterrupted, error-free, or free of harmful components. Portfolio descriptions and performance references are illustrative and may change over time.",
  },
  {
    title: "Intellectual property",
    body: "All trademarks, logos, text, and design elements on this site are owned by TIC or used with permission. You may not copy, modify, or distribute site content without our prior written consent, except for personal, non-commercial viewing.",
  },
  {
    title: "User submissions",
    body: "If you send us materials (including decks, emails, or form submissions), you confirm you have the right to share them and that they do not violate third-party rights. We treat confidential materials with professional care, but do not accept liability for unsolicited submissions beyond applicable law.",
  },
  {
    title: "Third-party links",
    body: "The site may link to external websites. We are not responsible for their content, policies, or practices.",
  },
  {
    title: "Limitation of liability",
    body: "To the fullest extent permitted by law, TIC and its partners are not liable for any indirect, incidental, or consequential damages arising from your use of the site or reliance on its content.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws applicable to Taz Investment Company’s principal place of business, without regard to conflict-of-law principles. Disputes will be resolved in the appropriate courts of that jurisdiction.",
  },
  {
    title: "Changes",
    body: "We may revise these Terms of Use at any time. Updates will be posted on this page with a revised date. Continued use of the site constitutes acceptance of the updated terms.",
  },
] as const;

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHero
        label="Legal"
        title="Terms of Use"
        description="Last updated: July 2026"
      />
      <section data-scroll-tone className="border-t border-border px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-medium text-white md:text-2xl">{section.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
