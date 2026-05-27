import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
export const metadata: Metadata = {
  title: "Contact — Taz Investments",
  description: "Start a conversation about your round with Taz Investments.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        label="Contact"
        title="Raise with us."
        description="Share your deck, metrics, and timeline — we respond with a clear yes, no, or what we need to move forward."
      />
      <section data-scroll-tone className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-medium text-white md:text-3xl">Investor relations</h2>
            <a
              href="mailto:hello@tazinvestments.com"
              className="mt-4 inline-block text-lg text-muted-foreground transition-colors hover:text-accent"
            >
              hello@tazinvestments.com
            </a>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-white md:text-3xl">New York</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Madison Ave 450
              <br />
              New York, NY 10022
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
