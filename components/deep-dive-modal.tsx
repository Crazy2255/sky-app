"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import type { Client } from "@/lib/client-data"
import { Button } from "@/components/ui/button"

interface DeepDiveModalProps {
  client: Client
  onClose: () => void
}

export default function DeepDiveModal({ client, onClose }: DeepDiveModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 grid-bg opacity-20"></div>

        {/* Animated frame */}
        <AnimatedFrame color={client.color} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700/80 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="relative z-10 p-6 md:p-8">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-2 scanline" style={{ color: client.color }}>
              {client.name}: {client.tagline}
            </h2>
            <div className="h-1 w-32 mb-6" style={{ backgroundColor: client.color }}></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main content */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              {/* Main visual */}
              <div className="relative rounded-lg overflow-hidden mb-6 aspect-video">
                <img
                  src={client.detailedImage || client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Story */}
              <div className="mb-6">
                <h3 className="text-xl font-orbitron font-bold mb-3 text-white">The Challenge</h3>
                <p className="text-gray-300 mb-4">{client.challenge}</p>

                <h3 className="text-xl font-orbitron font-bold mb-3 text-white">Our Solution</h3>
                <p className="text-gray-300">{client.solution}</p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              {/* Stats */}
              <div className="bg-gray-800/50 rounded-lg p-5 mb-6 border border-gray-700">
                <h3 className="text-xl font-orbitron font-bold mb-4 text-white">Results</h3>

                <div className="space-y-4">
                  {client.results.map((result, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{result.label}</span>
                        <span className="font-bold" style={{ color: client.color }}>
                          {result.value}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: client.color }}
                          initial={{ width: "0%" }}
                          animate={{ width: `${result.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              {client.quote && (
                <div className="bg-gray-800/50 rounded-lg p-5 mb-6 border border-gray-700 relative">
                  <div className="text-5xl font-serif absolute top-2 left-3 opacity-20" style={{ color: client.color }}>
                    "
                  </div>
                  <blockquote className="relative z-10 pl-4">
                    <p className="italic text-gray-300 mb-2">{client.quote.text}</p>
                    <footer className="text-sm">
                      <span className="font-bold" style={{ color: client.color }}>
                        {client.quote.author}
                      </span>
                      <span className="text-gray-400"> — {client.quote.title}</span>
                    </footer>
                  </blockquote>
                </div>
              )}

              {/* Services used */}
              <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
                <h3 className="text-xl font-orbitron font-bold mb-4 text-white">Services Used</h3>
                <div className="flex flex-wrap gap-2">
                  {client.services.map((service, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: `${client.color}20`,
                        border: `1px solid ${client.color}`,
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg text-gray-300 mb-4">Want similar results for your business?</p>
            <Button
              className="hexagon-button bg-transparent border-2 hover:bg-opacity-20 text-white px-6 py-5 text-lg font-orbitron relative overflow-hidden group"
              style={{
                borderColor: client.color,
                boxShadow: `0 0 10px ${client.color}60`,
              }}
              onClick={() => {
                onClose()
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span className="relative z-10">Ignite Your Business</span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, ${client.color}, #6366f1)` }}
              ></span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function AnimatedFrame({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top border */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r"
        style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />

      {/* Right border */}
      <motion.div
        className="absolute top-0 right-0 w-1"
        style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }}
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Bottom border */}
      <motion.div
        className="absolute bottom-0 right-0 h-1 bg-gradient-to-r"
        style={{ background: `linear-gradient(to left, ${color}, transparent)` }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* Left border */}
      <motion.div
        className="absolute bottom-0 left-0 w-1"
        style={{ background: `linear-gradient(to top, ${color}, transparent)` }}
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
    </div>
  )
}
