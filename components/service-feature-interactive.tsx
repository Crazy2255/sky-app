"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { useRef } from "react"

interface ServiceFeatureInteractiveProps {
  title: string
  description: string
  features: string[]
  image: string
  color: string
  reverse?: boolean
  icon?: React.ReactNode
}

export default function ServiceFeatureInteractive({
  title,
  description,
  features,
  image,
  color,
  reverse = false,
  icon,
}: ServiceFeatureInteractiveProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <div ref={sectionRef} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <img src={image || "/placeholder.svg"} alt={title} className="w-full h-auto object-cover" />
              </div>

              {/* Animated corner accents */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`absolute -top-3 -left-3 w-12 h-12 ${color} opacity-80`}
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              ></motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`absolute -bottom-3 -right-3 w-12 h-12 ${color} opacity-80`}
                style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
              ></motion.div>

              {/* Icon overlay */}
              {icon && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-white z-10"
                >
                  {icon}
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4 relative">
              <span className={`inline-block ${color} mr-2`}>#</span>
              {title}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className={`absolute -bottom-2 left-0 h-0.5 ${color.replace("bg-", "bg-").replace("500", "400/50")}`}
              ></motion.div>
            </h2>

            <p className="text-lg text-white/80 mb-8">{description}</p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start group"
                >
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full ${color} flex items-center justify-center mr-3 mt-1 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Check className="w-4 h-4 text-black" />
                  </span>
                  <span className="text-white/90 group-hover:text-white transition-colors duration-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
