"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useSound } from "@/hooks/use-sound"
import type { Client } from "@/lib/client-data"

interface ClientOrbProps {
  client: Client
  index: number
  onClick: () => void
}

export default function ClientOrb({ client, index, onClick }: ClientOrbProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isRotated, setIsRotated] = useState(false)
  const orbRef = useRef<HTMLDivElement>(null)
  const { playSound } = useSound()

  const handleMouseEnter = () => {
    setIsHovered(true)
    playSound("hover")
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsRotated(false)
  }

  const handleRotate = () => {
    setIsRotated(!isRotated)
    playSound("click")
  }

  return (
    <motion.div
      className="orb-container"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.1,
          },
        },
      }}
    >
      <div
        ref={orbRef}
        className="relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="orb"
          animate={{ rotateY: isRotated ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          onClick={handleRotate}
        >
          {/* Front Face */}
          <div className="orb-front relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
            <div className="absolute inset-0 grid-bg opacity-30"></div>

            {/* Logo and Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <motion.div
                className="w-16 h-16 mb-4 flex items-center justify-center"
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 1.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
              >
                <div className="text-2xl font-orbitron font-bold text-white neon-text">{client.name}</div>
              </motion.div>

              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
                  animate={{
                    opacity: isHovered ? [0.2, 0.5, 0.2] : 0.2,
                  }}
                  transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                />
                <img
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                className="absolute bottom-4 left-0 right-0 text-center text-white text-sm"
                animate={{
                  y: isHovered ? -5 : 0,
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
              >
                Click to explore
              </motion.div>
            </div>

            {/* Glowing border effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: isHovered
                  ? [
                      `0 0 10px ${client.color}80, 0 0 20px ${client.color}40`,
                      `0 0 15px ${client.color}90, 0 0 30px ${client.color}50`,
                      `0 0 10px ${client.color}80, 0 0 20px ${client.color}40`,
                    ]
                  : `0 0 5px ${client.color}60, 0 0 10px ${client.color}30`,
              }}
              transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
            />
          </div>

          {/* Back Face */}
          <div className="orb-back absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-6 flex flex-col justify-between">
            <div className="absolute inset-0 grid-bg opacity-30 rounded-2xl"></div>

            {/* Stats */}
            <div className="relative z-10">
              <h3 className="text-xl font-orbitron font-bold mb-2 text-white">Key Results</h3>
              <div className="flex items-center mb-4">
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: client.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  />
                </div>
                <span className="ml-2 text-white font-bold">{client.stat}</span>
              </div>
            </div>

            {/* Services */}
            <div className="relative z-10">
              <h3 className="text-xl font-orbitron font-bold mb-2 text-white">Services</h3>
              <div className="flex flex-wrap gap-2">
                {client.services.map((service, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${client.color}30`,
                      border: `1px solid ${client.color}`,
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: `${client.color}50`,
                    }}
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="relative z-10 mt-4">
              <p className="text-sm text-gray-300">{client.description}</p>
            </div>

            {/* CTA */}
            <motion.button
              className="relative z-10 mt-4 w-full py-2 rounded-lg font-orbitron text-sm"
              style={{
                backgroundColor: `${client.color}20`,
                border: `1px solid ${client.color}`,
              }}
              whileHover={{
                backgroundColor: `${client.color}40`,
                boxShadow: `0 0 10px ${client.color}60`,
              }}
              onClick={onClick}
            >
              View Case Study
            </motion.button>
          </div>
        </motion.div>

        {/* Floating particles around the orb when hovered */}
        <AnimateParticles isActive={isHovered} color={client.color} />
      </div>
    </motion.div>
  )
}

function AnimateParticles({ isActive, color }: { isActive: boolean; color: string }) {
  // Generate random particles
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 2 + 1,
  }))

  if (!isActive) return null

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: color,
          }}
          animate={{
            x: [0, Math.random() * 30 - 15, 0],
            y: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      ))}
    </>
  )
}
