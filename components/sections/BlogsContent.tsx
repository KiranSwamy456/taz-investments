"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ImageHoverBlock } from "@/components/ImageHoverBlock";
import {
  ANNOUNCEMENTS,
  BLOG_POSTS,
  BLOG_TOPICS,
  MEDIA_KIT,
  newsroomImages,
  PRESS_COVERAGE,
  type BlogTopic,
} from "@/lib/blogsData";
import { cn } from "@/lib/utils";

export function BlogsContent() {
  const [topic, setTopic] = useState<BlogTopic>("All");

  const featured = BLOG_POSTS.find((p) => "featured" in p && p.featured);
  const filteredPosts = useMemo(() => {
    const list = BLOG_POSTS.filter((p) => !("featured" in p && p.featured));
    if (topic === "All") return list;
    return list.filter((p) => p.topic === topic);
  }, [topic]);

  return (
    <>
      {/* ——— Newsroom ——— */}
      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Newsroom
          </span>
          <h2 className="mb-16 max-w-3xl font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            Press, announcements, and media resources.
          </h2>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Press coverage */}
            <div className="lg:col-span-7">
              <div className="mb-8 flex items-end justify-between gap-4">
                <h3 className="font-display text-xl font-medium text-white md:text-2xl">Press coverage</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  External
                </span>
              </div>
              <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
                {PRESS_COVERAGE.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="group flex flex-col gap-2 px-6 py-5 transition-colors hover:bg-background md:flex-row md:items-center md:justify-between md:px-8 md:py-6"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold uppercase tracking-widest text-accent">{item.outlet}</p>
                        <p className="mt-2 font-medium text-white group-hover:text-accent md:text-lg">
                          {item.title}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3 text-muted-foreground">
                        <span className="text-xs font-bold uppercase tracking-widest">{item.date}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-10 lg:col-span-5">
              <ImageHoverBlock aspectClassName="aspect-[4/3]" revealDelay={0.08}>
                <Image
                  src={newsroomImages.press}
                  alt="Press and media"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </ImageHoverBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Fund & portfolio announcements */}
      <section data-scroll-tone className="border-t border-border bg-card px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Announcements
              </span>
              <h3 className="font-display text-2xl font-medium text-white md:text-3xl">
                Fund & portfolio news from Taz.
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Official releases on funds, portfolio milestones, and firm updates.
              </p>
              <div className="mt-8 hidden lg:block">
                <ImageHoverBlock aspectClassName="aspect-square" revealDelay={0.12}>
                  <Image
                    src={newsroomImages.announce}
                    alt="Team announcement"
                    fill
                    className="object-cover"
                    sizes="35vw"
                  />
                </ImageHoverBlock>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ol className="space-y-6">
                {ANNOUNCEMENTS.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-2xl border border-border bg-background p-6 md:p-8"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                        {item.type}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="mt-4 font-display text-lg font-medium text-white md:text-xl">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Media kit */}
      <section data-scroll-tone className="border-t border-border px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 rounded-[2rem] border border-border bg-background p-8 md:grid-cols-12 md:gap-12 md:p-12 lg:p-16">
            <div className="md:col-span-5">
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Media kit
              </span>
              <h3 className="font-display text-2xl font-medium text-white md:text-3xl lg:text-4xl">
                Assets and press contact.
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Download logos, fact sheets, and recent releases. For interviews or comment, reach our press desk
                directly.
              </p>
              <a
                href={`mailto:${MEDIA_KIT.pressEmail}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {MEDIA_KIT.pressEmail}
              </a>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ul className="space-y-3">
                {MEDIA_KIT.assets.map((asset) => (
                  <li key={asset.label}>
                    <a
                      href={asset.href}
                      className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-accent/40"
                    >
                      <span className="text-sm font-medium text-white">{asset.label}</span>
                      <Download className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Blogs ——— */}
      <section data-scroll-tone className="border-t border-border bg-card px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">Blogs</span>
          <h2 className="mb-4 font-display text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            Relevant topics from the firm.
          </h2>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            Memos, risk notes, fund mechanics, and portfolio lessons — written for founders and LPs who want the
            same clarity we bring to diligence.
          </p>

          <div className="mb-10 flex flex-wrap gap-2">
            {BLOG_TOPICS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                  topic === t
                    ? "border-accent bg-accent/10 text-white"
                    : "border-border text-muted-foreground hover:border-white/20 hover:text-white"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {featured && topic === "All" ? (
            <article className="mb-10 grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-background lg:grid-cols-12">
              <div className="lg:col-span-7">
                <ImageHoverBlock aspectClassName="aspect-[16/10] lg:aspect-auto lg:h-full min-h-[280px]" revealDelay={0}>
                  <Image
                    src={featured.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </ImageHoverBlock>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Featured · {featured.topic}</span>
                <h3 className="mt-4 font-display text-2xl font-medium leading-tight text-white md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">{featured.date}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                  Read memo <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ) : null}

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-accent/40"
                >
                  <ImageHoverBlock aspectClassName="aspect-[16/10]" revealDelay={index * 0.05}>
                    <Image src={post.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </ImageHoverBlock>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {post.topic} · {post.date}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-medium leading-snug text-white group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-accent">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-muted-foreground">
              No posts in this topic yet.{" "}
              <button type="button" className="text-white underline" onClick={() => setTopic("All")}>
                View all
              </button>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
