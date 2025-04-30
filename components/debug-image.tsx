"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface DebugImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function DebugImage({ src, alt, className = "", priority }: DebugImageProps) {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [errorDetails, setErrorDetails] = useState<string>("")

  useEffect(() => {
    // Reset status when src changes
    setStatus("loading")
    setErrorDetails("")

    // Use the browser's Image constructor
    const img = new window.Image()
    img.onload = () => setStatus("success")
    img.onerror = () => {
      setStatus("error")
      setErrorDetails(`Failed to load: ${src}`)
      console.error(`Image failed to load: ${src}`)
    }
    img.src = src
  }, [src])

  return (
    <div className={`relative ${className}`}>
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="w-8 h-8 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {status === "success" && (
        <Image 
          src={src}
          alt={alt}
          className="object-cover"
          fill
          priority={priority}
        />
      )}

      {status === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-4 text-center">
          <p className="text-red-500 text-sm mb-2">Image Error</p>
          <p className="text-xs text-gray-400">{errorDetails}</p>
        </div>
      )}
    </div>
  )
}
