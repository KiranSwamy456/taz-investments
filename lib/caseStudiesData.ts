import { investmentImages } from "@/lib/investmentMedia";

export type CaseStudySection = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  initials: string;
  sector: string;
  stage: string;
  geo: string;
  image: string;
  sections: CaseStudySection[];
  metrics?: { value: string; label: string }[];
  quote?: string;
  cta: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "trubuild",
    name: "TruBuild",
    initials: "TB",
    sector: "Construction Tech",
    stage: "Growth",
    geo: "Saudi Arabia",
    image: investmentImages.focusConstruction,
    sections: [
      {
        title: "The Context",
        body: "Saudi Arabia is in the middle of the largest construction programme in its history. Vision 2030 has put tens of billions of dollars into infrastructure, real estate, and urban development — NEOM, Diriyah, The Red Sea Project, Qiddiya — projects that are reshaping the country's physical landscape. Behind every one of those projects is a procurement process: bids, contracts, change orders, approvals. Most of those decisions were being managed on email threads, spreadsheets, and WhatsApp groups. The institutional knowledge walked out the door when a project ended.",
      },
      {
        title: "The Company",
        body: "TruBuild is the enterprise procurement intelligence platform for construction teams. Two product suites: decision support tools (scope verification, RFP creation, prequalification, tender evaluation, contract analysis) and intelligence tools (cost intelligence, vendor intelligence, a knowledge graph that builds institutional memory across every project). ISO 27001 certified. Validated on 2.2TB of real procurement data. Built for owners, developers, advisors, and PMOs — not retrofitted from a Western SaaS product.",
      },
      {
        title: "Why TIC Backed Them",
        body: "TruBuild sits at the intersection of regional necessity and technology timing. Vision 2030 projects need a smarter procurement layer. The category was underfunded and underestimated when we looked at it. The founding team understood how large construction decisions actually get made — and where they go wrong — with a depth that set them apart from generic SaaS plays. That's the window TIC looks for: a problem that's large, a category that's early, and a team with genuine inside knowledge.",
      },
      {
        title: "What We Did Together",
        body: "Beyond capital, TIC worked alongside the TruBuild team on go-to-market positioning — specifically how to reach the three distinct buyers in a construction project: the developer, the main contractor, and the specialist subcontractor. Each has different pain points and different decision-making authority. Getting that clarity early shaped the product roadmap and the sales motion. We also opened doors to real estate developers and project owners in the Saudi market who became early adopters. The broader investor group — Roshn Group, WAED by Aramco, Antler, DAR Ventures, The Garage (KSA), OQAL, Misk Foundation, IMAD Ventures — reflects that network at scale.",
      },
      {
        title: "Where They're Headed",
        body: "TruBuild is deepening enterprise adoption in Saudi Arabia before expanding into the UAE and wider GCC. The Vision 2030 pipeline provides a growth runway that most SaaS companies would need a decade to build. Deloitte named them a Rising Star in their Fast 50 Middle East 2025 list. Google selected them for the Startups Accelerator MENA cohort in 2026. The market is validating what TIC saw early.",
      },
    ],
    cta: "Building in construction tech? Raise With Us.",
  },
  {
    slug: "maharat",
    name: "Maharat",
    initials: "MH",
    sector: "EdTech",
    stage: "Early Stage",
    geo: "MENA",
    image: investmentImages.focusEducation,
    sections: [
      {
        title: "The Context",
        body: "The Arab world has one of the youngest populations on the planet — over 60% of the MENA region is under 30. That's a generation entering education and careers at a moment when the region is rewriting what economic participation looks like. The EdTech response to this was largely imported: English-language platforms with Arabic subtitles, course catalogues built for Western job markets, instructors with no understanding of how Arab learners think. The gap between what was available and what was needed was significant.",
      },
      {
        title: "The Company",
        body: "Maharat is an edutainment platform for Arab learners — the region's answer to MasterClass. Co-founded in 2022 by Bassem Jamaleddine and Arman Khederlarian, it delivers premium masterclasses taught by the region's most respected creators, entrepreneurs, and industry leaders. Classes run 2–3 hours in high-production, story-driven format. Instructors include Ragheb Alama, Toufic Kreidieh, Bassam Fattouh, and Kosai Khauli. Memberships give unlimited access; single-class purchases give lifetime access. Built natively for Arab learners — not translated from somewhere else.",
      },
      {
        title: "Why TIC Backed Them",
        body: "Maharat showed us something the market kept missing: the EdTech opportunity in MENA isn't about bringing existing platforms here — it's about building something new that starts with the learner and works backward. That insight — obvious in retrospect, ignored in practice by most players — is exactly the founding conviction we look for. When a team understands their market well enough to say 'we need to build this differently,' and they're right, the category is theirs to shape.",
      },
      {
        title: "What We Did Together",
        body: "TIC's support focused on two areas: strategic positioning and ecosystem access. On positioning, we worked with the team to sharpen Maharat's differentiation argument — that localisation is not translation. That distinction matters enormously when talking to corporate customers, government partners, and institutional investors who have seen failed EdTech experiments in the region. On ecosystem access, we made introductions to regional corporate partners interested in structured employee upskilling programmes — a revenue channel that significantly improves unit economics compared to direct-to-consumer alone.",
      },
      {
        title: "Where They're Headed",
        body: "Maharat's growth strategy centres on corporate and institutional contracts — companies and government bodies that need structured upskilling programmes for large employee cohorts. The B2C platform builds the brand and content library; the B2B contracts build the revenue. As MENA economies push on national workforce development, the companies running that training infrastructure will become critical partners to governments. Maharat is building toward that position deliberately.",
      },
    ],
    cta: "Building in EdTech or human capital? Raise With Us.",
  },
  {
    slug: "orbii",
    name: "Orbii.AI",
    initials: "OR",
    sector: "Fintech",
    stage: "Seed",
    geo: "GCC / MENA",
    image: investmentImages.focusFintech,
    metrics: [
      { value: "$3.6M", label: "Seed raised" },
      { value: "48 hrs", label: "Go-live window" },
      { value: "+30%", label: "Foodics approvals" },
    ],
    sections: [
      {
        title: "The Context",
        body: "Embedded lending is the next chapter for GCC financial services. Fintechs, neobanks, and merchant platforms want to offer credit products. Their customers need them. But standing up credit decisioning, compliance, and scoring infrastructure from scratch is expensive and slow — and most of the infrastructure to support it in the GCC is still being built. The result is an underserved lending gap in a region with strong smartphone penetration, growing consumer spending, and significant SME demand.",
      },
      {
        title: "The Company",
        body: "Orbii provides the intelligent infrastructure for modern lending. Their platform handles every step: ingesting raw financial data (API, CSV, or PDF), classifying transactions, enriching bank statements into 1,000+ borrower metrics, and delivering automated credit decisions in seconds via webhooks. Six purpose-built AI models power the engine — DEX (transaction classification), RYN (real-time risk and fraud scoring), TARS (explainable credit recommendations), CASE (business activity validation), PLEX (graph intelligence on financial interactions), and KIPP (predicted future company performance). All trained on GCC-native datasets. New lenders go live in 48 hours.",
      },
      {
        title: "Why TIC Backed Them",
        body: "Orbii is an infrastructure bet, not a product bet — and infrastructure compounds differently. Every lender that plugs into Orbii becomes a distribution channel. Every loan approved makes the model smarter. TIC saw a team that understood the region's credit complexity at a technical depth most lenders don't have, and were building the layer that the next generation of GCC fintech companies would be built on top of. That's the kind of timing and positioning we back.",
      },
      {
        title: "What We Did Together",
        body: "TIC's backing was part of Orbii's $3.6M seed round alongside Prosus, VentureSouq, Dash Ventures, and Sanabil 500. The round gave Orbii the runway to close key customer partnerships including SAB, Crediblex, Spare, Dubai Chamber of Commerce, and Foodics — where Orbii's AI engine helped boost loan approval rates by 30%. TIC also helped the team sharpen their commercial framing for banks versus alternative finance providers, who have very different buying processes.",
      },
      {
        title: "Where They're Headed",
        body: "Orbii is expanding its customer base across the GCC while deepening the product suite — including Slack and CRM-native interfaces for lenders operating inside the tools they already use. With the GCC's embedded finance market growing significantly through 2030 and open banking frameworks developing across the region, Orbii is positioned as the infrastructure layer the entire sector needs.",
      },
    ],
    cta: "Building in fintech or lending infrastructure? Raise With Us.",
  },
  {
    slug: "greenforest",
    name: "GreenForest Solutions",
    initials: "GF",
    sector: "Cleantech / EPR",
    stage: "Growth",
    geo: "Global",
    image: investmentImages.focusSustainability,
    metrics: [
      { value: "20+", label: "Country network" },
      { value: "CaaS", label: "Circularity-as-a-Service" },
      { value: "ISO", label: "27001 & GDPR" },
    ],
    sections: [
      {
        title: "The Context",
        body: "Extended Producer Responsibility — EPR — regulation is expanding fast. Governments across Asia, Africa, and the Middle East are now mandating that brands, manufacturers, and importers take responsibility for what happens to their products at end-of-life. Most companies don't know where to start, and the operational systems to manage it don't exist in many markets. That gap — between legislative intent and operational reality — is where GreenForest Solutions was built.",
      },
      {
        title: "The Company",
        body: "GreenForest Solutions offers Circularity-as-a-Service (CaaS): a fully integrated platform for product stewardship, reverse logistics, digital waste-flow management, regulatory compliance, and recycled material sourcing in emerging markets. Three product lines: PROcess (waste operators), PROcycle (brands), PROcure (manufacturers). Active in Zambia (AfriCycle for plastics, ElectroCycle for WEEE), Kenya (ECOTEX — the first textile EPR scheme in Africa), India (Landbell GFS, PAN-India since 2021), and Southeast Asia (EPR readiness assessment commissioned by the World Bank across 122 variables). 20+ country network. ISO 27001 and GDPR certified.",
      },
      {
        title: "Why TIC Backed Them",
        body: "GreenForest sits at the convergence of two large forces: tightening global regulation and the urgent need for circular economy infrastructure in markets often overlooked by Western technology players. TIC's thesis includes backing companies that are building for the region with global ambition — and GFS operates at exactly that scale. They are not a consulting business with a spreadsheet. They are a technology platform with operational proof across the most complex EPR environments on the planet.",
      },
      {
        title: "What We Did Together",
        body: "TIC's backing complemented a global investor and partner base that includes the Prevent Waste Alliance, Solar Impulse Foundation, German Retech Partnership, and ISWA. TIC brought GCC-specific network access and helped position GFS for expansion into the region's growing sustainability compliance environment — where Vision 2030 mandates are creating new obligations for manufacturers at scale.",
      },
      {
        title: "Where They're Headed",
        body: "GreenForest is expanding its country network and deepening product depth. Their Circularity Navigator tool, the World Bank-commissioned EPR assessment work, and a 20+ country operational footprint give them a head start that is genuinely difficult to replicate. As the GCC tightens sustainability mandates and multinationals sourcing from the region demand circular supply chain credentials, GreenForest's customer base has a second, non-regulatory growth driver that strengthens the long-term thesis.",
      },
    ],
    cta: "Building in CleanTech or sustainability? Raise With Us.",
  },
  {
    slug: "hashmybag",
    name: "HashMyBag",
    initials: "HB",
    sector: "Commerce Tech",
    stage: "Seed",
    geo: "India / GCC",
    image: investmentImages.blogA,
    metrics: [
      { value: "600+", label: "Registered stores" },
      { value: "15,000+", label: "App installs" },
      { value: "4.5★", label: "Rating" },
    ],
    sections: [
      {
        title: "The Context",
        body: "Commerce in emerging markets doesn't follow the Western e-commerce playbook. In markets across India, the GCC, and Southeast Asia, customers make purchase decisions through conversations — with store owners they know, through channels they already use, at a pace that a checkout funnel doesn't accommodate. The dominant consumer commerce infrastructure was built for a different context. The gap between how people in these markets actually buy and what the technology was asking them to do created an opportunity that most investors missed because they were looking in the wrong direction.",
      },
      {
        title: "The Company",
        body: "HashMyBag is a B2C merchant chat application that places a live conversation layer between businesses and their customers. Stores register on the platform, connect with their customer base, and can send offers, answer questions, share product images, and accept payments — all inside a chat interface the customer is already using. No app download. No checkout funnel. No intermediaries taking margin on every transaction. The merchant dashboard gives store owners analytics, customer management, and marketing tools that typically require three separate platforms.",
      },
      {
        title: "The Traction",
        body: "At the time of TIC's investment, HashMyBag had 600+ registered stores, 15,000+ app installs, a 4.5-star rating, and active partnership discussions with Al Futtaim Group (Dubai), Al Fardan Group (Doha), and Al Shaya Group (Riyadh and Kuwait) — three of the region's largest retail conglomerates. The GCC expansion strategy was already in motion, targeting the same commerce behaviour patterns in a market with significantly higher average transaction values.",
      },
      {
        title: "Why TIC Backed Them",
        body: "HashMyBag solved a real problem in a real market with early proof that the model worked. The traction numbers mattered, but what mattered more was the insight behind the product: that commerce in emerging markets is conversational, and the right infrastructure for that isn't a checkout page — it's a chat window. When a founder's product architecture reflects a genuine understanding of their customer's behaviour, not just their demographic, the company has something hard to replicate.",
      },
      {
        title: "What We Did Together",
        body: "TIC's support focused on the GCC expansion strategy — specifically how to approach enterprise retail partners in the Gulf, who have different procurement processes, contract requirements, and technology integration expectations than the Indian market the product was built in. We worked with the team on commercial framing for their partnership conversations with Al Futtaim, Al Fardan, and Al Shaya — positioning HashMyBag as customer engagement infrastructure rather than a channel marketing tool, which opened different budget conversations.",
      },
      {
        title: "Where They're Headed",
        body: "HashMyBag's GCC expansion is the central growth thesis. The product is proven in India. The behaviour it's built for — conversational commerce, direct merchant-to-customer relationships — is more pronounced in the Gulf, where WhatsApp commerce is normalised and customer expectations for personalised service are high. Converting even one of the three major retail groups changes the scale of the business meaningfully.",
      },
    ],
    cta: "Building in commerce tech or consumer platforms? Raise With Us.",
  },
  {
    slug: "airmelive",
    name: "AirMeLive",
    initials: "AL",
    sector: "Creative Tech",
    stage: "Seed",
    geo: "Global",
    image: investmentImages.focusCreative,
    sections: [
      {
        title: "The Context",
        body: "The creative economy is one of the fastest-growing sectors globally — but access to it is profoundly unequal. Most talented people never get discovered, not because they lack ability, but because they lack the visibility and the infrastructure to be seen. Traditional talent discovery relies on geography, connections, and luck. A vocalist in Kerala, a filmmaker in Cairo, a designer in Amman — they all face the same structural wall: the people who could recognise and support their talent have no mechanism to find them. AirMeLive was built to tear that wall down.",
      },
      {
        title: "The Company",
        body: "AirMeLive is a mobile-first talent showcase platform where creators upload their work, build an audience, and get discovered by viewers, corporates, and investors actively looking for talent. Founded by Nebu Abraham, AirMeLive lets users register their skills, join interest-based communities, collaborate with other creators, and participate in campaigns and contests launched by organisations and brands. The platform's core premise is simple: talent should be visible to anyone who is looking for it, regardless of where the creator lives or who they know.",
      },
      {
        title: "Why TIC Backed Them",
        body: "The creative economy is a priority sector for Vision 2030 — Saudi Arabia is investing significantly in entertainment, media, and cultural production. AirMeLive sits at the intersection of that ambition and a genuine platform gap. Most talent discovery platforms were built for the Western creator economy. AirMeLive is building for a global audience with a particular strength in emerging markets — exactly where the next generation of creative talent is concentrated. TIC backed them because the mission is right, the timing is right, and the market is one that very few infrastructure players have taken seriously yet.",
      },
      {
        title: "What We Did Together",
        body: "TIC's support for AirMeLive has focused on positioning the platform for the GCC market — where the appetite for original creative content, particularly from Arab and South Asian creators, is growing fast. We helped the team understand how corporate clients in the Gulf approach talent sourcing and campaign partnerships, and what those buyers need to see before they commit budget. The Cocoon Ventures network also gave AirMeLive access to portfolio companies and ecosystem partners across India, the Gulf, and beyond.",
      },
      {
        title: "Where They're Headed",
        body: "AirMeLive is expanding its creator base and building out its corporate campaigns product — the channel through which brands and organisations engage platform talent for real briefs. As the creator economy matures across MENA and South Asia, platforms that have an established creator community and a track record with corporate clients will be significantly advantaged. That is the position AirMeLive is building toward.",
      },
    ],
    cta: "Building in creative tech or media? Raise With Us.",
  },
  {
    slug: "pluck-fresh",
    name: "Pluck Fresh",
    initials: "PF",
    sector: "AgriTech",
    stage: "Seed",
    geo: "India",
    image: investmentImages.focusSustainability,
    sections: [
      {
        title: "The Context",
        body: "India's fresh produce supply chain is one of the most inefficient in the world. Between the farm and the consumer, vegetables change hands four or five times — each handoff adding cost, time, and spoilage. The result is that farmers earn a fraction of the retail price, consumers pay more than they should, and a significant proportion of produce never makes it to the shelf in good condition. The market is enormous — fresh vegetables are a daily purchase for nearly every Indian household — and the structural problems are well understood. What was missing was a model that solved them at the farm level rather than the logistics level.",
      },
      {
        title: "The Company",
        body: "Pluck Fresh removes the middleman from the vegetable supply chain by going deeper than logistics — working directly at the cultivation stage. The company trains farmers on controlled cultivation technology, enabling them to grow produce to a consistent standard in conditions that dramatically reduce spoilage and waste. The model is built around freshness as the product: Pluck Fresh retail outlets let customers harvest the produce themselves, guaranteeing a standard of freshness that no conventional supply chain can match. Currently producing 2,000 boxes per day, with a model that is scalable with each new farm onboarded.",
      },
      {
        title: "Why TIC Backed Them",
        body: "Food security and supply chain efficiency are priorities across the Gulf and MENA — not just India. TIC backed Pluck Fresh because the controlled cultivation model solves a problem that is just as relevant in a Saudi greenhouse as it is in an Indian field. The unit economics of working directly with trained farmers are structurally superior to distribution-led models, and the freshness positioning creates genuine product differentiation that is hard for commodity players to replicate. This is an AgriTech bet with a clear regional expansion path.",
      },
      {
        title: "What We Did Together",
        body: "TIC's involvement with Pluck Fresh has centred on the question of scalability — specifically, how to replicate the controlled cultivation model across new geographies without losing the quality standard that defines the product. We have worked with the team on the farmer training programme and the criteria for selecting expansion markets. The Cocoon Ventures network also opened conversations with potential distribution and retail partners in the GCC, where premium fresh produce commands a significantly higher price point.",
      },
      {
        title: "Where They're Headed",
        body: "Pluck Fresh is expanding its farm network within India while exploring the GCC as its first international market — a region that imports the majority of its fresh vegetables and has clear demand for traceable, high-quality produce. The 2,000-boxes-per-day production baseline is the proof of concept. The growth story is about how many farms can be onboarded to the controlled cultivation model, and how quickly the retail experience — harvest-it-yourself freshness — can be replicated in new markets.",
      },
    ],
    cta: "Building in AgriTech or food supply chains? Raise With Us.",
  },
  {
    slug: "hope",
    name: "H.O.P.E",
    initials: "HP",
    sector: "EdTech",
    stage: "Seed",
    geo: "India",
    image: investmentImages.focusEducation,
    metrics: [{ value: "10 min", label: "Saved per exam" }],
    sections: [
      {
        title: "The Context",
        body: "Every year, more than 50 million students in India sit competitive entrance examinations — JEE, NEET, UPSC, banking exams, state boards, and dozens of others. Every one of those exams uses an OMR (Optical Mark Recognition) answer sheet, where students fill bubbles by hand to record their answers. Filling each bubble takes approximately 3 seconds. Across a 100-question paper, that is five minutes. Across a 200-question paper — standard for many entrance exams — that is more than ten minutes. In a three-hour exam, ten minutes is the difference between attempting all questions and not. Nobody had built anything about it. Until H.O.P.E.",
      },
      {
        title: "The Company",
        body: "H.O.P.E — Hi-Tech OMR Pen for Exams — is a dual-function pen designed specifically for students who sit OMR-based examinations. One end fills OMR bubbles fast and cleanly, completing each bubble in under a second. The other end functions as a standard rollerball pen for written sections. The result: students save more than 10 minutes per exam — time that can be reinvested into answering questions rather than marking them. For students whose exam outcome determines their career trajectory, those ten minutes are not a convenience. They are consequential. H.O.P.E is a hardware solution to an exam-system problem that has existed for decades and been ignored.",
      },
      {
        title: "Why TIC Backed Them",
        body: "H.O.P.E is one of the most precisely targeted products in the portfolio. The problem is specific, the solution is physical, the market is enormous, and the product delivers a measurable, provable benefit that every student can experience in seconds. TIC looks for founders who understand their customer's daily reality at a granular level — and the H.O.P.E team built something that you only build if you have sat in that exam hall, watched minutes disappear into bubble-filling, and decided to do something about it. The market in India alone is 50 million students per exam cycle. The MENA student population faces the same standardised testing infrastructure.",
      },
      {
        title: "What We Did Together",
        body: "TIC's support for H.O.P.E has focused on distribution strategy — specifically, how to get the product into students' hands at the moments that matter: before major exam seasons, through coaching institutes, school networks, and stationery retail channels. We also worked with the team on the case for institutional procurement — convincing coaching centres and schools to supply the pen as part of their exam preparation offering rather than relying on individual student purchase. The Cocoon Ventures network provided introductions to education sector players across India and the Gulf.",
      },
      {
        title: "Where They're Headed",
        body: "H.O.P.E is scaling distribution across India's major exam markets — starting with the states with the highest concentration of competitive exam candidates: Uttar Pradesh, Bihar, Rajasthan, Maharashtra, and Karnataka. The institutional sales channel — coaching institutes and school boards that supply exam materials directly to students — is the highest-leverage growth path. Longer term, the product is directly applicable in any market that uses bubble-sheet standardised testing, which includes significant parts of MENA, Southeast Asia, and Africa.",
      },
    ],
    cta: "Building in EdTech or consumer hardware? Raise With Us.",
  },
  {
    slug: "7nodes",
    name: "7Nodes",
    initials: "7N",
    sector: "Technology Services",
    stage: "Growth",
    geo: "India / Global",
    image: investmentImages.focusDeepTech,
    metrics: [{ value: "80+", label: "Projects delivered" }],
    sections: [
      {
        title: "The Context",
        body: "Finding a technology partner who executes without hand-holding — who builds to specification, ships on time, and doesn't leave technical debt behind — is one of the hardest operational problems for early-stage companies. The technology services market is full of vendors who overpromise and underdeliver. 7Nodes is the partner TIC trusts to deliver quality work without enterprise pricing.",
      },
      {
        title: "The Company",
        body: "7Nodes Technology Solutions is a full-stack technology services company based in Kerala, India, founded in 2015. The team delivers web, mobile, cloud, and AI projects for startups and enterprise clients across entertainment, retail, healthcare, and enterprise sectors — with a client base spanning Asia, the Gulf, and beyond. 80+ projects delivered. Technology partners in Canada, Australia, and the UAE. Stack includes Ruby on Rails, PHP, Android, iOS, and Java. They handle the full product lifecycle from build to launch — combining the execution capability of a mature firm with the responsiveness of a founder-led team.",
      },
      {
        title: "Why TIC Backed Them",
        body: "Portfolio companies need builders, not just strategists. 7Nodes is an enabling infrastructure company — the kind that makes other companies possible. When a founder in the portfolio needs to ship a feature, rebuild a backend, or launch a mobile product, they need a partner who delivers consistently and understands early-stage company needs. That's why TIC backed them.",
      },
      {
        title: "What We Did Together",
        body: "7Nodes has become a trusted technology execution partner within the Cocoon Ventures and TIC ecosystem. TIC facilitated introductions between 7Nodes and portfolio companies that needed development support — creating a flywheel where 7Nodes gained a pipeline of quality clients, and portfolio companies gained a development partner that already understands their ecosystem context. Those introductions have also opened commercial relationships in the UAE and the broader GCC, markets 7Nodes was not previously reaching.",
      },
      {
        title: "Where They're Headed",
        body: "7Nodes is expanding its Gulf and international client base while deepening capabilities in AI-integrated product development — their fastest-growing area of client demand. With a proven delivery record across 80+ projects and existing technology partnerships in Canada, Australia, and the UAE, the company is positioned to serve the next wave of digital product builds across MENA and South Asia.",
      },
    ],
    cta: "Need a technology build partner? Talk to us.",
  },
  {
    slug: "cocoon-nest",
    name: "Cocoon Nest",
    initials: "CN",
    sector: "Crowdfunding",
    stage: "Early Stage",
    geo: "MENA / North Africa",
    image: investmentImages.thesisCheque,
    sections: [
      {
        title: "The Context",
        body: "Crowdfunding platforms like Kickstarter and Indiegogo transformed how creators raise capital — but they were built for Western creators and Western audiences. For innovators across the Middle East and North Africa, those global platforms offered little: discovery algorithms that didn't surface MENA projects, currency and payment infrastructure that didn't work for regional backers, and community networks that didn't map to how founders here actually raise. Limited access to early-stage capital left a clear gap — and an opportunity to build something purpose-built for the region.",
      },
      {
        title: "The Company",
        body: "Cocoon Nest is the crowdfunding platform for MENA. It combines equity funding and reward-based funding in a single interface. Every campaign runs through a disciplined entry model: pre-launch coaching, hands-on campaign management, and full marketing support before going live. Quality over volume — only the most promising ideas are admitted, so every campaign can serve as a brand ambassador for the platform. Cocoon Nest competes directly with global platforms in a geography they have largely ignored.",
      },
      {
        title: "Why TIC Backed Them",
        body: "TIC saw crowdfunding infrastructure as a foundational piece of the regional startup ecosystem — not a marginal opportunity. There was a clear gap for early-stage founders who cannot raise traditional angel capital. A regional platform succeeds by being genuinely useful to the communities and founders global platforms don't serve. Cocoon Nest's labour-intensive, high-quality coaching model was the right first-mover approach to build trust in a new market — not a copy of a Western playbook.",
      },
      {
        title: "What We Did Together",
        body: "TIC's support focused on building the campaign pipeline and establishing Cocoon Nest as a credible capital channel for early-stage MENA founders. We connected the platform to the broader Cocoon Ventures portfolio ecosystem — channelling product-based companies from WSE pitch competitions and AirMeLive campaigns onto the platform. Startups that pitched at WSE but didn't qualify for direct investment were routed to Cocoon Nest for crowdfunding. The Gulf Angel Investment Network (GAIN) handled equity rounds for companies not yet ready for venture capital. That integrated ecosystem design is deliberate.",
      },
      {
        title: "Where They're Headed",
        body: "Cocoon Nest aims to be the infrastructure layer connecting MENA's grassroots innovation to patient capital. As the regional startup ecosystem matures, demand grows for early-stage funding channels that understand the local market. The platform differentiates by being more than a marketplace — it is a coaching and campaign management service. Expansion across the GCC and North Africa, into creator and innovator communities, is the natural growth path.",
      },
    ],
    cta: "Early-stage MENA founder? Talk to us.",
  },
  {
    slug: "world-startup-expo",
    name: "World Startup Expo",
    initials: "WS",
    sector: "Startup Ecosystem",
    stage: "Established",
    geo: "India / Asia / GCC",
    image: investmentImages.thesisGeography,
    metrics: [
      { value: "300+", label: "Exhibitors" },
      { value: "1,500+", label: "Hackathon participants" },
      { value: "20+", label: "Award categories" },
    ],
    sections: [
      {
        title: "The Context",
        body: "Startups don't just need capital — they need access. Access to investors who understand what they're building. Access to other founders who have faced the same problems. Access to corporate partners who can give them their first enterprise contract. Access to the kind of media coverage that turns a promising pitch into a known name. For founders across India and Asia, that access has historically been concentrated in a handful of cities and ecosystems. WSE was created to democratise it — bringing the global startup community to a single stage, on their terms.",
      },
      {
        title: "The Company",
        body: "The World Startup Expo is a multi-event initiative by Cocoon Ventures designed to bring together startups, aspiring entrepreneurs, investors, incubators, accelerators, corporates, government agencies, and policy makers in one place. The inaugural event in November 2016 at the Bengaluru International Exhibition Centre set the benchmark: 300+ startup exhibitors across a 10,000 sqm exhibition arena, a two-day conference with high-profile national and international speakers, a Hackathon World Cup with 1,500+ participants, and an awards ceremony across 20+ categories. WSE was named Asia's biggest startup event. The format was designed to evolve: four editions per year, each with a themed mini-event and sector focus, building to a Grand Finale that crowns the best startups across fintech, IoT, AI, cryptocurrency, and FMCG.",
      },
      {
        title: "Why TIC Backed Them",
        body: "Ecosystem infrastructure is a multiplier investment. Every startup that discovers its next investor through WSE, every founder who finds a co-founder, every corporate partnership that begins over a conference break — those outcomes wouldn't have happened without the infrastructure to convene them. TIC backed WSE because healthy startup ecosystems produce better portfolio companies. The Startup World Cup regional partnership added global reach, giving WSE participants a pathway to San Francisco and international investor networks. That pipeline goes both directions — and TIC benefits from being the VC at the centre of it.",
      },
      {
        title: "What We Did Together",
        body: "TIC and Cocoon Ventures built WSE as an integrated part of the portfolio ecosystem. The event served a dual function: a market-facing platform for regional startup visibility, and an internal deal funnel for the investment portfolio. Pitch competitions at WSE fed directly into the investment evaluation pipeline. Non-winners were routed to Cocoon Nest for crowdfunding or to the Gulf Angel Investment Network (GAIN) for equity funding. The Hackathon World Cup format — structured as a community competition between incubator networks, with livestreaming for broader reach — became a flagship mechanism for identifying technical talent and building community engagement around the event brand.",
      },
      {
        title: "Where They're Headed",
        body: "WSE is expanding beyond India into the GCC and across Asia — the natural next markets given Cocoon Ventures' presence in Saudi Arabia, the UAE, and across Southeast Asia. The event brand now operates independently from the Cocoon Ventures name, allowing it to build its own identity and commercial partnerships while Cocoon Ventures remains the founding VC investor. The Hackathon World Cup is being developed as a standalone international competition between startup communities from India, Saudi Arabia, the UAE, and Bahrain. As the regional startup ecosystem matures, WSE's convening power becomes more valuable — not less.",
      },
    ],
    cta: "Building in startup ecosystems or events? Talk to us.",
  },
  {
    slug: "fashionistaz",
    name: "FASHIONISTAZ",
    initials: "FZ",
    sector: "Fashion E-Commerce",
    stage: "Early Stage",
    geo: "Jordan / MENA / Global",
    image: investmentImages.newsroomAnnounce,
    sections: [
      {
        title: "The Context",
        body: "Fashion e-commerce in MENA faces a trust problem and a relevance problem. Global platforms cater to Western tastes, currencies, and fulfillment models — while local shoppers, primarily women, want experiences that reflect regional aesthetics, price sensitivities, and markets. Discovery and purchase in this region are heavily shaped by the influencer economy: peer-driven recommendations and celebrity endorsements carry more weight than traditional retail branding. That gap — between what global platforms offer and how MENA women actually shop — is where FASHIONISTAZ sits.",
      },
      {
        title: "The Company",
        body: "FASHIONISTAZ is an influencer-powered fashion e-commerce platform designed for women across MENA and beyond. Celebrity and influencer marketing is core commercial infrastructure — not a bolt-on marketing layer — driving product discovery and purchase. Store admins and brand merchants get tools for managing listings, order tracking, and backend analytics. The platform targets 17+ countries, with initial focus on Jordan, the GCC states, Egypt, Nigeria, Kenya, India, and Lebanon.",
      },
      {
        title: "Why TIC Backed Them",
        body: "TIC saw the intersection of social commerce growth and unmet demand for a platform built specifically for women in the region. Global players like ASOS and Zalando lack regional cultural context in curation and sizing. For FASHIONISTAZ, the influencer layer is the product — not a marketing strategy attached to a generic marketplace. That distinction is hard to replicate and central to the thesis.",
      },
      {
        title: "What We Did Together",
        body: "TIC's support focused on two areas: platform strategy and regional network access. On strategy, we worked with the team on the commercial model for influencer partnerships — moving from one-off posts toward aligned, longer-term incentives. On network access, we opened conversations with GCC retail and fashion brands exploring digital distribution channels.",
      },
      {
        title: "Where They're Headed",
        body: "FASHIONISTAZ is completing its platform build and preparing for launch in Jordan, UAE, and KSA — markets where the influencer economy is most developed and where the founding team has deep networks. Phase two expands into Egypt, the wider Gulf, and North and East African markets. Analytics and celebrity endorsement infrastructure remain a competitive advantage that generic marketplaces struggle to match.",
      },
    ],
    cta: "Building in fashion tech or social commerce? Raise With Us.",
  },
  {
    slug: "indoor-farming",
    name: "Indoor Farming",
    initials: "IF",
    sector: "AgriTech / Hydroponics",
    stage: "Early Stage",
    geo: "India",
    image: investmentImages.focusSustainability,
    metrics: [
      { value: "75%", label: "Less space" },
      { value: "98%", label: "Less water" },
      { value: "0", label: "Pesticides" },
    ],
    sections: [
      {
        title: "The Context",
        body: "Indian agriculture faces climate volatility, unpredictable water scarcity, degraded soil from chemical and pesticide use, and a fragmented supply chain where farmers earn less than 20% of the retail price. The result is a farming community under financial pressure and consumers paying more for declining quality. Food security pressure rises as urban populations grow. Hydroponic technology has existed for decades — but the infrastructure to deploy it at scale with farmers, rather than instead of them, had not been built.",
      },
      {
        title: "The Company",
        body: "Indoor Farming is a hydroponic agriculture venture that deploys technology directly to Indian farmers through a three-stage model. First, a specialised training programme teaches soil-less hydroponic cultivation — using a quarter of the land, 25 times less water, and zero pesticides compared to traditional farming. Second, the company buys the harvest directly from trained farmers, eliminating layers of middlemen and providing a fixed profit share and predictable income. Third, produce is sold to retailers and distributors. LED grow lights enable controlled environment agriculture (CEA), removing dependence on seasonal light conditions.",
      },
      {
        title: "Why TIC Backed Them",
        body: "The model aligns with TIC's priorities: food security, rural economic empowerment, sustainable agriculture, and technology as a tool for equity. It is capability transfer rather than displacing farmers — giving them technology access, guaranteed income, and relief from weather and pest pressures. It also aligns with Vision 2030's food security ambitions: the GCC imports the majority of its fresh produce, and a replicable hydroponic model trained on Indian farms has a clear path into Gulf markets.",
      },
      {
        title: "What We Did Together",
        body: "TIC's involvement centred on scalability and market access. We worked on a framework for replicating the farmer training model across new regions while maintaining quality control. TIC's GCC network opened conversations with UAE and Saudi food distributors looking for reliable, traceable, organic produce. We also helped the team communicate the model's alignment with government rural development goals to relevant stakeholders.",
      },
      {
        title: "Where They're Headed",
        body: "Indoor Farming is deepening farmer training and expanding distributor partnerships within India, while building the case for GCC expansion — markets where premium organic produce is in high demand and food security is a government priority. The growth focus is onboarding velocity: how quickly farmers can be trained and onboarded while replicating the controlled cultivation standard in new geographies.",
      },
    ],
    cta: "Building in AgriTech or sustainable food systems? Raise With Us.",
  },
  {
    slug: "blockchain",
    name: "Blockchain",
    initials: "BC",
    sector: "Smart Technology",
    stage: "R&D Stage",
    geo: "India",
    image: investmentImages.focusDeepTech,
    sections: [
      {
        title: "The Context",
        body: "Every major technology wave has had a Killer App — the use case that moves adoption from early enthusiasts to the general public. For the Internet, it was email. For mobile, it was messaging. For blockchain, that inflection-point application is still being found. The technology's underlying promise is significant: trustless transactions, tamper-proof records, programmable contracts, and decentralised identity management. The financial sector has the clearest early applications — cross-border payments alone represent a multi-trillion dollar market where blockchain can dramatically reduce cost and settlement time. But the gap between proof-of-concept pilots and genuine mainstream adoption remains real. Whoever builds the bridge closes one of the most consequential technology gaps of this decade.",
      },
      {
        title: "The Company",
        body: "The Blockchain venture is an R&D entity within the Cocoon Ventures portfolio, focused on identifying and building the application layer that drives blockchain from early-adopter novelty to mainstream infrastructure. The current research focus spans five use cases: cross-border payments (where blockchain eliminates correspondent banking delays and fees), share trading (where distributed ledgers can enable greater trade accuracy and settlement speed), smart contracts (automated execution of commercial agreements without intermediaries), online identity management (allowing users to control exactly who can verify their credentials), and loyalty and rewards programmes (where blockchain enables interoperable, always-on rewards across multiple financial and consumer platforms). Intense R&D is underway, alongside exploration of cryptocurrency investment opportunities as the sector matures.",
      },
      {
        title: "Why TIC Backed Them",
        body: "TIC's thesis includes backing technology bets at the research stage — before the category is obvious, before the market has formed around a winner. Blockchain's foundational capabilities are not in question. What's in question is which application layer becomes the one that everybody uses. The team is doing the right kind of work: not picking a single use case and forcing it, but systematically mapping the landscape, understanding where the current friction is highest, and building toward the application architecture that could serve as the bridge to mass adoption. TIC backed this because the downside is a well-funded R&D team that learns a great deal about distributed ledger technology, and the upside is being early in the company that builds the Killer App.",
      },
      {
        title: "What We Did Together",
        body: "TIC's support for the Blockchain venture has focused on access to financial sector partners across the GCC — banks, payment processors, and fintech operators who are actively exploring distributed ledger infrastructure for cross-border settlement and compliance. The GCC is a particularly high-value market for blockchain's payments applications: the region has one of the world's highest volumes of international remittance flows, and the cost and time of conventional cross-border payment infrastructure is a significant pain point for both financial institutions and end users. TIC has helped the team frame their research in terms of specific institutional problems, rather than general technology advocacy — a distinction that matters enormously in conversations with potential banking partners.",
      },
      {
        title: "Where They're Headed",
        body: "The Blockchain venture is progressing on two parallel tracks: deepening the technical research on the five identified use cases while increasing its engagement with institutional partners who have the regulatory standing and volume to pilot real applications. The cryptocurrency investment exploration adds a financial return dimension alongside the technology development work. As regulatory frameworks for digital assets mature across India, the UAE, and Saudi Arabia — all of which have published substantive digital asset regulatory guidance — the commercial environment for blockchain infrastructure is becoming significantly clearer. The timing is becoming favourable.",
      },
    ],
    cta: "Building in fintech, blockchain, or deep tech? Raise With Us.",
  },
  {
    slug: "useless-company",
    name: "The Useless Company",
    initials: "UC",
    sector: "IoT / Smart Technology",
    stage: "R&D Stage",
    geo: "UAE",
    image: investmentImages.focusDeepTech,
    sections: [
      {
        title: "The Context",
        body: "The history of technology is littered with products that seemed useless until they weren't. Nobody needed a pocket computer until they had one. Nobody needed a music player that held a thousand songs until the iPod. The most consequential innovations in consumer technology are almost always the ones that, at first pass, answer a need people didn't know they had — because the need only becomes visible once the solution exists. Smart wearables and smartphone accessories are at exactly this stage. The category is active, the consumer appetite for fashionable connected devices is proven, and the white space between the leading products and what users actually want is significant. That gap is what The Useless Company was created to explore.",
      },
      {
        title: "The Company",
        body: "The Useless Company is the R&D arm of the TIC ecosystem — an entity entirely dedicated to smart technology research and development, with a current focus on smartwatch and smartphone advancements. The philosophy is built into the name: the products that the team is developing sound, at first description, unnecessary. A transparent screen clip that displays your phone notifications on a visible screen so you never miss a message when your phone is in your pocket. Wearable technology that sits at the intersection of fashion and connectivity. The research methodology is deliberately playful — the name itself a signal that the most interesting technology bets are the ones that the market hasn't yet decided it needs. The Useless Company is building the products that will be indispensable within five years.",
      },
      {
        title: "Why TIC Backed Them",
        body: "TIC's portfolio includes companies that are solving problems people know they have. The Useless Company is different — it is solving problems people haven't fully articulated yet. That is a different kind of investment thesis, but it is a legitimate one, and it is backed by a significant body of technology history. The IoT wearables market is growing fast. Consumer expectations for connected devices are rising. The fashion-functionality intersection for wearable technology is almost entirely unexplored by the companies that dominate consumer electronics. TIC backed The Useless Company because the team is doing original work in a space that has room for a genuinely new kind of product.",
      },
      {
        title: "What We Did Together",
        body: "TIC's role with The Useless Company has been primarily as an enabler of focus — providing the runway and the ecosystem support for a pure R&D team to do the kind of exploratory work that produces genuinely new products. The UAE base is strategic: Dubai and Abu Dhabi are among the world's most technology-receptive consumer markets, and the fashion and luxury industry presence in the UAE creates a natural early-adopter community for products at the intersection of technology and style. TIC has also helped the team access manufacturing and prototyping networks across India and Southeast Asia, where the path from concept to prototype is significantly faster and more cost-effective than in Europe or North America.",
      },
      {
        title: "Where They're Headed",
        body: "The Useless Company is advancing its transparent screen clip concept through prototyping toward a commercial product. The wearable notification device category is an underdeveloped corner of the consumer electronics market — the leading smartwatch brands have focused on health monitoring and app integration, leaving the pure notification and fashion-functionality space relatively open. As the company moves from R&D to product development, the UAE market provides the ideal proving ground: high smartphone penetration, a fashion-forward consumer base, and a retail environment that can support early-stage product launches at scale.",
      },
    ],
    cta: "Building in IoT, wearables, or consumer hardware? Raise With Us.",
  },
  {
    slug: "manga-productions",
    name: "Manga Productions",
    initials: "MP",
    sector: "Creative Economy",
    stage: "Established",
    geo: "Saudi Arabia / Global",
    image: investmentImages.focusCreative,
    metrics: [{ value: "100M+", label: "Streams" }],
    sections: [
      {
        title: "The Context",
        body: "Saudi Arabia's cultural ambitions under Vision 2030 are as serious as its economic ones. Authentic Arab stories need infrastructure — animation, games, comics — that can reach global audiences without losing regional voice.",
      },
      {
        title: "The Company",
        body: "A subsidiary of the Mohammed bin Salman Misk Foundation, Manga Productions builds creative infrastructure for Arab storytellers. Co-productions with Japan's Toei Animation. Distribution across the Middle East, Japan, US, and Europe. Key works include Asateer: Future's Folktales (100M+ streams) and The Journey.",
      },
      {
        title: "Why TIC Backed Them",
        body: "The creative economy is not a side bet — it is part of the thesis. Soft power and cultural infrastructure compound alongside economic diversification.",
      },
      {
        title: "What We Did Together",
        body: "Portfolio alignment and regional narrative support — positioning Manga Productions as proof that stories from this region have a global audience.",
      },
      {
        title: "Where They're Headed",
        body: "Continuing to scale authentic Saudi and Arab storytelling across animation, games, and comics for global platforms.",
      },
    ],
    cta: "Building in creative economy or media? Raise With Us.",
  },
  {
    slug: "markat",
    name: "Markat",
    initials: "MK",
    sector: "E-Commerce",
    stage: "Seed",
    geo: "Jordan / GCC",
    image: investmentImages.a,
    sections: [
      {
        title: "The Context",
        body: "Shopping for quality menswear in MENA has often meant travelling or compromising. International brands, verified delivery, and customer trust — without the friction — remain underserved.",
      },
      {
        title: "The Company",
        body: "Markat brings a curated library of international menswear brands directly to customers in Jordan and across the GCC — verified, delivered, and built around trust.",
      },
      {
        title: "Why TIC Backed Them",
        body: "A clear regional commerce gap with a founder-led approach to curation and delivery for GCC customers.",
      },
      {
        title: "What We Did Together",
        body: "Early portfolio support on positioning and regional go-to-market framing for GCC expansion.",
      },
      {
        title: "Where They're Headed",
        body: "Deepening the brand library and expanding delivery across key GCC markets. Website and public materials to be confirmed.",
      },
    ],
    cta: "Building in e-commerce or consumer brands? Raise With Us.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug);
}
