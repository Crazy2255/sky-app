"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Play, ChevronRight } from "lucide-react"
import BasicVideo from "./basic-video"

export default function VfxHighlight() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeVideo, setActiveVideo] = useState(0)
  const videos = [
    "/videos/skynet video 01__85pct_smaller.mp4",
    "/videos/skynet video 02__76pct_smaller.mp4",
    "/videos/skynet 03__86pct_smaller.mp4",
    "/videos/skynet 04__82pct_smaller.mp4",
  ]
  
  // Map of fallback videos in case the optimized version fails
  const fallbackVideos = [
    "/videos/skynet video 01.mp4",
    "/videos/skynet video 02.mp4",
    "/videos/videoplayback (9).mp4", // Fallback for video 3
    "/videos/videoplayback (10).mp4", // Fallback for video 4
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-black/80 z-0"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate"
              >
                Visual Effects
              </motion.div>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="text-4xl md:text-5xl font-syncopate font-bold"
              >
                Cutting-Edge VFX
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/70 text-lg mb-8"
            >
              Transform your vision with our state-of-the-art visual effects. From 3D animations to complex motion
              graphics, our VFX team creates stunning visual experiences that captivate audiences and elevate your
              brand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/services/vfx">
                <motion.button
                  className="px-6 py-3 bg-white text-background rounded-full font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore More</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Video showcase */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden border border-white/20">
              {/* Using BasicVideo component for more reliable video playback */}
              <BasicVideo
                src={videos[activeVideo]}
                fallbackSrc={fallbackVideos[activeVideo]}
                className="w-full h-full object-cover"
                poster="/abstract-energy-flow.png"
              />

              {/* Play button overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer group"
                onClick={() => {
                  setActiveVideo((activeVideo + 1) % videos.length)
                }}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  Click to see more
                </div>
              </div>
            </div>

            {/* Video thumbnails */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`relative aspect-video rounded-md overflow-hidden cursor-pointer border-2 ${
                    activeVideo === index ? "border-white" : "border-transparent"
                  }`}
                  onClick={() => setActiveVideo(index)}
                >
                  <BasicVideo
                    src={video}
                    fallbackSrc={fallbackVideos[index]}
                    className="w-full h-full object-cover"
                    poster="/abstract-energy-flow.png"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
