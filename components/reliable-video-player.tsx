"use client"
import Image from "next/image"

interface ReliableVideoPlayerProps {
  src: string
  className?: string
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  fallbackImage?: string
  height?: number
  width?: number
  objectFit?: "cover" | "contain" | "fill"
}

export default function ReliableVideoPlayer({
  src,
  className = "w-full h-full object-cover",
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = true,
  fallbackImage,
  height,
  width,
  objectFit = "cover",
}: ReliableVideoPlayerProps) {
  // Generate a thumbnail from the video source
  const thumbnailSrc =
    poster || fallbackImage || `/placeholder.svg?height=480&width=640&query=video thumbnail for ${src}`

  return (
    <div className="relative overflow-hidden h-full w-full">
      <Image
        src={thumbnailSrc || "/placeholder.svg"}
        alt="Video thumbnail"
        fill={!(height && width)}
        height={height}
        width={width}
        className={`object-${objectFit}`}
        priority
      />

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      </div>
    </div>
  )
}
