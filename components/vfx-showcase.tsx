"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import ReliableVideoPlayer from "./reliable-video-player"

export default function VfxShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeVideo, setActiveVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const thumbnailRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null, null])

  const videos = [
    "/videos/vfx-showcase-1.mp4",
    "/videos/vfx-showcase-2.mp4",
    "/videos/vfx-showcase-3.mp4",
    "/videos/vfx-showcase-4.mp4",
  ]

  // Fallback gradients in case videos fail to load
  const gradients = [
    "linear-gradient(to bottom right, #4f46e5, #7c3aed)", // Purple-blue for 3D
    "linear-gradient(to bottom right, #ec4899, #8b5cf6)", // Pink-purple for Particle
    "linear-gradient(to bottom right, #06b6d4, #3b82f6)", // Cyan-blue for Compositing
    "linear-gradient(to bottom right, #10b981, #3b82f6)", // Green-blue for Motion
  ]

  const videoTitles = [
    "3D Animation & Modeling",
    "Particle Effects & Simulations",
    "Compositing & Color Grading",
    "Motion Graphics & Titles",
  ]

  const videoDescriptions = [
    "Stunning 3D animations and models that bring your ideas to life with realistic textures and lighting.",
    "Dynamic particle systems and physics simulations that create mesmerizing visual experiences.",
    "Seamless compositing that blends real footage with digital elements for a cohesive final product.",
    "Eye-catching motion graphics and title sequences that enhance your brand's storytelling.",
  ]

  // Load and play thumbnail videos when component mounts
  useEffect(() => {
    // Initialize all thumbnail videos
    thumbnailRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        videoRef.muted = true
        videoRef.loop = true
        videoRef.playsInline = true

        // Only try to play if the browser supports video
        if (videoRef.canPlayType) {
          const playPromise = videoRef.play()

          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.error(`Error playing thumbnail video ${index}:`, error)
            })
          }
        }
      }
    })

    // Cleanup function
    return () => {
      thumbnailRefs.current.forEach((videoRef) => {
        if (videoRef) {
          videoRef.pause()
          videoRef.src = ""
        }
      })
    }
  }, [])

  const handleThumbnailClick = (index: number) => {
    setActiveVideo(index)
    setIsPlaying(true)
  }

  return (
    <section ref={ref} className="py-24 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90 z-0"></div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-syncopate">VFX SHOWCASE</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore our visual effects capabilities through these showcase examples
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Video showcase - Now in 9:16 ratio */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="relative mx-auto bg-black/50 border border-white/20 rounded-lg overflow-hidden"
              style={{
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "9/16",
              }}
            >
              <ReliableVideoPlayer
                key={`showcase-video-${activeVideo}`}
                src={videos[activeVideo]}
                className="w-full h-full object-cover"
                autoPlay={true}
                loop={true}
                muted={true}
                controls={true}
                fallbackImage={`/placeholder.svg?height=1280&width=720&query=vertical visual effects ${videoTitles[activeVideo]}`}
              />
            </div>

            {/* Video thumbnails with actual video previews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer border-2 rounded-md ${
                    activeVideo === index ? "border-white" : "border-transparent"
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  {/* Video preview thumbnail */}
                  <div className="w-full h-full bg-black">
                    <ReliableVideoPlayer
                      src={video}
                      className="w-full h-full object-cover"
                      autoPlay={isInView}
                      muted
                      loop
                      playsInline
                    />

                    {/* Overlay to darken non-active thumbnails */}
                    <div
                      className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                        activeVideo === index ? "opacity-0" : "opacity-50"
                      }`}
                    />
                  </div>

                  {/* Add title overlay at bottom of thumbnail */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-1 text-[10px] text-center font-medium">
                    {videoTitles[index].split(" ")[0]}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text content - Now takes more space */}
          <motion.div
            className="w-full lg:w-2/3 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate"
              >
                Featured Work
              </motion.div>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h3
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="text-3xl md:text-4xl font-syncopate font-bold"
              >
                {videoTitles[activeVideo]}
              </motion.h3>
            </div>

            <motion.p
              key={activeVideo} // Force re-render when active video changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white/70 text-lg mb-8 max-w-2xl"
            >
              {videoDescriptions[activeVideo]}
            </motion.p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 max-w-2xl relative overflow-hidden"
              >
                {/* VFX-style bullet point/decoration */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>

                {/* Glow effect */}
                <div className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-blue-500/20 blur-xl"></div>
                <div className="absolute -left-4 bottom-6 w-8 h-8 rounded-full bg-purple-500/20 blur-xl"></div>

                <div className="pl-4">
                  <h4 className="text-xl font-bold mb-3 flex items-center">
                    <span className="inline-block w-5 h-5 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30 flex items-center justify-center">
                      <span className="text-xs text-white">✦</span>
                    </span>
                    Perfect for Social Media
                  </h4>
                  <p className="text-white/70">
                    Our 9:16 vertical format videos are optimized for Instagram Reels, TikTok, and Stories, ensuring
                    your content stands out on mobile-first platforms.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Request Custom VFX
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
