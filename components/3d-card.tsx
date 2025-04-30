"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Card3D({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  // Mouse position
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for smooth movement
  const xSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 })

  // Transform values for rotations
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  // Shine effect
  const shineX = useTransform(xSpring, [-0.5, 0.5], ["250%", "-50%"])
  const shineY = useTransform(ySpring, [-0.5, 0.5], ["250%", "-50%"])

  // Handle mouse move
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    // Calculate position in the range of -0.5 to 0.5
    const newX = (e.clientX - rect.left) / rect.width - 0.5
    const newY = (e.clientY - rect.top) / rect.height - 0.5

    x.set(newX)
    y.set(newY)
  }

  // Reset position on mouse leave
  function handleMouseLeave() {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        transformPerspective: "1500px",
      }}
    >
      {children}

      {/* Shine/highlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-lg opacity-0"
        style={{
          background: "linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
          backgroundPosition: `${shineX}% ${shineY}%`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </motion.div>
  )
}
