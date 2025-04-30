"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { showcaseItems } from "@/lib/homepage-showcase-data"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import DebugImage from "./debug-image"
import VideoCarousel from "./video-carousel"
import { useMobile } from "@/hooks/use-mobile"

// Define the videos for our carousel
const carouselVideos = [
  { src: "/videos/skynet video 01.mp4", title: "Creative Direction" },
  { src: "/videos/skynet video 02.mp4", title: "Visual Effects" },
  { src: "/videos/skynet 03__86pct_smaller.mp4", title: "Motion Graphics" },
  { src: "/videos/skynet 04__82pct_smaller.mp4", title: "3D Animation" },
  { src: "/videos/skynet video 05.mp4", title: "Cinematic Production" },
  { src: "/videos/skynet video 06.mp4", title: "Brand Storytelling" },
  { src: "/videos/skynet video 07.mp4", title: "Digital Experiences" },
  { src: "/videos/skynet video 08.mp4", title: "Immersive Content" },
  { src: "/videos/videoplayback (10).mp4", title: "Visual Narratives" },
]

export default function HomepageWorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const currentItem = showcaseItems[currentIndex]
  const { isMobile } = useMobile()

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseItems.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length)
  }

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set up auto-rotation for the carousel
    intervalRef.current = setInterval(() => {
      handleNext()
    }, 6000)

    // Clean up on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex])

  const handleVideoHover = (id: string) => {
    // Skip on mobile to save bandwidth
    if (isMobile) return

    // Pause any currently playing video
    if (activeVideoId && videoRefs.current[activeVideoId]) {
      videoRefs.current[activeVideoId]?.pause()
    }

    // Play the hovered video
    setActiveVideoId(id)
    if (videoRefs.current[id]) {
      videoRefs.current[id]?.play().catch((err) => {
        console.log("Could not autoplay video:", err.message)
      })
    }
  }

  const handleVideoLeave = () => {
    // Skip on mobile
    if (isMobile) return

    // Pause the active video when mouse leaves
    if (activeVideoId && videoRefs.current[activeVideoId]) {
      videoRefs.current[activeVideoId]?.pause()
      setActiveVideoId(null)
    }
  }

  return (
    <section id="work" className="relative py-12 md:py-20 overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Our Work</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We've partnered with innovative brands to create impactful digital experiences.
          </p>
        </div>

        {/* Video Carousel - New Addition */}
        <div className="mb-12 md:mb-20">
          <VideoCarousel videos={carouselVideos} autoplayInterval={isMobile ? 12000 : 8000} />
        </div>

        {/* Featured Project Showcase */}
        <div className="relative max-w-6xl mx-auto mb-12 md:mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden"
            >
              {/* Show image for all cases */}
              <DebugImage
                src={currentItem.image}
                alt={currentItem.title}
                className="absolute inset-0 w-full h-full"
                priority
              />

              {/* Semi-transparent gradient overlay - reduced opacity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-0 left-0 p-4 md:p-6 lg:p-10 w-full">
                <div className="flex flex-col mb-2 md:mb-4">
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
                    <span className="px-2 md:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                      Social Media
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                      Content Creation
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                      Brand Strategy
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-purple-400">
                  Social Media Management
                </h3>
                <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 max-w-2xl text-gray-200">
                  Strategic content creation and management for brands looking to build engagement and drive conversions
                  through compelling social media presence.
                </p>
                <Link href={`/projects/${currentItem.id}`}>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black transition-colors text-sm md:text-base"
                  >
                    View Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-4 md:mt-6">
            <button
              onClick={handlePrev}
              className="p-1 md:p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <div className="flex space-x-1 md:space-x-2">
              {showcaseItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-white" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-1 md:p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Link href="/projects">
            <Button className="bg-white text-black hover:bg-gray-200">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
