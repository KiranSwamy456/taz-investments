import { ArrowRight } from "lucide-react";

const POSTS = [
  {
    id: 1,
    title: "How we size seed checks in two meetings or less.",
    category: "MEMO",
  },
  {
    id: 2,
    title: "What we look for in fintech underwriting before we wire.",
    category: "RISK",
  },
  {
    id: 3,
    title: "Why we keep reserves for follow-on in every fund cycle.",
    category: "FUNDS",
  },
];

export function Blog({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section
      id="insights"
      data-scroll-tone
      className={`border-t border-border bg-card px-6 md:px-12 ${showIntro ? "py-24" : "pb-24 pt-8 md:pt-12"}`}
    >
      <div className="max-w-7xl mx-auto">
        {showIntro ? (
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <h2 className="text-3xl font-display font-medium md:text-5xl">We publish what we practice.</h2>
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <span data-scroll-link-text className="inline">
                READ OUR MEMOS
              </span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {POSTS.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col justify-between p-8 bg-background rounded-2xl border border-border hover:border-accent/50 transition-colors duration-300 min-h-[300px] cursor-pointer"
            >
              <h3 className="text-xl md:text-2xl font-medium leading-tight group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h3>

              <div className="flex justify-between items-end mt-12 pt-8 border-t border-border group-hover:border-accent/20 transition-colors duration-300">
                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  {post.category}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
