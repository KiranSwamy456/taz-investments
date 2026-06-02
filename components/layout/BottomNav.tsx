"use client";

import { useCallback, useEffect, useId, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { X } from "lucide-react";

/** Uniform band width (every gold + black ring same thickness). */
const RING_BAND = 0.18;

/** Outside → inside: blogs, about us, portfolio, thesis, home */
const rings = [
  { scale: 1, href: "/blogs", label: "Blogs", dark: true },
  { scale: 1 - RING_BAND, href: "/about", label: "About us", dark: false },
  { scale: 1 - RING_BAND * 2, href: "/portfolio", label: "Portfolio", dark: true },
  { scale: 1 - RING_BAND * 3, href: "/thesis", label: "Thesis", dark: false },
  { scale: 1 - RING_BAND * 4, href: "/", label: "Home", dark: true },
] as const;

const centerScale = 0.075;

const OPEN_DURATION = 0.48;
const STAGGER = 0.045;
const EASE_IN: [number, number, number, number] = [0.33, 1, 0.38, 1];
const EASE_OUT: [number, number, number, number] = [0.4, 0, 0.65, 1];

const HOVER_SPRING = {
  type: "spring" as const,
  stiffness: 90,
  damping: 22,
  mass: 1.1,
};

const TRIGGER_ZOOM_HOVER = {
  scale: [1, 1.07, 1.22],
  y: [0, -2, -6],
  transition: {
    duration: 0.45,
    times: [0, 0.35, 1],
    ease: EASE_IN,
  },
};

function NavTriggerRings({ inverted }: { inverted: boolean }) {
  const black = inverted ? "bg-white" : "bg-background";
  const white = inverted ? "bg-background" : "bg-white";

  return (
    <span className="relative block h-full w-full" aria-hidden>
      <span className={`absolute inset-0 rounded-full transition-colors duration-500 ease-out ${black}`} />
      <span className={`absolute inset-[11%] rounded-full transition-colors duration-500 ease-out ${white}`} />
      <span className={`absolute inset-[22%] rounded-full transition-colors duration-500 ease-out ${black}`} />
      <span className={`absolute inset-[33%] rounded-full transition-colors duration-500 ease-out ${white}`} />
      <span className={`absolute inset-[44%] rounded-full transition-colors duration-500 ease-out ${black}`} />
      <span className={`absolute inset-[55%] rounded-full transition-colors duration-500 ease-out ${white}`} />
      <span className={`absolute inset-[66%] rounded-full transition-colors duration-500 ease-out ${black}`} />
    </span>
  );
}
const WAVE_SPRING = {
  type: "spring" as const,
  stiffness: 70,
  damping: 20,
  mass: 1.2,
};

/** Vertical center of ring band from bottom anchor (circle centers sit on bottom edge). */
function ringLabelBottom(ringScale: number, nextScale: number): string {
  const midRadius = (ringScale + nextScale) / 4;
  return `calc(var(--nav-outer) * ${midRadius})`;
}

function ringLabelFontSize(label: string): string {
  return label === "About us"
    ? "clamp(0.65rem, calc(var(--nav-outer) * 0.048), 0.88rem)"
    : "clamp(0.75rem, calc(var(--nav-outer) * 0.056), 1.05rem)";
}

const GOLD = "hsl(48, 97%, 48%)";
const GOLD_BORDER = "hsl(48, 97%, 48%)";
const RING_BORDER_DARK = "rgba(255, 255, 255, 0.22)";
const RING_BORDER_GOLD = "rgba(0, 0, 0, 0.2)";

const ringVariants: Variants = {
  hidden: (i: number) => ({
    scale: 0,
    opacity: 0,
    transition: {
      duration: OPEN_DURATION * 0.78,
      delay: i * STAGGER,
      ease: EASE_OUT,
    },
  }),
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: OPEN_DURATION,
      delay: (rings.length - 1 - i) * STAGGER,
      ease: EASE_IN,
    },
  }),
};

const centerVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: OPEN_DURATION * 0.78,
      delay: rings.length * STAGGER,
      ease: EASE_OUT,
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: OPEN_DURATION * 0.95, delay: 0, ease: EASE_IN },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.22, ease: "easeOut" } },
};

const SHELL_EXIT_DELAY = OPEN_DURATION * 0.78 + rings.length * STAGGER + 0.04;

function ringOpenDelay(ringIndex: number): number {
  return (rings.length - 1 - ringIndex) * STAGGER;
}

const labelVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    scale: 0.88,
    transition: {
      duration: 0.15,
      delay: i * STAGGER * 0.5,
      ease: EASE_OUT,
    },
  }),
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      opacity: {
        duration: 0.28,
        delay: ringOpenDelay(i) + OPEN_DURATION * 0.82,
        ease: EASE_IN,
      },
      scale: {
        duration: 0.28,
        delay: ringOpenDelay(i) + OPEN_DURATION * 0.82,
        ease: EASE_IN,
      },
    },
  }),
};

const labelLinkClass = (dark: boolean) =>
  `block whitespace-nowrap text-center font-semibold tracking-wide leading-none transition-colors hover:text-accent ${
    dark
      ? "[text-shadow:0_1px_3px_rgba(0,0,0,0.85)]"
      : "[text-shadow:0_1px_2px_rgba(255,255,255,0.9)]"
  }`;

/** Subtle wave: hovered ring lifts most; neighbors ease in with delay. */
function waveScale(ringIndex: number, hovered: number | null): number {
  if (hovered === null) return 1;
  const dist = Math.abs(ringIndex - hovered);
  if (dist === 0) return 1.045;
  if (dist === 1) return 1.018;
  if (dist === 2) return 1.008;
  return 1;
}

export function BottomNav() {
  const [open, setOpen] = useState(false);
  const [hoveredRing, setHoveredRing] = useState<number | null>(null);
  const [triggerHovered, setTriggerHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelId = useId();

  const close = useCallback(() => {
    setOpen(false);
    setHoveredRing(null);
  }, []);

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
    ["--nav-outer" as string]: "clamp(320px, 76vw, 600px)",
  } as CSSProperties;

  return (
    <>
      {/* Anchor: menu + trigger share one center (icon spot), not viewport bottom edge */}
      <div
        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center md:bottom-10"
        style={navOuterStyle}
      >
        <div
          className="relative overflow-visible"
          style={{
            width: "var(--nav-outer)",
            height: "calc(var(--nav-outer) * 0.5 + 2.5rem)",
          }}
        >
          <AnimatePresence>
            {open ? (
              <motion.div
                key="bottom-nav-layer"
                className="pointer-events-none absolute inset-0 overflow-visible"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { delay: SHELL_EXIT_DELAY, duration: 0.18 },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onMouseLeave={() => setHoveredRing(null)}
              >
                {/* Soft gold glow (circular only — no scale to avoid square flash) */}
                <motion.div
                  className="pointer-events-none absolute left-1/2 bottom-0 z-[-1] aspect-square -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-[90px]"
                  style={{ width: "var(--nav-outer)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0.22] }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{
                    duration: OPEN_DURATION + rings.length * STAGGER,
                    times: [0, 0.5, 1],
                    ease: EASE_IN,
                  }}
                />

                {rings.map(({ scale, href, label: labelText, dark }, idx) => {
                    const size = `calc(var(--nav-outer) * ${scale})`;
                    const ringFill = dark ? "bg-background" : "bg-accent shadow-md";
                    const targetScale = waveScale(idx, hoveredRing);
                    const goldFadeDelay = ringOpenDelay(idx) + OPEN_DURATION * 0.45;
                    const settledBorder = dark ? RING_BORDER_DARK : RING_BORDER_GOLD;

                    const ringLink = (
                      <motion.div
                        className={`pointer-events-auto h-full w-full overflow-hidden rounded-full border-[3px] ${ringFill}`}
                        initial={{ borderColor: GOLD_BORDER }}
                        animate={{ borderColor: settledBorder }}
                        transition={{
                          borderColor: {
                            duration: 0.5,
                            delay: goldFadeDelay,
                            ease: "easeOut",
                          },
                        }}
                      >
                        <Link
                          href={href}
                          onClick={close}
                          className="block h-full w-full rounded-full"
                          aria-label={labelText}
                        />
                      </motion.div>
                    );

                    return (
                      <div
                        key={href + labelText}
                        className="pointer-events-none absolute left-1/2 bottom-0 z-0 -translate-x-1/2 translate-y-1/2 overflow-hidden rounded-full"
                        style={{ width: size, height: size }}
                      >
                        <motion.div
                          className="h-full w-full overflow-hidden rounded-full will-change-transform"
                          style={{ transformOrigin: "50% 50%" }}
                          custom={idx}
                          variants={ringVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          onHoverStart={() => setHoveredRing(idx)}
                          onHoverEnd={() =>
                            setHoveredRing((h) => (h === idx ? null : h))
                          }
                        >
                          <motion.div
                            className="h-full w-full overflow-hidden rounded-full"
                            style={{ transformOrigin: "50% 50%" }}
                            animate={{ scale: targetScale }}
                            transition={{
                              ...WAVE_SPRING,
                              delay:
                                hoveredRing === null
                                  ? 0
                                  : Math.abs(idx - hoveredRing) * 0.07,
                            }}
                          >
                            {ringLink}
                          </motion.div>
                        </motion.div>
                      </div>
                    );
                  })}

                {/* Labels share one anchor so each name sits centered in its ring band */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[55] h-[calc(var(--nav-outer)*0.5)]">
                  {rings.map(({ scale, href, label: labelText, dark }, idx) => {
                    const nextScale =
                      idx < rings.length - 1
                        ? rings[idx + 1].scale
                        : centerScale * 1.7;

                    return (
                      <motion.div
                        key={`label-${href}`}
                        className="pointer-events-none absolute left-1/2 -translate-x-1/2 translate-y-1/2"
                        style={{ bottom: ringLabelBottom(scale, nextScale) }}
                        custom={idx}
                        variants={labelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onHoverStart={() => setHoveredRing(idx)}
                        onHoverEnd={() =>
                          setHoveredRing((h) => (h === idx ? null : h))
                        }
                      >
                        <motion.span
                          className="block"
                          animate={{
                            y: hoveredRing === idx ? -2 : 0,
                            scale: hoveredRing === idx ? 1.06 : 1,
                          }}
                          transition={WAVE_SPRING}
                        >
                          <motion.span
                            style={{ fontSize: ringLabelFontSize(labelText) }}
                            animate={{
                              color:
                                hoveredRing === idx
                                  ? dark
                                    ? GOLD
                                    : "#212121"
                                  : dark
                                    ? "#ffffff"
                                    : "#000000",
                            }}
                            initial={{ color: GOLD }}
                            transition={{
                              color: {
                                duration: 0.4,
                                delay: ringOpenDelay(idx) + OPEN_DURATION * 0.82,
                                ease: "easeOut",
                              },
                            }}
                          >
                            <Link
                              href={href}
                              onClick={close}
                              className={`${labelLinkClass(dark)} pointer-events-auto px-3 py-1`}
                              style={{ color: "inherit", fontSize: "inherit" }}
                            >
                              {labelText}
                            </Link>
                          </motion.span>
                        </motion.span>
                      </motion.div>
                    );
                  })}
                </div>

                <div
                  className="pointer-events-none absolute left-1/2 bottom-0 z-[80] flex -translate-x-1/2 translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-[3px] border-accent bg-accent p-[clamp(6px,1.6vw,12px)] shadow-md"
                  style={{
                    width: `calc(var(--nav-outer) * ${centerScale * 1.7})`,
                    height: `calc(var(--nav-outer) * ${centerScale * 1.7})`,
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
                    style={{
                      transformOrigin: "50% 50%",
                      width: `calc(var(--nav-outer) * ${centerScale})`,
                      height: `calc(var(--nav-outer) * ${centerScale})`,
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    transition={HOVER_SPRING}
                    className="pointer-events-auto flex shrink-0 items-center justify-center rounded-full bg-background text-accent"
                  >
                    <X className="h-[38%] w-[38%]" strokeWidth={2.5} />
                  </motion.button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label="Open navigation menu"
            aria-hidden={open}
            onClick={() => setOpen(true)}
            tabIndex={open ? -1 : 0}
            onHoverStart={() => setTriggerHovered(true)}
            onHoverEnd={() => setTriggerHovered(false)}
            onFocus={() => setTriggerHovered(true)}
            onBlur={() => setTriggerHovered(false)}
            className={`absolute left-1/2 bottom-0 z-[70] flex h-[4.25rem] w-[4.25rem] -translate-x-1/2 translate-y-1/2 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:h-[4.75rem] md:w-[4.75rem] ${
              open
                ? "pointer-events-none scale-0 opacity-0"
                : "scale-100 opacity-100"
            }`}
            style={{ transformOrigin: "50% 100%" }}
          >
            <motion.span
              className={`flex h-full w-full items-center justify-center rounded-full p-[5px] shadow-lg ring-1 transition-colors duration-500 ease-out will-change-transform md:p-[6px] ${
                triggerHovered
                  ? "bg-background ring-white/15"
                  : "bg-white ring-black/10"
              }`}
              style={{ transformOrigin: "50% 50%" }}
              initial={false}
              animate={
                reduceMotion
                  ? {
                      scale: triggerHovered ? 1.08 : 1,
                      y: 0,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }
                  : triggerHovered
                    ? TRIGGER_ZOOM_HOVER
                    : {
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.38, ease: [0.4, 0, 0.65, 1] },
                      }
              }
              whileTap={reduceMotion ? { scale: 1.05 } : { scale: 1.14, y: -4 }}
            >
              <NavTriggerRings inverted={triggerHovered} />
            </motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.button
            key="nav-backdrop"
            type="button"
            aria-label="Dismiss menu"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[40] cursor-default bg-black/[0.06]"
            onClick={close}
          />
        ) : null}
      </AnimatePresence>

      <div
        id={panelId}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label="Site navigation"
        className="sr-only"
      />
    </>
  );
}
