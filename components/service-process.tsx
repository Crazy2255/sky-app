"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ServiceProcessProps {
  title: string
  description: string
  steps: ProcessStep[]
  color: string
  bgColor: string
}

export default function ServiceProcess({ title, description, steps, color, bgColor }: ServiceProcessProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className={`py-24 ${bgColor} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 filter blur-[100px]"
          style={{ background: color }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full opacity-10 filter blur-[80px]"
          style={{ background: color }}
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-white/80">{description}</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <motion.div
            className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-white/10"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          ></motion.div>

          <div className="relative z-10 space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <motion.div
                    className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold border-2`}
                    style={{ borderColor: color, color: color }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
