"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface VideoFallbackProps {
  src: string
  fallbackImageSrc: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  priority?: boolean
  poster?: string
  objectFit?: "cover" | "contain"
  onLoad?: () => void
}

export default function VideoFallback({
  src,
  fallbackImageSrc,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  priority = false,
  poster,
  objectFit = "cover",
  onLoad,
}: VideoFallbackProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoFailed, setVideoFailed] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [playAttempts, setPlayAttempts] = useState(0)
  const maxPlayAttempts = 3

  // Function to attempt playing the video
  const attemptPlay = async () => {
    if (!videoRef.current || playAttempts >= maxPlayAttempts) return

    try {
      // Make sure video is muted for autoplay
      if (videoRef.current) {
        videoRef.current.muted = true
      }

      const playPromise = videoRef.current?.play()
      if (playPromise !== undefined) {
        await playPromise
        setVideoLoaded(true)
        if (onLoad) onLoad()
      }
    } catch (error) {
      console.log("Video play attempt failed:", error)
      setPlayAttempts((prev) => prev + 1)

      // If we've reached max attempts, show fallback
      if (playAttempts + 1 >= maxPlayAttempts) {
        setVideoFailed(true)
      } else {
        // Try again after a delay
        setTimeout(() => {
          attemptPlay()
        }, 1000)
      }
    }
  }

  // Check if video is actually playing
  const checkVideoPlaying = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime > 0 && !videoRef.current.paused && !videoRef.current.ended) {
        setVideoLoaded(true)
        if (onLoad) onLoad()
      } else {
        // Video is not actually playing
        setPlayAttempts((prev) => prev + 1)
        if (playAttempts + 1 >= maxPlayAttempts) {
          setVideoFailed(true)
        }
      }
    }
  }

  useEffect(() => {
    // Initial play attempt
    attemptPlay()

    // Set up event listeners
    const video = videoRef.current
    if (video) {
      video.addEventListener("canplay", attemptPlay)
      video.addEventListener("loadeddata", attemptPlay)

      // Check if video is actually playing after a delay
      const timer = setTimeout(checkVideoPlaying, 2000)

      // Set up visibility change handler
      const handleVisibilityChange = () => {
        if (!document.hidden && autoPlay && !videoLoaded) {
          attemptPlay()
        }
      }

      document.addEventListener("visibilitychange", handleVisibilityChange)

      // Set up click handler to try playing on user interaction
      const handleUserInteraction = () => {
        if (!videoLoaded && !videoFailed) {
          attemptPlay()
        }
      }

      document.addEventListener("click", handleUserInteraction, { once: true })
      document.addEventListener("touchstart", handleUserInteraction, { once: true })

      return () => {
        video.removeEventListener("canplay", attemptPlay)
        video.removeEventListener("loadeddata", attemptPlay)
        document.removeEventListener("visibilitychange", handleVisibilityChange)
        document.removeEventListener("click", handleUserInteraction)
        document.removeEventListener("touchstart", handleUserInteraction)
        clearTimeout(timer)
      }
    }
  }, [])

  // If video failed, show fallback image
  if (videoFailed) {
    return (
      <div className={className} style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src={fallbackImageSrc || "/placeholder.svg"}
          alt="Video fallback"
          fill
          style={{ objectFit }}
          priority={priority}
        />
      </div>
    )
  }

  // Otherwise show video with proper attributes
  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      poster={poster}
      style={{ objectFit }}
      onError={() => setVideoFailed(true)}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
