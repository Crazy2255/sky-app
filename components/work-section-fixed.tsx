"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { clientData } from "@/lib/client-data"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import ReliableImage from "./reliable-image"
import ReliableVideo from "./reliable-video"

// Separate client data into images and videos
const imageProjects = clientData
const videoProjects = clientData.filter((client) => client.detailedImage && client.detailedImage.includes(".mp4"))

export default function WorkSectionFixed() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imageProjects.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imageProjects.length) % imageProjects.length)
  }

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set up auto-rotation for the image carousel
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
    setActiveVideoId(id)
  }

  const handleVideoLeave = () => {
    setActiveVideoId(null)
  }

  return (
    <section id="work" className="relative py-20 overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've partnered with innovative brands to create impactful digital experiences.
          </p>
        </div>

        {/* Image Projects Carousel */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden"
            >
              {/* Background Image */}
              <ReliableImage
                src={imageProjects[currentIndex]?.image || "/images/zbx-grid.jpeg"}
                alt="Project background"
                fallbackSrc="/images/zbx-grid.jpeg"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                <div className="flex flex-col mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {imageProjects[currentIndex]?.services.slice(0, 3).map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-200">
                  {imageProjects[currentIndex]?.description || "Project description"}
                </p>
                <Link href={`/projects/${imageProjects[currentIndex]?.id}`}>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black transition-colors"
                  >
                    View Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {imageProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-white" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Video Projects Collage */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Video Showcase</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoProjects.map((project) => (
              <div
                key={project.id}
                className="relative aspect-video rounded-lg overflow-hidden group"
                onMouseEnter={() => handleVideoHover(project.id)}
                onMouseLeave={handleVideoLeave}
              >
                {/* Thumbnail */}
                <ReliableImage
                  src={project.image || "/images/zbx-grid.jpeg"}
                  alt="Video thumbnail"
                  fallbackSrc="/images/zbx-grid.jpeg"
                  className={`absolute inset-0 w-full h-full object-cover z-10 ${
                    activeVideoId === project.id ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-500`}
                />

                {/* Video */}
                {project.detailedImage && (
                  <div className="absolute inset-0">
                    <ReliableVideo
                      src={project.detailedImage}
                      poster={project.image || "/images/zbx-grid.jpeg"}
                      className="w-full h-full object-cover"
                      autoPlay={activeVideoId === project.id}
                      muted
                      loop
                      playsInline
                    />
                  </div>
                )}

                {/* Service Tags */}
                <div className="absolute top-0 left-0 right-0 p-4 z-20">
                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 2).map((service, idx) => (
                      <span key={idx} className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Overlay with Project Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end z-20">
                  <div className="p-4 w-full">
                    <p className="text-sm text-gray-300 mb-4">{project.description || "Project description"}</p>
                    <Link href={`/projects/${project.id}`}>
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button className="bg-white text-black hover:bg-gray-200">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
