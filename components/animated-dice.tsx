"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedDice() {
  const [rolling, setRolling] = useState(false)
  const [diceValue, setDiceValue] = useState(6)

  useEffect(() => {
    const interval = setInterval(() => {
      setRolling(true)
      setTimeout(() => {
        setDiceValue(Math.floor(Math.random() * 6) + 1)
        setRolling(false)
      }, 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getDots = () => {
    switch (diceValue) {
      case 1:
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        )
      case 2:
        return (
          <div className="absolute inset-0 grid grid-cols-2 p-3">
            <div className="flex items-start justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-end justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="absolute inset-0 grid grid-cols-2 p-3">
            <div className="flex items-start justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-end justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="absolute inset-0 grid grid-cols-2 p-3">
            <div className="flex items-start justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-start justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-end justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-end justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
          </div>
        )
      case 5:
        return (
          <div className="absolute inset-0 grid grid-cols-2 p-3">
            <div className="flex items-start justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-start justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-end justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-end justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
          </div>
        )
      case 6:
        return (
          <div className="absolute inset-0 grid grid-cols-2 p-3">
            <div className="flex items-start justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-start justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-center justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-center justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-end justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <div className="flex items-end justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg relative"
      animate={{
        rotateX: rolling ? 360 : 0,
        rotateY: rolling ? 360 : 0,
        rotateZ: rolling ? 360 : 0,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      {getDots()}
    </motion.div>
  )
}
