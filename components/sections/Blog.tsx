import { ArrowRight } from "lucide-react";

const POSTS = [
  {
    id: 1,
    title: "The brief is dead. Long live the prototype.",
    category: "DESIGN",
  },
  {
    id: 2,
    title: "WordPress to Webflow migration: why and how to make the switch in 2025",
    category: "NO-CODE",
  },
  {
    id: 3,
    title: "The no-code hype train and why it's not stopping",
    category: "NO-CODE",
  },
];

export function Blog() {
  return (
    <section className="py-24 px-6 md:px-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium">
            We share what we know.
          </h2>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            CHECK OUT OUR BLOG <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
