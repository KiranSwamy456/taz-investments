import { investmentImages } from "@/lib/investmentMedia";

export type BlogTopic = "All" | "Memo" | "Risk" | "Funds" | "Portfolio" | "Markets";

export const BLOG_TOPICS: BlogTopic[] = ["All", "Memo", "Risk", "Funds", "Portfolio", "Markets"];

export const PRESS_COVERAGE = [
  {
    id: "press-1",
    outlet: "Financial Times",
    date: "Mar 2025",
    title: "Early-stage firms tighten diligence without slowing closes",
    href: "#",
  },
  {
    id: "press-2",
    outlet: "TechCrunch",
    date: "Jan 2025",
    title: "Taz backs Harper Fintech in Series A for SMB cashflow tools",
    href: "#",
  },
  {
    id: "press-3",
    outlet: "The Information",
    date: "Nov 2024",
    title: "How smaller funds keep reserves for follow-on in volatile markets",
    href: "#",
  },
  {
    id: "press-4",
    outlet: "Bloomberg",
    date: "Sep 2024",
    title: "Founders seek partners who stay through plan changes",
    href: "#",
  },
] as const;

export const ANNOUNCEMENTS = [
  {
    id: "ann-1",
    type: "Fund",
    date: "Feb 2025",
    title: "Taz Investments closes Fund II at $180M hard cap",
    summary: "Focused on seed and Series A across fintech, software, and healthcare services in North America.",
  },
  {
    id: "ann-2",
    type: "Portfolio",
    date: "Dec 2024",
    title: "Summit Ledger completes Series A with Taz as lead",
    summary: "Bank-grade ledger infrastructure for regional lenders — round closed in under six weeks.",
  },
  {
    id: "ann-3",
    type: "Portfolio",
    date: "Oct 2024",
    title: "Red Canyon Logistics raises growth round",
    summary: "Fleet ops platform expands to three new regions with Taz participation.",
  },
  {
    id: "ann-4",
    type: "Firm",
    date: "Aug 2024",
    title: "Taz adds advisory bench for regulated fintech and healthcare",
    summary: "Three operators join as advisors to portfolio companies on risk and go-to-market.",
  },
] as const;

export const MEDIA_KIT = {
  pressEmail: "press@tazinvestments.com",
  assets: [
    { label: "Logo pack (SVG, PNG)", href: "#" },
    { label: "Partner headshots", href: "#" },
    { label: "Firm fact sheet (PDF)", href: "#" },
    { label: "Recent announcements (ZIP)", href: "#" },
  ],
} as const;

export const BLOG_POSTS = [
  {
    id: "blog-1",
    topic: "Memo" as const,
    date: "12 May 2025",
    title: "How we size seed checks in two meetings or less.",
    excerpt: "Our default path for seed: one narrative, one model, and a clear range before we ask for more data.",
    image: investmentImages.blogFeatured,
    featured: true,
  },
  {
    id: "blog-2",
    topic: "Risk" as const,
    date: "28 Apr 2025",
    title: "What we look for in fintech underwriting before we wire.",
    excerpt: "Cohort quality, loss notes, and the three questions we ask every credit-led founder.",
    image: investmentImages.blogA,
  },
  {
    id: "blog-3",
    topic: "Funds" as const,
    date: "15 Apr 2025",
    title: "Why we keep reserves for follow-on in every fund cycle.",
    excerpt: "Follow-on is not an afterthought — it is priced into how we size initial checks and LP reporting.",
    image: investmentImages.blogB,
  },
  {
    id: "blog-4",
    topic: "Portfolio" as const,
    date: "2 Apr 2025",
    title: "Building a data room founders do not hate.",
    excerpt: "Fewer folders, clearer risk sections, and one index page investors can actually use.",
    image: investmentImages.blogC,
  },
  {
    id: "blog-5",
    topic: "Markets" as const,
    date: "18 Mar 2025",
    title: "Reporting when the plan shifts mid-quarter.",
    excerpt: "How we help boards reset the story without hiding bad news from LPs or the next round.",
    image: investmentImages.d,
  },
  {
    id: "blog-6",
    topic: "Memo" as const,
    date: "4 Mar 2025",
    title: "The memo line we delete from every deck.",
    excerpt: "Buzzwords that hide missing unit economics — and what we want instead.",
    image: investmentImages.e,
  },
] as const;

export const newsroomImages = {
  press: investmentImages.newsroomPress,
  announce: investmentImages.newsroomAnnounce,
} as const;
