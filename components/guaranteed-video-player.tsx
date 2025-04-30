"use client"

import { useState } from "react"

interface GuaranteedVideoPlayerProps {
  src: string
  poster: string
  className?: string
}

export default function GuaranteedVideoPlayer({ src, poster, className = "" }: GuaranteedVideoPlayerProps) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {!showVideo ? (
        <div className="relative">
          <img src={poster || "/placeholder.svg"} alt="Video thumbnail" className="w-full h-auto rounded-lg" />
          <button
            onClick={() => setShowVideo(true)}
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
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      ) : (
        <iframe
          src={`https://player.cloudinary.com/embed/?public_id=${encodeURIComponent(src)}&cloud_name=demo&player[controls]=true&player[muted]=false&player[autoplay]=true`}
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          className="aspect-video rounded-lg"
        ></iframe>
      )}
    </div>
  )
}
