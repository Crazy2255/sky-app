"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import SectionTransition from "./section-transition"
import { useMobile } from "@/hooks/use-mobile"
import SplitText from "./split-text"

export default function RefinedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [loadingTimeout, setLoadingTimeout] = useState(false)
  const isMobile = useMobile()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Slower fade out for content to give users more time to read
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
      })
    }

    sequence()
  }, [controls])

  // Force loading to complete after 3 seconds even if video doesn't load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingTimeout(true)
      if (!videoLoaded) {
        console.log("Video loading timed out, showing content anyway")
        setVideoLoaded(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [videoLoaded])

  useEffect(() => {
    // Handle video loading and mobile optimization
    const videoElement = document.querySelector("video") as HTMLVideoElement

    if (videoElement) {
      // Set up event listener for when video is loaded
      const handleVideoLoaded = () => {
        console.log("Video loaded successfully")
        setVideoLoaded(true)
      }

      const handleVideoError = (e: any) => {
        console.error("Video loading error:", e)
        setVideoError(true)
        setVideoLoaded(true) // Still mark as loaded so content appears
      }

      videoElement.addEventListener("loadeddata", handleVideoLoaded)
      videoElement.addEventListener("error", handleVideoError)

      // For mobile devices, we might want to pause the video to save bandwidth
      const handleVisibilityChange = () => {
        if (document.hidden) {
          videoElement.pause()
        } else if (!videoError) {
          videoElement.play().catch((e) => {
            console.log("Auto-play prevented:", e)
            setVideoError(true)
          })
        }
      }

      // Optimize video playback based on visibility
      document.addEventListener("visibilitychange", handleVisibilityChange)

      // Clean up
      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange)
        videoElement.removeEventListener("loadeddata", handleVideoLoaded)
        videoElement.removeEventListener("error", handleVideoError)
      }
    } else {
      // If video element doesn't exist, still show content
      console.log("Video element not found")
      setVideoLoaded(true)
    }
  }, [])

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.05,
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Loading indicator - only show for a maximum of 3 seconds */}
      {!videoLoaded && !loadingTimeout && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-background">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}

      {/* Background Video or Fallback */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            poster="/placeholder.svg?height=1080&width=1920"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => {
              setVideoError(true)
              setVideoLoaded(true)
            }}
          >
            <source
              src={isMobile ? "/videos/background-video-mobile.mp4" : "/videos/background-video.mp4"}
              type="video/mp4"
            />
          </video>
        ) : (
          // Fallback background if video fails to load
          <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
        )}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
      </div>

      {/* Section Transition - Bottom Fade */}
      <SectionTransition position="bottom" height={120} />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/20 to-transparent blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Content - Always show regardless of video loading */}
      <motion.div
        className="container relative z-10 px-6 flex flex-col justify-center min-h-screen text-shadow-sm"
        style={{ opacity, y }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={textRef}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
          >
            <motion.div
              className="overflow-hidden mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className="text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                AI-Powered Marketing Solutions
              </motion.div>
            </motion.div>

            {/* Refined Skynet Typography - Centered */}
            <div className="mb-8 mt-4 perspective-1000">
              <div className="flex justify-center items-center">
                {/* Animated letter-by-letter "SKYNET" with thin, elegant styling */}
                <div className="flex items-center justify-center">
                  {["S", "K", "Y", "N", "E", "T"].map((letter, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={letterVariants}
                      className="relative"
                    >
                      <span className="text-6xl md:text-8xl lg:text-9xl font-syncopate font-light tracking-wide text-white inline-block mx-[-0.03em] md:mx-[-0.02em]">
                        {letter}
                      </span>
                      {/* Subtle reflection/shadow effect */}
                      <span className="absolute top-[102%] left-0 text-6xl md:text-8xl lg:text-9xl font-syncopate font-light tracking-wider text-white/10 inline-block mx-[-0.05em] md:mx-[-0.03em] transform scale-y-[-0.2] origin-top blur-[2px]">
                        {letter}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Animated underline */}
              <motion.div
                className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-2 md:mt-4"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.7 }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              />

              {/* Subtitle with staggered reveal */}
              <motion.div
                className="mt-2 md:mt-4 text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <SplitText text="MARKETING AGENCY" className="uppercase" delay={1.1} />
              </motion.div>
            </div>

            <div className="overflow-hidden mb-8 max-w-2xl">
              <motion.p
                className="text-base md:text-xl text-white/70"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.5, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                Transforming businesses through AI-driven marketing strategies that deliver measurable results. Our
                cutting-edge solutions combine human creativity with artificial intelligence to help you outperform
                competitors and connect with your audience.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#work"
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-background font-syncopate text-sm tracking-wider font-bold hover:bg-white/90 transition-colors"
              >
                VIEW OUR WORK
              </a>
              <a
                href="#contact"
                className="px-6 py-3 md:px-8 md:py-4 border border-white/20 text-white font-syncopate text-sm tracking-wider font-bold hover:bg-white/10 transition-colors"
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 1 }}
          >
            {[
              {
                title: "300% ROI",
                description: "Average return on investment for our AI marketing campaigns",
                icon: "chart",
              },
              {
                title: "Data-Driven",
                description: "Strategic decisions backed by advanced analytics and AI insights",
                icon: "brain",
              },
              {
                title: "Award-Winning",
                description: "Recognized for innovation in AI marketing technology",
                icon: "award",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-4 md:p-6 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    {benefit.icon === "chart" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M3 3v18h18"></path>
                        <path d="m19 9-5 5-4-4-3 3"></path>
                      </svg>
                    )}
                    {benefit.icon === "brain" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-secondary"
                      >
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
                      </svg>
                    )}
                    {benefit.icon === "award" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                      >
                        <circle cx="12" cy="8" r="6"></circle>
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-syncopate font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-white/70">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Clients */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            <div className="text-center mb-6 md:mb-8">
              <div className="text-sm uppercase tracking-wider text-white/40 font-syncopate">
                Trusted By Industry Leaders
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16">
              {["ZBX", "Ghostdrive", "CGAI", "OnlyTwins", "Neyra", "Origins"].map((client, index) => (
                <motion.div
                  key={client}
                  className="text-white/40 font-syncopate text-sm md:text-lg hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 + index * 0.1, duration: 0.5 }}
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Make it more visible */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <div className="scroll-indicator bg-white/20 border-white/40"></div>
      </motion.div>
    </section>
  )
}
