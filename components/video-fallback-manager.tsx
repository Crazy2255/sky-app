"use client"

import { useEffect } from "react"

export default function VideoFallbackManager() {
  useEffect(() => {
    // Function to replace videos with their poster images on mobile
    const replaceVideosWithImages = () => {
      // Check if we're on a mobile device
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

      if (isMobile) {
        console.log("Mobile device detected, replacing videos with images")

        // Find all videos
        const videos = document.querySelectorAll("video")

        videos.forEach((video) => {
          // Get the poster image or data-fallback attribute
          const posterSrc = video.poster || video.getAttribute("data-fallback") || "/abstract-thumbnail.png"

          // Create an image element
          const img = document.createElement("img")
          img.src = posterSrc
          img.alt = "Video thumbnail"
          img.className = video.className
          img.style.width = "100%"
          img.style.height = "auto"
          img.style.objectFit = "cover"

          // Replace the video with the image
          if (video.parentNode) {
            video.parentNode.replaceChild(img, video)
          }
        })
      }
    }

    // Run on component mount
    replaceVideosWithImages()

    // Also run when the window is resized
    window.addEventListener("resize", replaceVideosWithImages)

    return () => {
      window.removeEventListener("resize", replaceVideosWithImages)
    }
  }, [])

  return null
}
