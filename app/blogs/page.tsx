import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { BlogsContent } from "@/components/sections/BlogsContent";

export const metadata: Metadata = {
  title: "Blogs & Newsroom — Taz Investments",
  description:
    "Press coverage, fund and portfolio announcements, media kit, and blog posts on how we invest.",
};

export default function BlogsPage() {
  return (
    <SiteShell>
      <PageHero
        label="Blogs & Newsroom"
        title="What we publish and what the press says."
        description="Press coverage, fund and portfolio announcements, a media kit with press contact — plus memos on topics that matter to founders and LPs."
      />
      <BlogsContent />
    </SiteShell>
  );
}
