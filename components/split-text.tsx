"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

export default function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const words = text.split(" ")

  return (
    <div ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 80, rotateX: 40 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 80, rotateX: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.11, 0.8, 0.32, 1],
                delay: delay + wordIndex * 0.05 + charIndex * 0.03,
              }}
              style={{ transformOrigin: "50% 100%" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  )
}
