"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const STAGES = ["Pre-seed", "Seed", "Series A", "Growth", "Other"] as const;

export function RaiseForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Placeholder until a backend / form service is wired
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/40 bg-card p-8 md:p-10">
        <p className="font-display text-2xl font-medium text-white md:text-3xl">Thank you.</p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We received your note. We&apos;ll respond with a clear yes, no, or what we need to move forward.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-semibold uppercase tracking-widest text-accent hover:text-white"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Name
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Company
          </span>
          <input
            name="company"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
            placeholder="Company name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Stage
          </span>
          <select
            name="stage"
            required
            defaultValue=""
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none transition-colors focus:border-accent"
          >
            <option value="" disabled>
              Select stage
            </option>
            {STAGES.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Website / deck link
        </span>
        <input
          name="link"
          type="url"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
          placeholder="https://"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Tell us briefly
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-white outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
          placeholder="What you're building, and why now."
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Raise with us"}
        {!sending ? <ArrowRight className="h-4 w-4" /> : null}
      </button>
    </form>
  );
}
