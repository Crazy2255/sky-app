"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectLayoutProps {
  name: string
  tagline: string
  description: string
  longDescription: string
  challenge: string
  solution: string
  results: string
  mainImage: string
  videoMain?: boolean
  logoImage?: string
  customLogo?: React.ReactNode
  color: string
  stats: {
    label: string
    value: string
    percentage: number
  }[]
  services: {
    name: string
    description: string
  }[]
  socialLinks?: {
    platform: string
    url: string
    icon: string
  }[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  gallery?: string[]
}

export default function ProjectLayout({
  name,
  tagline,
  description,
  longDescription = "",
  challenge = "",
  solution = "",
  results = "",
  mainImage,
  videoMain = false,
  logoImage,
  customLogo,
  color,
  stats,
  services,
  socialLinks = [],
  testimonial,
  gallery = [],
}: ProjectLayoutProps) {
  const [activeTab, setActiveTab] = useState("challenge")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Preload the main image if it's not a video
    if (!videoMain && mainImage) {
      const img = new Image()
      img.src = mainImage
    }

    // Check if video file exists
    if (videoMain && mainImage) {
      fetch(mainImage)
        .then((response) => {
          if (!response.ok) {
            console.error(`Video file not found: ${mainImage}`)
            setVideoError(true)
          } else {
            console.log(`Video file exists: ${mainImage}`)
          }
        })
        .catch((error) => {
          console.error(`Error checking video file: ${error}`)
          setVideoError(true)
        })
    }
  }, [mainImage, videoMain])

  // Helper function to safely split text
  const safeSplit = (text = "") => {
    return text.split("\n\n")
  }

  const handleVideoError = () => {
    console.error(`Error loading video: ${mainImage}`)
    setVideoError(true)
  }

  const handleVideoLoaded = () => {
    console.log(`Video loaded successfully: ${mainImage}`)
    setVideoLoaded(true)
  }

  return (
    <main className="relative min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {videoMain ? (
            <>
              {videoError ? (
                // Fallback image if video fails to load
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                  <p className="text-white/60">Video could not be loaded</p>
                  {logoImage && (
                    <Image
                      src={logoImage || "/placeholder.svg"}
                      alt={name}
                      width={200}
                      height={200}
                      className="object-contain opacity-30"
                    />
                  )}
                </div>
              ) : (
                // Video with multiple fallback methods
                <>
                  {/* Method 1: Standard video tag */}
                  <video
                    ref={videoRef}
                    src={mainImage}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    controls
                    onError={handleVideoError}
                    onLoadedData={handleVideoLoaded}
                  />

                  {/* Loading indicator */}
                  {!videoLoaded && !videoError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <div className="text-white">Loading video...</div>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <Image src={mainImage || "/placeholder.svg"} alt={name} fill className="object-cover" priority />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="container relative z-10 px-6 mt-20">
          <Link
            href="/#work"
            className="absolute top-8 left-6 md:left-12 flex items-center text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="font-syncopate text-sm">BACK TO PROJECTS</span>
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              {customLogo ? (
                customLogo
              ) : logoImage ? (
                <div className="w-40 h-40 mx-auto bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center justify-center">
                  <Image
                    src={logoImage || "/placeholder.svg"}
                    alt={name}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-40 h-40 mx-auto bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center justify-center">
                  <div className="text-3xl font-bold" style={{ color }}>
                    {name.charAt(0)}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-syncopate font-bold mb-4"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl mb-6"
              style={{ color }}
            >
              {tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 text-lg max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section ref={ref} className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        </div>

        <div className="container relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column - Overview */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8 }}
                className="sticky top-24"
              >
                <h2 className="text-3xl font-syncopate font-bold mb-8">Project Overview</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-syncopate mb-4">Services Provided</h3>
                    <ul className="space-y-2">
                      {services.map((service, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="mr-3 mt-1" style={{ color }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">{service.name}</div>
                            <div className="text-white/60 text-sm">{service.description}</div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {socialLinks && socialLinks.length > 0 && (
                    <div>
                      <h3 className="text-lg font-syncopate mb-4">Connect</h3>
                      <div className="flex flex-wrap gap-3">
                        {socialLinks.map((link, index) => {
                          if (!link) return null
                          return (
                            <motion.a
                              key={index}
                              href={link.url || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                              initial={{ opacity: 0, y: 10 }}
                              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                              dangerouslySetInnerHTML={{ __html: link.icon || "" }}
                            />
                          )
                        })}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-syncopate mb-4">Key Results</h3>
                    <div className="space-y-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        >
                          <div className="flex justify-between mb-1">
                            <span className="text-white/60 text-sm">{stat.label}</span>
                            <span className="font-bold" style={{ color }}>
                              {stat.value}
                            </span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <motion.div
                              className="h-2 rounded-full"
                              style={{ backgroundColor: color }}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${stat.percentage}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-12">
                  <h2 className="text-3xl font-syncopate font-bold mb-6">About the Project</h2>
                  <div className="text-white/70 space-y-4 text-lg">
                    {safeSplit(longDescription).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <div className="flex border-b border-white/10 mb-8">
                    {["challenge", "solution", "results"].map((tab) => (
                      <button
                        key={tab}
                        className={`px-6 py-3 font-syncopate text-sm transition-colors ${
                          activeTab === tab ? "border-b-2 text-white font-medium" : "text-white/60 hover:text-white/80"
                        }`}
                        style={{ borderColor: activeTab === tab ? color : "transparent" }}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-white/70 space-y-4"
                    >
                      {activeTab === "challenge" &&
                        safeSplit(challenge).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                      {activeTab === "solution" &&
                        safeSplit(solution).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                      {activeTab === "results" &&
                        safeSplit(results).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {testimonial && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16"
                  >
                    <div
                      className="p-8 rounded-lg relative"
                      style={{ backgroundColor: `${color}10`, borderLeft: `4px solid ${color}` }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 absolute top-6 left-6 opacity-10"
                        fill="currentColor"
                        style={{ color }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <div className="ml-6">
                        <p className="text-lg mb-4 relative z-10">{testimonial.quote || ""}</p>
                        <div>
                          <div className="font-medium">{testimonial.author || ""}</div>
                          <div className="text-white/60 text-sm">{testimonial.position || ""}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {gallery && gallery.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-syncopate font-bold mb-8">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {gallery.map((image, index) => {
                        if (!image) return null
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="relative aspect-video rounded-lg overflow-hidden"
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${name} gallery ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: `radial-gradient(circle at center, ${color}30 0%, transparent 70%)` }}
          ></div>
        </div>

        <div className="container relative z-10 px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-syncopate font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white/70 text-xl max-w-2xl mx-auto mb-12"
          >
            Let's discuss how we can help you achieve similar results for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              className="px-8 py-6 text-lg font-syncopate rounded-xl"
              style={{ backgroundColor: color }}
              size="lg"
            >
              Schedule a Consultation
            </Button>

            <Link href="/#work">
              <Button
                className="px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-syncopate hover:bg-white/20 transition-colors rounded-xl"
                variant="outline"
                size="lg"
              >
                View More Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
