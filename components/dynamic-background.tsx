"use client"

import { useEffect, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid properties
    const gridSize = isMobile ? 75 : 50
    const gridLineWidth = 1
    const gridLineColor = "rgba(30, 64, 175, 0.1)"

    // Particles
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
    }[] = []

    const createParticles = () => {
      // Reduce particle count on mobile
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / (isMobile ? 40000 : 20000))

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: getRandomColor(),
          alpha: Math.random() * 0.5 + 0.2,
        })
      }
    }

    // Get random color with brand colors
    const getRandomColor = () => {
      const colors = ["#8B5CF6", "#EC4899", "#3B82F6"]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      // Reduce particle creation on mobile
      if (!isMobile && Math.random() > 0.8) {
        for (let i = 0; i < 2; i++) {
          particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 4 + 2,
            speedX: (Math.random() - 0.5) * 1,
            speedY: (Math.random() - 0.5) * 1,
            color: getRandomColor(),
            alpha: Math.random() * 0.7 + 0.3,
          })
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    createParticles()

    // Animation
    let animationId: number
    let lastTime = 0
    const fps = isMobile ? 30 : 60 // Lower FPS on mobile
    const interval = 1000 / fps

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime

      if (deltaTime >= interval) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw grid
        ctx.beginPath()
        ctx.strokeStyle = gridLineColor
        ctx.lineWidth = gridLineWidth

        // Vertical lines
        for (let x = 0; x <= canvas.width; x += gridSize) {
          ctx.moveTo(x, 0)
          ctx.lineTo(x, canvas.height)
        }

        // Horizontal lines
        for (let y = 0; y <= canvas.height; y += gridSize) {
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
        }

        ctx.stroke()

        // Update and draw particles
        particles.forEach((particle, index) => {
          // Update position
          particle.x += particle.speedX
          particle.y += particle.speedY

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width
          if (particle.x > canvas.width) particle.x = 0
          if (particle.y < 0) particle.y = canvas.height
          if (particle.y > canvas.height) particle.y = 0

          // Draw particle
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle =
            particle.color +
            Math.floor(particle.alpha * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.fill()

          // Limit connections on mobile
          if (!isMobile) {
            // Connection lines between nearby particles
            for (let j = index + 1; j < particles.length; j++) {
              const p2 = particles[j]
              const dx = particle.x - p2.x
              const dy = particle.y - p2.y
              const dist = Math.sqrt(dx * dx + dy * dy)

              if (dist < 100) {
                ctx.beginPath()
                ctx.strokeStyle =
                  particle.color +
                  Math.floor(particle.alpha * 0.2 * 255)
                    .toString(16)
                    .padStart(2, "0")
                ctx.lineWidth = 0.5
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(p2.x, p2.y)
                ctx.stroke()
              }
            }
          }
        })

        lastTime = timestamp - (deltaTime % interval)
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1]" style={{ opacity: 0.6 }} />
}
