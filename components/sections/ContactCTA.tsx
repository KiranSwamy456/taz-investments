"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-[2rem] p-12 md:p-24 border border-border flex flex-col md:flex-row items-center justify-between gap-12 group cursor-pointer hover:border-accent/50 transition-colors duration-500"
        >
          <div className="flex-1">
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8 block">WORK WITH US</span>
            <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-display font-medium leading-[0.9] tracking-tight group-hover:text-accent transition-colors duration-500">
              Get in touch.
            </h2>
          </div>

          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500">
              <ArrowRight className="w-8 h-8 md:w-12 md:h-12 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
