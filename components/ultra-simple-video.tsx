"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface UltraSimpleVideoProps {
  src: string
  poster: string
  className?: string
}

export default function UltraSimpleVideo({ src, poster, className = "w-full h-auto" }: UltraSimpleVideoProps) {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Simple error handling
  const handleError = () => {
    console.error("Video error occurred:", src)
    setError(true)
  }

  // Mark as loaded when metadata is loaded
  const handleLoadedMetadata = () => {
    setLoaded(true)
  }

  // Try to play the video when component mounts
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Function to attempt playing
    const attemptPlay = async () => {
      try {
        // Ensure video is muted for autoplay
        video.muted = true

        // Try to play
        await video.play()
        console.log("Video playing successfully:", src)
      } catch (err) {
        console.error("Error playing video:", err)
        setError(true)
      }
    }

    // Add event listeners
    video.addEventListener("loadedmetadata", handleLoadedMetadata)

    // Attempt to play when loaded
    if (video.readyState >= 2) {
      attemptPlay()
    } else {
      video.addEventListener("loadeddata", attemptPlay)
    }

    // Cleanup
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("loadeddata", attemptPlay)
    }
  }, [src])

  // If error occurred, show fallback image
  if (error) {
    return (
      <div className={`relative ${className}`}>
        <Image src={poster || "/placeholder.svg"} alt="Video thumbnail" fill className="object-cover" priority />
      </div>
    )
  }

  // Show loading state until video is ready
  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Ultra simple video element with minimal attributes */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        autoPlay
        loop
        className={className}
        onError={handleError}
      />
    </div>
  )
}
