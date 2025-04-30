"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CasinoChipProps {
  color: string
  delay: number
  x: number
  y: number
  size: number
}

export default function CasinoChip({ color, delay, x, y, size }: CasinoChipProps) {
  const [position, setPosition] = useState({ x, y })

  useEffect(() => {
    const interval = setInterval(() => {
      const newX = position.x + (Math.random() * 100 - 50)
      const newY = position.y + (Math.random() * 100 - 50)
      setPosition({ x: newX, y: newY })
    }, 5000)

    return () => clearInterval(interval)
  }, [position])

  return (
    <motion.div
      className="absolute"
      initial={{ x, y, opacity: 0 }}
      animate={{
        x: position.x,
        y: position.y,
        opacity: 0.7,
        rotate: 360,
      }}
      transition={{
        delay,
        duration: 5,
        rotate: {
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        },
        opacity: {
          duration: 1,
        },
      }}
    >
      <div
        className={`rounded-full ${color} relative`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <div className="absolute inset-2 rounded-full border-4 border-white/30"></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-dashed border-white/10"
          style={{
            animation: "rotate 30s linear infinite",
          }}
        ></div>
      </div>
    </motion.div>
  )
}
