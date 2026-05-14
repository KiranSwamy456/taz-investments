"use client";

import { useCallback, useEffect, useId, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X } from "lucide-react";

/**
 * Outside → inside: portfolio, team, contact, home; center closes.
 * `inner` is the next disc’s diameter scale (same basis as `scale`) for label placement.
 */
const rings = [
  { scale: 1, inner: 0.72, href: "#works", label: "portfolio", dark: true },
  { scale: 0.72, inner: 0.48, href: "#about", label: "team", dark: false },
  { scale: 0.48, inner: 0.28, href: "#contact", label: "contact", dark: true },
  { scale: 0.28, inner: 0.15, href: "/" as const, label: "home", dark: false },
] as const;

const centerScale = 0.15;

const SLOW = 1.05;
const STAGGER = 0.11;
const EASE_IN: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

/** Radial midpoint of the visible band between this disc and the inner disc, as % from top. */
function labelTopPercent(outerScale: number, innerScale: number): string {
  const pct = ((outerScale - innerScale) / (4 * outerScale)) * 100;
  const clamped = Math.min(42, Math.max(5, pct));
  return `${clamped}%`;
}

const ringVariants: Variants = {
  hidden: (i: number) => ({
    scale: 0,
    opacity: 0,
    transition: { duration: SLOW * 0.82, delay: i * STAGGER, ease: EASE_OUT },
  }),
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: SLOW, delay: (rings.length - 1 - i) * STAGGER, ease: EASE_IN },
  }),
};

const centerVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: { duration: SLOW * 0.82, delay: rings.length * STAGGER, ease: EASE_OUT },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: SLOW * 0.92, delay: 0, ease: EASE_IN },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.35 } },
  visible: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

/** Let ring + center scale exits finish before the shell fades out. */
const SHELL_EXIT_DELAY = SLOW * 0.82 + rings.length * STAGGER + 0.08;

const labelClass = (dark: boolean) =>
  `pointer-events-none absolute left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center font-semibold lowercase tracking-wide leading-none ${
    dark ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]" : "text-black [text-shadow:0_1px_0_rgba(255,255,255,0.95)]"
  }`;

export function BottomNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const navOuterStyle = {
    ["--nav-outer" as string]: "clamp(268px, 62vw, 460px)",
  } as CSSProperties;

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Menu open" : "Open navigation menu"}
        aria-hidden={open}
        onClick={() => setOpen(true)}
        tabIndex={open ? -1 : 0}
        className="fixed bottom-6 left-1/2 z-50 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg ring-1 ring-black/10 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:bottom-10 md:h-16 md:w-16"
      >
        <span className="relative flex h-9 w-9 items-center justify-center md:h-10 md:w-10" aria-hidden>
          <span className="absolute inset-0 rounded-full border-2 border-black/80" />
          <span className="absolute inset-[5px] rounded-full border border-black/50 md:inset-[6px]" />
          <span className="absolute inset-[10px] rounded-full border border-black/35 md:inset-[11px]" />
          <span className="absolute inset-[14px] rounded-full bg-black md:inset-[15px]" />
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="bottom-nav-layer"
            className="pointer-events-none fixed inset-0 z-[50]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: SHELL_EXIT_DELAY, duration: 0.28 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.button
              type="button"
              aria-label="Dismiss menu"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="pointer-events-auto fixed inset-0 z-[55] cursor-default bg-black/[0.06]"
              onClick={close}
            />

            <div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="pointer-events-none fixed inset-x-0 z-[60] flex justify-center bottom-[max(1.25rem,env(safe-area-inset-bottom))] md:bottom-[max(1.75rem,env(safe-area-inset-bottom))]"
            >
              <nav
                aria-label="Primary"
                className="pointer-events-none overflow-visible"
                style={navOuterStyle}
              >
                <div
                  className="relative mx-auto overflow-visible"
                  style={{
                    width: "var(--nav-outer)",
                    height: "calc(var(--nav-outer) * 0.5 + 2.25rem)",
                  }}
                >
                  {rings.map(({ scale, inner, href, label: labelText, dark }, idx) => {
                    const size = `calc(var(--nav-outer) * ${scale})`;
                    const top = labelTopPercent(scale, inner);
                    const fontSize = "clamp(0.72rem, calc(var(--nav-outer) * 0.052), 0.98rem)";
                    const ringBody = `flex h-full w-full items-center justify-center rounded-full overflow-visible ${
                      dark ? "bg-black ring-2 ring-white/20" : "bg-white shadow-md ring-2 ring-black/25"
                    }`;
                    const labelNode = (
                      <span className={labelClass(dark)} style={{ top, fontSize }}>
                        {labelText}
                      </span>
                    );

                    return (
                      <div
                        key={href + labelText}
                        className="pointer-events-none absolute left-1/2 bottom-0 z-0 -translate-x-1/2 translate-y-1/2"
                        style={{ width: size, height: size }}
                      >
                        <motion.div
                          className="h-full w-full origin-bottom will-change-transform"
                          custom={idx}
                          variants={ringVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          {href === "/" ? (
                            <Link href="/" onClick={close} className={`pointer-events-auto relative ${ringBody}`}>
                              {labelNode}
                            </Link>
                          ) : (
                            <a
                              href={href}
                              onClick={close}
                              className={`pointer-events-auto relative ${ringBody}`}
                              aria-label={labelText}
                            >
                              {labelNode}
                            </a>
                          )}
                        </motion.div>
                      </div>
                    );
                  })}
                  <div
                    className="pointer-events-none absolute left-1/2 bottom-0 z-[80] -translate-x-1/2 translate-y-1/2"
                    style={{
                      width: `calc(var(--nav-outer) * ${centerScale})`,
                      height: `calc(var(--nav-outer) * ${centerScale})`,
                    }}
                  >
                    <motion.button
                      type="button"
                      onClick={close}
                      aria-label="Close menu"
                      variants={centerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="pointer-events-auto flex h-full w-full origin-bottom items-center justify-center rounded-full bg-black text-white shadow-md ring-2 ring-white/20 transition hover:bg-neutral-900"
                    >
                      <X className="h-[38%] w-[38%]" strokeWidth={2.5} />
                    </motion.button>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!open ? <div id={panelId} hidden aria-hidden /> : null}
    </>
  );
}
