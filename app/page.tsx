import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { HomePhilosophy } from "@/components/sections/HomePhilosophy";
import { HomeSpotlights } from "@/components/sections/HomeSpotlights";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <SiteShell showHeader={false}>
      <Hero />
      <ClientLogos />
      <HomePhilosophy />
      <HomeSpotlights />
      <ContactCTA />
    </SiteShell>
  );
}
