"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { investmentImages } from "@/lib/investmentMedia";
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

function PartnershipVisual({ sizes }: { sizes: string }) {
  return (
    <motion.div
      className="relative aspect-square w-full"
      initial={{ opacity: 0, scale: 0.82, rotate: -6 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.1, delay: 0.2, ease: REVEAL_EASE }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Soft gold bloom */}
      <motion.div
        aria-hidden
        className="absolute inset-[-8%] rounded-full bg-accent/25 blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Outer dashed ring — spins slowly */}
      <motion.div
        aria-hidden
        className="absolute inset-[-10%] rounded-full border border-dashed border-accent/45"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* Mid ring — counter-spins */}
      <motion.div
        aria-hidden
        className="absolute inset-[-4%] rounded-full border border-white/15"
        animate={{ rotate: -360, scale: [1, 1.02, 1] }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Image disc — gentle float */}
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-accent/40 shadow-[0_0_60px_hsl(43_60%_58%/0.25)]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={investmentImages.heroHandshake}
            alt="Partnership handshake — backing founders with more than capital"
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes={sizes}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,hsl(43_60%_58%/0.22),transparent_50%)]" />

        {/* Sweeping light across the disc */}
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-120%" }}
          animate={{ x: ["-120%", "120%"] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            repeatDelay: 2.4,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Accent orbiting around the disc */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-[-10%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_hsl(43_60%_58%)]" />
      </motion.div>
    </motion.div>
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

        {/* Image — close to text */}
        <div className="order-1 w-full shrink-0 md:order-2 md:w-[min(38vw,360px)] lg:w-[380px]">
          <PartnershipVisual sizes="(max-width: 768px) 70vw, 380px" />
        </div>
      </div>
    </section>
  );
}
