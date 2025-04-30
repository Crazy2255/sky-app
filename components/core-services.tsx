"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import {
  Users,
  Code,
  Video,
  BarChart3,
  Gamepad2,
  Coins,
  Search,
  Film,
  Instagram,
  Megaphone,
  Palette,
  Globe,
} from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const ServiceCard = ({ icon, title, description, href }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all group cursor-pointer min-w-[340px] md:min-w-[380px] flex-shrink-0 mx-3 h-[280px] flex flex-col"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Link href={href} className="block h-full flex flex-col flex-grow">
        <div className="mb-5 text-[#CD8AF9]">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/70 mb-4 text-lg">{description}</p>
        <div className="flex items-center text-[#FFD56C] opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium">Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:ml-2 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CoreServices() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [duplicated, setDuplicated] = useState(false)

  const services = [
    {
      icon: <Users size={40} />,
      title: "Social Media Growth",
      description: "Grow followers, increase reach, and boost engagement.",
      href: "/services#social-media",
    },
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Custom websites that convert visitors into customers.",
      href: "/services#web-development",
    },
    {
      icon: <Video size={40} />,
      title: "Video & VFX",
      description: "Reels, animations, and cinematic edits that captivate.",
      href: "/vfx",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Digital Marketing Strategy",
      description: "We craft campaigns that convert and connect.",
      href: "/services#digital-marketing",
    },
    {
      icon: <Film size={40} />,
      title: "Video Production",
      description: "Professional video content from concept to final cut.",
      href: "/services#video-production",
    },
    {
      icon: <Instagram size={40} />,
      title: "Social Media Management",
      description: "Full-service management of your social presence.",
      href: "/services#social-media",
    },
    {
      icon: <Search size={40} />,
      title: "SEO Optimization",
      description: "Boost your visibility and rank higher on search engines.",
      href: "/services#seo",
    },
    {
      icon: <Megaphone size={40} />,
      title: "Content Creation",
      description: "Engaging content that resonates with your audience.",
      href: "/services#content",
    },
    {
      icon: <Palette size={40} />,
      title: "Brand Design",
      description: "Distinctive visual identity that sets you apart.",
      href: "/services#branding",
    },
    {
      icon: <Globe size={40} />,
      title: "Global Marketing",
      description: "Reach international audiences with localized strategies.",
      href: "/services#global",
    },
    {
      icon: <Gamepad2 size={40} />,
      title: "iGaming Platform Setup",
      description: "Complete solutions for casinos, licensing, and marketing.",
      href: "/services/igaming",
    },
    {
      icon: <Coins size={40} />,
      title: "Web3 Campaigns",
      description: "From NFT drops to token launches—built the right way.",
      href: "/web3",
    },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 })

      // Duplicate the services for seamless looping
      if (!duplicated && scrollRef.current) {
        setDuplicated(true)
      }
    }
  }, [isInView, controls, duplicated])

  // Animation for the scrolling effect
  useEffect(() => {
    if (!scrollRef.current || !duplicated) return

    const scrollContainer = scrollRef.current
    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    // Only animate if content is wider than container
    if (scrollWidth <= clientWidth) return

    let animationId: number
    let position = 0
    const speed = 1.2 // pixels per frame - increased for faster scrolling

    const animate = () => {
      position -= speed

      // Reset position for seamless loop when we've scrolled one item width
      if (Math.abs(position) >= scrollWidth / 2) {
        position = 0
      }

      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(${position}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [duplicated])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Core Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We combine strategy, creativity, and technology to deliver results that matter for your business.
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          {/* Gradient fade on left */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>

          {/* Scrolling container */}
          <div ref={scrollRef} className="flex space-x-6 py-6 w-full">
            {/* First set of services */}
            {services.map((service, index) => (
              <ServiceCard
                key={`service-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}

            {/* Duplicated set for seamless looping */}
            {services.map((service, index) => (
              <ServiceCard
                key={`service-dup-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>

          {/* Gradient fade on right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}
