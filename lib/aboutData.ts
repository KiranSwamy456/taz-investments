import { investmentImages } from "@/lib/investmentMedia";

export const HOW_WE_THINK = [
  {
    title: "Nation-scale problems produce world-class companies.",
    body: "The founders building in MENA aren't solving niche problems for narrow markets. They're rebuilding procurement infrastructure for a construction boom that is reshaping a country's physical landscape. They're reinventing how a generation learns. They're rethinking how entire industries move. That's not a regional play with a ceiling. That's a global opportunity with a home-ground advantage — and we back it like one.",
  },
  {
    title: "Capital without context is just noise.",
    body: "We've seen what happens when foreign capital arrives in MENA with a Western playbook and no regional instinct. It burns fast and exits quietly. Our team has been operating across Saudi Arabia, the UAE, India, and beyond for long enough to know the difference between a pattern that works here and one that just worked somewhere else. We don't import assumptions. We build from the ground up.",
  },
  {
    title: "The best investments are partnerships, not transactions.",
    body: "A cheque is the easy part. What matters — especially in MENA, where relationships move markets — is what comes after the wire. Go-to-market strategy, customer introductions, co-investor relationships, regulatory navigation, hiring advice: we've been through it ourselves, on both sides of the table. We show up at the moments that actually matter.",
  },
] as const;

export const WHAT_WE_LOOK_FOR = [
  {
    title: "Our investment criteria",
    body: "We back founders at the early to growth stage with ticket sizes ranging from $50,000 to $10 million — depending on stage, team composition, and the scale of the opportunity. We invest in Innovation that is scalable and replicable across geographies. We look for great team capabilities — not just a great idea, but the right people to execute it at speed. And we prioritise businesses that are solving real problems in sectors where the regional context gives them a structural advantage that is hard for outside competitors to replicate.",
    image: investmentImages.thesisCheque,
    imageAlt: "Investment criteria — early to growth stage capital",
  },
  {
    title: "Where we focus",
    body: "Our active investment sectors span Construction Tech, EdTech and Human Capital, Fintech and Financial Infrastructure, CleanTech and Circular Economy, Creative Economy, Commerce Technology, AgriTech, IoT and Smart Technology, and Deep Tech. Our geographic focus is Saudi Arabia primary — with active portfolio presence across Jordan, India, UAE, Kenya, Zambia, and 20+ countries through our GreenForest Solutions investment.",
    image: investmentImages.thesisGeography,
    imageAlt: "Geographic and sector focus across MENA and beyond",
  },
] as const;

export const TEAM = [
  {
    id: "rahul",
    name: "Rahul Bhardwaj",
    role: "Co-founder & Managing Partner",
    location: "Hyderabad, India",
    bio: "An alumnus of London Business School with a career built at the intersection of early-stage entrepreneurship and business incubation. He has worked extensively with founders in technology and innovation — advising on development, structuring business models, and building the strategic growth frameworks that turn a promising idea into a fundable company. His ability to envision the future of business and make decisive strategic calls from that vision is a defining characteristic of how TIC evaluates opportunity and structures its support for portfolio companies.",
  },
  {
    id: "waleed",
    name: "Waleed",
    role: "Co-founder & Managing Partner",
    location: "Saudi Arabia · Turkey · Japan",
    bio: "An Oxford University graduate with a career that spans partnership in the Riyadh Metro Development project and a senior role in Virgin Telecommunication. He has built businesses and relationships in some of the region's most strategically important environments — developing the business acumen and customer-trust-first approach that defines TIC's relationship with founders across Jordan, Turkey, and Egypt. His experience with large-scale infrastructure projects gives TIC a unique perspective on how governments, institutions, and investors interact in complex markets.",
  },
  {
    id: "ramadan",
    name: "Ramadan Ibrahim",
    role: "Manager Operations, Saudi Arabia",
    location: "Saudi Arabia",
    bio: "More than two decades in International Trade as a Purchasing Manager — a career that began in trade and expanded into start-ups, construction, and the energy sector. He is known for strategic planning and for an exceptional ability to read future trade trends and make tactical decisions that generate optimum value. That talent for spotting opportunity before the market prices it in — and acting on it with precision — is exactly the kind of instinct TIC brings to its investment process. He is the firm's anchor for institutional and industrial relationships.",
  },
] as const;

export const BY_THE_NUMBERS = [
  { value: "17", label: "Portfolio companies" },
  { value: "6", label: "Countries with active operations" },
  { value: "10+", label: "Sectors backed" },
  { value: "$50K – $2M", label: "Ticket size range" },
  { value: "20+", label: "Countries in portfolio network" },
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
