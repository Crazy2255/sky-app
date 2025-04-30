"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

interface VideoRevealProps {
  videoUrl: string
  posterUrl?: string
  aspectRatio?: string
  className?: string
}

export default function VideoReveal({
  videoUrl,
  posterUrl,
  aspectRatio = "aspect-video",
  className = "",
}: VideoRevealProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isInView && videoRef.current) {
      const playPromise = videoRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Auto-play was prevented
            setIsPlaying(false)
          })
      }
    }
  }, [isInView])

  const handlePlayPause = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg ${aspectRatio} ${className}`}
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      animate={
        isInView
          ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
          : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }
      }
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      />

      <video ref={videoRef} className="w-full h-full object-cover" poster={posterUrl} muted loop playsInline>
        <source src={videoUrl} type="video/mp4" />
      </video>

      <button
        className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
      </button>
    </motion.div>
  )
}
