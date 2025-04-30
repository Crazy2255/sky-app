"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import BasicVideo from "./basic-video"

interface VideoCarouselProps {
  videos: { src: string; title: string }[]
  autoplayInterval?: number
}

export default function VideoCarousel({ videos, autoplayInterval = 8000 }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const { isMobile } = useMobile()

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
    setIsVideoLoaded(false)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
    setIsVideoLoaded(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set up auto-rotation
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        handleNext()
      }, autoplayInterval)
    }

    // Clean up on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex, isPlaying, autoplayInterval])

  // Get current video info
  const currentVideo = videos[currentIndex]
  
  // Check for optimized version first, then fallback to regular path
  const getOptimizedVideoPath = (src: string): { main: string, fallback: string } => {
    const fileName = src.split('/').pop() || "";
    const baseName = fileName.replace('.mp4', '');
    
    // Try to find optimized version with pattern *__*pct_smaller.mp4
    const optimizedPath = `/videos/${baseName}__*pct_smaller.mp4`;
    
    // Example: if src is /videos/skynet-video-01.mp4
    // We'll try to use /videos/skynet-video-01__*pct_smaller.mp4 as optimized version
    // And original as fallback
    
    return {
      main: src.replace('.mp4', '__*pct_smaller.mp4'),
      fallback: src
    };
  };

  const videoSources = getOptimizedVideoPath(currentVideo.src);
  const posterImage = `/abstract-energy-flow.png`;

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-video relative"
        >
          {/* Using our reliable BasicVideo component */}
          <div className="w-full h-full">
            <BasicVideo
              src={videoSources.main}
              fallbackSrc={videoSources.fallback}
              poster={posterImage}
              className="w-full h-full object-cover"
            />
          </div>

          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="w-8 h-8 md:w-10 md:h-10 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
            <h3 className="text-xl font-bold text-white drop-shadow-lg">{currentVideo.title}</h3>
          </div>

          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="white" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="white" viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={handlePrev}
          className="p-1 md:p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Previous video"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </button>
        <button
          onClick={handleNext}
          className="p-1 md:p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Next video"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>

      <div className="absolute bottom-4 left-4 md:left-6 flex space-x-1">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to video ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
