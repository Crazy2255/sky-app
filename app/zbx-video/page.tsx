"use client"

import { useState } from "react"
import Link from "next/link"

export default function ZBXVideoPage() {
  const [videoError, setVideoError] = useState(false)
  const videoPath = "/videos/ZBX For website__83pct_smaller.mp4"

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">ZBX Video Test</h1>
      <Link href="/projects/zbx" className="text-blue-400 hover:underline mb-8 block">
        Back to ZBX Project
      </Link>

      <div className="max-w-4xl mx-auto">
        <video
          src={videoPath}
          controls
          autoPlay
          muted
          loop
          className="w-full h-auto"
          onError={() => console.error("Video error")}
        />
        <p className="mt-4">Video path: {videoPath}</p>
      </div>
    </div>
  )
}
