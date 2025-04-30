"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, Cpu, Code, PenTool, Zap } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { useSound } from "@/hooks/use-sound"
import ParticleSystem from "./particle-system"

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0)
  const [hoverService, setHoverService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const isMobile = useMobile()
  const { playSound } = useSound()

  // Services data
  const services = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI Strategy",
      description:
        "Harness the power of artificial intelligence to transform your business operations, customer experiences, and decision-making processes.",
      color: "bg-cyan-500",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500/50",
      hoverColor: "hover:bg-cyan-500/10",
      link: "/services/ai-strategy",
      particles: {
        color: "#06b6d4",
        shape: "circle",
      },
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Content Creation",
      description:
        "Captivate your audience with stunning visuals, compelling narratives, and strategic content that drives engagement and conversions.",
      color: "bg-amber-500",
      textColor: "text-amber-400",
      borderColor: "border-amber-500/50",
      hoverColor: "hover:bg-amber-500/10",
      link: "/services/content-creation",
      particles: {
        color: "#f59e0b",
        shape: "triangle",
      },
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Digital Marketing",
      description:
        "Drive growth, increase visibility, and connect with your target audience through our comprehensive digital marketing strategies.",
      color: "bg-purple-500",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/50",
      hoverColor: "hover:bg-purple-500/10",
      link: "/services/digital-marketing",
      particles: {
        color: "#a855f7",
        shape: "square",
      },
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Create powerful digital experiences with custom websites and applications built for performance, security, and scalability.",
      color: "bg-green-500",
      textColor: "text-green-400",
      borderColor: "border-green-500/50",
      hoverColor: "hover:bg-green-500/10",
      link: "/services/web-development",
      particles: {
        color: "#22c55e",
        shape: "circle",
      },
    },
  ]

  // Animation when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Handle service hover
  const handleServiceHover = (index: number) => {
    if (hoverService !== index) {
      playSound("hover")
      setHoverService(index)
    }
  }

  // Handle service click
  const handleServiceClick = (index: number) => {
    playSound("click")
    setActiveService(index)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  return (
    <section ref={sectionRef} id="services" className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            What We Offer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Our comprehensive suite of services is designed to help your business thrive in the digital landscape, from
            AI-powered solutions to creative content and development.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative p-6 md:p-8 rounded-xl border ${service.borderColor} ${service.hoverColor} transition-all duration-300 group overflow-hidden`}
              onMouseEnter={() => handleServiceHover(index)}
              onMouseLeave={() => setHoverService(null)}
              onClick={() => handleServiceClick(index)}
            >
              {/* Particle animation on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ParticleSystem
                  count={20}
                  color={service.particles.color}
                  shape={service.particles.shape as "circle" | "square" | "triangle"}
                />
              </div>

              {/* Service icon */}
              <div
                className={`w-12 h-12 rounded-lg ${service.color} bg-opacity-20 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}
              >
                <span className={service.textColor}>{service.icon}</span>
              </div>

              {/* Service content */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>

              {/* Learn more link */}
              <a
                href={service.link}
                className={`inline-flex items-center ${service.textColor} group-hover:translate-x-1 transition-all duration-300`}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Corner accent */}
              <div
                className={`absolute -bottom-2 -right-2 w-16 h-16 ${service.color} opacity-20 transform rotate-45 translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
