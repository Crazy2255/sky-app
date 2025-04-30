"use client"

import { motion } from "framer-motion"

export default function VideoShowcaseSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text content - left side on desktop, top on mobile */}
          <motion.div
            className="w-full lg:w-1/2 text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300 mb-6">
              Skynet Solutions
            </h2>

            <p className="text-lg text-gray-300 mb-6">
              We are a cutting-edge marketing agency specializing in AI-driven strategies, creative content production,
              and innovative digital solutions that help brands stand out in today's competitive landscape.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              Our team of experts combines technical expertise with creative vision to deliver exceptional results that
              drive engagement, increase conversions, and build lasting brand value.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium">
                AI Strategy
              </span>
              <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium">
                Content Creation
              </span>
              <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium">
                Digital Marketing
              </span>
              <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium">
                Web Development
              </span>
            </div>
          </motion.div>

          {/* Video - right side on desktop, bottom on mobile */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-[0_0_25px_rgba(255,215,0,0.15)]">
              <video
                src="/videos/SKYNET SOLUTIONS 01__78pct_smaller.mp4"
                poster="/abstract-thumbnail.png"
                controls
                preload="metadata"
                muted
                autoPlay
                playsInline
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  console.error("Video error:", e)
                  // Show fallback content if video fails to load
                  const target = e.target as HTMLVideoElement
                  if (target.parentElement) {
                    const fallback = document.createElement("div")
                    fallback.className = "w-full aspect-video bg-black flex items-center justify-center"
                    fallback.innerHTML = `
          <div class="text-center p-4">
            <p class="text-amber-300 mb-2">Video playback unavailable</p>
            <a href="/videos/SKYNET SOLUTIONS 01__78pct_smaller.mp4" target="_blank" class="px-4 py-2 bg-amber-500 text-white rounded-md inline-block">Download Video</a>
          </div>
        `
                    target.style.display = "none"
                    target.parentElement.appendChild(fallback)
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
