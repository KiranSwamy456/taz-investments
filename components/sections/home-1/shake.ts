/** Shared shake / wiggle presets for home-1 micro-interactions */

export const hoverShake = {
  rotate: [0, -1.6, 1.4, -1, 0.6, 0],
  x: [0, -3, 3, -2, 1, 0],
  transition: { duration: 0.45, ease: "easeInOut" as const },
};

export const softHoverShake = {
  rotate: [0, -0.8, 0.7, -0.4, 0],
  x: [0, -2, 2, -1, 0],
  transition: { duration: 0.38, ease: "easeInOut" as const },
};

export const tapShake = {
  rotate: [0, -2.5, 2.2, -1.2, 0],
  x: [0, -4, 4, -2, 0],
  transition: { duration: 0.35, ease: "easeInOut" as const },
};

export const settleIn = {
  initial: { opacity: 0, y: 20, rotate: -1.5 },
  whileInView: { opacity: 1, y: 0, rotate: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { type: "spring" as const, stiffness: 220, damping: 18 },
};
