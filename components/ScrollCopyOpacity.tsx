"use client";

import { useEffect } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

/**
 * 0 = muted, 1 = full white. Per section; eases slowly so the left→right fill reads gradual.
 */
function fillForRect(rect: DOMRect, vh: number): number {
  if (rect.bottom < 0) return 1;
  if (rect.top > vh) return 0;

  const start = vh * 1.02;
  const end = vh * 0.1;

  if (rect.top <= end) return 1;
  if (rect.top >= start) return 0;

  const linear = clamp((start - rect.top) / (start - end), 0, 1);
  // Stronger ease-in: slow sweep for longer, then finish (matches “Founder-first” block feel sitewide)
  return Math.pow(linear, 1.85);
}

/**
 * Each `<section>` gets its own raw fill from its position. Displayed fill is sequential in DOM
 * order: section i stays at 0 until every section above it has reached full white (raw >= 1),
 * so the next block only begins its slow L→R fill after the previous one has completed.
 */
function updateSectionFills() {
  const vh = window.innerHeight;
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("main > section[data-scroll-tone]")
  );
  const raws = sections.map((el) => fillForRect(el.getBoundingClientRect(), vh));

  sections.forEach((el, i) => {
    const prevAllComplete = raws.slice(0, i).every((r) => r >= 1);
    const display = prevAllComplete ? raws[i] : 0;
    el.style.setProperty("--section-text-fill", String(display));
  });

  const footer = document.querySelector<HTMLElement>(".min-h-screen > footer");
  if (footer) {
    footer.style.setProperty(
      "--section-text-fill",
      String(fillForRect(footer.getBoundingClientRect(), vh))
    );
  }
}

export function ScrollCopyOpacity() {
  useEffect(() => {
    updateSectionFills();
    window.addEventListener("scroll", updateSectionFills, { passive: true });
    window.addEventListener("resize", updateSectionFills);
    return () => {
      window.removeEventListener("scroll", updateSectionFills);
      window.removeEventListener("resize", updateSectionFills);
    };
  }, []);
  return null;
}
