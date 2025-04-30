"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { useSound } from "@/hooks/use-sound"
import { ArrowRight, ChevronDown, Globe, Code, Cpu, Zap, PenTool } from "lucide-react"
import { Heebo } from "next/font/google"

// Initialize the Heebo font with light weight
const heebo = Heebo({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-heebo",
})

export default function EnhancedHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [hoverService, setHoverService] = useState<number | null>(null)
  const isMobile = useMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { playSound } = useSound()
  const controls = useAnimation()

  // Services data with enhanced colors
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web 2 Marketing",
      description: "Master Traditional Digital Success",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/20",
      iconColor: "text-blue-400",
      dotColor: "bg-blue-400",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Web 3 Marketing",
      description: "Pioneer the Future of Digital",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-500/20",
      iconColor: "text-purple-400",
      dotColor: "bg-purple-400",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI Solutions",
      description: "Smarter Business, Powered by AI",
      color: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
      dotColor: "bg-cyan-400",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "Build Your Digital Foundation",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-500/20",
      iconColor: "text-green-400",
      dotColor: "bg-green-400",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Content Creation",
      description: "Craft Stories That Captivate",
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-500/20",
      iconColor: "text-amber-400",
      dotColor: "bg-amber-400",
    },
  ]

  useEffect(() => {
    // Set loaded state after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Handle video loading and errors
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoLoaded) {
        console.log("Video loading timed out, showing content anyway")
        setVideoLoaded(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [videoLoaded])

  const handleVideoLoaded = () => {
    setVideoLoaded(true)
  }

  const handleVideoError = () => {
    console.error("Error loading video")
    setVideoError(true)
    setVideoLoaded(true) // Still mark as loaded so content appears
  }

  // Auto-rotate through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [services.length])

  // Handle service hover
  const handleServiceHover = (index: number) => {
    if (hoverService !== index) {
      playSound("hover")
      setHoverService(index)
    }
  }

  // Handle service click
  const handleServiceClick = (index: number) => {
    playSound("click")
    setActiveService(index)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  // Floating elements animation
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }

  return (
    <section className="relative w-full bg-black" id="home">
      <div className="min-h-screen flex flex-col">
        {/* Background video with animated overlay */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={handleVideoLoaded}
              onError={handleVideoError}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            >
              <source src="/videos/business-loop.mp4" type="video/mp4" />
            </video>
          ) : (
            // Fallback background if video fails to load
            <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
          )}

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              opacity: [0.7, 0.8, 0.7],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Animated grid overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-15"></div>

          {/* Animated particles */}
          <AnimatedParticles />
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 },
          }}
        />

        {/* Main content container */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col min-h-screen">
          {/* Top section - AI-Powered Marketing Solutions */}
          <div className="flex-1 flex flex-col items-center justify-start pt-32 md:pt-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p
                className={`text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate ${heebo.className} font-light`}
              >
                AI-Powered Marketing Solutions
              </p>
            </motion.div>
          </div>

          {/* Middle section - SKYNET Text with creative animations */}
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center relative perspective-[1000px]"
            >
              <div className="relative inline-block">
                {/* Individual animated letters */}
                <div className="flex items-center justify-center">
                  {["S", "K", "Y", "N", "E", "T"].map((letter, index) => (
                    <motion.div
                      key={index}
                      className="relative inline-block mx-[-0.05em]"
                      initial={{
                        opacity: 0,
                        y: Math.random() * 100 - 50,
                        rotateX: Math.random() * 90,
                        rotateY: Math.random() * 90,
                      }}
                      animate={{
                        opacity: isLoaded ? 1 : 0,
                        y: 0,
                        rotateX: 0,
                        rotateY: 0,
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.5 + index * 0.15,
                        type: "spring",
                        damping: 12,
                      }}
                    >
                      {/* Main letter */}
                      <motion.span
                        className="text-6xl md:text-8xl lg:text-9xl font-syncopate font-light tracking-tight text-white inline-block"
                        animate={{
                          textShadow: [
                            "0 0 5px rgba(255,255,255,0.1)",
                            "0 0 15px rgba(59, 130, 246, 0.5)",
                            "0 0 5px rgba(255,255,255,0.1)",
                          ],
                          y: [0, index % 2 === 0 ? -5 : 5, 0],
                          rotateY: [0, index % 3 === 0 ? 5 : -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                        whileHover={{
                          scale: 1.2,
                          color: "#3b82f6",
                          textShadow: "0 0 15px rgba(59, 130, 246, 0.8)",
                          transition: { duration: 0.3 },
                        }}
                      >
                        {letter}
                      </motion.span>

                      {/* Glitch effect overlay */}
                      <motion.span
                        className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-syncopate font-light tracking-tight text-cyan-400/30 inline-block mix-blend-screen"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
                        animate={{
                          x: [0, index % 2 === 0 ? 3 : -3, 0],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          delay: index * 0.1,
                          ease: "easeInOut",
                        }}
                      >
                        {letter}
                      </motion.span>

                      {/* Second glitch effect overlay */}
                      <motion.span
                        className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-syncopate font-light tracking-tight text-purple-400/30 inline-block mix-blend-screen"
                        style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }}
                        animate={{
                          x: [0, index % 2 === 0 ? -3 : 3, 0],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          delay: index * 0.15,
                          ease: "easeInOut",
                        }}
                      >
                        {letter}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated underline with gradient flow */}
                <motion.div
                  className="h-1 w-full mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mt-2 relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-purple-400"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </motion.div>

                {/* Animated glow effect */}
                <motion.div
                  className="absolute -inset-x-10 -inset-y-10 z-[-1] rounded-full opacity-0"
                  animate={{
                    opacity: [0, 0.3, 0],
                    background: [
                      "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
                      "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
                      "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Digital noise overlay */}
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-white"
                      style={{
                        width: Math.random() * 2 + 1,
                        height: Math.random() * 2 + 1,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 1 + 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Marketing Agency subtitle with reveal animation */}
              <motion.div
                className="mt-4 text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{
                    opacity: isLoaded ? 1 : 0,
                    filter: isLoaded ? "blur(0px)" : "blur(8px)",
                  }}
                  transition={{ duration: 1.2, delay: 2.2 }}
                >
                  MARKETING AGENCY
                </motion.span>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom section - Tagline, services, CTA */}
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="w-full max-w-4xl mx-auto">
              {/* Tagline with word-by-word animation */}
              <motion.p
                variants={containerVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 mt-8 text-white leading-relaxed text-center ${heebo.className} font-light`}
              >
                {[
                  "We",
                  "transform",
                  "businesses",
                  "with",
                  "innovative,",
                  "results-driven",
                  "digital",
                  "strategies",
                  "across",
                  "Web 2,",
                  "Web 3,",
                  "AI,",
                  "development,",
                  "and",
                  "content",
                  "creation.",
                ].map((word, i) => (
                  <motion.span key={i} variants={itemVariants} className="inline-block mr-2">
                    {word}
                  </motion.span>
                ))}
              </motion.p>

              {/* Service tabs with animations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="w-full max-w-4xl mx-auto mb-12"
              >
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                  {services.map((service, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleServiceClick(index)}
                      onMouseEnter={() => handleServiceHover(index)}
                      onMouseLeave={() => setHoverService(null)}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-5 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                        activeService === index
                          ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                          : "bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white border border-white/20"
                      }`}
                      aria-pressed={activeService === index}
                    >
                      <span className={activeService === index ? "text-white" : service.iconColor}>{service.icon}</span>
                      <span className="font-medium">{service.title}</span>

                      {/* Animated highlight for active service */}
                      {activeService === index && (
                        <motion.div
                          layoutId="activeServiceHighlight"
                          className="absolute inset-0 rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Service description with animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`p-6 rounded-xl ${services[activeService].bgColor} backdrop-blur-md border border-white/30 max-w-3xl mx-auto shadow-xl`}
                    style={{
                      boxShadow: `0 10px 30px rgba(0, 0, 0, 0.2), 0 0 15px ${services[activeService].dotColor}40`,
                    }}
                  >
                    <div className="flex flex-col items-center text-center mb-4">
                      <div
                        className={`w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-3 ${services[activeService].iconColor}`}
                      >
                        {services[activeService].icon}
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2 text-white">{services[activeService].title}</h3>
                        <p className={`text-white text-lg ${heebo.className} font-light`}>
                          {services[activeService].description}
                        </p>
                      </div>
                    </div>

                    {/* Service details - customized for each service */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {activeService === 0 && (
                        <>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            </div>
                            <span className="text-base text-white">SEO & PPC Campaigns</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            </div>
                            <span className="text-base text-white">Social Media Mastery</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            </div>
                            <span className="text-base text-white">Content Marketing</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            </div>
                            <span className="text-base text-white">ROI Planning</span>
                          </div>
                        </>
                      )}

                      {activeService === 1 && (
                        <>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                            </div>
                            <span className="text-base text-white">Token Launch Expertise</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                            </div>
                            <span className="text-base text-white">Industry Connections</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                            </div>
                            <span className="text-base text-white">Tokenomics Design</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                            </div>
                            <span className="text-base text-white">PR & Community Building</span>
                          </div>
                        </>
                      )}

                      {activeService === 2 && (
                        <>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                            </div>
                            <span className="text-base text-white">AI-Powered Tools</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                            </div>
                            <span className="text-base text-white">Custom AI Development</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                            </div>
                            <span className="text-base text-white">AI Customer Support</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                            </div>
                            <span className="text-base text-white">Process Optimization</span>
                          </div>
                        </>
                      )}

                      {activeService === 3 && (
                        <>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <span className="text-base text-white">Responsive Design</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <span className="text-base text-white">E-commerce Solutions</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <span className="text-base text-white">Web 3 Integration</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <span className="text-base text-white">Custom Builds</span>
                          </div>
                        </>
                      )}

                      {activeService === 4 && (
                        <>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            </div>
                            <span className="text-base text-white">Engaging Captions</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            </div>
                            <span className="text-base text-white">Professional Video Editing</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            </div>
                            <span className="text-base text-white">UI/UX Design</span>
                          </div>
                          <div className="flex items-center justify-center text-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            </div>
                            <span className="text-base text-white">Figma Designing</span>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* CTA Buttons with enhanced animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium rounded-full relative overflow-hidden group shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center text-lg">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/15 transition-colors relative overflow-hidden group backdrop-blur-sm shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center text-lg">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-white/15"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ borderRadius: "9999px" }}
                  />
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="mt-8 mb-12 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              className="flex flex-col items-center"
            >
              <span className={`text-white/70 text-xs mb-2 font-medium tracking-wider ${heebo.className} font-light`}>
                SCROLL TO EXPLORE
              </span>
              <div
                className="w-8 h-14 border-2 border-white/40 rounded-full flex items-center justify-center shadow-lg"
                style={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)" }}
              >
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                />
              </div>
              <ChevronDown className="text-white/70 mt-2 h-4 w-4 animate-bounce" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Fade transition to next section */}
      <div className="h-24 bg-gradient-to-b from-transparent to-background"></div>
    </section>
  )
}

function AnimatedParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 70 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.9, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
