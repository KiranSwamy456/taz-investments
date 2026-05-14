"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-1/3 max-w-[500px] aspect-square rounded-full opacity-80 mix-blend-lighten pointer-events-none">
        <Image src="/hero-emblem.png" alt="Tazinvestments Emblem" fill className="object-contain" />
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col justify-end h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-display font-medium leading-[0.9] tracking-tight">
            <span className="block text-muted-foreground">Design studio</span>
            <span className="flex items-center gap-4 md:gap-8">
              <span className="inline-flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full border border-border">
                <Play className="w-5 h-5 md:w-8 md:h-8 fill-current translate-x-[2px]" />
              </span>
              for visionaries
            </span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs md:text-sm font-semibold tracking-widest max-w-xs text-muted-foreground uppercase"
          >
            {"0→1 BRAND AND PRODUCT DESIGN FOR EARLY-STAGE FOUNDERS"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs md:text-sm font-semibold tracking-widest max-w-[200px] text-right text-muted-foreground uppercase"
          >
            TRUSTED BY 200+ YCOMBINATOR & SPEEDRUN FOUNDERS
          </motion.p>
        </div>
      </div>
    </section>
  );
}
