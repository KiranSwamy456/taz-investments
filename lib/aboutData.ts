import { investmentImages } from "@/lib/investmentMedia";

export const VALUES = [
  {
    title: "Investor-first",
    body: "We screen fairly, write in plain language, and keep reserves for follow-on so alignment survives the next round.",
  },
  {
    title: "Honest operators",
    body: "We push back when models drift. The best founders want partners who will say no clearly — and help fix what matters.",
  },
  {
    title: "Speed with discipline",
    body: "Two meetings or less for a clear yes or no. Diligence is tight, not endless — timelines you can plan around.",
  },
  {
    title: "Calm in volatility",
    body: "Markets move; boards still need clear numbers. We stay available when the plan shifts and the story has to change.",
  },
] as const;

export const TEAM = [
  {
    id: "jordan",
    name: "Jordan Ellis",
    role: "Managing Partner",
    bio: "Former operator in fintech infrastructure. Leads sourcing, pricing, and governance across seed and Series A.",
    image: investmentImages.team1,
  },
  {
    id: "maya",
    name: "Maya Okonkwo",
    role: "Partner",
    bio: "Ex-strategy lead at a growth fund. Runs diligence, memos, and portfolio support for B2B and healthcare names.",
    image: investmentImages.team2,
  },
  {
    id: "sam",
    name: "Sam Rivera",
    role: "Principal",
    bio: "Product and data background. Works with founders on metrics, board decks, and follow-on planning.",
    image: investmentImages.team3,
  },
  {
    id: "elena",
    name: "Elena Vasquez",
    role: "VP, Investor Relations",
    bio: "Keeps LPs and founders aligned on reporting — quarterly updates without the scramble.",
    image: investmentImages.c,
  },
] as const;

export const ADVISORS = [
  {
    id: "advisor-1",
    name: "Dr. James Whitfield",
    org: "Former CFO, Tier-1 bank",
    bio: "Advises on regulated fintech narratives, risk disclosure, and board-ready financial sections.",
  },
  {
    id: "advisor-2",
    name: "Priya Natarajan",
    org: "Healthcare operator",
    bio: "Helps portfolio teams navigate clinical milestones, payer dynamics, and enterprise sales cycles.",
  },
  {
    id: "advisor-3",
    name: "Marcus Holt",
    org: "Logistics & industrial",
    bio: "Supports ops-heavy companies on margin bridges, carrier relationships, and scale planning.",
  },
] as const;

export const WHO_WE_BACK = [
  "Seed and Series A operators with real revenue or a clear path within 12 months",
  "Fintech, software, healthcare, logistics, and climate — where cashflow and regulation meet",
  "Founders who own unit economics and report honestly when numbers move",
  "Teams that want a lead or co-lead partner, not a passive check",
] as const;

export const APPLICATION_STEPS = [
  {
    step: "01",
    title: "Share your deck",
    body: "Send the deck, model, and one paragraph on what you need from this round. We reply within a few business days.",
  },
  {
    step: "02",
    title: "Partner meeting",
    body: "A focused conversation on market, margin, and governance — not a generic pitch marathon.",
  },
  {
    step: "03",
    title: "Diligence & memo",
    body: "We run a tight process: market, risk, and terms in plain language. You get a clear yes, no, or what to fix.",
  },
  {
    step: "04",
    title: "Terms & close",
    body: "Simple docs, fair ownership, and a timeline you can plan around. We keep reserves for follow-on from day one.",
  },
] as const;

export const BEYOND_CAPITAL = [
  { title: "Board & memo support", body: "Prep for quarterly boards, investor updates, and the narrative for your next round." },
  { title: "Hiring & intros", body: "Operator introductions when you ask — light touch by default, hands-on when you need it." },
  { title: "Follow-on planning", body: "We size reserves upfront so you are not guessing who shows up in the B round." },
  { title: "LP clarity", body: "Reporting that helps your investors and ours — numbers, risks, and wins without noise." },
] as const;

export const aboutImages = {
  origin: investmentImages.team1,
  founders: investmentImages.thesisFounders,
} as const;
