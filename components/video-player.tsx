"use client"

import { useState } from "react"
import Image from "next/image"

interface VideoPlayerProps {
  src: string
  className?: string
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  fallbackImage?: string
  key?: string | number
}

export default function VideoPlayer({
  src,
  className = "w-full h-full object-cover",
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  fallbackImage,
  key,
}: VideoPlayerProps) {
  const [error, setError] = useState(false)

  // Use the fallback image or poster or a default
  const imageSrc = fallbackImage || poster || "/abstract-thumbnail.png"

  if (error) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt="Video content"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    )
  }

  return (
    <video
      src={src}
      poster={poster}
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
      onError={() => setError(true)}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
