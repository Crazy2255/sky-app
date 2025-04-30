"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSound } from "@/hooks/use-sound"

export default function AiAvatar() {
  const [message, setMessage] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const { playSound } = useSound()

  const fullMessage = "Greetings from Skynet—ready to transform your business?"

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Play sound when avatar appears
    playSound("whoosh")

    // Type out the message character by character
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullMessage.length) {
        setMessage(fullMessage.substring(0, currentIndex))
        currentIndex++

        // Play typing sound for each character
        if (currentIndex <= fullMessage.length) {
          playSound("type")
        }
      } else {
        clearInterval(interval)

        // Set a timeout to mark the message as complete
        timeout = setTimeout(() => {
          setIsComplete(true)
          playSound("whoosh")
        }, 2000)
      }
    }, 50)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [playSound])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0, y: 50 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {/* Avatar */}
          <motion.div
            className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden relative"
            animate={{
              boxShadow: [
                "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)",
                "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="absolute inset-0 grid-bg opacity-30"></div>

            {/* Animated face elements */}
            <div className="relative z-10">
              <motion.div
                className="w-40 h-40 border-4 border-white rounded-full relative overflow-hidden"
                animate={{
                  borderColor: ["rgba(255,255,255,0.8)", "rgba(59,130,246,0.8)", "rgba(255,255,255,0.8)"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>

                {/* Eyes */}
                <motion.div
                  className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-300 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(59,130,246,0.8)",
                      "0 0 10px rgba(59,130,246,1)",
                      "0 0 5px rgba(59,130,246,0.8)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-300 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(59,130,246,0.8)",
                      "0 0 10px rgba(59,130,246,1)",
                      "0 0 5px rgba(59,130,246,0.8)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Mouth */}
                <motion.div
                  className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-300 rounded-full"
                  animate={{
                    height: message ? [1, 3, 1] : 1,
                    width: message ? [16, 20, 16] : 16,
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: message ? Number.POSITIVE_INFINITY : false,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            </div>

            {/* Circular rings */}
            <motion.div
              className="absolute inset-0 border-4 border-blue-400 rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-purple-400 rounded-full"
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          {/* Message */}
          <motion.div
            className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-900/80 to-purple-900/80 rounded-lg max-w-md text-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 grid-bg opacity-20 rounded-lg"></div>
            <p className="text-white font-orbitron relative z-10">
              {message}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
