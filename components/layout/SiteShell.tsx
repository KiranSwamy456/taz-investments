import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";

export function SiteShell({
  children,
  showHeader = true,
}: {
  children: React.ReactNode;
  showHeader?: boolean;
}) {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-accent-foreground">
        {showHeader ? <Header /> : null}
        <main>{children}</main>
        <Footer />
      </div>
      {/* Outside overflow-x-hidden so expanded rings are not clipped */}
      <BottomNav />
    </>
  );
}
