"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function CleanHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const isMobile = useMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Set loaded state after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Force load the video
    video.load()

    // Set a timeout to consider the video loaded even if the event doesn't fire
    const timer = setTimeout(() => {
      if (!videoLoaded) {
        console.log("Video load timeout - forcing loaded state")
        setVideoLoaded(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [videoLoaded])

  // Handle video loading
  const handleVideoLoaded = () => {
    setVideoLoaded(true)
  }

  // Simplified animation variants
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoaded}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/videos/business-loop.mp4" type="video/mp4" />
        </video>

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path d="M30 5L55 45H5L30 5Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Main heading with letter animation */}
        <div className="overflow-hidden mb-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-syncopate font-light tracking-wider text-white mb-4">
            {["S", "K", "Y", "N", "E", "T"].map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl font-syncopate tracking-[0.2em] text-white/80 uppercase">
            Marketing Agency
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-xl md:text-2xl max-w-2xl mb-12 text-white/70"
        >
          We transform brands through strategic digital marketing and creative innovation
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white font-medium rounded-sm"
          >
            View Our Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-3xl"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "200+", label: "Clients Worldwide" },
            { value: "95%", label: "Client Retention" },
          ].map((stat, index) => (
            <motion.div key={index} whileHover={{ y: -5 }} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </motion.div>
        <div className="text-white/50 text-xs mt-2 text-center">SCROLL</div>
      </motion.div>
    </section>
  )
}
