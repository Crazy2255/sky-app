"use client"

import Image from "next/image"
import { videoFallbacks } from "./static-fallbacks"

interface ReliableVideoProps {
  src: string
  fallbackKey: keyof typeof videoFallbacks
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

export default function ReliableVideo({
  src,
  fallbackKey,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  priority = false,
  poster,
  objectFit = "cover",
  onLoad,
}: ReliableVideoProps) {
  const fallbackImage = videoFallbacks[fallbackKey]

  // If onLoad is provided, call it immediately
  if (onLoad) {
    setTimeout(onLoad, 100)
  }

  return (
    <div className={`${className} relative overflow-hidden`}>
      <Image
        src={fallbackImage || poster || "/placeholder.svg"}
        alt="Video content"
        fill
        style={{ objectFit }}
        priority={priority}
      />
    </div>
  )
}
