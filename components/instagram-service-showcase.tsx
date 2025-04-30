"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, ChevronRight, Layout, Users, Zap } from "lucide-react"

export function InstagramServiceShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-6 h-6 text-pink-500" />
              <h3 className="text-lg font-medium text-pink-500">Instagram Content Creation</h3>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Instagram Layouts for Your Brand</h2>

            <p className="text-white/80 text-lg mb-8">
              We create stunning, cohesive Instagram layouts that elevate your brand's social media presence and drive
              engagement with your target audience.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Layout className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Cohesive Grid Design</h4>
                  <p className="text-white/70">
                    Create a visually stunning feed that maintains your brand identity and captivates followers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Audience Growth</h4>
                  <p className="text-white/70">
                    Attract and retain followers with professional, eye-catching content that stands out.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Increased Engagement</h4>
                  <p className="text-white/70">
                    Drive more likes, comments, and shares with strategically designed content.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-medium hover:from-pink-700 hover:to-purple-700 transition-colors"
            >
              <span>Elevate Your Instagram</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/instagram-grid-showcase.png"
                alt="Professional Instagram Layout Examples"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute inset-0 border-[8px] border-white/10 rounded-lg pointer-events-none"></div>
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex justify-between">
                <div className="text-center">
                  <p className="text-2xl font-bold text-pink-500">45%</p>
                  <p className="text-xs text-white/70">Engagement Increase</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-pink-500">30+</p>
                  <p className="text-xs text-white/70">Brands Served</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-pink-500">5K+</p>
                  <p className="text-xs text-white/70">Posts Created</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
