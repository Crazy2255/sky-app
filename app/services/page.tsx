"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Code, PenTool, Lightbulb, Megaphone, Database } from "lucide-react"

// Components for animations and effects
import GradientBackground from "@/components/gradient-background"
import SectionTransition from "@/components/section-transition"

export default function ServicesPage() {
  // Video state
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Refs for scroll animations
  const heroRef = useRef(null)
  const strategyRef = useRef(null)
  const contentRef = useRef(null)
  const marketingRef = useRef(null)
  const webRef = useRef(null)
  const igamingRef = useRef(null)

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const strategyInView = useInView(strategyRef, { once: false, amount: 0.3 })
  const contentInView = useInView(contentRef, { once: false, amount: 0.3 })
  const marketingInView = useInView(marketingRef, { once: false, amount: 0.3 })
  const webInView = useInView(webRef, { once: false, amount: 0.3 })
  const igamingInView = useInView(igamingRef, { once: false, amount: 0.3 })

  // Animation controls
  const heroControls = useAnimation()
  const strategyControls = useAnimation()
  const contentControls = useAnimation()
  const marketingControls = useAnimation()
  const webControls = useAnimation()
  const igamingControls = useAnimation()

  // Handle video loading
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      console.log("Video can play")
      setVideoLoaded(true)
    }

    video.addEventListener("canplay", handleCanPlay)

    // Force load the video
    video.load()

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
    }
  }, [])

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) heroControls.start("visible")
    if (strategyInView) strategyControls.start("visible")
    if (contentInView) contentControls.start("visible")
    if (marketingInView) marketingControls.start("visible")
    if (webInView) webControls.start("visible")
    if (igamingInView) igamingControls.start("visible")
  }, [
    heroInView,
    strategyInView,
    contentInView,
    marketingInView,
    webInView,
    igamingInView,
    heroControls,
    strategyControls,
    contentControls,
    marketingControls,
    webControls,
    igamingControls,
  ])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  const floatingAnimation = {
    y: ["-5px", "5px"],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror" as const,
      ease: "easeInOut",
    },
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <GradientBackground />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 md:py-32"
      >
        {/* Background video with animated overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Base background color as fallback */}
          <div className="absolute inset-0 bg-gray-900"></div>

          {/* Video background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-40" : "opacity-0"
            }`}
            style={{ zIndex: 1 }}
          >
            <source src="/videos/social-media-marketing-background-v5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Animated gradient overlay with adjusted opacity */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
            style={{ zIndex: 2 }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              opacity: [0.7, 0.6, 0.7],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Enhanced grid overlay with animation */}
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

          {/* Fallback animated elements if video doesn't load */}
          {!videoLoaded && (
            <div className="absolute inset-0" style={{ zIndex: 1 }}>
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(76, 29, 149, 0.3) 0%, rgba(124, 58, 237, 0.2) 50%, rgba(14, 165, 233, 0.3) 100%)",
                    "linear-gradient(45deg, rgba(14, 165, 233, 0.3) 0%, rgba(76, 29, 149, 0.2) 50%, rgba(124, 58, 237, 0.3) 100%)",
                    "linear-gradient(45deg, rgba(124, 58, 237, 0.3) 0%, rgba(14, 165, 233, 0.2) 50%, rgba(76, 29, 149, 0.3) 100%)",
                  ],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              {/* Moving particles effect */}
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
                    y: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <motion.div
          initial="hidden"
          animate={heroControls}
          variants={containerVariants}
          className="container mx-auto text-center z-10"
        >
          {/* Ensure heading is centered with proper spacing */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 -mt-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-500 to-purple-400 mx-auto text-center"
          >
            Transformative Digital Services
          </motion.h1>

          {/* Ensure paragraph is centered with proper width constraints */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 text-center"
          >
            Skynet delivers cutting-edge solutions powered by AI to revolutionize your business operations and digital
            presence.
          </motion.p>

          {/* Ensure buttons are centered */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full font-medium"
              >
                Get Quote
              </motion.div>
            </Link>

            <Link href="#ai-strategy">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-white/30 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Explore Services
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto justify-center items-center text-center"
          >
            {[
              { icon: <Lightbulb className="h-8 w-8" />, label: "AI Strategy" },
              { icon: <PenTool className="h-8 w-8" />, label: "Content Creation" },
              { icon: <Megaphone className="h-8 w-8" />, label: "Digital Marketing" },
              { icon: <Code className="h-8 w-8" />, label: "Web Development" },
              { icon: <Database className="h-8 w-8" />, label: "iGaming Services" },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }}
                className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <motion.div animate={floatingAnimation} className="text-purple-400 mb-3">
                  {item.icon}
                </motion.div>
                <p className="text-sm font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="rgba(124, 58, 237, 0.1)"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <SectionTransition position="bottom" />

      {/* Content Creation Section */}
      <section
        id="content-creation"
        ref={contentRef}
        className="relative py-20 md:py-32 bg-gradient-to-b from-black to-purple-950/20"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={contentControls}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 md:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-purple-900/40 z-10"></div>

              {/* Content Creation Visual */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 p-6"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="flex-1 text-xs text-center">Content Studio</div>
                    </div>

                    <div className="flex-1 flex flex-col gap-4">
                      <motion.div
                        animate={{ width: ["60%", "80%", "60%"] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                        className="h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                      ></motion.div>

                      <motion.div
                        animate={{ width: ["75%", "65%", "75%"] }}
                        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
                        className="h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                      ></motion.div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                          <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            className="w-8 h-8 rounded-full bg-cyan-500/50"
                          ></motion.div>
                        </div>
                        <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                          <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                            className="w-8 h-8 rounded-full bg-purple-500/50"
                          ></motion.div>
                        </div>
                      </div>

                      <motion.div
                        animate={{ width: ["40%", "90%", "40%"] }}
                        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY }}
                        className="h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                      ></motion.div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="text-xs">AI-Generated</div>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        className="px-2 py-1 bg-cyan-500/30 rounded-md text-xs"
                      >
                        Processing...
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Animated elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute top-20 right-20 w-12 h-12 bg-cyan-500/30 rounded-full backdrop-blur-md z-10"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute bottom-10 left-20 w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-md z-10"
              ></motion.div>
            </motion.div>

            <motion.div variants={containerVariants} className="order-1 md:order-2">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Content Creation
                </span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-300 mb-6">
                Our content creation services combine human creativity with AI-powered tools to produce engaging,
                high-quality content that resonates with your target audience and drives results.
              </motion.p>

              <motion.div variants={containerVariants} className="space-y-4 mb-8">
                {[
                  "AI-Enhanced Copywriting & Content Strategy",
                  "Video Production & Animation",
                  "Social Media Content Creation",
                  "SEO-Optimized Blog & Article Writing",
                  "Interactive Content & Immersive Experiences",
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-medium"
                  >
                    Get Quote <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionTransition position="bottom" />

      {/* Digital Marketing Section */}
      <section id="digital-marketing" ref={marketingRef} className="relative py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={marketingControls}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={containerVariants}>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                  Digital Marketing
                </span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-300 mb-6">
                Our digital marketing services leverage data-driven strategies and AI-powered optimization to maximize
                your online presence, engage your target audience, and drive measurable business results.
              </motion.p>

              <motion.div variants={containerVariants} className="space-y-4 mb-8">
                {[
                  "AI-Powered Marketing Strategy & Campaign Management",
                  "Search Engine Optimization (SEO) & Content Marketing",
                  "Paid Advertising (PPC, Social Media Ads)",
                  "Email Marketing & Marketing Automation",
                  "Analytics & Performance Tracking",
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-medium"
                  >
                    Get Quote <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-blue-900/40 z-10"></div>

              {/* Marketing Dashboard Visual */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 p-6"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold">Marketing Dashboard</h3>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { label: "Conversions", value: "+24%", color: "green" },
                        { label: "Traffic", value: "+37%", color: "blue" },
                        { label: "Engagement", value: "+18%", color: "green" },
                        { label: "ROI", value: "+42%", color: "blue" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-white/10 rounded-lg p-3">
                          <p className="text-xs text-gray-300">{stat.label}</p>
                          <p className={`text-lg font-bold text-${stat.color}-400`}>{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex-1 relative">
                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-24">
                        {[40, 65, 35, 80, 55, 70, 60].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: "0%" }}
                            animate={{ height: `${height}%` }}
                            transition={{
                              duration: 1,
                              delay: i * 0.1,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                              repeatDelay: 5,
                            }}
                            className="w-[10%] bg-gradient-to-t from-green-500 to-blue-500 rounded-t-sm"
                          ></motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Animated elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute top-16 right-16 w-14 h-14 bg-green-500/20 rounded-full backdrop-blur-md z-10"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                  x: [0, -10, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute bottom-16 left-16 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-md z-10"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionTransition position="bottom" />

      {/* Web Development Section */}
      <section
        id="web-development"
        ref={webRef}
        className="relative py-20 md:py-32 bg-gradient-to-b from-black to-blue-950/20"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={webControls}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 md:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-teal-900/40 z-10"></div>

              {/* Web Development Visual */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10 p-6"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="flex-1 text-xs text-center">Code Editor</div>
                    </div>

                    <div className="flex-1 bg-black/30 rounded-md p-3 font-mono text-xs overflow-hidden">
                      <motion.div
                        animate={{
                          y: [-100, 0, -100],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                        }}
                      >
                        <p className="text-blue-400">
                          import <span className="text-green-400">React</span> from{" "}
                          <span className="text-yellow-400">'react'</span>;
                        </p>
                        <p className="text-blue-400">
                          import <span className="text-green-400">{"{ motion }"}</span> from{" "}
                          <span className="text-yellow-400">'framer-motion'</span>;
                        </p>
                        <p></p>
                        <p className="text-purple-400">
                          const <span className="text-teal-400">AnimatedComponent</span> = () =&gt; {"{"}
                        </p>
                        <p className="ml-4 text-purple-400">return (</p>
                        <p className="ml-8 text-blue-400">
                          &lt;<span className="text-green-400">motion.div</span>
                        </p>
                        <p className="ml-12 text-yellow-400">animate={"{"}</p>
                        <p className="ml-16 text-teal-400">
                          scale: <span className="text-yellow-400">[1, 1.1, 1]</span>,
                        </p>
                        <p className="ml-16 text-teal-400">
                          rotate: <span className="text-yellow-400">[0, 5, 0]</span>
                        </p>
                        <p className="ml-12 text-yellow-400">{"}"}</p>
                        <p className="ml-12 text-yellow-400">transition={"{"}</p>
                        <p className="ml-16 text-teal-400">
                          duration: <span className="text-yellow-400">2</span>,
                        </p>
                        <p className="ml-16 text-teal-400">
                          repeat: <span className="text-yellow-400">Infinity</span>
                        </p>
                        <p className="ml-12 text-yellow-400">{"}"}</p>
                        <p className="ml-8 text-blue-400">&gt;</p>
                        <p className="ml-12 text-white">Your animated content here</p>
                        <p className="ml-8 text-blue-400">
                          &lt;/<span className="text-green-400">motion.div</span>&gt;
                        </p>
                        <p className="ml-4 text-purple-400">);</p>
                        <p className="text-purple-400">{"}"};</p>
                        <p></p>
                        <p className="text-purple-400">
                          export default <span className="text-teal-400">AnimatedComponent</span>;
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Animated elements */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  x: [0, 8, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute top-20 right-20 w-14 h-14 bg-blue-500/20 rounded-full backdrop-blur-md z-10"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute bottom-20 left-20 w-16 h-16 bg-teal-500/20 rounded-full backdrop-blur-md z-10"
              ></motion.div>
            </motion.div>

            <motion.div variants={containerVariants} className="order-1 md:order-2">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                  Web Development
                </span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-300 mb-6">
                Our web development services combine cutting-edge technologies with user-centered design to create
                responsive, high-performance websites and web applications that deliver exceptional user experiences.
              </motion.p>

              <motion.div variants={containerVariants} className="space-y-4 mb-8">
                {[
                  "Custom Website & Web Application Development",
                  "E-commerce Solutions & Online Stores",
                  "Progressive Web Apps (PWAs)",
                  "UI/UX Design & Prototyping",
                  "Website Maintenance & Performance Optimization",
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full font-medium"
                  >
                    Get Quote <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionTransition position="bottom" />

      {/* iGaming Services Section */}
      <section
        id="igaming-services"
        ref={igamingRef}
        className="relative py-20 md:py-32 bg-gradient-to-b from-black to-purple-950/20"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={igamingControls}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 md:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-pink-900/40 z-10"></div>

              {/* iGaming Visual */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 p-6"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold">iGaming Platform</h3>
                      <div className="flex gap-2">
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          className="w-2 h-2 rounded-full bg-indigo-500"
                        ></motion.div>
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                          className="w-2 h-2 rounded-full bg-pink-500"
                        ></motion.div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="col-span-2 row-span-2 bg-black/30 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                              scale: [0.8, 1, 0.8],
                            }}
                            transition={{
                              rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                            }}
                            className="w-20 h-20 rounded-full border-4 border-indigo-500 border-t-transparent"
                          ></motion.div>
                        </div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2">
                        <div className="text-xs mb-1">Users</div>
                        <div className="text-lg font-bold">2.4k</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2">
                        <div className="text-xs mb-1">Games</div>
                        <div className="text-lg font-bold">128</div>
                      </div>
                    </div>

                    <div className="flex-1 bg-black/20 rounded-lg p-3 mb-4">
                      <div className="text-xs mb-2">Popular Games</div>
                      <div className="flex justify-between gap-2">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex-1 aspect-square bg-gradient-to-br from-indigo-500/30 to-pink-500/30 rounded-lg"
                          ></motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-xs">Live Support: Available</div>
                      <div className="px-2 py-1 bg-indigo-500/30 rounded-md text-xs">24/7</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Animated elements */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  x: [0, 8, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute top-20 right-20 w-14 h-14 bg-indigo-500/20 rounded-full backdrop-blur-md z-10"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute bottom-20 left-20 w-16 h-16 bg-pink-500/20 rounded-full backdrop-blur-md z-10"
              ></motion.div>
            </motion.div>

            <motion.div variants={containerVariants} className="order-1 md:order-2">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                  iGaming Services
                </span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-300 mb-6">
                Our specialized iGaming services help online gaming and betting platforms enhance user experience,
                ensure compliance, and maximize player engagement through innovative technologies and strategic
                marketing.
              </motion.p>

              <motion.div variants={containerVariants} className="space-y-4 mb-8">
                {[
                  "iGaming Platform Development & Integration",
                  "Player Acquisition & Retention Strategies",
                  "Compliance & Responsible Gaming Solutions",
                  "Payment Processing & Security",
                  "Live Chat Support & Customer Service",
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full font-medium"
                  >
                    Get Quote <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionTransition position="bottom" />

      <SectionTransition position="top" />

      {/* AI Strategy Section */}
      <section id="ai-strategy" ref={strategyRef} className="relative py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={strategyControls}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={containerVariants}>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  AI Strategy
                </span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-300 mb-6">
                Our AI Strategy services help businesses leverage artificial intelligence to gain competitive
                advantages, streamline operations, and create innovative customer experiences.
              </motion.p>

              <motion.div variants={containerVariants} className="space-y-4 mb-8">
                {[
                  "AI Readiness Assessment",
                  "Custom AI Implementation Roadmap",
                  "AI Integration with Existing Systems",
                  "AI-Powered Business Process Optimization",
                  "AI Ethics and Governance Framework",
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full font-medium"
                  >
                    Get Quote <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.98, 1, 0.98],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Strategy Blueprint</h3>
                    <p className="text-sm text-gray-300">Implementation roadmap for enterprise AI adoption</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Data Analysis", value: "86%" },
                      { label: "Process Automation", value: "92%" },
                      { label: "ROI Increase", value: "215%" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/10 rounded-lg p-3">
                        <p className="text-xs text-gray-300">{stat.label}</p>
                        <p className="text-lg font-bold text-purple-400">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-2 border-black"
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs">Updated 2 days ago</div>
                  </div>
                </motion.div>
              </div>

              {/* Animated elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute top-10 right-10 w-16 h-16 bg-purple-500/30 rounded-full backdrop-blur-md z-10"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, -15, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute bottom-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-md z-10"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionTransition position="bottom" />

      {/* Call to Action Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business with Skynet?</h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals and stay ahead of the competition
              in the digital landscape.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-medium"
                >
                  Get Quote
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
