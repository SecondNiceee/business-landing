import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TeamSection } from "@/components/team-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <Header />
      <main className="space-y-12">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TeamSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
