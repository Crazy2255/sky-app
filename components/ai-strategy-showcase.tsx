"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Lightbulb, BarChart3 } from "lucide-react"

export default function AiStrategyShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Driven Insights",
      description: "Unlock hidden patterns and opportunities with advanced AI analytics.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Automated Optimization",
      description: "Continuously improve campaign performance with AI-powered adjustments.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Forecast trends and anticipate customer behavior with predictive models.",
    },
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-syncopate">AI Strategy</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations and marketing strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
