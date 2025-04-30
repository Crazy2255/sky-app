"use client"

import { useEffect } from "react"

export default function VideoHelper() {
  useEffect(() => {
    // Function to initialize all videos on the page
    const initAllVideos = () => {
      const videos = document.querySelectorAll("video")

      videos.forEach((video) => {
        // Set important attributes for mobile playback
        video.setAttribute("playsinline", "true")
        video.setAttribute("webkit-playsinline", "true")
        video.muted = true

        // Try to play the video
        const playPromise = video.play()

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Auto-play was prevented for video:", video.src)

            // Check if there's a fallback image
            const fallbackImg = video.getAttribute("data-fallback") || video.getAttribute("poster")
            if (fallbackImg && video.parentNode) {
              // We could replace with image here, but let's keep the video
              // and let user interaction trigger it instead
            }
          })
        }
      })
    }

    // Try to initialize videos when component mounts
    initAllVideos()

    // Try again when document becomes visible
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        initAllVideos()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Try again on user interaction
    const handleUserInteraction = () => {
      initAllVideos()
    }

    document.addEventListener("click", handleUserInteraction, { once: true })
    document.addEventListener("touchstart", handleUserInteraction, { once: true })

    // Try again after a delay
    const timer = setTimeout(initAllVideos, 1000)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
      clearTimeout(timer)
    }
  }, [])

  // This component doesn't render anything visible
  return null
}
