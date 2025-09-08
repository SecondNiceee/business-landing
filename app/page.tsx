import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <Header />
      <main className="space-y-4">
        <div className="animate-slide-in-up">
          <HeroSection />
        </div>
        <div className="animate-slide-in-up animation-delay-200">
          <ServicesSection />
        </div>
        <div className="animate-slide-in-up animation-delay-400">
          <ProcessSection />
        </div>
        <div className="animate-slide-in-up animation-delay-600">
          <AboutSection />
        </div>
        <div className="animate-slide-in-up animation-delay-800">
          <CtaSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
