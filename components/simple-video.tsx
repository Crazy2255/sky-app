"use client"

import { useState } from "react"
import Image from "next/image"

interface SimpleVideoProps {
  src: string
  poster: string
  className?: string
}

export default function SimpleVideo({ src, poster, className = "" }: SimpleVideoProps) {
  const [showVideo, setShowVideo] = useState(false)

  const handleClick = () => {
    setShowVideo(true)
  }

  if (showVideo) {
    return (
      <div className={`relative ${className}`}>
        <video src={src} poster={poster} controls className="w-full h-auto" playsInline>
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={poster || "/placeholder.svg"}
        alt="Video thumbnail"
        width={640}
        height={360}
        className="w-full h-auto"
      />
      <button
        onClick={handleClick}
        className="absolute inset-0 flex items-center justify-center bg-black/30"
        aria-label="Play video"
      >
        <div className="w-16 h-16 rounded-full bg-amber-500/80 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
  )
}
