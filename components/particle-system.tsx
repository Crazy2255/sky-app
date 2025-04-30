"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  life: number
  maxLife: number
}

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Particles array
    const particles: Particle[] = []

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let mouseActive = false

    // Create initial particles
    const createParticles = () => {
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 20000), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: getRandomColor(),
          alpha: Math.random() * 0.5 + 0.2,
          life: 0,
          maxLife: Math.random() * 200 + 100,
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
      mouseX = e.clientX
      mouseY = e.clientY
      mouseActive = true

      // Create particles on mouse move
      if (Math.random() > 0.8) {
        for (let i = 0; i < 2; i++) {
          particles.push({
            x: mouseX,
            y: mouseY,
            size: Math.random() * 4 + 2,
            speedX: (Math.random() - 0.5) * 1,
            speedY: (Math.random() - 0.5) * 1,
            color: getRandomColor(),
            alpha: Math.random() * 0.7 + 0.3,
            life: 0,
            maxLife: Math.random() * 100 + 20,
          })
        }
      }
    }

    const handleMouseLeave = () => {
      mouseActive = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    createParticles()

    // Animation
    let animationId: number

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update position
        p.x += p.speedX
        p.y += p.speedY

        // Update life
        p.life++

        // Fade out based on life
        const normalizedLife = Math.min(p.life / p.maxLife, 1)
        const fadeAlpha = p.alpha * (1 - normalizedLife)

        // Mouse interaction for nearby particles
        if (mouseActive) {
          const dx = p.x - mouseX
          const dy = p.y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            const forceX = (dx / dist) * 0.2
            const forceY = (dy / dist) * 0.2
            p.speedX += forceX
            p.speedY += forceY
          }
        }

        // Limit speed
        const maxSpeed = 1.5
        const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
        if (speed > maxSpeed) {
          p.speedX = (p.speedX / speed) * maxSpeed
          p.speedY = (p.speedY / speed) * maxSpeed
        }

        // Add some drag
        p.speedX *= 0.99
        p.speedY *= 0.99

        // Edge wrap
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle =
          p.color +
          Math.floor(fadeAlpha * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Connection lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle =
              p.color +
              Math.floor(fadeAlpha * 0.2 * 255)
                .toString(16)
                .padStart(2, "0")
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        // Remove dead particles
        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
          i--

          // Add a new particle to replace the dead one
          if (particles.length < 50) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              size: Math.random() * 3 + 1,
              speedX: (Math.random() - 0.5) * 0.3,
              speedY: (Math.random() - 0.5) * 0.3,
              color: getRandomColor(),
              alpha: Math.random() * 0.5 + 0.2,
              life: 0,
              maxLife: Math.random() * 200 + 100,
            })
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1]" style={{ opacity: 0.6 }} />
}
