import { investmentImages } from "@/lib/investmentMedia";

export type PortfolioStage = "Seed" | "Series A" | "Growth";
export type PortfolioSector =
  | "Fintech"
  | "Software"
  | "Healthcare"
  | "Logistics"
  | "Climate"
  | "Defense";

export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioCompany = {
  id: string;
  name: string;
  initials: string;
  sector: PortfolioSector;
  stage: PortfolioStage;
  year: number;
  oneLiner: string;
  links: PortfolioLink[];
  image: string;
  featured?: boolean;
  spotlight?: {
    headline: string;
    body: string;
  };
};

export const PORTFOLIO_SECTORS: PortfolioSector[] = [
  "Fintech",
  "Software",
  "Healthcare",
  "Logistics",
  "Climate",
  "Defense",
];

export const PORTFOLIO_STAGES: PortfolioStage[] = ["Seed", "Series A", "Growth"];

export const PORTFOLIO_YEARS = [2025, 2024, 2023, 2022] as const;

export const PORTFOLIO_COMPANIES: PortfolioCompany[] = [
  {
    id: "summit-ledger",
    name: "Summit Ledger",
    initials: "SL",
    sector: "Fintech",
    stage: "Series A",
    year: 2024,
    oneLiner: "Bank-grade ledger infrastructure for regional lenders and credit unions.",
    links: [
      { label: "Website", href: "#" },
      { label: "Case study", href: "#" },
    ],
    image: investmentImages.a,
    featured: true,
    spotlight: {
      headline: "Led Series A pricing with a regulator-ready narrative.",
      body: "Summit needed one story for banks, auditors, and growth — we tightened the risk section, the revenue path, and the governance pack so diligence finished in weeks, not months.",
    },
  },
  {
    id: "harper-fintech",
    name: "Harper Fintech",
    initials: "HF",
    sector: "Fintech",
    stage: "Series A",
    year: 2023,
    oneLiner: "SMB cashflow intelligence that connects accounting data to credit decisions.",
    links: [
      { label: "Website", href: "#" },
      { label: "Press", href: "#" },
    ],
    image: investmentImages.c,
    featured: true,
    spotlight: {
      headline: "Sharpened ICP and rollout for two new markets.",
      body: "We helped Harper rebalance pricing, product map, and the board deck around one metric stack — so the next round told a single story buyers and LPs could repeat.",
    },
  },
  {
    id: "red-canyon",
    name: "Red Canyon Logistics",
    initials: "RC",
    sector: "Logistics",
    stage: "Growth",
    year: 2024,
    oneLiner: "Fleet operations platform showing margin path carriers already trust.",
    links: [
      { label: "Website", href: "#" },
      { label: "Case study", href: "#" },
    ],
    image: investmentImages.d,
    featured: true,
    spotlight: {
      headline: "From first diligence to final deck in one operating language.",
      body: "Red Canyon’s ops risk was real but poorly framed. We rebuilt the data room around margin bridges and route-level proof — the round closed with less back-and-forth on the cap table.",
    },
  },
  {
    id: "northline-data",
    name: "Northline Data",
    initials: "ND",
    sector: "Software",
    stage: "Growth",
    year: 2023,
    oneLiner: "Turning noisy SaaS metrics into one investor-ready narrative each quarter.",
    links: [{ label: "Website", href: "#" }],
    image: investmentImages.b,
  },
  {
    id: "riverstone-pay",
    name: "Riverstone Pay",
    initials: "RP",
    sector: "Fintech",
    stage: "Seed",
    year: 2024,
    oneLiner: "Payments API with a simple story for regulators and enterprise buyers.",
    links: [
      { label: "Website", href: "#" },
      { label: "Docs", href: "#" },
    ],
    image: investmentImages.c,
  },
  {
    id: "lumen-bio",
    name: "Lumen Bio",
    initials: "LB",
    sector: "Healthcare",
    stage: "Seed",
    year: 2023,
    oneLiner: "Clinical milestone fundraising with one trial, one data room, fewer surprises.",
    links: [{ label: "Website", href: "#" }],
    image: investmentImages.c,
  },
  {
    id: "coastline-wealth",
    name: "Coastline Wealth",
    initials: "CW",
    sector: "Fintech",
    stage: "Series A",
    year: 2022,
    oneLiner: "RIA rollout with a calm brand and fee structure HNW clients understand.",
    links: [{ label: "Website", href: "#" }],
    image: investmentImages.e,
  },
  {
    id: "alta-defense",
    name: "Alta Defense",
    initials: "AD",
    sector: "Defense",
    stage: "Seed",
    year: 2024,
    oneLiner: "Sensors plus finance workflows for dual-use buyers — technical depth without jargon.",
    links: [
      { label: "Website", href: "#" },
      { label: "Memo", href: "#" },
    ],
    image: investmentImages.f,
  },
  {
    id: "ember-credit",
    name: "Ember Credit",
    initials: "EC",
    sector: "Fintech",
    stage: "Seed",
    year: 2023,
    oneLiner: "Underwriting stories with tighter cohorts and faster board-ready loss notes.",
    links: [{ label: "Website", href: "#" }],
    image: investmentImages.a,
  },
  {
    id: "fieldstone-saas",
    name: "Fieldstone",
    initials: "FS",
    sector: "Software",
    stage: "Series A",
    year: 2024,
    oneLiner: "Pipeline cash visibility for four hundred teams — rebalance for enterprise buyers.",
    links: [{ label: "Website", href: "#" }],
    image: investmentImages.b,
  },
  {
    id: "silver-maple-ev",
    name: "Silver Maple EV",
    initials: "SM",
    sector: "Climate",
    stage: "Seed",
    year: 2024,
    oneLiner: "Regional EV charging roll-up with credible numbers and a clean scale path.",
    links: [{ label: "Website", href: "#" }],
    image: investmentImages.e,
  },
  {
    id: "matrix-vault",
    name: "Matrix Vault",
    initials: "MV",
    sector: "Software",
    stage: "Series A",
    year: 2022,
    oneLiner: "Large-file sharing with audit trails — one buyer story, one security page.",
    links: [
      { label: "Website", href: "#" },
      { label: "Security", href: "#" },
    ],
    image: investmentImages.a,
  },
  {
    id: "pinnacle-pipeline",
    name: "Pinnacle Pipeline",
    initials: "PP",
    sector: "Software",
    stage: "Growth",
    year: 2023,
    oneLiner: "One forecast view from a messy RevOps stack — shown to buyers in a single sitting.",
    links: [{ label: "Website", href: "#" }],
    image: investmentImages.f,
  },
];

export const FEATURED_SPOTLIGHTS = PORTFOLIO_COMPANIES.filter((c) => c.featured && c.spotlight);
