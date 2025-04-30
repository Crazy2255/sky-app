"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import AnimatedDice from "./animated-dice"
import Interactive3DImage from "./interactive-3d-image"

export default function IGamingHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-blue-950 to-black z-0"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center space-x-4 mb-6">
              <AnimatedDice />
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text-neon">iGaming</span> & Online Gambling Consultation
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-xl">
              Strategic solutions for operators in regulated and emerging markets. From licensing to payment processing,
              user acquisition to risk management.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                Contact Us <ChevronRight className="w-4 h-4" />
              </Link>

              {/* New button for Athlete Endorsement */}
              <Link
                href="/services/athlete-endorsement"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all duration-300 text-white font-medium"
              >
                Athlete Endorsement <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Interactive 3D Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Animated frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-70 blur-lg animate-pulse"></div>

            {/* Interactive image with 3D effect */}
            <div className="relative z-10 bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <Interactive3DImage src="/images/igaming-hero.png" alt="iGaming Solutions" width={600} height={600} />

              {/* Floating badges */}
              <motion.div
                className="absolute -top-5 -right-5 bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                20+ Markets
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -left-5 bg-gradient-to-br from-purple-500 to-pink-600 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg"
                animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              >
                24/7 Support
              </motion.div>
            </div>

            {/* Animated connector lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <motion.path
                d="M100,100 C150,50 200,150 250,100"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.path
                d="M300,200 C350,150 400,250 450,200"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
