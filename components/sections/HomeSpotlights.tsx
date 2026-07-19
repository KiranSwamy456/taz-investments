import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SPOTLIGHTS = [
  {
    slug: "trubuild",
    initials: "TB",
    name: "TruBuild",
    tags: "Construction Tech · Saudi Arabia · Growth Stage",
    headline: "Bringing institutional intelligence to Saudi Arabia's construction boom.",
    body: "Vision 2030 projects need procurement infrastructure that email and WhatsApp can't deliver. TruBuild brings decision support and cost intelligence into one governed workspace — so every tender is faster, better evidenced, and smarter than the last. Deloitte Rising Star 2025. Google for Startups Accelerator MENA 2026.",
    highlight: "Validated on 2.2TB of real procurement data.",
  },
  {
    slug: "orbii",
    initials: "OR",
    name: "Orbii.AI",
    tags: "Fintech · GCC / MENA · Seed",
    headline: "The credit infrastructure the GCC's lenders have been waiting for.",
    body: "Fintechs and neobanks want to offer credit products without rebuilding scoring and compliance from scratch. Orbii is the embedded lending layer — AI-driven credit decisions where spreadsheets once ruled. $3.6M seed alongside Prosus, VentureSouq, and others.",
    highlight: "$3.6M raised · 48-hour go-live · +30% loan approvals for Foodics.",
  },
  {
    slug: "hashmybag",
    initials: "HB",
    name: "HashMyBag",
    tags: "Commerce Tech · India · GCC Expansion",
    headline: "600 stores. 15,000 installs. One conversation at a time.",
    body: "In emerging markets, purchase decisions happen through conversation — not checkout funnels. HashMyBag puts a live chat layer between merchants and customers: products, payments, and relationships inside one thread. Enterprise pipeline includes Al Futtaim and Al Shaya.",
    highlight: "600+ stores · 15,000+ installs · 4.5★ rating.",
  },
] as const;

export function HomeSpotlights() {
  return (
    <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
          The companies we believed in.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          Every company here was backed early, backed with conviction, and backed with more than a cheque.
          Three of the most recent — and what they&apos;re building.
        </p>

        <div className="mt-14 md:mt-16">
          {SPOTLIGHTS.map((item) => (
            <article
              key={item.slug}
              className="border-t border-border py-10 first:border-t first:pt-10 md:py-12"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent font-display text-sm font-bold text-white"
                  aria-hidden
                >
                  {item.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl font-medium text-white md:text-3xl">{item.name}</h3>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-accent md:text-xs">
                    {item.tags}
                  </p>
                </div>
              </div>

              <p className="mt-6 font-display text-lg font-medium italic leading-snug text-white md:text-xl">
                {item.headline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{item.body}</p>
              <p className="mt-5 text-sm font-semibold leading-snug text-accent md:text-base">
                {item.highlight}
              </p>
              <Link
                href={`/portfolio/${item.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-accent"
              >
                Case study
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-4 border-t border-accent/60 pt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
          >
            See portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
