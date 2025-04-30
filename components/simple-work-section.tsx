"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function SimpleWorkSection() {
  // Log when component mounts to verify it's being used
  useEffect(() => {
    console.log("SimpleWorkSection mounted")

    // Check if images exist by trying to load them
    const testImages = [
      "/images/zbx-grid.jpeg",
      "/images/ghostdrive-grid.jpeg",
      "/images/luxury-car-rental.png",
      "/images/superfuture-grid.jpeg",
    ]

    testImages.forEach((src) => {
      const img = new Image()
      img.onload = () => console.log(`✅ Image loaded successfully: ${src}`)
      img.onerror = () => console.error(`❌ Image failed to load: ${src}`)
      img.src = src
    })
  }, [])

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Work</h2>

        {/* Simple grid with direct image tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Image 1 - ZBX */}
          <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-white">
            <img
              src="/images/zbx-grid.jpeg"
              alt="ZBX Project"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Image failed to load")
                e.currentTarget.src = "/abstract-geometric-shapes.png"
                e.currentTarget.style.backgroundColor = "#333"
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-2xl font-bold text-white">ZBX</h3>
              <p className="text-gray-200">Financial platform digital presence</p>
            </div>
          </div>

          {/* Image 2 - Ghostdrive */}
          <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-white">
            <img
              src="/images/ghostdrive-grid.jpeg"
              alt="Ghostdrive Project"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Image failed to load")
                e.currentTarget.src = "/abstract-geometric-shapes.png"
                e.currentTarget.style.backgroundColor = "#333"
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-2xl font-bold text-white">Ghostdrive</h3>
              <p className="text-gray-200">Cloud storage platform redesign</p>
            </div>
          </div>

          {/* Image 3 - Luxury Car Rental */}
          <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-white">
            <img
              src="/images/luxury-car-rental.png"
              alt="Luxury Car Rental Project"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Image failed to load")
                e.currentTarget.src = "/abstract-geometric-shapes.png"
                e.currentTarget.style.backgroundColor = "#333"
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-2xl font-bold text-white">Luxury Car Rental</h3>
              <p className="text-gray-200">Premium content creation</p>
            </div>
          </div>

          {/* Image 4 - VFX */}
          <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-white">
            <img
              src="/images/superfuture-grid.jpeg"
              alt="VFX Project"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Image failed to load")
                e.currentTarget.src = "/abstract-geometric-shapes.png"
                e.currentTarget.style.backgroundColor = "#333"
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-2xl font-bold text-white">VFX & Animation</h3>
              <p className="text-gray-200">Stunning visual effects</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/projects">
            <button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
