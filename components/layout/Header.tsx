import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/thesis", label: "Thesis" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About us" },
  { href: "/blogs", label: "Blogs" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/[0.06] bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-6 px-6 md:h-[4.25rem] md:px-12">
        <BrandLogo size="sm" />

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
