import Link from "next/link";

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
        <Link
          href="/"
          className="flex shrink-0 flex-col leading-none text-white transition-opacity hover:opacity-80"
          aria-label="Taz Investments — home"
        >
          <span className="font-display text-[1.35rem] font-bold tracking-tight md:text-[1.65rem]">taz</span>
          <span className="mt-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-white/75 md:text-[0.62rem]">
            investments
          </span>
        </Link>

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
