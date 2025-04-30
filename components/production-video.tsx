"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ProductionVideoProps {
  src: string
  poster: string
  className?: string
  priority?: boolean
}

export default function ProductionVideo({
  src,
  poster,
  className = "w-full h-auto",
  priority = false,
}: ProductionVideoProps) {
  // We're going to use a static image approach for maximum reliability
  // This ensures content is visible on all devices and browsers
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Always show the poster image for reliability */}
      <Image src={poster || "/placeholder.svg"} alt="Video content" fill className="object-cover" priority={priority} />

      {/* Only attempt to show video on client side */}
      {isClient && (
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"
            aria-label="Play video"
          >
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
          </a>
        </div>
      )}
    </div>
  )
}
