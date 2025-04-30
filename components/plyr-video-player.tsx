"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import Image from "next/image"

interface PlyrVideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export default function PlyrVideoPlayer({
  src,
  poster,
  className = "",
  autoplay = true,
  muted = true,
  loop = true,
  controls = true,
}: PlyrVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [plyrLoaded, setPlyrLoaded] = useState(false)
  const [plyrInstance, setPlyrInstance] = useState<any>(null)
  const uniqueId = `video-${Math.random().toString(36).substring(2, 9)}`

  // Check if the video file exists
  useEffect(() => {
    fetch(src, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          console.error(`Video file not found: ${src}`)
          setHasError(true)
        } else {
          console.log(`Video file exists: ${src}`)
        }
      })
      .catch((err) => {
        console.error(`Error checking video file: ${err}`)
        setHasError(true)
      })
  }, [src])

  // Initialize Plyr when the script is loaded
  useEffect(() => {
    if (!plyrLoaded || !videoRef.current || hasError) return

    try {
      // @ts-ignore - Plyr is loaded via script
      const player = new window.Plyr(videoRef.current, {
        controls: controls ? ["play", "progress", "mute", "volume", "fullscreen"] : [],
        autoplay: autoplay,
        muted: muted,
        loop: loop,
        loadSprite: false,
        iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
      })

      player.on("ready", () => {
        console.log("Plyr is ready")
        setIsLoaded(true)
        setPlyrInstance(player)

        if (autoplay) {
          player.muted = true // Ensure muted for autoplay
          player.play().catch((e: any) => console.error("Plyr autoplay failed:", e))
        }
      })

      player.on("error", (event: any) => {
        console.error("Plyr error:", event)
        setHasError(true)
      })

      return () => {
        player.destroy()
      }
    } catch (error) {
      console.error("Error initializing Plyr:", error)
      setHasError(true)
    }
  }, [plyrLoaded, autoplay, muted, loop, controls, hasError])

  // Try to play the video when the document becomes visible
  useEffect(() => {
    if (!plyrInstance) return

    const handleVisibilityChange = () => {
      if (!document.hidden && plyrInstance && plyrInstance.paused) {
        plyrInstance.muted = true // Ensure muted for autoplay
        plyrInstance.play().catch((e: any) => console.error("Visibility change play failed:", e))
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [plyrInstance])

  // Try to play on user interaction
  useEffect(() => {
    if (!plyrInstance) return

    const handleUserInteraction = () => {
      if (plyrInstance && plyrInstance.paused) {
        plyrInstance.muted = true // Ensure muted for autoplay
        plyrInstance.play().catch((e: any) => console.error("User interaction play failed:", e))
      }
    }

    document.addEventListener("click", handleUserInteraction, { once: true })
    document.addEventListener("touchstart", handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [plyrInstance])

  return (
    <>
      {/* Load Plyr CSS and JS */}
      <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
      <Script
        src="https://cdn.plyr.io/3.7.8/plyr.polyfilled.js"
        onLoad={() => setPlyrLoaded(true)}
        onError={() => setHasError(true)}
      />

      <div className={`relative ${className}`}>
        {hasError ? (
          // Fallback image if video fails
          <div className="relative w-full aspect-video">
            <Image
              src={poster || "/abstract-thumbnail.png"}
              alt="Video thumbnail"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <p className="text-white text-center p-4 max-w-xs">
                Video playback is currently unavailable. Please check back later.
              </p>
            </div>
          </div>
        ) : (
          // Plyr video player
          <div className="relative w-full aspect-video">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <video
              id={uniqueId}
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg"
              poster={poster}
              playsInline
              muted={muted}
              autoPlay={autoplay}
              loop={loop}
              controls={false} // Plyr will handle controls
              preload="auto"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </>
  )
}
