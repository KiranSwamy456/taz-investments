import Link from "next/link";

const NAV_LINKS = [
  { href: "/thesis", label: "Thesis" },
  { href: "/about", label: "Firm" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blogs", label: "Press" },
] as const;

const SOCIAL_LINKS = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter/X" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 pb-12 pt-20 md:px-12 md:pt-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <p
            data-brand-wordmark
            className="max-w-[16rem] font-display text-xl font-medium leading-snug text-white md:text-2xl"
          >
            More Than Capital. A Partner In Growth.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Navigation
          </p>
          <nav className="flex flex-col gap-3 text-sm text-white/80">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Social
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Contact & Legal
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a
              href="mailto:hello@tazinvestments.com"
              className="block text-white/70 transition-colors hover:text-accent"
            >
              hello@tazinvestments.com
            </a>
            <p>
              <Link href="/privacy" className="transition-colors hover:text-accent">
                Privacy Policy
              </Link>
              <span className="mx-2 text-muted-foreground/50">·</span>
              <Link href="/terms" className="transition-colors hover:text-accent">
                Terms
              </Link>
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-7xl text-center text-xs text-muted-foreground md:mt-20">
        © 2026 Taz Investment Company. All rights reserved.
      </p>
    </footer>
  );
}
