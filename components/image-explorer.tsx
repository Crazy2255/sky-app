"use client"

import { useState, useEffect } from "react"

// This is a list of known images in the public folder
const knownImages = [
  "/images/zbx-grid.jpeg",
  "/images/ghostdrive-grid.jpeg",
  "/images/luxury-car-rental.png",
  "/images/superfuture-grid.jpeg",
  "/images/zbx-logo-turquoise.png",
  "/images/ghostdrive-logo.png",
  "/images/skynet-logo.png",
  "/images/ai-media-production.png",
  "/images/ai-marketing-future.jpeg",
  "/images/ai-marketing-strategy.jpeg",
  "/images/corporate-video-production.jpeg",
  "/images/ghostdrive-client-computing.png",
  "/images/ghostdrive-grid.jpeg",
  "/images/igaming-hero.png",
  "/images/levant-sweets-eid.png",
  "/images/levant-sweets-treat.png",
  "/images/luxury-car-rental.png",
  "/images/post-production-team.jpg",
  "/images/superfuture-grid.jpeg",
  "/images/xplus-grid.jpeg",
  "/images/xplus-vegas-winner.png",
  "/images/zbx-crypto-card.png",
  "/images/zbx-grid.jpeg",
  "/grid.svg",
  "/abstract-energy-flow.png",
  "/abstract-thumbnail.png",
  "/collaborative-branding-session.png",
  "/cosmic-nebula.png",
  "/digital-fantasy-landscape.png",
  "/dynamic-energy-display.png",
  "/dynamic-motion-studio.png",
  "/marketing-copy-creation.png",
  "/modern-ai-interface.png",
  "/team-brainstorm.png",
]

export default function ImageExplorer() {
  const [imageStatuses, setImageStatuses] = useState<{ [key: string]: "loading" | "success" | "error" }>({})

  useEffect(() => {
    console.log("ImageExplorer: Testing all known images...")

    const newStatuses: { [key: string]: "loading" | "success" | "error" } = {}
    knownImages.forEach((src) => {
      newStatuses[src] = "loading"

      const img = new Image()
      img.onload = () => {
        console.log(`✅ Image loaded successfully: ${src}`)
        setImageStatuses((prev) => ({ ...prev, [src]: "success" }))
      }
      img.onerror = () => {
        console.error(`❌ Image failed to load: ${src}`)
        setImageStatuses((prev) => ({ ...prev, [src]: "error" }))
      }
      img.src = src
    })

    setImageStatuses(newStatuses)
  }, [])

  // Count successful and failed images
  const successCount = Object.values(imageStatuses).filter((status) => status === "success").length
  const errorCount = Object.values(imageStatuses).filter((status) => status === "error").length
  const loadingCount = Object.values(imageStatuses).filter((status) => status === "loading").length

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Image Explorer</h1>
        <p className="mb-6">This component tests all known images in the public folder.</p>

        <div className="flex gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg">Total Images: {knownImages.length}</p>
          </div>
          <div className="bg-green-900 p-4 rounded-lg">
            <p className="text-lg">Loaded: {successCount}</p>
          </div>
          <div className="bg-red-900 p-4 rounded-lg">
            <p className="text-lg">Failed: {errorCount}</p>
          </div>
          <div className="bg-yellow-900 p-4 rounded-lg">
            <p className="text-lg">Loading: {loadingCount}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {knownImages.map((src, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-bold truncate" title={src}>
                  {src.split("/").pop()}
                </h2>
                <div>
                  {imageStatuses[src] === "loading" && (
                    <span className="px-2 py-1 bg-yellow-800 text-yellow-200 rounded text-xs">Loading</span>
                  )}
                  {imageStatuses[src] === "success" && (
                    <span className="px-2 py-1 bg-green-800 text-green-200 rounded text-xs">Success</span>
                  )}
                  {imageStatuses[src] === "error" && (
                    <span className="px-2 py-1 bg-red-800 text-red-200 rounded text-xs">Failed</span>
                  )}
                </div>
              </div>

              <div className="relative aspect-video bg-gray-800 rounded overflow-hidden">
                {imageStatuses[src] === "success" ? (
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                ) : imageStatuses[src] === "error" ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-red-400 text-xs">Failed to load</p>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              <div className="mt-2">
                <p className="text-xs text-gray-400 truncate" title={src}>
                  {src}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
