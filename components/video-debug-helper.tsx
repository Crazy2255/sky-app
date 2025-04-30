"use client"

import { useEffect } from "react"

export default function VideoDebugHelper() {
  useEffect(() => {
    // Function to check if a file exists
    const checkFileExists = async (url: string) => {
      try {
        const response = await fetch(url, { method: "HEAD" })
        return {
          exists: response.ok,
          status: response.status,
          statusText: response.statusText,
          url,
        }
      } catch (error) {
        return {
          exists: false,
          error: String(error),
          url,
        }
      }
    }

    // Function to debug all videos on the page
    const debugVideos = async () => {
      console.log("🔍 Starting video debug...")

      // Find all videos
      const videos = document.querySelectorAll("video")
      console.log(`Found ${videos.length} video elements`)

      // Check each video
      videos.forEach(async (video, index) => {
        console.group(`Video #${index + 1}`)

        // Log video element properties
        console.log("Element:", video)
        console.log("Source:", video.src || "No direct src")
        console.log("Current source:", video.currentSrc || "No current src")
        console.log("Ready state:", video.readyState)
        console.log("Network state:", video.networkState)
        console.log("Error:", video.error)
        console.log("Paused:", video.paused)

        // Check source elements
        const sources = video.querySelectorAll("source")
        console.log(`Found ${sources.length} source elements`)

        for (let i = 0; i < sources.length; i++) {
          const source = sources[i]
          console.log(`Source #${i + 1}:`, source.src, source.type)

          // Check if file exists
          const result = await checkFileExists(source.src)
          console.log(`Source #${i + 1} exists:`, result)
        }

        // If no source elements, check video src
        if (sources.length === 0 && video.src) {
          const result = await checkFileExists(video.src)
          console.log(`Direct src exists:`, result)
        }

        console.groupEnd()
      })

      console.log("🔍 Video debug complete")
    }

    // Run debug after a short delay
    setTimeout(debugVideos, 2000)

    // Also run when document becomes visible
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        debugVideos()
      }
    })

    // Run again after user interaction
    const handleUserInteraction = () => {
      setTimeout(debugVideos, 500)
    }

    document.addEventListener("click", handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener("click", handleUserInteraction)
    }
  }, [])

  return null
}
