import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy — Taz Investments",
  description: "How Taz Investment Company collects, uses, and protects information.",
};

const SECTIONS = [
  {
    title: "Who we are",
    body: "Taz Investment Company (“TIC”, “we”, “us”) is a venture capital firm. This Privacy Policy explains how we handle personal information when you visit our website, contact us, or submit materials related to fundraising or partnership discussions.",
  },
  {
    title: "Information we collect",
    body: "We may collect information you provide directly — such as your name, email address, company details, deck or materials, and any message you send through our forms or email. We may also collect limited technical data automatically, including IP address, browser type, device information, and usage analytics that help us operate and improve the site.",
  },
  {
    title: "How we use information",
    body: "We use information to respond to inquiries, evaluate investment opportunities, maintain business relationships, operate and secure our website, and meet legal or regulatory obligations. We do not sell personal information.",
  },
  {
    title: "Sharing",
    body: "We may share information with service providers who support our operations (for example hosting, email, or analytics), professional advisors, or when required by law. Any portfolio or co-investor introductions are made only where appropriate and with care for confidentiality.",
  },
  {
    title: "Retention & security",
    body: "We retain information for as long as needed for the purposes described above, or as required by law. We apply reasonable administrative and technical safeguards, but no online transmission or storage method is completely secure.",
  },
  {
    title: "Your choices",
    body: "You may request access to, correction of, or deletion of personal information we hold about you, subject to applicable law and legitimate retention needs. Contact us using the details in our footer or on the contact page.",
  },
  {
    title: "Updates",
    body: "We may update this Privacy Policy from time to time. The “Last updated” date below reflects the latest revision. Continued use of the site after changes means you accept the updated policy.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero
        label="Legal"
        title="Privacy Policy"
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
