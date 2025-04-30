"use client"

import { motion } from "framer-motion"

interface FloatingGamingElementsProps {
  count?: number
}

export default function FloatingGamingElements({ count = 10 }: FloatingGamingElementsProps) {
  // Gaming-related emojis
  const gamingEmojis = ["🎮", "🎲", "🎯", "🎰", "🃏", "♠️", "♥️", "♦️", "♣️", "🏆"]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const emoji = gamingEmojis[i % gamingEmojis.length]
        const size = 20 + Math.random() * 30
        const duration = 15 + Math.random() * 20
        const delay = Math.random() * 5

        return (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-70 select-none"
            style={{
              fontSize: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              delay,
              ease: "linear",
            }}
          >
            {emoji}
          </motion.div>
        )
      })}
    </div>
  )
}
