"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const STAGES = ["Pre-seed", "Seed", "Series A", "Growth", "Other"] as const;
const MAX_PDF_MB = 5;

export function RaiseForm({ source }: { source?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deckName, setDeckName] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("source", source || "Website raise form");

    const file = data.get("deck");
    if (file instanceof File && file.size > 0) {
      const isPdf =
        file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
      if (!isPdf) {
        setError("Please upload a PDF file only.");
        setSending(false);
        return;
      }
      if (file.size > MAX_PDF_MB * 1024 * 1024) {
        setError(`PDF must be ${MAX_PDF_MB}MB or smaller.`);
        setSending(false);
        return;
      }
    } else {
      data.delete("deck");
    }

    try {
      const res = await fetch("/api/raise", {
        method: "POST",
        body: data,
      });

      const payload = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        throw new Error(payload.error || "Something went wrong. Please try again.");
      }

      form.reset();
      setDeckName(null);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
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
          Pitch deck (PDF)
        </span>
        <input
          name="deck"
          type="file"
          accept="application/pdf,.pdf"
          onChange={(e) => {
            const file = e.target.files?.[0];
            setDeckName(file ? file.name : null);
          }}
          className="block w-full cursor-pointer rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-accent file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:tracking-widest file:text-accent-foreground hover:border-accent/60"
        />
        <span className="mt-2 block text-xs text-muted-foreground">
          Optional · PDF only · max {MAX_PDF_MB}MB
          {deckName ? ` · Selected: ${deckName}` : ""}
        </span>
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

      {error ? <p className="text-sm text-red-400">{error}</p> : null}

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
