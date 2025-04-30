"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useSound } from "@/hooks/use-sound"
import ClientOrb from "@/components/client-orb"
import DeepDiveModal from "@/components/deep-dive-modal"
import { clientData } from "@/lib/client-data"

export default function SuccessGallery() {
  const [selectedClient, setSelectedClient] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { playSound } = useSound()

  const handleOrbClick = (clientId: string) => {
    playSound("click")
    setSelectedClient(clientId)
  }

  const handleCloseModal = () => {
    playSound("whoosh")
    setSelectedClient(null)
  }

  return (
    <section ref={ref} className="relative min-h-screen w-full py-20 overflow-hidden" id="success-gallery">
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Section Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text-pink">The Orbit of Triumph</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore our constellation of success stories, each representing a transformative journey powered by Skynet's
          AI alchemy.
        </p>
      </motion.div>

      {/* Orbs Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 orb-container"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {clientData.map((client, index) => (
            <ClientOrb key={client.id} client={client} index={index} onClick={() => handleOrbClick(client.id)} />
          ))}
        </motion.div>
      </div>

      {/* Deep Dive Modal */}
      <AnimatePresence>
        {selectedClient && (
          <DeepDiveModal
            client={clientData.find((c) => c.id === selectedClient)!}
            onClose={() => {
              handleCloseModal()
              document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
            }}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
