"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/brand/BrandLogo";
import SideRays from "@/components/backgrounds/SideRays";

const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const line = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.35 + i * 0.12, ease: REVEAL_EASE },
  }),
};

export function Hero() {
  return (
    <section
      data-hero
      className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden px-6 pb-28 pt-20 md:px-12 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <SideRays
          origin="top-right"
          rayColor1="#FFFFFF"
          rayColor2="#F5E6C8"
          blend={0.55}
          speed={1.4}
          intensity={1.65}
          spread={1.8}
          density={6}
          sharpness={0.45}
          falloff={1.45}
          glow={1.15}
          saturation={0.75}
          dust={0.15}
          followMouse
          mouseInfluence={0.45}
          intro
          opacity={0.9}
          className="h-full w-full"
        />
      </div>

      <motion.div
        className="absolute left-6 top-8 z-20 md:left-12 md:top-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: REVEAL_EASE }}
      >
        <BrandLogo size="md" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end">
        <motion.h1
          className="mb-10 font-display text-[clamp(2.5rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-tight md:mb-14"
          initial="hidden"
          animate="visible"
        >
          <motion.span className="block text-white" variants={line} custom={0}>
            Before the Proof.
          </motion.span>
          <motion.span
            className="mt-1 block text-accent md:mt-2"
            variants={line}
            custom={1}
          >
            Beyond the Capital.
          </motion.span>
        </motion.h1>

        <div className="border-t border-white/10 pt-8 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: REVEAL_EASE }}
            className="max-w-2xl"
          >
            <p className="font-display text-xl font-medium leading-snug text-white md:text-2xl lg:text-3xl">
              We don&apos;t wait for proof. We are the proof.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              TIC backs the founders reshaping Saudi Arabia and the MENA region
              — early, with conviction, and with far more than a cheque.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
