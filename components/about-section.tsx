"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 relative" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">About Skynet Vision</h2>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-white/80 mb-8">
              Skynet Vision is a creative agency blending design, strategy, and tech to drive business growth for
              companies worldwide.
            </p>
            <p className="text-xl font-medium mb-8">We don't just make things look good — we make them work.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
