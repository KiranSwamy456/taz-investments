"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { hoverShake, tapShake } from "@/components/sections/home-1/shake";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-accent px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center md:text-left">
        <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-white/80">
          Raise With Us
        </span>
        <motion.h2
          className="origin-left font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
          whileHover={hoverShake}
        >
          Are you building the next great company in MENA?
        </motion.h2>
        <motion.div
          className="mt-10 inline-flex"
          whileHover={hoverShake}
          whileTap={tapShake}
        >
          <Link
            href="/thesis"
            data-solid-control
            className="inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
          >
            Raise With Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
