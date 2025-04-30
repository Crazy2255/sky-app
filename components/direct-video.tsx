"use client"

import { useState, useEffect, useRef } from "react"

export default function DirectVideo({ src }: { src: string }) {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if the video file exists
    fetch(src, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          console.error(`Video file not found: ${src}`)
          setError(true)
        } else {
          console.log(`Video file exists: ${src}`)
        }
      })
      .catch((error) => {
        console.error(`Error checking video file: ${error}`)
        setError(true)
      })
  }, [src])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Handle play/pause based on isPlaying state
    if (isPlaying) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Playback started successfully
          })
          .catch((err) => {
            console.error("Video play error:", err)
            // Auto-play was prevented, set state accordingly
            setIsPlaying(false)
            // Try with muted (browsers often allow muted autoplay)
            video.muted = true
            video.play().catch((e) => console.error("Even muted play failed:", e))
          })
      }
    } else {
      video.pause()
    }
  }, [isPlaying])

  const handleError = () => {
    console.error(`Error loading video: ${src}`)
    setError(true)
  }

  const handleLoaded = () => {
    console.log(`Video loaded successfully: ${src}`)
    setLoaded(true)
  }

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  if (error) {
    return (
      <div className="bg-gray-900 p-4 rounded text-white">
        <p>Error loading video: {src}</p>
        <p>Please check if the file exists and is accessible.</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <p className="text-white">Loading video...</p>
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-auto"
        controls
        muted
        loop
        playsInline
        preload="auto"
        onError={handleError}
        onLoadedData={handleLoaded}
        onClick={handleClick}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play button overlay */}
      {!isPlaying && loaded && (
        <div
          className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
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
