"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface GuaranteedVideoProps {
  src: string
  poster: string
  className?: string
  height?: number
  width?: number
  objectFit?: "cover" | "contain"
}

export default function GuaranteedVideo({
  src,
  poster,
  className = "",
  height,
  width,
  objectFit = "cover",
}: GuaranteedVideoProps) {
  const [useVideo, setUseVideo] = useState(true)

  // Check if we're in a browser environment
  useEffect(() => {
    // Check if video is supported
    const videoElement = document.createElement("video")
    const canPlayMP4 = videoElement.canPlayType("video/mp4")

    if (canPlayMP4 === "" || window.navigator.userAgent.includes("ReactSnap")) {
      setUseVideo(false)
    }

    // Check if the file exists
    const checkFile = async () => {
      try {
        const response = await fetch(src, { method: "HEAD" })
        if (!response.ok) {
          console.log("Video file not found, using image fallback")
          setUseVideo(false)
        }
      } catch (error) {
        console.error("Error checking video file:", error)
        setUseVideo(false)
      }
    }

    checkFile()
  }, [src])

  // If we can't use video, show the image
  if (!useVideo) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={poster || "/placeholder.svg"}
          alt="Video content"
          fill={!(height && width)}
          height={height}
          width={width}
          className={`object-${objectFit}`}
          priority
        />
      </div>
    )
  }

  // Otherwise show the video
  return (
    <video
      src={src}
      poster={poster}
      muted
      autoPlay
      loop
      playsInline
      className={className}
      style={{ objectFit }}
      onError={() => setUseVideo(false)}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
