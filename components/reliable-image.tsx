"use client"

import { useState } from "react"
import Image from "next/image"

interface ReliableImageProps {
  src: string
  alt: string
  fallbackSrc: string
  className?: string
  width?: number
  height?: number
}

export default function ReliableImage({ src, alt, fallbackSrc, className = "", width, height }: ReliableImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
      console.log(`Image failed to load: ${src}, using fallback: ${fallbackSrc}`)
    }
  }

  // If width and height are provided, use next/image
  if (width && height) {
    return (
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={handleError}
      />
    )
  }

  // Otherwise use a regular img tag
  return <img src={imgSrc || "/placeholder.svg"} alt={alt} className={className} onError={handleError} />
}
