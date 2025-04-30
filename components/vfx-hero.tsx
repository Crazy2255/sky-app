"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import ReliableVideoPlayer from "./reliable-video-player"

export default function VfxHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create particle effect
    const container = containerRef.current
    if (!container) return

    const particles: HTMLDivElement[] = []
    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full bg-white/30"

      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      // Random position
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      // Random opacity
      particle.style.opacity = `${Math.random() * 0.5 + 0.2}`

      container.appendChild(particle)
      particles.push(particle)

      // Animate particles
      animateParticle(particle)
    }

    function animateParticle(particle: HTMLDivElement) {
      const duration = Math.random() * 8000 + 4000
      const xMove = Math.random() * 100 - 50
      const yMove = Math.random() * -100 - 50

      particle.animate(
        [
          { transform: "translate(0, 0)", opacity: particle.style.opacity },
          { transform: `translate(${xMove}px, ${yMove}px)`, opacity: "0" },
        ],
        {
          duration,
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        },
      ).onfinish = () => {
        // Reset particle position
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        animateParticle(particle)
      }
    }

    return () => {
      particles.forEach((p) => p.remove())
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <ReliableVideoPlayer
          src="/videos/vfx-showcase-1.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
          controls={false}
          fallbackImage="/cosmic-nebula.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
      </div>

      {/* Particle container */}
      <div ref={containerRef} className="absolute inset-0 z-20 overflow-hidden"></div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 overflow-hidden"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate">
            Visual Effects Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-syncopate"
        >
          <span className="block">CINEMATIC</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            VISUAL EFFECTS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mb-10"
        >
          Transform your vision with cutting-edge VFX that captivates audiences and elevates your brand to new heights
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-colors"
          >
            Explore Our VFX Services
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
            <ArrowDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
