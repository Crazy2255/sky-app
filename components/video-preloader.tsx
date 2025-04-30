"use client"

import { useState, useEffect } from "react"

interface VideoPreloaderProps {
  sources: string[]
}

export default function VideoPreloader({ sources }: VideoPreloaderProps) {
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // Only preload videos on desktop
    if (window.innerWidth < 768) {
      return
    }

    const preloadVideo = (src: string) => {
      return new Promise<void>((resolve) => {
        const video = document.createElement("video")
        video.preload = "auto"
        video.muted = true
        video.playsInline = true

        // Set a timeout to avoid hanging on slow connections
        const timeout = setTimeout(() => {
          console.log(`Preloading timed out for ${src}`)
          resolve()
        }, 5000)

        video.onloadeddata = () => {
          clearTimeout(timeout)
          setLoadedVideos((prev) => ({ ...prev, [src]: true }))
          resolve()
        }

        video.onerror = () => {
          clearTimeout(timeout)
          console.log(`Error preloading video: ${src}`)
          resolve()
        }

        video.src = src
        video.load()
      })
    }

    // Preload videos in sequence to avoid overwhelming the browser
    const preloadSequentially = async () => {
      for (const src of sources) {
        await preloadVideo(src)
      }
    }

    preloadSequentially()
  }, [sources])

  // This component doesn't render anything visible
  return null
}
