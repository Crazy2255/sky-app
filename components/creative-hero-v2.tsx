"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { useSound } from "@/hooks/use-sound"

export default function CreativeHeroV2() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const isMobile = useMobile()
  const { playSound } = useSound()

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  // Interactive particle system
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle system
    const particles: Particle[] = []
    const particleCount = isMobile ? 50 : 100
    let mouseX = 0
    let mouseY = 0
    let animationFrame: number

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      originalX: number
      originalY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.originalX = this.x
        this.originalY = this.y
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1

        // Color palette: purples, blues, and pinks
        const colors = [
          "rgba(139, 92, 246, 0.8)", // Purple
          "rgba(59, 130, 246, 0.8)", // Blue
          "rgba(236, 72, 153, 0.8)", // Pink
          "rgba(167, 139, 250, 0.8)", // Lighter purple
          "rgba(96, 165, 250, 0.8)", // Lighter blue
        ]

        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Move particles
        this.x += this.speedX
        this.y += this.speedY

        // Boundary check
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }

        // Mouse interaction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          this.x -= dx * force * 0.05
          this.y -= dy * force * 0.05
        } else {
          // Gradually return to original position when not affected by mouse
          this.x += (this.originalX - this.x) * 0.01
          this.y += (this.originalY - this.y) * 0.01
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Touch move handler for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX
        mouseY = e.touches[0].clientY
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections between particles
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    // Set loaded state
    setTimeout(() => setLoaded(true), 500)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [isMobile])

  // Data for the interactive elements
  const features = [
    {
      id: 1,
      title: "AI-Driven",
      description: "Cutting-edge artificial intelligence powers our marketing strategies",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Data-Driven",
      description: "Strategic decisions backed by advanced analytics and insights",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary"
        >
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Award-Winning",
      description: "Recognized for innovation in marketing technology",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </svg>
      ),
    },
  ]

  // Handle hover sound effect
  const handleHover = (index: number) => {
    if (hoverIndex !== index) {
      playSound("hover")
      setHoverIndex(index)
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Interactive particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10"></div>

      {/* Main content */}
      <motion.div
        className="relative z-20 w-full h-screen flex flex-col items-center justify-center px-4"
        style={{ opacity: headerOpacity, y: headerY }}
      >
        {/* Animated logo reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: loaded ? 1 : 0,
            scale: loaded ? 1 : 0.8,
            y: loaded ? 0 : 20,
          }}
          transition={{
            duration: 1.2,
            ease: [0.19, 1, 0.22, 1],
            delay: 0.2,
          }}
          className="mb-8 relative"
        >
          {/* SKYNET text with clear, crisp styling */}
          <div className="relative flex items-center justify-center">
            <h1 className="text-7xl md:text-9xl font-syncopate font-light tracking-widest text-white select-none">
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">S</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">K</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">Y</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">N</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">E</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">T</span>
            </h1>
          </div>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: loaded ? 1 : 0,
              y: loaded ? 0 : 20,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="text-center mt-4"
          >
            <div className="text-lg md:text-xl uppercase tracking-[0.3em] text-white/80 font-syncopate">
              Marketing Agency
            </div>
          </motion.div>
        </motion.div>

        {/* Animated tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: loaded ? 1 : 0,
            y: loaded ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="text-xl md:text-2xl text-center max-w-2xl mb-12 text-white/80"
        >
          Transforming businesses through AI-driven marketing strategies that deliver measurable results
        </motion.p>

        {/* Interactive feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: loaded ? 1 : 0,
            y: loaded ? 0 : 40,
          }}
          transition={{
            duration: 1,
            delay: 1.6,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: loaded ? 1 : 0,
                y: loaded ? 0 : 20,
              }}
              transition={{
                duration: 0.8,
                delay: 1.8 + index * 0.2,
                ease: [0.19, 1, 0.22, 1],
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative p-6 rounded-lg backdrop-blur-md border border-white/10 overflow-hidden group"
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card content */}
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-white/80">{feature.icon}</div>
                  <h3 className="text-xl font-syncopate font-bold">{feature.title}</h3>
                </div>
                <p className="text-white/70">{feature.description}</p>
              </div>

              {/* Animated corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-primary/30 via-secondary/30 to-transparent transform translate-y-6 translate-x-6 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: loaded ? 1 : 0,
            y: loaded ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
            delay: 2.4,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => playSound("click")}
            className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-syncopate text-sm tracking-wider font-bold relative overflow-hidden group"
          >
            <span className="relative z-10">VIEW OUR WORK</span>
            <span className="absolute inset-0 bg-white w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out opacity-20"></span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => playSound("hover")}
            className="px-8 py-4 border border-white/20 text-white font-syncopate text-sm tracking-wider font-bold hover:bg-white/10 transition-colors"
          >
            GET IN TOUCH
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: loaded ? 1 : 0,
        }}
        transition={{
          duration: 1,
          delay: 3,
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-center justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
        <div className="text-white/50 text-xs mt-2 text-center font-syncopate">SCROLL</div>
      </motion.div>
    </section>
  )
}
