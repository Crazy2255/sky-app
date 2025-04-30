"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useSound } from "@/hooks/use-sound"
import { useMobile } from "@/hooks/use-mobile"
import { Cpu, Zap, Film, Layers, BarChart, Sparkles, ArrowRight, ChevronRight } from "lucide-react"

// Define service types
interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  color: string
}

// Service data
const services: Service[] = [
  {
    id: "ai-implementation",
    title: "AI IMPLEMENTATION",
    description:
      "Harness the power of artificial intelligence to transform your business operations and customer experiences.",
    features: [
      "Custom AI model development",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics",
      "AI-powered automation",
      "Chatbot & virtual assistant integration",
    ],
    icon: <Cpu size={32} />,
    color: "#3B82F6",
  },
  {
    id: "web3-marketing",
    title: "WEB3 MARKETING",
    description:
      "Navigate the decentralized landscape with cutting-edge marketing strategies tailored for blockchain projects.",
    features: [
      "Token launch campaigns",
      "Community building & management",
      "NFT marketing strategies",
      "DeFi project promotion",
      "Blockchain PR & outreach",
      "Web3 content creation",
    ],
    icon: <Zap size={32} />,
    color: "#8B5CF6",
  },
  {
    id: "web2-marketing",
    title: "WEB2 MARKETING",
    description:
      "Elevate your traditional digital presence with comprehensive marketing solutions that drive growth and engagement.",
    features: [
      "Social media management",
      "Content marketing",
      "SEO optimization",
      "Email marketing campaigns",
      "Influencer partnerships",
      "Performance analytics",
    ],
    icon: <BarChart size={32} />,
    color: "#EC4899",
  },
  {
    id: "video-production",
    title: "VIDEO PRODUCTION",
    description:
      "Create stunning visual content that captivates your audience and effectively communicates your brand message.",
    features: [
      "Commercial production",
      "Brand storytelling",
      "Motion graphics & animation",
      "Product demonstrations",
      "Event coverage",
      "Aerial cinematography",
    ],
    icon: <Film size={32} />,
    color: "#F59E0B",
  },
  {
    id: "creative-design",
    title: "CREATIVE DESIGN",
    description:
      "Transform your brand identity with visually striking designs that leave a lasting impression on your audience.",
    features: [
      "Brand identity development",
      "UI/UX design",
      "Print & digital media",
      "Packaging design",
      "Illustration & iconography",
      "3D modeling & visualization",
    ],
    icon: <Layers size={32} />,
    color: "#10B981",
  },
  {
    id: "growth-strategy",
    title: "GROWTH STRATEGY",
    description:
      "Develop comprehensive growth plans that align with your business objectives and drive sustainable expansion.",
    features: [
      "Market analysis & positioning",
      "Customer acquisition strategy",
      "Retention & loyalty programs",
      "Revenue optimization",
      "Competitive intelligence",
      "Performance measurement",
    ],
    icon: <Sparkles size={32} />,
    color: "#6366F1",
  },
]

export default function HollywoodServices() {
  const [activeService, setActiveService] = useState(services[0].id)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { playSound } = useSound()
  const isMobile = useMobile()

  const handleServiceClick = (id: string) => {
    playSound("click")
    setActiveService(id)
  }

  const activeServiceData = services.find((service) => service.id === activeService) || services[0]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Particle animation component
  const ParticleAnimation = ({ color }: { color: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const particles: {
        x: number
        y: number
        size: number
        speedX: number
        speedY: number
        life: number
        maxLife: number
      }[] = []
      const particleCount = 50

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1,
          life: 0,
          maxLife: Math.random() * 100 + 50,
        })
      }

      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result
          ? {
              r: Number.parseInt(result[1], 16),
              g: Number.parseInt(result[2], 16),
              b: Number.parseInt(result[3], 16),
            }
          : { r: 0, g: 0, b: 0 }
      }

      const rgb = hexToRgb(color)

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw connections
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`
        ctx.lineWidth = 0.5

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              const opacity = 1 - distance / 100
              ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity * 0.2})`
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.stroke()
            }
          }
        }

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]

          p.x += p.speedX
          p.y += p.speedY
          p.life++

          // Reset particle if it's off-screen or reached max life
          if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height || p.life > p.maxLife) {
            p.x = Math.random() * canvas.width
            p.y = Math.random() * canvas.height
            p.speedX = (Math.random() - 0.5) * 1
            p.speedY = (Math.random() - 0.5) * 1
            p.life = 0
          }

          const opacity = 1 - p.life / p.maxLife
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }

        requestAnimationFrame(animate)
      }

      animate()

      // Resize handler
      const handleResize = () => {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
      }

      handleResize()
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [color])

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
  }

  // Animated service icon
  const AnimatedServiceIcon = ({ icon, color }: { icon: React.ReactNode; color: string }) => {
    return (
      <motion.div
        className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.1, 1],
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
            animation: "pulse 3s infinite",
          }}
        />

        {/* Animated corners */}
        <div
          className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-md"
          style={{ borderColor: color, animation: "cornerTopLeft 3s infinite" }}
        />
        <div
          className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-md"
          style={{ borderColor: color, animation: "cornerTopRight 3s infinite" }}
        />
        <div
          className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-md"
          style={{ borderColor: color, animation: "cornerBottomLeft 3s infinite" }}
        />
        <div
          className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-md"
          style={{ borderColor: color, animation: "cornerBottomRight 3s infinite" }}
        />

        <div className="relative z-10" style={{ color }}>
          {icon}
        </div>
      </motion.div>
    )
  }

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.7; transform: scale(1.1); }
          100% { opacity: 0.3; transform: scale(0.8); }
        }
        
        @keyframes cornerTopLeft {
          0% { transform: translate(8px, 8px); }
          50% { transform: translate(0, 0); }
          100% { transform: translate(8px, 8px); }
        }
        
        @keyframes cornerTopRight {
          0% { transform: translate(-8px, 8px); }
          50% { transform: translate(0, 0); }
          100% { transform: translate(-8px, 8px); }
        }
        
        @keyframes cornerBottomLeft {
          0% { transform: translate(8px, -8px); }
          50% { transform: translate(0, 0); }
          100% { transform: translate(8px, -8px); }
        }
        
        @keyframes cornerBottomRight {
          0% { transform: translate(-8px, -8px); }
          50% { transform: translate(0, 0); }
          100% { transform: translate(-8px, -8px); }
        }
      `}</style>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <div className="overflow-hidden mb-4">
            <motion.div
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate"
            >
              Our Expertise
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
              className="text-4xl md:text-6xl font-syncopate font-bold"
            >
              What We Offer
            </motion.h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className={`w-full text-left p-4 transition-all duration-300 border-l-4 hover:bg-white/5 ${
                      activeService === service.id ? "border-l-4 bg-white/5" : "border-l-4 border-transparent"
                    }`}
                    style={{
                      borderLeftColor: activeService === service.id ? service.color : "transparent",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-syncopate text-sm md:text-base transition-colors duration-300 ${
                          activeService === service.id ? "text-white" : "text-white/60"
                        }`}
                      >
                        {service.title}
                      </span>
                      {activeService === service.id && (
                        <ChevronRight size={16} className="text-white" style={{ color: service.color }} />
                      )}
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full"
                style={{ borderColor: `${activeServiceData.color}40` }}
              >
                <div className="relative z-10">
                  <AnimatedServiceIcon icon={activeServiceData.icon} color={activeServiceData.color} />

                  <h3
                    className="text-2xl md:text-3xl font-syncopate font-bold text-center mb-6"
                    style={{ color: activeServiceData.color }}
                  >
                    {activeServiceData.title}
                  </h3>

                  <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto">{activeServiceData.description}</p>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                  >
                    {activeServiceData.features.map((feature, index) => (
                      <motion.div key={index} variants={itemVariants} className="relative group">
                        <div
                          className="p-4 border border-dashed rounded-md transition-all duration-300 hover:shadow-lg"
                          style={{
                            borderColor: `${activeServiceData.color}40`,
                            background: `linear-gradient(135deg, transparent 0%, ${activeServiceData.color}10 100%)`,
                          }}
                        >
                          <div
                            className="absolute inset-0 border border-dashed rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              borderColor: activeServiceData.color,
                              animation: "rotate 10s linear infinite",
                            }}
                          />

                          <div className="flex items-start">
                            <div className="mr-3 mt-1" style={{ color: activeServiceData.color }}>
                              <ArrowRight size={16} />
                            </div>
                            <div>
                              <h4
                                className="font-medium mb-1 group-hover:underline decoration-2 transition-all duration-300"
                                style={{
                                  textDecorationColor: activeServiceData.color,
                                  textUnderlineOffset: "4px",
                                }}
                              >
                                {feature}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-md font-syncopate text-sm relative overflow-hidden group"
                      style={{
                        backgroundColor: `${activeServiceData.color}20`,
                        color: activeServiceData.color,
                      }}
                    >
                      <span className="relative z-10">LEARN MORE</span>
                      <div
                        className="absolute inset-0 w-0 bg-gradient-to-r group-hover:w-full transition-all duration-300 ease-out"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${activeServiceData.color}40, ${activeServiceData.color}20)`,
                        }}
                      />
                    </motion.button>
                  </div>
                </div>

                {/* Particle animation in the background */}
                <div className="absolute inset-0 z-0 opacity-50">
                  <ParticleAnimation color={activeServiceData.color} />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
