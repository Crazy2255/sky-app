"use client"

import { useState } from "react"
import VideoDebug from "@/components/video-debug"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function VideoDebugPage() {
  const [videoPath, setVideoPath] = useState("/videos/0420-3d-animation.mp4")
  const [inputPath, setInputPath] = useState("/videos/0420-3d-animation.mp4")

  const testVideos = [
    "/videos/0420-3d-animation.mp4",
    "/videos/vfx-showcase-1.mp4",
    "/videos/vfx-showcase-2.mp4",
    "/videos/background-video.mp4",
    "/videos/content-creation-showcase.mp4",
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Video Debug Tool</h1>

      <div className="mb-8">
        <div className="flex gap-4 mb-4">
          <Input
            type="text"
            value={inputPath}
            onChange={(e) => setInputPath(e.target.value)}
            className="flex-1"
            placeholder="Enter video path to test"
          />
          <Button onClick={() => setVideoPath(inputPath)}>Test Video</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testVideos.map((video, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => {
                setInputPath(video)
                setVideoPath(video)
              }}
              className="text-xs"
            >
              {video}
            </Button>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Testing: {videoPath}</h2>
        <div className="aspect-video">
          <VideoDebug src={videoPath} className="h-full object-contain" />
        </div>
      </div>
    </div>
  )
}
