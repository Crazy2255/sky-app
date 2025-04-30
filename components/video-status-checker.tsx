"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function VideoStatusChecker() {
  const [showPlayButton, setShowPlayButton] = useState(false)

  useEffect(() => {
    // Check if videos are playing after a delay
    const timer = setTimeout(() => {
      const videos = document.querySelectorAll("video")
      let anyVideoPlaying = false

      videos.forEach((video) => {
        if (!video.paused && video.currentTime > 0) {
          anyVideoPlaying = true
        }
      })

      if (!anyVideoPlaying && videos.length > 0) {
        setShowPlayButton(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handlePlayAll = () => {
    if (typeof window !== "undefined" && window.retryPlayingVideos) {
      window.retryPlayingVideos()
      setShowPlayButton(false)
    }
  }

  if (!showPlayButton) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button onClick={handlePlayAll} className="flex items-center gap-2 bg-primary hover:bg-primary/80">
        <Play className="w-4 h-4" />
        Play Videos
      </Button>
    </div>
  )
}
