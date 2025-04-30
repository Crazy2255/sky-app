"use client"

import { motion } from "framer-motion"

export default function ScrollPrompt() {
  return (
    <motion.div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-20 p-4 text-sm text-white font-space bg-black/50 backdrop-blur-sm rounded-full border border-white/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center">
        <span className="mr-2 text-white/90">SCROLL TO EXPLORE</span>
        <motion.div
          className="w-6 h-6"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}
