"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import {
  Building2,
  SmileIcon as Tooth,
  UtensilsCrossed,
  Cat,
  Car,
  Bitcoin,
  Hotel,
  Stethoscope,
  Gamepad2,
  Plane,
  Shirt,
  Landmark,
  Glasses,
  Smartphone,
  GraduationCap,
  ShoppingBag,
} from "lucide-react"

interface IndustryCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const IndustryCard = ({ icon, title, description }: IndustryCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group cursor-pointer min-w-[280px] md:min-w-[320px]">
      <div className="mb-4 text-[#FFD56C]">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">{description}</p>
    </div>
  )
}

export default function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()
  const scrollerRef = useRef<HTMLDivElement>(null)

  const industries = [
    {
      icon: <Building2 size={32} />,
      title: "Real Estate",
      description: "Sell more listings with scroll-stopping content.",
    },
    {
      icon: <Tooth size={32} />,
      title: "Dental & Clinics",
      description: "Attract patients with professional presence.",
    },
    {
      icon: <UtensilsCrossed size={32} />,
      title: "Restaurants & Cafes",
      description: "From mouthwatering reels to clean menus.",
    },
    {
      icon: <Cat size={32} />,
      title: "Pet Clinics",
      description: "Get your clinic discovered locally.",
    },
    {
      icon: <Car size={32} />,
      title: "Car Rentals",
      description: "Upgrade your booking with high-converting ads.",
    },
    {
      icon: <Bitcoin size={32} />,
      title: "Crypto/Web3 Startups",
      description: "Build trust through smart storytelling.",
    },
    {
      icon: <Hotel size={32} />,
      title: "Hospitality",
      description: "Showcase your property with immersive experiences.",
    },
    {
      icon: <Stethoscope size={32} />,
      title: "Healthcare",
      description: "Build patient trust with professional content.",
    },
    {
      icon: <Gamepad2 size={32} />,
      title: "Gaming & eSports",
      description: "Engage your audience with dynamic content.",
    },
    {
      icon: <Plane size={32} />,
      title: "Travel & Tourism",
      description: "Inspire wanderlust with captivating visuals.",
    },
    {
      icon: <Shirt size={32} />,
      title: "Fashion & Apparel",
      description: "Showcase your products with style and flair.",
    },
    {
      icon: <Landmark size={32} />,
      title: "Finance & Banking",
      description: "Communicate complex services with clarity.",
    },
    {
      icon: <Glasses size={32} />,
      title: "Education & E-Learning",
      description: "Make learning engaging and accessible.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Tech & SaaS",
      description: "Simplify complex products with clear messaging.",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Higher Education",
      description: "Attract students with compelling campus stories.",
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Retail & E-commerce",
      description: "Drive conversions with product-focused content.",
    },
  ]

  // Duplicate the industries for seamless looping
  const duplicatedIndustries = [...industries, ...industries]

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [isInView, controls])

  // Set up the automatic scrolling animation
  useEffect(() => {
    if (!scrollerRef.current) return

    const scrollWidth = scrollerRef.current.scrollWidth
    const clientWidth = scrollerRef.current.clientWidth
    const scrollDistance = scrollWidth / 2

    const scroll = async () => {
      if (!scrollerRef.current) return

      // Animate from 0 to -50% (first set of items)
      await controls.start({
        x: -scrollDistance,
        transition: {
          duration: 30,
          ease: "linear",
        },
      })

      // Instantly reset to 0 without animation
      controls.set({ x: 0 })

      // Repeat the animation
      scroll()
    }

    scroll()

    return () => {
      controls.stop()
    }
  }, [controls])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="industries">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Industries We Help</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            From traditional businesses to cutting-edge startups, we help clients across diverse industries succeed.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>

          <motion.div ref={scrollerRef} className="flex gap-6 py-4" animate={controls}>
            {duplicatedIndustries.map((industry, index) => (
              <IndustryCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
