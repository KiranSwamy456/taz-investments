"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CASE_STUDIES = [
  {
    id: 1,
    client: "SUPABASE",
    title: "LW14",
    description: "Part spaceflight, part internet spectacle – we turned Supabase Launch Week 14 into a fully immersive, retro-futuristic experience.",
    image: "/case-supabase.png",
    size: "large",
  },
  {
    id: 2,
    client: "MERITECH",
    title: "Meritech Analytics",
    description: "Turning data overload into clarity, through world-class design.",
    image: "/case-meritech.png",
    size: "small",
  },
  {
    id: "quote-1",
    type: "quote",
    quote: "Tazinvestments was the secret sauce behind our growth. They're fun, creative and incredibly efficient. I recommend them to all the founders I advise.",
    author: "Ilya Volodarsky, Co-Founder of Segment",
  },
  {
    id: 3,
    client: "LLAMAINDEX",
    title: "LlamaIndex",
    description: "LlamaIndex is a platform for building AI agents that turn unstructured data into operational intelligence.",
    image: "/case-llama.png",
    size: "small",
  },
  {
    id: 4,
    client: "LANGCHAIN",
    title: "LangChain",
    description: "LangChain is the go-to platform for developers and enterprises building AI apps, taking them from prototype to production at lightning speed.",
    image: "/case-langchain.png",
    size: "large",
  },
  {
    id: 5,
    client: "LEMON.MARKETS",
    title: "Lemon Markets",
    description: "lemon.markets provides companies with the technical and regulatory infrastructure to launch investment products through their brokerage API.",
    image: "/case-lemon.png",
    size: "large",
  },
  {
    id: 6,
    client: "AURIGA",
    title: "Auriga",
    description: "Auriga builds electrically powered, on-demand hypersonic launch technology for space and defense applications.",
    image: "/case-auriga.png",
    size: "small",
  },
  {
    id: "quote-2",
    type: "quote",
    quote: "You can waste years trying to find an agency. Or you can just go with tazinvestments. They're reliable and always coming up with ideas better than mine.",
    author: "Julian Shapiro, Founder of Demand Curve",
  },
  {
    id: 7,
    client: "WILDFIRES",
    title: "Wildfires",
    description: "Battling infernos with innovation.",
    image: "/case-wildfires.png",
    size: "large",
  },
  {
    id: 8,
    client: "SEGMENT",
    title: "Segment",
    description: "Over 26,000 businesses use Segment to manage their customer data.",
    image: "/case-segment.png",
    size: "small",
  },
  {
    id: 9,
    client: "FORM BIO",
    title: "Form Bio",
    description: "We built Form Bio from the ground up, merging the latest in biology with seamless UX.",
    image: "/case-formbio.png",
    size: "small",
  },
  {
    id: 10,
    client: "DESERT FOX RACING",
    title: "Desert Fox Racing",
    description: "From the initial workshops to the final implementation, we helped them transform their entire event management process into a seamless experience.",
    image: "/case-desertfox.jpg",
    size: "large",
  },
  {
    id: "quote-3",
    type: "quote",
    quote: "Insanely good work and break-neck speeds! They'll grow with you as your needs evolve, but you'll have world-class design from day one.",
    author: "James Schiller, CTO of Kafine",
  },
  {
    id: 11,
    client: "ORANGE CHARGER",
    title: "Orange Charger",
    description: "We partnered with Orange Charger to elevate the brand and create a website from ground up.",
    image: "/case-orange.jpg",
    size: "small",
  },
  {
    id: 12,
    client: "CHILI PIPER",
    title: "Chili Piper",
    description: "Chili Piper turned the outdated process into a profitable business.",
    image: "/case-chili.jpg",
    size: "small",
  },
  {
    id: 13,
    client: "MATRICES",
    title: "Matrices",
    description: "With Matrices, you can explore, visualize, and share large (100k row) datasets – all without code. No SQL, no Python, no endless configuration. Just you, your data, and a few clicks.",
    image: "/case-matrices.jpg",
    size: "large",
  },
] as const;

export function CaseStudies() {
  return (
    <section id="works" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <p className="text-2xl md:text-3xl font-medium text-muted-foreground leading-relaxed">
            {"Founder-first, 0→1 studio that defines, designs, and builds products and other digital wizardry."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-x-12 md:gap-y-24 items-start">
          {CASE_STUDIES.map((item) => {
            if ("type" in item && item.type === "quote") {
              return (
                <div key={item.id} className="col-span-1 md:col-span-12 my-12">
                  <div className="p-12 md:p-24 bg-card rounded-[2rem] border border-border">
                    <blockquote className="text-2xl md:text-4xl font-display font-medium leading-[1.2] max-w-4xl mx-auto text-center">
                      {`"${item.quote}"`}
                      <footer className="mt-8 text-sm font-sans font-bold tracking-widest text-muted-foreground uppercase">
                        — {item.author}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              );
            }

            const study = item as { id: number; client: string; title: string; description: string; image: string; size: string };
            const isLarge = study.size === "large";
            const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`group cursor-pointer ${colSpan} flex flex-col gap-6`}
              >
                <div className={`relative w-full rounded-2xl overflow-hidden bg-muted ${isLarge ? "aspect-[16/10]" : "aspect-square"}`}>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-background/80 backdrop-blur-md rounded-full border border-white/10 text-white">
                      Case Study
                    </span>
                  </div>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="pr-8">
                  <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-3">{study.client}</h3>
                  <p className="text-lg md:text-2xl font-medium leading-snug text-foreground/90">{study.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
