import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sizes = {
  sm: { className: "h-7 w-auto md:h-8", width: 160, height: 40 },
  md: { className: "h-9 w-auto md:h-11", width: 220, height: 55 },
  lg: { className: "h-12 w-auto md:h-16", width: 320, height: 80 },
} as const;

const LOGO = {
  white: "/TAZ-Investment-white.png",
  black: "/TAZ-Investment-black.png",
} as const;

type BrandLogoProps = {
  size?: keyof typeof sizes;
  /** Use white on dark backgrounds, black on light backgrounds */
  variant?: keyof typeof LOGO;
  className?: string;
  showMark?: boolean;
  asLink?: boolean;
};

export function BrandLogo({
  size = "sm",
  variant = "white",
  className,
  asLink = true,
}: BrandLogoProps) {
  const s = sizes[size];

  const content = (
    <Image
      src={LOGO[variant]}
      alt="Taz Investment"
      width={s.width}
      height={s.height}
      priority
      className={cn(s.className, "object-contain object-left")}
    />
  );

  const rootClass = cn(
    "inline-flex items-center transition-opacity hover:opacity-85",
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
