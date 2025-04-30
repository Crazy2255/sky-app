"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [showReel, setShowReel] = useState(false)
  const isMobile = useMobile()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 400])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoLoaded) {
        console.log("Video loading timed out, showing content anyway")
        setVideoLoaded(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [videoLoaded])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Overlay */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source
            src={isMobile ? "/videos/background-video-mobile.mp4" : "/videos/background-video.mp4"}
            type="video/mp4"
          />
        </video>

        {/* Dramatic overlay with gradient */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30"></div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-30"></div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-[100px]"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-secondary/20 to-transparent blur-[120px]"
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="container relative z-10 px-6 flex flex-col justify-center min-h-screen text-shadow-lg"
        style={{ opacity, y }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Animated Tagline */}
            <motion.div
              className="overflow-hidden mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className="text-sm md:text-base uppercase tracking-[0.5em] text-white/80 font-syncopate"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                AI-Powered Marketing Solutions
              </motion.div>
            </motion.div>

            {/* Main Headline with Dramatic Typography */}
            <div className="relative mt-4">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-syncopate font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.33, 1, 0.68, 1] }}
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white">
                  SKYNET
                </span>
                <span className="block text-2xl md:text-4xl mt-2 text-secondary font-light">MARKETING AGENCY</span>
              </motion.h1>

              {/* Animated glow effect */}
              <motion.div
                className="absolute -inset-10 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-full blur-3xl"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />
            </div>

            {/* Animated Subheadline */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto mb-12 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Transforming businesses through AI-driven marketing strategies that deliver measurable results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <Button
                className="px-8 py-7 bg-gradient-to-r from-primary to-secondary text-white text-lg font-syncopate hover:opacity-90 transition-opacity rounded-full group"
                size="lg"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                className="px-8 py-7 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-syncopate hover:bg-white/20 transition-colors rounded-full flex items-center"
                size="lg"
                onClick={() => setShowReel(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                <span>WATCH SHOWREEL</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            {[
              { value: "300%", label: "Average ROI" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "24/7", label: "AI-Powered Support" },
              { value: "100+", label: "Successful Campaigns" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center backdrop-blur-sm p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="text-3xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(139, 92, 246, 0.5)",
                      "0 0 20px rgba(139, 92, 246, 0.7)",
                      "0 0 10px rgba(139, 92, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm md:text-base text-white/80 font-syncopate uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Video Showreel Modal */}
      <AnimatePresence>
        {showReel && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowReel(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Skynet Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                onClick={() => setShowReel(false)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-8 h-14 border-2 border-white/30 rounded-full flex items-center justify-center"
          animate={{
            boxShadow: ["0 0 0 rgba(255,255,255,0.1)", "0 0 10px rgba(255,255,255,0.3)", "0 0 0 rgba(255,255,255,0.1)"],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
