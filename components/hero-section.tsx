"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BasicVideo from "./basic-video"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    console.log("HeroSection mounted")
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" id="home">
      {/* Background video with animated overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback background color in case video doesn't load */}
        <div className="absolute inset-0 bg-gray-900"></div>

        {/* Video background using simplified component */}
        <div className="absolute inset-0 z-1">
          <BasicVideo 
            src="/videos/0404__87pct_smaller.mp4"
            fallbackSrc="/videos/business-loop.mp4"
            poster="/abstract-energy-flow.png"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
        </div>

        {/* Animated gradient overlay with adjusted opacity */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
          style={{ zIndex: 2 }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0.8, 0.7, 0.8],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Enhanced grid overlay with animation and increased visibility */}
        <motion.div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
          style={{ zIndex: 3 }}
          animate={{
            opacity: [0.15, 0.2, 0.15],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating animated elements with increased visibility */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl"
              animate={{
                x: ["-20%", "10%", "-5%"],
                y: ["10%", "-10%", "5%"],
                scale: [1, 1.2, 0.9],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{ top: "30%", left: "50%", transform: "translateX(-70%)" }}
            />

            {/* Main yellow glow positioned just above the text */}
            <motion.div
              className="absolute w-[28rem] h-80 rounded-full bg-gradient-to-r from-[#FFD56C]/40 to-orange-500/30 blur-3xl"
              animate={{
                x: ["0%", "-3%", "3%"],
                scale: [1, 1.05, 0.98],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{ top: "20%", left: "50%", transform: "translateX(-50%)" }}
            />
          </div>

          {/* Text with enhanced shadow for better visibility */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD56C] via-white to-[#FFD56C] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Creating</span> Tomorrow's{" "}
            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Success</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pioneering digital strategies that don't just follow trends—they{" "}
            <span className="text-[#FFD56C] font-semibold">set them</span>. Your vision, amplified.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/#contact">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#FFD56C] to-[#FFC53D] text-black font-bold rounded-full hover:shadow-[0_0_25px_rgba(255,213,108,0.6)] transition-all shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 213, 108, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.7)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
