import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Services } from "@/components/sections/Services";
import { Studio } from "@/components/sections/Studio";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Blog } from "@/components/sections/Blog";

export default function Home() {
  return (
    <SiteShell showNav={false}>
      <Hero />
      <ClientLogos />
      <CaseStudies />
      <Services />
      <Studio />
      <ContactCTA />
        <Blog showIntro={false} />
    </SiteShell>
  );
}
