"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function VfxWorkflow() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const steps = [
    {
      number: "01",
      title: "Pre-Production",
      description:
        "We collaborate with directors, producers, and creative teams to understand the vision and technical requirements. This phase includes concept art, storyboarding, and pre-visualization to plan complex VFX sequences.",
      color: "blue",
    },
    {
      number: "02",
      title: "Production Support",
      description:
        "Our team provides on-set VFX supervision to ensure all footage is captured with post-production in mind. We advise on green screen setups, tracking markers, lighting considerations, and data collection.",
      color: "purple",
    },
    {
      number: "03",
      title: "Asset Creation",
      description:
        "We develop all necessary digital assets, from 3D models and environments to particle systems and digital characters. Each asset is crafted with attention to detail and optimized for the production pipeline.",
      color: "blue",
    },
    {
      number: "04",
      title: "Animation & Simulation",
      description:
        "Our animators bring characters and objects to life with natural movement and emotional performance. Technical directors run complex simulations for elements like fire, water, destruction, and cloth.",
      color: "purple",
    },
    {
      number: "05",
      title: "Compositing & Integration",
      description:
        "Our compositing team seamlessly integrates all elements, matching lighting, color, and camera movement. This crucial phase ensures that CG elements and live-action footage blend perfectly together.",
      color: "blue",
    },
    {
      number: "06",
      title: "Final Delivery",
      description:
        "After client review and approval, we deliver the final VFX shots in the required format and resolution. Our quality control process ensures that every frame meets our high standards before delivery.",
      color: "purple",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-blue-950/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-syncopate">OUR VFX WORKFLOW</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our proven six-step process ensures efficient production and exceptional results for every project.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform -translate-x-1/2"></div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              const colorClass = step.color === "blue" ? "from-blue-500 to-blue-700" : "from-purple-500 to-purple-700"
              const textColorClass = step.color === "blue" ? "text-blue-400" : "text-purple-400"

              return (
                <div key={index} className="relative">
                  {/* Timeline step */}
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Left content (for even steps on desktop) */}
                    <div className={`md:w-5/12 ${isEven ? "md:text-right" : "md:hidden"} pb-4 md:pb-0`}>
                      {isEven && (
                        <>
                          <h4 className={`text-2xl font-bold mb-3 ${textColorClass}`}>{step.title}</h4>
                          <p className="text-white/80 text-lg">{step.description}</p>
                        </>
                      )}
                    </div>

                    {/* Center circle - always in the middle */}
                    <div className="md:w-2/12 flex justify-center relative z-10">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg`}
                      >
                        <span className="font-bold text-xl">{step.number}</span>
                      </div>
                    </div>

                    {/* Right content (for odd steps on desktop) */}
                    <div className={`md:w-5/12 ${!isEven ? "" : "md:hidden"} pt-4 md:pt-0`}>
                      <h4 className={`text-2xl font-bold mb-3 ${textColorClass}`}>{step.title}</h4>
                      <p className="text-white/80 text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
