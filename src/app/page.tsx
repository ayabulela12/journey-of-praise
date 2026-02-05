import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ActivitiesSection } from "@/components/activities-section"
import { WhoIsThisForSection } from "@/components/who-is-this-for-section"
import { DestinationsSection } from "@/components/destinations-section"
import { FinalCTASection } from "@/components/final-cta-section"

export default function Home() {
  return (
    <main className="min-h-screen" id="home">
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <WhoIsThisForSection />
      <DestinationsSection />
      <FinalCTASection />
    </main>
  )
}
