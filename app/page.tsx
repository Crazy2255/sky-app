import { Suspense } from "react"
import Loading from "./loading"
import GradientBackground from "@/components/gradient-background"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import VideoShowcaseSection from "@/components/video-showcase-section"
import CoreServices from "@/components/core-services"
import IndustriesSection from "@/components/industries-section"
import AboutSection from "@/components/about-section"
import NewWorkShowcase from "@/components/new-work-showcase"
import CtaSection from "@/components/cta-section"
import { Footer } from "@/components/footer"
import ParticleSystem from "@/components/particle-system"
import VfxHighlight from "@/components/vfx-highlight"
import HomepageWorkSection from "@/components/homepage-work-section"
import DubaiPricingSection from "@/components/dubai-pricing-section"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Suspense fallback={<Loading />}>
        <GradientBackground />
        <Navbar />
        <HeroSection />
        <VideoShowcaseSection />
        <CoreServices />
        <HomepageWorkSection />
        <VfxHighlight />
        <IndustriesSection />
        <AboutSection />
        <NewWorkShowcase />
        <DubaiPricingSection />
        <CtaSection />
        <Suspense fallback={null}>
          <ParticleSystem />
        </Suspense>
        <Footer />
      </Suspense>
    </main>
  )
}
