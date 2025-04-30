"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface EnhancedVideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export default function EnhancedVideoPlayer({
  src,
  poster,
  className = "",
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
}: EnhancedVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)

  // Check if the video file exists
  useEffect(() => {
    fetch(src, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          console.error(`Video file not found: ${src}`)
          setHasError(true)
        } else {
          console.log(`Video file exists: ${src}`)
        }
      })
      .catch((err) => {
        console.error(`Error checking video file: ${err}`)
        setHasError(true)
      })
  }, [src])

  // Handle video loading
  useEffect(() => {
    if (!videoRef.current || hasError) return

    const video = videoRef.current

    const handleCanPlay = () => {
      setIsLoaded(true)
      if (autoplay) {
        attemptPlay()
      } else {
        setShowPlayButton(true)
      }
    }

    const handleError = () => {
      console.error("Video error event triggered")
      setHasError(true)
    }

    const handlePlay = () => {
      setIsPlaying(true)
      setShowPlayButton(false)
    }

    const handlePause = () => {
      setIsPlaying(false)
      setShowPlayButton(true)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [autoplay, hasError])

  // Attempt to play the video
  const attemptPlay = () => {
    if (!videoRef.current) return

    videoRef.current.muted = true // Ensure muted for autoplay
    const playPromise = videoRef.current.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
          setShowPlayButton(false)
        })
        .catch((error) => {
          console.error("Play failed:", error)
          setShowPlayButton(true)
        })
    }
  }

  // Try to play the video when the document becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && videoRef.current && videoRef.current.paused) {
        attemptPlay()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  // Try to play on user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        attemptPlay()
      }
    }

    document.addEventListener("click", handleUserInteraction, { once: true })
    document.addEventListener("touchstart", handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [])

  // Handle play button click
  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      attemptPlay()
    }
  }

  return (
    <div className={`relative ${className}`}>
      {hasError ? (
        // Fallback image if video fails
        <div className="relative w-full aspect-video">
          <Image
            src={poster || "/abstract-thumbnail.png"}
            alt="Video thumbnail"
            fill
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <p className="text-white text-center p-4 max-w-xs">
              Video playback is currently unavailable. Please check back later.
            </p>
          </div>
        </div>
      ) : (
        // Video player
        <div className="relative w-full aspect-video">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
              <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-lg"
            poster={poster}
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            muted={muted}
            autoPlay={autoplay}
            loop={loop}
            controls={controls}
            preload="auto"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {showPlayButton && (
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/30 z-10"
              onClick={handlePlayButtonClick}
              aria-label="Play video"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  )
}
