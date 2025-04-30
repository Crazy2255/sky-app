"use client"

import Image from "next/image"

interface StaticVideoThumbnailProps {
  src: string
  alt?: string
  className?: string
  aspectRatio?: "video" | "square" | "portrait"
  showPlayButton?: boolean
}

export default function StaticVideoThumbnail({
  src,
  alt = "Video thumbnail",
  className = "",
  aspectRatio = "video",
  showPlayButton = true,
}: StaticVideoThumbnailProps) {
  // Determine aspect ratio class
  const aspectRatioClass = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[9/16]",
  }[aspectRatio]

  return (
    <div className={`relative ${aspectRatioClass} ${className}`}>
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover rounded-lg" priority />

      {showPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-amber-500/80 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
