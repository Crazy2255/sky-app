"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function ImageTestPage() {
  const [imageStatuses, setImageStatuses] = useState<{ [key: string]: "loading" | "success" | "error" }>({})

  const testImages = [
    "/images/zbx-grid.jpeg",
    "/images/ghostdrive-grid.jpeg",
    "/images/luxury-car-rental.png",
    "/images/superfuture-grid.jpeg",
    "/images/zbx-logo-turquoise.png",
    "/images/ghostdrive-logo.png",
    "/images/skynet-logo.png",
    "/images/ai-media-production.png",
  ]

  useEffect(() => {
    console.log("Testing image loading...")

    const newStatuses: { [key: string]: "loading" | "success" | "error" } = {}
    testImages.forEach((src) => {
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

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
        <Link href="/" className="text-blue-400 hover:underline mb-8 block">
          Back to Home
        </Link>

        <div className="grid grid-cols-1 gap-8 mb-12">
          {testImages.map((src, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">
                Image {index + 1}: {src}
              </h2>
              <div className="flex items-center mb-4">
                <span className="mr-2">Status:</span>
                {imageStatuses[src] === "loading" && <span className="text-yellow-400">Loading...</span>}
                {imageStatuses[src] === "success" && <span className="text-green-400">Loaded Successfully</span>}
                {imageStatuses[src] === "error" && <span className="text-red-400">Failed to Load</span>}
              </div>

              <div className="relative aspect-video bg-gray-800 rounded overflow-hidden">
                {imageStatuses[src] !== "error" ? (
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Test image ${index + 1}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      console.error(`Image failed to render: ${src}`)
                      e.currentTarget.style.display = "none"
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-red-400">Image failed to load</p>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-400">Path: {src}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
