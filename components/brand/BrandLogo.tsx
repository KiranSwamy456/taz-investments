import Link from "next/link";
import { cn } from "@/lib/utils";

const sizes = {
  sm: {
    mark: "h-9 w-9",
    title: "text-[1.35rem] md:text-[1.65rem]",
    subtitle: "text-[0.55rem] md:text-[0.62rem]",
    gap: "gap-2.5",
  },
  md: {
    mark: "h-11 w-11 md:h-12 md:w-12",
    title: "text-[1.5rem] md:text-[1.85rem]",
    subtitle: "text-[0.58rem] md:text-[0.65rem]",
    gap: "gap-3",
  },
  lg: {
    mark: "h-14 w-14 md:h-16 md:w-16",
    title: "text-[2rem] md:text-[2.5rem]",
    subtitle: "text-[0.65rem] md:text-[0.75rem]",
    gap: "gap-3.5",
  },
} as const;

/** Concentric ring mark — matches bottom nav icon */
function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <circle cx="20" cy="20" r="19" fill="white" />
      <circle cx="20" cy="20" r="15.2" fill="#212121" />
      <circle cx="20" cy="20" r="11.4" fill="white" />
      <circle cx="20" cy="20" r="7.6" fill="#212121" />
      <circle cx="20" cy="20" r="3.8" fill="white" />
      <circle cx="20" cy="20" r="1.6" fill="#212121" />
    </svg>
  );
}

type BrandLogoProps = {
  size?: keyof typeof sizes;
  className?: string;
  showMark?: boolean;
  asLink?: boolean;
};

export function BrandLogo({
  size = "sm",
  className,
  showMark = true,
  asLink = true,
}: BrandLogoProps) {
  const s = sizes[size];

  const content = (
    <>
      {showMark ? <BrandMark className={s.mark} /> : null}
      <span className="flex flex-col leading-none text-white">
        <span className={cn("font-display font-bold tracking-tight", s.title)}>taz</span>
        <span
          className={cn(
            "mt-0.5 font-semibold uppercase tracking-[0.28em] text-white/75",
            s.subtitle
          )}
        >
          investments
        </span>
      </span>
    </>
  );

  const rootClass = cn(
    "inline-flex items-center transition-opacity hover:opacity-85",
    s.gap,
    className
  );

  if (asLink) {
    return (
      <Link href="/" className={rootClass} aria-label="Taz Investments — home">
        {content}
      </Link>
    );
  }

  return <div className={rootClass}>{content}</div>;
}
