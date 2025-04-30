"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Interactive3DImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  highlightElements?: boolean
}

export default function Interactive3DImage({
  src,
  alt,
  width,
  height,
  className = "",
  highlightElements = true,
}: Interactive3DImageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Calculate the tilt based on mouse position
  const tiltX = isHovered ? (mousePosition.y - 0.5) * 20 : 0
  const tiltY = isHovered ? (mousePosition.x - 0.5) * -20 : 0

  // Animated elements positions
  const elements = [
    { x: "10%", y: "15%", size: 40, color: "bg-purple-500", delay: 0 },
    { x: "85%", y: "20%", size: 30, color: "bg-cyan-500", delay: 0.5 },
    { x: "75%", y: "75%", size: 35, color: "bg-pink-500", delay: 1 },
    { x: "20%", y: "80%", size: 25, color: "bg-yellow-500", delay: 1.5 },
  ]

  return (
    <div
      ref={containerRef}
      className={`relative perspective-1000 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Container */}
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{
          rotateX: tiltX,
          rotateY: tiltY,
          z: isHovered ? 50 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Main Image */}
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto rounded-xl shadow-2xl ${isHovered ? "scale-105" : "scale-100"} transition-transform duration-500`}
        />

        {/* Glow Overlay */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-40 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(56, 189, 248, 0.8), transparent 50%)`,
          }}
        />

        {/* Highlight Elements */}
        {highlightElements &&
          elements.map((element, index) => (
            <motion.div
              key={index}
              className={`absolute ${element.color} rounded-full opacity-70 blur-sm pointer-events-none`}
              style={{
                left: element.x,
                top: element.y,
                width: element.size,
                height: element.size,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: element.delay,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Floating Gaming Icons */}
        <motion.div
          className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          🎮
        </motion.div>

        <motion.div
          className="absolute -bottom-5 -left-5 w-14 h-14 bg-gradient-to-br from-pink-600 to-red-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🎲
        </motion.div>
      </motion.div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
