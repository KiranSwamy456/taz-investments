"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mix-blend-difference bg-background/80 backdrop-blur-md">
      <div className="flex-1">
        <Link href="/">
          <span className="font-display font-bold tracking-widest text-xl cursor-pointer text-white">
            tazinvestments
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <a href="#works" className="text-white hover:text-white/80 transition-colors">
          PORTFOLIO
        </a>
        <a href="#about" className="text-white hover:text-white/80 transition-colors">
          TEAM
        </a>
        <a href="#thesis" className="text-white hover:text-white/80 transition-colors">
          THESIS
        </a>
        <a href="#contact" className="text-white hover:text-white/80 transition-colors">
          CONTACT
        </a>
      </div>

      <div className="flex-1 flex justify-end">
        <a
          href="#contact"
          data-solid-control
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors"
        >
          CONTACT <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
