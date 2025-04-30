"use client"

import { useRef, useState } from "react"

interface UltraReliableVideoProps {
  src: string
  poster: string
  className?: string
}

export default function UltraReliableVideo({ src, poster, className = "" }: UltraReliableVideoProps) {
  const [clicked, setClicked] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClick = () => {
    setClicked(true)
    // Small timeout to ensure state update before trying to play
    setTimeout(() => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Error playing video:", error)
          })
        }
      }
    }, 100)
  }

  return (
    <div className={`relative ${className}`}>
      {!clicked ? (
        <>
          {/* Show poster image with play button */}
          <img src={poster || "/placeholder.svg"} alt="Video thumbnail" className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={handleClick}>
            <div className="w-20 h-20 bg-amber-500/80 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        /* Show video with controls when clicked */
        <video ref={videoRef} controls playsInline className="w-full h-auto rounded-lg" poster={poster}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
