"use client";

import { motion } from "framer-motion";

const GOLD = "hsl(43 60% 58%)";
const MUTED = "hsl(0 0% 100% / 0.35)";

type IconProps = { className?: string };

/** Orbiting globe — Market Focus */
function MarketIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <motion.circle
        cx="60"
        cy="60"
        r="34"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeDasharray="8 6"
        animate={{ rotate: 360, strokeOpacity: [0.55, 1, 0.55] }}
        transition={{
          rotate: { duration: 14, repeat: Infinity, ease: "linear" },
          strokeOpacity: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.ellipse
        cx="60"
        cy="60"
        rx="14"
        ry="34"
        stroke={MUTED}
        strokeWidth="1"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.ellipse
        cx="60"
        cy="60"
        rx="34"
        ry="12"
        stroke={GOLD}
        strokeWidth="1.2"
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.circle
        cx="60"
        cy="26"
        r="3.5"
        fill={GOLD}
        animate={{ rotate: 360, scale: [1, 1.25, 1] }}
        transition={{
          rotate: { duration: 7, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.circle
        cx="60"
        cy="60"
        r="3"
        fill={GOLD}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/** 3×3 mosaic grid — Sector Focus */
function SectorIcon({ className }: IconProps) {
  const tiles = Array.from({ length: 9 }, (_, i) => ({
    x: 28 + (i % 3) * 24,
    y: 28 + Math.floor(i / 3) * 24,
    delay: (i % 3) * 0.12 + Math.floor(i / 3) * 0.1,
    filled: i % 2 === 0,
  }));

  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      {tiles.map((t, i) => (
        <motion.rect
          key={i}
          x={t.x}
          y={t.y}
          width="16"
          height="16"
          rx="1.5"
          fill={t.filled ? GOLD : "transparent"}
          stroke={GOLD}
          strokeWidth="1.4"
          animate={{
            opacity: [0.45, 1, 0.45],
            scale: [0.92, 1.06, 0.92],
          }}
          transition={{
            duration: 2.1,
            delay: t.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: `${t.x + 8}px ${t.y + 8}px` }}
        />
      ))}
    </svg>
  );
}

/** Rising growth bars — Stage of Venture */
function StageIcon({ className }: IconProps) {
  const bars = [
    { h: 22, delay: 0 },
    { h: 36, delay: 0.15 },
    { h: 50, delay: 0.3 },
    { h: 68, delay: 0.45 },
  ];

  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      {/* baseline */}
      <line
        x1="24"
        y1="92"
        x2="96"
        y2="92"
        stroke={MUTED}
        strokeWidth="1.2"
      />
      {bars.map((bar, i) => {
        const x = 30 + i * 18;
        const y = 92 - bar.h;
        return (
          <motion.g key={i}>
            <motion.rect
              x={x}
              y={y}
              width="12"
              height={bar.h}
              rx="1.5"
              fill={i === 3 ? GOLD : "transparent"}
              stroke={GOLD}
              strokeWidth="1.5"
              initial={{ scaleY: 0.2, opacity: 0.4 }}
              animate={{
                scaleY: [0.35, 1, 0.55, 1],
                opacity: [0.55, 1, 0.7, 1],
              }}
              transition={{
                duration: 2.4,
                delay: bar.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: `${x + 6}px 92px` }}
            />
            <motion.circle
              cx={x + 6}
              cy={y}
              r="2.5"
              fill={GOLD}
              animate={{
                opacity: [0.4, 1, 0.4],
                cy: [y + 8, y, y + 4, y],
              }}
              transition={{
                duration: 2.4,
                delay: bar.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        );
      })}
    </svg>
  );
}

/** Pulsing ticket — Ticket Size */
function TicketIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <motion.rect
        x="22"
        y="38"
        width="76"
        height="44"
        rx="4"
        stroke={GOLD}
        strokeWidth="1.6"
        strokeDasharray="10 7"
        animate={{
          strokeDashoffset: [0, 120],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          strokeDashoffset: { duration: 4, repeat: Infinity, ease: "linear" },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.rect
        x="26"
        y="42"
        width="68"
        height="36"
        rx="2"
        stroke={MUTED}
        strokeWidth="1"
        animate={{ opacity: [0.2, 0.55, 0.2] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.text
        x="60"
        y="66"
        textAnchor="middle"
        fill={GOLD}
        fontSize="22"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="600"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [0.92, 1.08, 0.92],
          y: [66, 63, 66],
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      >
        $
      </motion.text>
      <motion.line
        x1="32"
        y1="50"
        x2="58"
        y2="50"
        stroke={MUTED}
        strokeWidth="1.5"
        animate={{ opacity: [0.3, 1, 0.3], x2: [48, 58, 48] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="32"
        y1="70"
        x2="72"
        y2="70"
        stroke={MUTED}
        strokeWidth="1.5"
        animate={{ opacity: [0.3, 1, 0.3], x2: [56, 72, 56] }}
        transition={{
          duration: 2.2,
          delay: 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

/** Spinning crosshair — Investment Criteria */
function CriteriaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <motion.circle
        cx="60"
        cy="60"
        r="32"
        stroke={MUTED}
        strokeWidth="1"
        strokeDasharray="4 6"
        animate={{ rotate: 360, opacity: [0.35, 0.8, 0.35] }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          opacity: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.circle
        cx="60"
        cy="60"
        r="28"
        stroke={MUTED}
        strokeWidth="1.2"
        animate={{ scale: [1, 1.1, 1], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.circle
        cx="60"
        cy="60"
        r="16"
        stroke={GOLD}
        strokeWidth="1.5"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.circle
        cx="60"
        cy="60"
        r="5"
        fill={GOLD}
        animate={{ scale: [1, 1.45, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 60px" }}
      >
        <line x1="60" y1="18" x2="60" y2="36" stroke={GOLD} strokeWidth="1.5" />
        <line x1="60" y1="84" x2="60" y2="102" stroke={GOLD} strokeWidth="1.5" />
        <line x1="18" y1="60" x2="36" y2="60" stroke={GOLD} strokeWidth="1.5" />
        <line x1="84" y1="60" x2="102" y2="60" stroke={GOLD} strokeWidth="1.5" />
      </motion.g>
    </svg>
  );
}

/** Live checklist — What We Ask For */
function AskIcon({ className }: IconProps) {
  const rows = [36, 56, 76];
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <motion.rect
        x="28"
        y="24"
        width="64"
        height="72"
        rx="3"
        stroke={MUTED}
        strokeWidth="1.4"
        animate={{ opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {rows.map((y, i) => (
        <g key={y}>
          <motion.rect
            x="38"
            y={y}
            width="10"
            height="10"
            rx="1"
            stroke={GOLD}
            strokeWidth="1.4"
            animate={{
              opacity: [0.4, 1, 0.4],
              fill: ["transparent", GOLD, "transparent"],
            }}
            transition={{
              duration: 2.4,
              delay: i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d={`M40 ${y + 5} L42.5 ${y + 7.5} L47 ${y + 2.5}`}
            stroke={GOLD}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.6,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.line
            x1="56"
            y1={y + 5}
            y2={y + 5}
            stroke={MUTED}
            strokeWidth="1.5"
            animate={{
              x2: [62, 80, 62],
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 2.2,
              delay: 0.15 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>
      ))}
    </svg>
  );
}

const ICONS = {
  market: MarketIcon,
  sector: SectorIcon,
  stage: StageIcon,
  ticket: TicketIcon,
  criteria: CriteriaIcon,
  ask: AskIcon,
} as const;

export type CriteriaIconKey = keyof typeof ICONS;

const BACKDROPS: Record<CriteriaIconKey, string> = {
  market:
    "bg-[radial-gradient(ellipse_at_30%_20%,hsl(43_60%_58%/0.12),transparent_55%)]",
  sector:
    "bg-[linear-gradient(135deg,hsl(0_0%_100%/0.04),transparent_50%),repeating-linear-gradient(90deg,transparent,transparent_11px,hsl(0_0%_100%/0.03)_12px)]",
  stage:
    "bg-[radial-gradient(ellipse_at_70%_80%,hsl(43_60%_58%/0.1),transparent_50%)]",
  ticket: "bg-[linear-gradient(160deg,hsl(43_60%_58%/0.08),transparent_45%)]",
  criteria:
    "bg-[conic-gradient(from_210deg_at_50%_50%,hsl(43_60%_58%/0.08),transparent_40%,hsl(0_0%_100%/0.03)_70%,hsl(43_60%_58%/0.08))]",
  ask: "bg-[radial-gradient(circle_at_50%_40%,hsl(0_0%_100%/0.05),transparent_60%)]",
};

export function CriteriaIconPanel({
  type,
  className = "",
}: {
  type: CriteriaIconKey;
  className?: string;
}) {
  const Icon = ICONS[type];

  return (
    <div
      className={`relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-background/40 ${BACKDROPS[type]} ${className}`}
    >
      <motion.div
        className="relative h-[72%] w-[72%] max-w-[11rem]"
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          opacity: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.08 }}
      >
        <Icon className="h-full w-full" />
      </motion.div>
    </div>
  );
}
