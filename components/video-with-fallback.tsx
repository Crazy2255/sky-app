"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface VideoWithFallbackProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export default function VideoWithFallback({
  src,
  poster,
  className = "w-full h-full object-cover",
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
}: VideoWithFallbackProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const fallbackImage = poster || "/abstract-thumbnail.png"

  // Check if the video file exists
  useEffect(() => {
    const checkVideoFile = async () => {
      try {
        const response = await fetch(src, { method: "HEAD" })
        if (!response.ok) {
          console.error(`Video file not found: ${src}`)
          setHasError(true)
        }
      } catch (error) {
        console.error(`Error checking video file: ${src}`, error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    checkVideoFile()
  }, [src])

  if (hasError) {
    return (
      <div className="relative w-full h-full">
        <Image src={fallbackImage || "/placeholder.svg"} alt="Video fallback" fill className="object-cover" priority />
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <video
        src={src}
        poster={poster}
        className={className}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        onError={() => setHasError(true)}
        onLoadedData={() => setIsLoading(false)}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
