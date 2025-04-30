import type React from "react"
;('"use client')

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

export function Logo3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    // Initial animation
    controls.start({
      rotateY: [0, 360],
      transition: { duration: 2, ease: "easeInOut" },
    })
  }, [controls])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    controls.start({
      rotateY: x * 30,
      rotateX: -y * 30,
      transition: { type: "spring", bounce: 0.2, duration: 0.3 },
    })
  }

  const handleMouseLeave = () => {
    controls.start({
      rotateY: 0,
      rotateX: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.5 },
    })
  }

  return (
    <div
      ref={containerRef}
      className="inline-block perspective-500 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={controls}
        className="relative flex items-center justify-center w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-accent font-space">
          S/KYNET
        </span>

        {/* Glow effect */}
        <div className="absolute inset-0 blur-sm opacity-50 bg-gradient-to-r from-secondary via-primary to-accent rounded-full"></div>
      </motion.div>
    </div>
  )
}
