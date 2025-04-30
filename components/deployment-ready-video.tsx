"use client"

import { useState } from "react"
import Image from "next/image"

interface DeploymentReadyVideoProps {
  src: string
  poster: string
  className?: string
  aspectRatio?: "video" | "square" | "portrait"
}

export default function DeploymentReadyVideo({
  src,
  poster,
  className = "",
  aspectRatio = "video",
}: DeploymentReadyVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const aspectRatioClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[9/16]",
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className={`${className} ${aspectRatioClasses[aspectRatio]} relative overflow-hidden rounded-lg`}>
      {!isPlaying ? (
        <>
          <Image src={poster || "/placeholder.svg"} alt="Video thumbnail" fill className="object-cover" priority />
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
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
        </>
      ) : (
        <iframe
          src={`${src}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          title="Video player"
        ></iframe>
      )}
    </div>
  )
}
