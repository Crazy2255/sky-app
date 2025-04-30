"use client"

import { useEffect, useRef, useState } from "react"

interface VideoDebugProps {
  src: string
  className?: string
}

export default function VideoDebug({ src, className = "" }: VideoDebugProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [status, setStatus] = useState<string>("Loading...")
  const [error, setError] = useState<string | null>(null)
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    // Check if the video file exists using fetch
    fetch(src)
      .then((response) => {
        if (!response.ok) {
          setError(`Video file not found: ${response.status} ${response.statusText}`)
          return
        }
        setStatus("File exists, waiting for video to load...")
      })
      .catch((err) => {
        setError(`Network error: ${err.message}`)
      })
  }, [src])

  const handleError = (e: any) => {
    console.error("Video error:", e)
    setError(`Error loading video: ${e.target.error?.message || "Unknown error"}`)
  }

  const handleLoadedData = () => {
    setLoaded(true)
    setStatus("Video loaded successfully")
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={src}
        className={`w-full ${className}`}
        autoPlay
        loop
        muted
        playsInline
        onError={handleError}
        onLoadedData={handleLoadedData}
      />

      {!loaded && (
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4">
          <div className="mb-4">
            <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
          <p className="text-white text-center">{error || status}</p>
          <p className="text-white/60 text-sm mt-2">Source: {src}</p>
        </div>
      )}
    </div>
  )
}
