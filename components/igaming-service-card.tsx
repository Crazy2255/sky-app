"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface IGamingServiceCardProps {
  title: string
  items: string[]
  icon: React.ReactNode
  color: string
  delay?: number
}

export default function IGamingServiceCard({ title, items, icon, color, delay = 0 }: IGamingServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
          isHovered ? "opacity-10" : ""
        } ${color}`}
      />

      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>
            <div className="text-white">{icon}</div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden bg-white/5 hover:bg-white/10 rounded-full p-1 transition-all duration-300"
          >
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>

        <ul className={`space-y-3 ${isExpanded ? "block" : "hidden md:block"}`}>
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index + delay }}
              className="flex items-start text-white/80"
            >
              <span className={`inline-block w-1.5 h-1.5 rounded-full ${color} mt-2 mr-3`}></span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Animated corner accent */}
      <div
        className={`absolute -bottom-6 -right-6 w-12 h-12 ${color} opacity-80 rotate-45 transform transition-all duration-300 ${
          isHovered ? "scale-150" : "scale-100"
        }`}
      ></div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 ${color} opacity-10 blur-xl`}></div>
      </div>
    </motion.div>
  )
}
