import { investmentImages } from "@/lib/investmentMedia";

export type PortfolioCompany = {
  id: string;
  name: string;
  initials: string;
  sector: string;
  stage: string;
  geo: string;
  oneLiner: string;
  descriptor: string;
  meta: { label: string; value: string }[];
  highlight?: string;
};

export const PORTFOLIO_COMPANIES: PortfolioCompany[] = [
  {
    id: "trubuild",
    name: "TruBuild",
    initials: "TB",
    sector: "Construction Tech",
    stage: "Growth",
    geo: "Saudi Arabia / MENA",
    oneLiner: "Enterprise Procurement Intelligence for Construction.",
    descriptor:
      "TruBuild is the platform that brings clarity, governance, and institutional memory to construction procurement. From scope verification through to contract award, it connects decision support and cost intelligence in one governed workspace — so every tender decision is faster, better evidenced, and smarter than the last.",
    meta: [
      {
        label: "Backers",
        value:
          "DAR Ventures · The Garage (KSA) · WAED by Aramco · Antler · Misk Foundation · TIC · IMAD Ventures · OQAL · Roshn Group",
      },
      {
        label: "Awards",
        value: "Deloitte Rising Star, Fast 50 Middle East 2025 · Google for Startups Accelerator MENA 2026",
      },
      { label: "Certifications", value: "ISO 27001" },
    ],
    highlight: "Validated on 2.2TB of real procurement data.",
  },
  {
    id: "maharat",
    name: "Maharat",
    initials: "MH",
    sector: "EdTech",
    stage: "Early Stage",
    geo: "Arab World (MENA)",
    oneLiner: "The platform that speaks to Arab learners in their own context.",
    descriptor:
      "Maharat reimagines education through masterclasses taught by regional leaders — built for Arab learners, not a Western product with Arabic subtitles applied as an afterthought.",
    meta: [
      { label: "Founded", value: "2022" },
      {
        label: "Co-founded by",
        value: "Bassem Jamaleddine and Arman Khederlarian",
      },
    ],
    highlight: "Unlimited 6/12-month memberships + single-class lifetime access.",
  },
  {
    id: "orbii",
    name: "Orbii.AI",
    initials: "OR",
    sector: "Fintech",
    stage: "Seed",
    geo: "GCC / MENA",
    oneLiner: "Intelligent infrastructure for modern lending.",
    descriptor:
      "Orbii provides infrastructure for fintech lenders to launch lending products quickly — using an AI engine for credit decisions where spreadsheets once ruled.",
    meta: [
      { label: "Raised", value: "$3.6M Seed" },
      { label: "Customers", value: "Foodics · SAB · Crediblex" },
    ],
    highlight: "Boosted Foodics loan approvals by 30% using Orbii's AI engine.",
  },
  {
    id: "greenforest",
    name: "GreenForest Solutions",
    initials: "GF",
    sector: "Cleantech / EPR",
    stage: "Growth",
    geo: "20+ Countries",
    oneLiner: "Making circular economy compliance a competitive advantage, not a burden.",
    descriptor:
      "GreenForest delivers Circularity-as-a-Service for brands managing product traceability and EPR compliance in emerging markets.",
    meta: [
      {
        label: "Active markets",
        value: "Zambia · Kenya · India · and 20+ country network",
      },
      {
        label: "Partners",
        value: "Prevent Waste Alliance · ISWA",
      },
    ],
    highlight: "Operational proof across the most complex EPR environments on the planet.",
  },
  {
    id: "manga-productions",
    name: "Manga Productions",
    initials: "MP",
    sector: "Creative Economy",
    stage: "Established",
    geo: "Saudi Arabia / Global",
    oneLiner: "Saudi Arabia's cultural voice, told through animation, games, and comics.",
    descriptor:
      "A subsidiary of the Mohammed bin Salman Misk Foundation, Manga Productions is building the creative infrastructure for a generation of Arab storytellers — producing animations, games, and comics that carry authentic Saudi and Arab stories to global audiences. Co-productions with Japan's Toei Animation. Distribution across the Middle East, Japan, US, and Europe.",
    meta: [
      { label: "Founded", value: "2017 · Subsidiary of Misk Foundation" },
      {
        label: "Key works",
        value:
          "Asateer: Future's Folktales (100M+ streams, 40+ platforms) · The Journey (feature film, global distribution)",
      },
      { label: "Partnerships", value: "Toei Animation (Japan) · Tokyo office since 2019" },
    ],
    highlight: "100M+ streams. The proof that stories from this region have a global audience.",
  },
  {
    id: "hashmybag",
    name: "HashMyBag",
    initials: "HB",
    sector: "Commerce Tech",
    stage: "Seed",
    geo: "India / GCC",
    oneLiner: "The chat layer that turns every store into an always-on sales channel.",
    descriptor:
      "Customers don't want to download apps or wait on hold — they want to chat. HashMyBag lets them talk directly to businesses, browse products, and pay without leaving the conversation. 600+ stores registered. 15,000+ installs. Active expansion into the GCC.",
    meta: [
      { label: "Traction", value: "600+ registered stores · 15,000+ installs · 4.5★ rating" },
      {
        label: "Enterprise pipeline",
        value: "Al Futtaim Group (Dubai) · Al Fardan Group (Doha) · Al Shaya Group (Riyadh / Kuwait)",
      },
    ],
    highlight: "Conversational commerce built for how people in emerging markets actually buy.",
  },
  {
    id: "airmelive",
    name: "AirMeLive",
    initials: "AL",
    sector: "Creative Tech",
    stage: "Seed",
    geo: "Global",
    oneLiner: "A stage for talent that hasn't had one yet.",
    descriptor:
      "Most talented people go undiscovered — not because they lack ability, but because they lack visibility. AirMeLive gives creators a platform to upload work, build an audience, and get noticed by viewers and investors who are actively looking.",
    meta: [],
    highlight: "Website link — to be confirmed",
  },
  {
    id: "markat",
    name: "Markat",
    initials: "MK",
    sector: "E-Commerce",
    stage: "Seed",
    geo: "Jordan / GCC",
    oneLiner: "International menswear brands, delivered to GCC customers without the friction.",
    descriptor:
      "Shopping for quality menswear in MENA has always meant travelling or compromising. Markat brings a curated library of international brands directly to customers in Jordan and across the GCC — verified, delivered, and built around customer trust.",
    meta: [],
    highlight: "Website link — to be confirmed",
  },
  {
    id: "pluck-fresh",
    name: "Pluck Fresh",
    initials: "PF",
    sector: "AgriTech",
    stage: "Seed",
    geo: "India",
    oneLiner: "Farm-fresh produce grown closer to where it's consumed.",
    descriptor:
      "Pluck Fresh takes the middleman out of the vegetable supply chain — training farmers on controlled cultivation technology and delivering produce so fresh that customers harvest it themselves at the retail outlet. Currently producing 2,000 boxes per day.",
    meta: [],
    highlight: "Website link — to be confirmed",
  },
  {
    id: "hope",
    name: "H.O.P.E",
    initials: "HP",
    sector: "EdTech",
    stage: "Seed",
    geo: "India",
    oneLiner: "Hi-Tech OMR Pen for Exams — seconds back where every second counts.",
    descriptor:
      "H.O.P.E is a dual-function pen that fills OMR bubbles in under a second — a hardware fix for India's competitive exam system, where over 50 million students still shade bubbles by hand.",
    meta: [{ label: "Impact", value: "Saves ~10 minutes per exam" }],
    highlight: "Built for JEE, NEET, UPSC and every bubble-sheet market beyond India.",
  },
  {
    id: "7nodes",
    name: "7Nodes",
    initials: "7N",
    sector: "Technology Services",
    stage: "Growth",
    geo: "India / Global",
    oneLiner: "The build partner that portfolio companies call when the spec needs to ship.",
    descriptor:
      "7Nodes has delivered 80+ technology projects across web, mobile, cloud, and AI — for clients across Asia, the Gulf, and beyond. When founders in the portfolio need a technology partner who builds on time and on spec, this is who we trust.",
    meta: [],
    highlight: "Website link — to be confirmed",
  },
  {
    id: "cocoon-nest",
    name: "Cocoon Nest",
    initials: "CN",
    sector: "Crowdfunding",
    stage: "Early Stage",
    geo: "MENA / North Africa",
    oneLiner: "The crowdfunding platform built for MENA's creators and innovators.",
    descriptor:
      "Hundreds of life-changing projects across the Middle East and North Africa go unnoticed every year — not for lack of ambition, but for lack of capital and visibility. Cocoon Nest was built to change that: a dedicated crowdfunding and equity funding platform giving aspiring innovators the infrastructure, coaching, and campaign management they need to turn ideas into funded realities.",
    meta: [
      { label: "Model", value: "Equity funding + reward-based funding" },
      {
        label: "Region",
        value: "Middle East and Northern Africa — MENA-first focus vs. global platforms",
      },
    ],
    highlight: "Pre-launch coaching and hands-on campaign management for every project.",
  },
  {
    id: "world-startup-expo",
    name: "World Startup Expo",
    initials: "WS",
    sector: "Startup Ecosystem",
    stage: "Established",
    geo: "India / Asia / GCC",
    oneLiner: "Asia's biggest startup event — bringing the global startup community together.",
    descriptor:
      "WSE is a multi-event initiative born from Cocoon Ventures' conviction that the world's best founders need a stage to connect with capital, mentorship, and markets. The inaugural event at Bengaluru International Exhibition Centre (2016) gathered 300+ startup exhibitors, 1,500+ hackathon participants, and national and international speakers across 50+ industry sectors — cementing WSE as a regional landmark event.",
    meta: [
      {
        label: "Inaugural event",
        value: "23 November 2016 · BIEC Bengaluru · 10,000 sqm exhibition area",
      },
      {
        label: "Sectors",
        value:
          "IoT · AgriTech · FinTech · Healthcare · Education · Robotics · Wearable Tech · 3D Printing · AR",
      },
      { label: "Global tie-up", value: "Regional Partner, Startup World Cup (San Francisco)" },
    ],
    highlight: "20+ award categories. Hackathon World Cup format. Conference, expo, and pitch competition under one roof.",
  },
  {
    id: "fashionistaz",
    name: "FASHIONISTAZ",
    initials: "FZ",
    sector: "Fashion E-Commerce",
    stage: "Early Stage",
    geo: "Jordan / MENA / Global",
    oneLiner: "A new era in fashion e-commerce — styled for women, powered by influence.",
    descriptor:
      "FASHIONISTAZ is reimagining women's online shopping across MENA using celebrity and influencer-driven platforms with real-time offers and in-depth analytics, targeting 17+ countries.",
    meta: [
      {
        label: "Market",
        value: "Women (70%) · Men (10%) · Children (10%) · High-tech gadgets (10%)",
      },
      {
        label: "Technology",
        value: "AWS payment gateway · celebrity endorsements · in-depth analytics system",
      },
      {
        label: "Target markets",
        value:
          "Jordan · UAE · KSA · Kuwait · Qatar · Bahrain · Oman · Egypt · Nigeria · Kenya · India · Morocco · Tunisia · Japan · S. Korea · Lebanon",
      },
    ],
    highlight: "In progress — launching across MENA",
  },
  {
    id: "indoor-farming",
    name: "Indoor Farming",
    initials: "IF",
    sector: "AgriTech / Hydroponics",
    stage: "Early Stage",
    geo: "India",
    oneLiner: "Growing food with a fraction of the land, a fraction of the water, and none of the pesticides.",
    descriptor:
      "Indoor Farming uses hydroponic technology to help Indian farmers grow consistent, organic produce in controlled environments — providing fixed profit shares and reliable income.",
    meta: [
      {
        label: "Technology",
        value: "Hydroponics — soil-free, pesticide-free, fully controlled growing environments",
      },
      {
        label: "Model",
        value: "Train farmers · buy harvest · sell to retailers/distributors · fixed farmer profit share",
      },
      {
        label: "Efficiency",
        value: "¼ the space of conventional farming · 25x less water · LED grow lights for CEA environments",
      },
      {
        label: "Mission",
        value: "Rural development — empowering farmers with technology and guaranteed income",
      },
    ],
    highlight: "In progress — government rural development program alignment",
  },
  {
    id: "blockchain",
    name: "Blockchain",
    initials: "BC",
    sector: "Smart Technology",
    stage: "R&D Stage",
    geo: "India",
    oneLiner: "Building the infrastructure layer for the next wave of blockchain adoption.",
    descriptor:
      "Exploring how blockchain can transform financial services — searching for the Killer App that unlocks mainstream adoption.",
    meta: [
      {
        label: "Focus areas",
        value:
          "Cross-border payments · share trading · smart contracts · online identity management · loyalty and rewards",
      },
      {
        label: "Stage",
        value: "Intense R&D — evaluating cryptocurrency investment opportunities",
      },
      {
        label: "Thesis",
        value: "Every transformative technology has a Killer App that unlocks mainstream adoption",
      },
    ],
    highlight: "In progress — R&D and crypto investment exploration underway",
  },
  {
    id: "useless-company",
    name: "The Useless Company",
    initials: "UC",
    sector: "IoT / Smart Technology",
    stage: "R&D Stage",
    geo: "UAE",
    oneLiner: "The R&D arm of the Cocoon Ventures ecosystem — dedicated to smart technology.",
    descriptor:
      "A skunkworks entity focusing on smartwatch and smartphone advancements — the innovation lab of the broader portfolio.",
    meta: [
      { label: "Focus", value: "Smartwatch and smartphone advancements · IoT wearables" },
      {
        label: "Notable concept",
        value: "Transparent screen clip — fashionable, always-on notifications without checking your phone",
      },
      {
        label: "Stage",
        value: "Pure R&D — the innovation lab of the Cocoon Ventures portfolio",
      },
    ],
    highlight: "Early concept stage — products in development",
  },
];

export type FeaturedSpotlight = {
  id: string;
  name: string;
  initials: string;
  tags: string;
  headline: string;
  body: string;
  /** Traction metrics shown as bold callouts */
  metrics?: { label: string; value: string }[];
  image: string;
  links: { label: string; href: string }[];
};

/** Featured spotlights — story layout, separate from gallery cards */
export const FEATURED_SPOTLIGHTS: FeaturedSpotlight[] = [
  {
    id: "trubuild",
    name: "TruBuild",
    initials: "TB",
    tags: "Construction Tech · Growth · KSA · 2023",
    headline: "Bringing institutional intelligence to Saudi Arabia's construction boom.",
    body: "Vision 2030 is rewriting how the Kingdom builds. TruBuild moves procurement from email and WhatsApp into structured software — with clarity, governance, and institutional memory from scope through award. Deloitte Rising Star 2025. Google for Startups Accelerator MENA 2026. Validated on 2.2TB of real procurement data.",
    image: investmentImages.focusConstruction,
    links: [
      { label: "Website", href: "#" },
      { label: "Case study", href: "/portfolio/trubuild" },
    ],
  },
  {
    id: "orbii",
    name: "Orbii.AI",
    initials: "OR",
    tags: "Fintech · Seed · GCC · 2023",
    headline: "The credit infrastructure the GCC's lenders have been waiting for.",
    body: "Orbii is the embedded lending layer for fintechs that need to go live fast — AI-driven credit decisions where spreadsheets once ruled. Seed round of $3.6M with Prosus and others. Customers include Foodics, SAB, and Crediblex.",
    metrics: [
      { value: "30%", label: "Boost in loan approvals" },
      { value: "48 hrs", label: "Go-live window" },
      { value: "$3.6M", label: "Seed raised" },
    ],
    image: investmentImages.focusFintech,
    links: [
      { label: "Website", href: "#" },
      { label: "Case study", href: "/portfolio/orbii" },
    ],
  },
  {
    id: "greenforest",
    name: "GreenForest Solutions",
    initials: "GF",
    tags: "Cleantech / EPR · Growth · 20+ Countries",
    headline: "Circular economy compliance as a competitive advantage — not a burden.",
    body: "GreenForest delivers Circularity-as-a-Service for brands managing product traceability and EPR compliance across emerging markets. Partners include Prevent Waste Alliance and ISWA. First in means first to scale.",
    metrics: [
      { value: "20+", label: "Country network" },
      { value: "EPR", label: "Compliance infrastructure" },
      { value: "CaaS", label: "Circularity-as-a-Service" },
    ],
    image: investmentImages.focusSustainability,
    links: [
      { label: "Website", href: "#" },
      { label: "Case study", href: "/portfolio/greenforest" },
    ],
  },
];

export const PORTFOLIO_SECTORS = Array.from(
  new Set(PORTFOLIO_COMPANIES.map((c) => c.sector))
).sort();

export const PORTFOLIO_STAGES = Array.from(
  new Set(PORTFOLIO_COMPANIES.map((c) => c.stage))
).sort();
