"use client"

import { Cpu, PenTool, Video, Palette, FileText, Sparkles } from "lucide-react"
import ServiceHeroCreative from "@/components/service-hero-creative"
import ServiceFeatureInteractive from "@/components/service-feature-interactive"
import ServiceProcess from "@/components/service-process"
import ServiceTestimonial from "@/components/service-testimonial"
import ServiceCTACreative from "@/components/service-cta-creative"
import ServiceFloatingNav from "@/components/service-floating-nav"
import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ContentCreationPage() {
  const navItems = [
    { id: "hero", label: "Overview", icon: <Cpu size={18} /> },
    { id: "video-production", label: "Video Production", icon: <Video size={18} /> },
    { id: "graphic-design", label: "Graphic Design", icon: <Palette size={18} /> },
    { id: "copywriting", label: "Copywriting", icon: <FileText size={18} /> },
    { id: "animation", label: "Animation", icon: <Sparkles size={18} /> },
  ]

  return (
    <div className="bg-black text-white">
      <Navbar />

      <ServiceFloatingNav items={navItems} activeColor="rgb(245, 158, 11)" />

      <section id="hero">
        <ServiceHeroCreative
          title="Content Creation & Production"
          description="Captivate your audience with stunning visuals, compelling narratives, and strategic content that drives engagement and conversions."
          color="text-amber-400"
          bgGradient="bg-gradient-to-br from-black via-amber-950/30 to-black"
          icon={<PenTool className="w-full h-full" />}
        />
      </section>

      <section id="video-production">
        <ServiceFeatureInteractive
          title="Video Production & Editing"
          description="From concept to final cut, our video production team creates high-impact visual content that tells your story and showcases your brand."
          features={[
            "Professional filming with state-of-the-art equipment",
            "Creative direction and storyboarding",
            "Post-production and special effects",
            "Format optimization for multiple platforms",
          ]}
          image="/images/post-production-team.jpg"
          color="bg-amber-500"
          icon={<Video className="w-full h-full" />}
        />
      </section>

      <ServiceProcess
        title="Our Content Creation Process"
        description="We follow a proven methodology to ensure your content achieves maximum impact and delivers measurable results."
        steps={[
          {
            number: "01",
            title: "Discovery & Strategy",
            description:
              "We analyze your brand, audience, and objectives to develop a tailored content strategy that aligns with your business goals.",
          },
          {
            number: "02",
            title: "Creative Concept Development",
            description:
              "Our creative team develops innovative concepts and storyboards that capture your brand essence and resonate with your target audience.",
          },
          {
            number: "03",
            title: "Production & Creation",
            description:
              "Using cutting-edge equipment and techniques, we bring your content to life with meticulous attention to quality and detail.",
          },
          {
            number: "04",
            title: "Refinement & Delivery",
            description:
              "We perfect your content through comprehensive editing, feedback integration, and optimization for various platforms and channels.",
          },
        ]}
        color="rgb(245, 158, 11)"
        bgColor="bg-gradient-to-br from-amber-950/30 to-black"
      />

      <section id="graphic-design">
        <ServiceFeatureInteractive
          title="Graphic Design & Visual Identity"
          description="Establish a cohesive and memorable visual presence with our comprehensive graphic design and branding services."
          features={[
            "Brand identity development and guidelines",
            "Marketing collateral and sales materials",
            "Social media graphics and templates",
            "UI/UX design for digital platforms",
          ]}
          image="/collaborative-branding-session.png"
          color="bg-amber-500"
          reverse={true}
          icon={<Palette className="w-full h-full" />}
        />
      </section>

      <ServiceTestimonial
        quote="The content team at Skynet transformed our brand messaging completely. Their video production and graphic design work helped us increase engagement by 230% and directly contributed to our best quarter ever."
        author="Sarah Johnson"
        position="Marketing Director"
        company="TechVision Inc."
        color="rgb(245, 158, 11)"
      />

      <section id="copywriting">
        <ServiceFeatureInteractive
          title="Copywriting & Content Strategy"
          description="Craft compelling messages that resonate with your audience and drive them to action with our strategic copywriting services."
          features={[
            "SEO-optimized website copy and blog content",
            "Email marketing campaigns and newsletters",
            "Social media content calendars and copy",
            "Sales copy and conversion-focused content",
          ]}
          image="/marketing-copy-creation.png"
          color="bg-amber-500"
          icon={<FileText className="w-full h-full" />}
        />
      </section>

      <section id="animation">
        <ServiceFeatureInteractive
          title="Animation & Motion Graphics"
          description="Bring your ideas to life with dynamic animations and motion graphics that simplify complex concepts and capture attention."
          features={[
            "2D and 3D animation production",
            "Explainer videos and product demonstrations",
            "Logo animations and brand intros",
            "Social media motion graphics",
          ]}
          image="/dynamic-motion-studio.png"
          color="bg-amber-500"
          reverse={true}
          icon={<Sparkles className="w-full h-full" />}
        />
      </section>

      <ServiceCTACreative
        title="Ready to Create Content That Converts?"
        description="Let's discuss how our content creation services can elevate your brand and engage your audience."
        buttonText="Contact Us"
        buttonLink="/contact"
        bgGradient="bg-gradient-to-br from-amber-950/30 via-black to-amber-950/30"
        color="rgb(245, 158, 11)"
      />

      <Footer />
    </div>
  )
}
