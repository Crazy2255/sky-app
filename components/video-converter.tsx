"use client"

import { useEffect } from "react"
import { videoFallbacks } from "./static-fallbacks"

export default function VideoConverter() {
  useEffect(() => {
    // Function to replace videos with images if they fail to play
    const replaceFailedVideos = () => {
      const videos = document.querySelectorAll("video")

      videos.forEach((video) => {
        // Skip videos that are already playing
        if (!video.paused && video.currentTime > 0) return

        // Try to determine which fallback to use based on the src
        let fallbackImage = "/abstract-geometric-shapes.png" // Default fallback

        // Try to match the video src to a known video
        const src = video.querySelector("source")?.src || video.src
        if (src) {
          const filename = src.split("/").pop()?.split("?")[0]

          // Match filename to fallback
          if (filename?.includes("background-video")) fallbackImage = videoFallbacks.backgroundVideo
          else if (filename?.includes("vfx-showcase-1")) fallbackImage = videoFallbacks.vfxShowcase1
          else if (filename?.includes("zbx-showcase")) fallbackImage = videoFallbacks.zbxShowcase
          // Add more mappings as needed
        }

        // Create an image element
        const img = document.createElement("img")
        img.src = fallbackImage
        img.alt = "Video content"
        img.className = video.className
        img.style.width = "100%"
        img.style.height = "100%"
        img.style.objectFit = "cover"

        // Replace the video with the image
        if (video.parentNode) {
          video.parentNode.replaceChild(img, video)
        }
      })
    }

    // Check videos after a delay
    const timer = setTimeout(() => {
      replaceFailedVideos()
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
