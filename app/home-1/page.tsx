import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/home-1/Hero";
import { ClientLogos } from "@/components/sections/home-1/ClientLogos";
import { HomePhilosophy } from "@/components/sections/home-1/HomePhilosophy";
import { HomeSpotlights } from "@/components/sections/home-1/HomeSpotlights";
import { ContactCTA } from "@/components/sections/home-1/ContactCTA";

export default function Home1() {
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
