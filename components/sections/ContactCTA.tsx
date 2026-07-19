import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Are you building the next great company in MENA?
        </h2>
        <Link
          href="/thesis"
          data-solid-control
          className="mt-10 inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
        >
          Raise With Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
