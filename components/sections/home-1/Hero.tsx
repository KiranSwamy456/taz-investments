"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { hoverShake, softHoverShake } from "@/components/sections/home-1/shake";

const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const line = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.35 + i * 0.12, ease: REVEAL_EASE },
  }),
};

const HW = 54;
const TH = 24;
const SH = 52;
const ROW_GAP = 22;

/** Gold stack, top → base. Proof sits clear underneath as empty cubes. */
const GOLD_ROWS = [
  { label: "Ecosystem", count: 1 },
  { label: "Operators", count: 2 },
  { label: "Network", count: 3 },
  { label: "Capital", count: 4 },
] as const;

function cubePoints(cx: number, top: number) {
  const peak = `${cx},${top}`;
  const right = `${cx + HW},${top + TH}`;
  const mid = `${cx},${top + TH * 2}`;
  const left = `${cx - HW},${top + TH}`;
  const leftBase = `${cx - HW},${top + TH + SH}`;
  const front = `${cx},${top + TH * 2 + SH}`;
  const rightBase = `${cx + HW},${top + TH + SH}`;
  return {
    top: `${peak} ${right} ${mid} ${left}`,
    left: `${left} ${mid} ${front} ${leftBase}`,
    right: `${right} ${mid} ${front} ${rightBase}`,
  };
}

function SupportStack() {
  const max = 5;
  const pad = 8;
  const width = max * HW * 2 + pad * 2;
  const goldHeight = GOLD_ROWS.length * SH + TH * 2;
  const height = goldHeight + ROW_GAP + SH + TH * 2 + pad;
  const originX = pad;

  const cubes: {
    key: string;
    cx: number;
    top: number;
    ghost: boolean;
    delay: number;
  }[] = [];

  GOLD_ROWS.forEach((row, rowIndex) => {
    const top = pad + rowIndex * SH;
    const shift = (max - row.count) * HW;
    for (let i = 0; i < row.count; i += 1) {
      cubes.push({
        key: `${row.label}-${i}`,
        cx: originX + shift + HW + i * HW * 2,
        top,
        ghost: false,
        delay: 0.55 - rowIndex * 0.1 + i * 0.04,
      });
    }
  });

  const proofTop = pad + GOLD_ROWS.length * SH + ROW_GAP;
  for (let i = 0; i < max; i += 1) {
    cubes.push({
      key: `proof-${i}`,
      cx: originX + HW + i * HW * 2,
      top: proofTop,
      ghost: true,
      delay: 0.12 + i * 0.04,
    });
  }

  const ordered = [...cubes].sort((a, b) => b.top - a.top || a.cx - b.cx);

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mx-auto h-auto w-full"
        role="img"
        aria-label="Support stacked beyond capital, before proof"
      >
        {ordered.map((cube) => {
          const faces = cubePoints(cube.cx, cube.top);
          return (
            <motion.g
              key={cube.key}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: cube.delay, duration: 0.45, ease: REVEAL_EASE }}
            >
              {cube.ghost ? (
                <>
                  <polygon points={faces.left} fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.6" />
                  <polygon points={faces.right} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.6" />
                  <polygon points={faces.top} fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1.6" />
                </>
              ) : (
                <>
                  <polygon points={faces.left} fill="#d4af55" stroke="#141414" strokeWidth="1.4" />
                  <polygon points={faces.right} fill="#8d6e2f" stroke="#141414" strokeWidth="1.4" />
                  <polygon points={faces.top} fill="#f6e7b8" stroke="#141414" strokeWidth="1.4" />
                </>
              )}
            </motion.g>
          );
        })}
      </svg>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {GOLD_ROWS.map((row) => (
          <span
            key={row.label}
            className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent"
          >
            {row.label}
          </span>
        ))}
      </div>
      <p className="mt-2 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
        Proof — we don&apos;t wait
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      data-hero
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-20 pt-24 md:px-12 md:pb-24 md:pt-28"
    >
      <motion.div
        className="absolute left-6 top-8 z-20 md:left-12 md:top-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: REVEAL_EASE }}
        whileHover={softHoverShake}
      >
        <BrandLogo size="md" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 md:flex-row md:items-center md:gap-6 lg:gap-8">
        {/* Copy */}
        <div className="order-2 w-full min-w-0 flex-1 md:order-1">
          <motion.h1
            className="mb-8 font-display text-[clamp(2.4rem,6.5vw,5.25rem)] font-medium leading-[0.95] tracking-tight md:mb-10"
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="block origin-left text-white"
              variants={line}
              custom={0}
              whileHover={softHoverShake}
            >
              Before the Proof.
            </motion.span>
            <motion.span
              className="mt-1 block origin-left text-accent md:mt-2"
              variants={line}
              custom={1}
              whileHover={hoverShake}
            >
              Beyond the Capital.
            </motion.span>
          </motion.h1>

          <div className="border-t border-white/10 pt-7 md:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7, ease: REVEAL_EASE }}
              className="max-w-xl"
              whileHover={softHoverShake}
            >
              <p className="font-display text-xl font-medium leading-snug text-white md:text-2xl">
                We don&apos;t wait for proof. We are the proof.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                TIC backs the founders reshaping Saudi Arabia and the MENA
                region — early, with conviction, and with far more than a
                cheque.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Support stack — the tagline, not a handshake photo */}
        <div className="order-1 w-full shrink-0 md:order-2 md:w-[min(48vw,560px)]">
          <SupportStack />
        </div>
      </div>
    </section>
  );
}
