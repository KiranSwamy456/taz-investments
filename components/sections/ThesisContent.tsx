import Image from "next/image";
import { ImageHoverBlock } from "@/components/ImageHoverBlock";
import { RaiseForm } from "@/components/sections/RaiseForm";
import { investmentImages } from "@/lib/investmentMedia";

const FOCUS_AREAS = [
  {
    title: "Deep Technology — AI, ML, AR/VR, Robotics, Neuro Computing",
    body: "The infrastructure layer that every future industry will run on. We backed Orbii.AI when B2B lending in the region was still being underwritten on spreadsheets. That window — early, before the obvious — is the one we look for.",
    image: investmentImages.focusDeepTech,
  },
  {
    title: "Education & Human Capital",
    body: "Maharat showed us what's possible when you build an edtech platform that genuinely speaks to Arab learners — not a Western product with Arabic subtitles applied as an afterthought. The opportunity in MENA education is generational, and it is still wide open.",
    image: investmentImages.focusEducation,
  },
  {
    title: "Construction & Built Environment",
    body: "TruBuild is an early signal of what Vision 2030's infrastructure ambitions mean for construction technology. The projects are real, the contracts are large, and the software to manage it all is still being written. We want to be in that conversation early.",
    image: investmentImages.focusConstruction,
  },
  {
    title: "Sustainability & Circular Economy",
    body: "GreenForest Solutions is one of the most forward-looking positions in our portfolio — EPR compliance and circular economy infrastructure, ahead of where emerging markets are heading. We like those positions. First in means first to scale.",
    image: investmentImages.focusSustainability,
  },
  {
    title: "Fintech & Financial Infrastructure",
    body: "How money moves, lends, and grows in a rebuilt economy. This is not a crowded bet in MENA the way it is in Europe. There is still real, unclaimed territory — and the founders building in it deserve serious partners.",
    image: investmentImages.focusFintech,
  },
  {
    title: "Creative Economy & Soft Power",
    body: "Manga Productions — backed by the Misk Foundation — reminded us that Saudi Arabia's cultural ambitions are as serious as its economic ones. The creative economy is not a side bet. It is part of the thesis.",
    image: investmentImages.focusCreative,
  },
] as const;

const HOW_WE_THINK = [
  {
    title: "Nation-scale problems produce world-class companies.",
    body: "The founders building in MENA aren't solving niche problems for narrow markets. They're rebuilding infrastructure, reinventing how a generation learns, and rethinking how entire industries move. That's not a regional play with a ceiling. That's a global opportunity with a home-ground advantage — and we back it like one.",
  },
  {
    title: "Capital without context is just noise.",
    body: "We've seen what happens when foreign capital arrives in MENA with a Western playbook and no regional instinct. It burns fast and exits quietly. Our team has been operating across Saudi Arabia, UAE, India, the UK and beyond long enough to know the difference between a pattern that works here and one that just worked somewhere else.",
  },
  {
    title: "The best investments are partnerships, not transactions.",
    body: "We don't come in for a round and disappear into the next fund cycle. From our first conversation to the milestone that makes the early bet worth it — we're in it. That's not a line on a website. Ask our founders.",
  },
] as const;

const BEYOND_CAPITAL = [
  {
    title: "A network that spans continents.",
    body: "Our team and ecosystem connect Saudi Arabia, UAE, India, the UK, Japan, and Singapore. When your company is ready to cross a border or close a corporate partnership, we've usually already made the introduction — often before you know you need it.",
  },
  {
    title: "Operators, not spectators.",
    body: "Our partners have built companies from scratch, navigated Saudi regulatory environments, and closed deals in markets where trust is built over years, not pitch decks. We've sat on your side of the table. That changes how we show up.",
  },
  {
    title: "Knowledge that stays in the region.",
    body: "We actively support IP creation and knowledge transfer because we believe the ideas built in MENA should belong to MENA. This isn't a talking point — it's embedded in how we structure our partnerships.",
  },
  {
    title: "Ecosystem access that takes years to build.",
    body: "Government relationships, corporate partners, co-investors, and a portfolio of founders who've been exactly where you're going. We make those connections early — before you need them urgently — so they're already warm when it counts.",
  },
] as const;

type BlockProps = {
  index: number;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
};

function ThesisBlock({ index, eyebrow, title, children, image, imageAlt, imageFirst }: BlockProps) {
  const media = (
    <ImageHoverBlock
      aspectClassName="aspect-[4/3] md:aspect-[5/4]"
      revealDelay={index * 0.08}
      className="w-full"
    >
      <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
    </ImageHoverBlock>
  );

  return (
    <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className={`md:col-span-5 ${imageFirst ? "md:order-1" : "md:order-2 md:col-start-8"}`}>{media}</div>
        <div className={`md:col-span-6 ${imageFirst ? "md:order-2 md:col-start-7" : "md:order-1"}`}>
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
            {eyebrow}
          </span>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export function ThesisContent() {
  return (
    <>
      <ThesisBlock
        index={0}
        eyebrow="What we stand for"
        title="Capital follows conviction."
        image={investmentImages.thesisPhilosophy}
        imageAlt="Partners discussing investment strategy"
        imageFirst
      >
        <p className="text-lg leading-relaxed text-muted-foreground">
          Saudi Arabia isn&apos;t emerging. It&apos;s arrived.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Vision 2030 isn&apos;t a policy document — it&apos;s a generational invitation. An invitation for
          founders to solve problems that matter at scale, and to build companies that don&apos;t just generate
          returns but reshape entire industries. We started TIC because we believe the most consequential
          investments of this decade won&apos;t be made in Silicon Valley. They&apos;ll be made here.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          We back ideas that contribute to something bigger than a balance sheet — knowledge creation, economic
          diversification, sustainability, simply put, innovation that stays rooted in the region even as it
          scales globally.
        </p>
        <p className="mt-8 text-lg italic leading-relaxed text-muted-foreground">
          Three of our portfolio companies are directly aligned with Vision 2030 priority sectors. That&apos;s
          not coincidence. That&apos;s thesis.
        </p>
      </ThesisBlock>

      <section data-scroll-tone className="border-t border-border px-6 pb-8 pt-20 md:px-12 md:pb-10 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">Our focus</span>
          <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            We don&apos;t chase what&apos;s trending, we identify needs
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Six domains where we spend time and capital — early, before the obvious.
          </p>
        </div>
      </section>

      {FOCUS_AREAS.map((area, index) => {
        const imageFirst = index % 2 === 0;
        return (
          <section
            key={area.title}
            data-scroll-tone
            className={`border-t border-border px-6 py-16 md:px-12 md:py-20 ${
              index % 2 === 1 ? "bg-card" : ""
            }`}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
              <div
                className={`md:col-span-5 ${
                  imageFirst ? "md:order-1" : "md:order-2 md:col-start-8"
                }`}
              >
                <ImageHoverBlock
                  aspectClassName="aspect-[4/3]"
                  revealDelay={index * 0.06}
                  className="w-full"
                >
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </ImageHoverBlock>
              </div>
              <div
                className={`md:col-span-6 ${
                  imageFirst ? "md:order-2 md:col-start-7" : "md:order-1"
                }`}
              >
                <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  0{index + 1}
                </span>
                <h3 className="font-display text-2xl font-medium leading-snug text-accent md:text-3xl">
                  {area.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {area.body}
                </p>
              </div>
            </div>
          </section>
        );
      })}

      <section data-scroll-tone className="border-t border-border bg-card px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
            Three things we believe
          </span>
          <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            These aren&apos;t values on a wall.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            They&apos;re the decisions we make every single day.
          </p>

          <ol className="mt-16 space-y-14 md:mt-20 md:space-y-16">
            {HOW_WE_THINK.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-1 gap-4 border-t border-border pt-10 md:grid-cols-12 md:gap-10 md:pt-12"
              >
                <div className="md:col-span-2">
                  <span className="font-display text-3xl font-medium text-accent md:text-4xl">
                    0{index + 1}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl font-medium leading-snug text-white md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
              Raise with us
            </span>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Writing a cheque is the easy part.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              What matters — especially in MENA, where relationships move markets — is what comes after the
              wire.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-20 md:gap-8">
            {BEYOND_CAPITAL.map((item, index) => (
              <article
                key={item.title}
                className="flex flex-col border-l-[3px] border-accent bg-card px-6 py-8 transition-colors hover:bg-background md:px-8 md:py-10"
              >
                <span className="mb-6 font-display text-sm font-bold tracking-widest text-accent">
                  0{index + 1}
                </span>
                <h3 className="font-display text-xl font-medium leading-snug text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
              Is this you?
            </span>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Are you building something that could reshape an industry in MENA?
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>You&apos;ve validated the idea. Now you need a partner who brings more than money.</p>
              <p>
                You want investors who understand this region — not ones who are experimenting with it for the
                first time.
              </p>
              <p>You&apos;re ready to move.</p>
            </div>
            <p className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent">
              → Raise with us
            </p>
          </div>
          <div className="lg:col-span-7">
            <RaiseForm />
          </div>
        </div>
      </section>
    </>
  );
}
