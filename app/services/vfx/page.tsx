import VfxHero from "@/components/vfx-hero"
import VfxShowcase from "@/components/vfx-showcase"
import VfxDetailedInfo from "@/components/vfx-detailed-info"
import VfxServices from "@/components/vfx-services"
import VfxProcess from "@/components/vfx-process"
import VfxCta from "@/components/vfx-cta"
import VfxWorkflow from "@/components/vfx-workflow"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Visual Effects Services | Skynet Solutions",
  description:
    "Transform your vision with cutting-edge VFX that captivates audiences and elevates your brand to new heights.",
}

export default function VfxPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <VfxHero />
      <VfxShowcase />
      <VfxDetailedInfo />
      <VfxWorkflow />
      <VfxServices />
      <VfxProcess />
      <VfxCta />
      <Footer />
    </main>
  )
}
