"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function VfxProcess() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Concept & Planning",
      description: "We work with you to understand your vision, goals, and requirements for the project.",
    },
    {
      number: "02",
      title: "Pre-Visualization",
      description: "Creating concept art, storyboards, and animatics to visualize the final product before production.",
    },
    {
      number: "03",
      title: "Asset Creation",
      description: "Developing 3D models, textures, and other digital assets needed for the project.",
    },
    {
      number: "04",
      title: "Animation & Simulation",
      description: "Bringing assets to life through animation and physics-based simulations.",
    },
    {
      number: "05",
      title: "Compositing & Integration",
      description: "Combining all elements seamlessly with live-action footage or other digital components.",
    },
    {
      number: "06",
      title: "Final Touches & Delivery",
      description: "Color grading, final adjustments, and delivering the completed project in your required format.",
    },
  ]

  return (
    <section ref={ref} className="py-24 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90 z-0"></div>

      {/* Diagonal lines background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #444 0, #444 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-syncopate">OUR PROCESS</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A structured approach to delivering exceptional visual effects
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[25px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 z-0 md:transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                {/* Step number */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex-1 ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
