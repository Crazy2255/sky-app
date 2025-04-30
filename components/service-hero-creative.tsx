"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ServiceHeroCreativeProps {
  title: string
  description: string
  color: string
  bgGradient: string
  icon: React.ReactNode
}

export default function ServiceHeroCreative({ title, description, color, bgGradient, icon }: ServiceHeroCreativeProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const calculateMovement = (axis: "x" | "y", intensity = 0.02) => {
    if (windowSize.width === 0 || windowSize.height === 0) return 0

    const position = axis === "x" ? mousePosition.x : mousePosition.y
    const size = axis === "x" ? windowSize.width : windowSize.height
    const movement = (position / size - 0.5) * intensity

    return movement * (axis === "x" ? -100 : -50)
  }

  return (
    <section className={`relative w-full ${bgGradient} py-32 md:py-40 overflow-hidden`}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-15"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-opacity-20 filter blur-[80px]"
        style={{
          background: `radial-gradient(circle, ${color.replace("text-", "rgba(").replace("400", "0.4)")}, transparent 70%)`,
          x: calculateMovement("x", 0.05),
          y: calculateMovement("y", 0.05),
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-opacity-20 filter blur-[100px]"
        style={{
          background: `radial-gradient(circle, ${color.replace("text-", "rgba(").replace("400", "0.3)")}, transparent 70%)`,
          x: calculateMovement("x", -0.03),
          y: calculateMovement("y", -0.03),
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <Link
          href="/#services"
          className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-xl"
            style={{
              boxShadow: `0 0 40px 5px ${color.replace("text-", "rgba(").replace("400", "0.2)")}`,
              x: calculateMovement("x", 0.01),
              y: calculateMovement("y", 0.01),
            }}
          >
            <div className={`${color} w-16 h-16 md:w-24 md:h-24`}>{icon}</div>
          </motion.div>

          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${color}`}
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="rgba(0, 0, 0, 0.8)"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
