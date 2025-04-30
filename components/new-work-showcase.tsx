"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// This will be populated with your new uploads
const workItems: { id: string; title: string; image: string; description: string }[] = []

export default function NewWorkShowcase() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // This will check if images are loaded
    setIsLoaded(true)
  }, [])

  // If no work items have been added yet, show a placeholder
  if (workItems.length === 0) {
    return null // Return nothing when there are no work items
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                onLoad={() => console.log(`Image loaded: ${item.image}`)}
                onError={() => console.error(`Failed to load image: ${item.image}`)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-4">{item.description}</p>
                <Link href={`/projects/${item.id}`}>
                  <Button className="bg-white text-black hover:bg-gray-200">View Project</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
