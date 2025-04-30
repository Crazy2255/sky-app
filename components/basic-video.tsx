"use client"

import { useEffect, useRef, useState } from "react"

interface BasicVideoProps {
  src: string
  fallbackSrc?: string
  className?: string
  poster?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
}

export default function BasicVideo({ 
  src, 
  fallbackSrc,
  className = "", 
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false
}: BasicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    
    const handleError = () => {
      console.error(`Video error loading: ${src}`)
      setError(true)
    }
    
    const handleLoaded = () => {
      console.log(`Video loaded: ${src}`)
      setLoaded(true)
      try {
        video.play().catch(e => console.error("Error playing video:", e))
      } catch (e) {
        console.error("Error playing video:", e)
      }
    }
    
    video.addEventListener('error', handleError)
    video.addEventListener('loadeddata', handleLoaded)
    
    // Attempt to load the video
    try {
      console.log(`Loading video from: ${src}`)
      video.load()
    } catch (e) {
      console.error("Error loading video:", e)
      setError(true)
    }
    
    return () => {
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadeddata', handleLoaded)
    }
  }, [src])
  
  return (
    <>
      {!error && (
        <video
          ref={videoRef}
          className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'}`}
          muted={muted}
          loop={loop}
          playsInline
          autoPlay={autoPlay}
          poster={poster}
          controls={controls}
        >
          <source src={src} type="video/mp4" />
          {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
        </video>
      )}
    </>
  )
}
