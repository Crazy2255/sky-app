"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, X } from "lucide-react"

export default function ComparisonSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const comparisonData = [
    {
      feature: "AI-Powered Strategy",
      skynet: true,
      traditional: false,
      description: "Data-driven decisions based on advanced AI analysis",
    },
    {
      feature: "Real-time Optimization",
      skynet: true,
      traditional: false,
      description: "Continuous performance monitoring and automatic adjustments",
    },
    {
      feature: "Personalized Content",
      skynet: true,
      traditional: true,
      description: "Content tailored to specific audience segments",
    },
    {
      feature: "Predictive Analytics",
      skynet: true,
      traditional: false,
      description: "Forecasting trends and opportunities before they happen",
    },
    {
      feature: "Multi-channel Integration",
      skynet: true,
      traditional: true,
      description: "Seamless coordination across all marketing channels",
    },
    {
      feature: "Automated Reporting",
      skynet: true,
      traditional: false,
      description: "Comprehensive performance reports generated automatically",
    },
    {
      feature: "Creative Excellence",
      skynet: true,
      traditional: true,
      description: "High-quality visual content and compelling messaging",
    },
    {
      feature: "Scalable Solutions",
      skynet: true,
      traditional: false,
      description: "Easily scale services up or down based on business needs",
    },
  ]

  return (
    <section ref={ref} className="relative py-24 w-full overflow-hidden" id="comparison">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate mb-4">Why Choose Skynet</h2>
          <h3 className="text-4xl md:text-5xl font-syncopate font-bold mb-6">The Skynet Advantage</h3>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            See how our AI-powered approach compares to traditional marketing agencies and why businesses choose Skynet
            for transformative results.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-white/10">
            <div className="p-6 text-left font-syncopate font-bold">Feature</div>
            <div className="p-6 text-center font-syncopate font-bold text-primary">Skynet</div>
            <div className="p-6 text-center font-syncopate font-bold text-white/70">Traditional Agency</div>
          </div>

          {/* Table Body */}
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-3 border-b border-white/10 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="p-6">
                <div className="font-bold mb-1">{item.feature}</div>
                <div className="text-sm text-white/60">{item.description}</div>
              </div>
              <div className="p-6 flex justify-center items-center">
                {item.skynet ? (
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="text-primary" size={20} />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <X className="text-white/40" size={20} />
                  </div>
                )}
              </div>
              <div className="p-6 flex justify-center items-center">
                {item.traditional ? (
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Check className="text-white/70" size={20} />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <X className="text-white/40" size={20} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
          <div className="absolute -top-4 -left-4 text-8xl font-serif opacity-10 text-white">"</div>
          <div className="absolute -bottom-4 -right-4 text-8xl font-serif opacity-10 text-white">"</div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-xl italic text-white/80 mb-6">
              After working with three different marketing agencies, we switched to Skynet and saw immediate
              improvements. Their AI-powered approach delivered results in weeks that would have taken months with
              traditional methods. The ROI has been exceptional.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 mr-4"></div>
              <div className="text-left">
                <div className="font-bold">Sarah Johnson</div>
                <div className="text-sm text-white/60">CEO, Ghostdrive</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { label: "Average ROI", value: "300%", description: "Return on marketing investment" },
            { label: "Time Savings", value: "65%", description: "Reduction in campaign management time" },
            { label: "Growth Rate", value: "4.2x", description: "Faster business growth than traditional methods" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-syncopate mb-2">{stat.label}</div>
              <div className="text-sm text-white/60">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-background font-syncopate text-sm tracking-wider font-bold hover:bg-white/90 transition-colors"
          >
            SCHEDULE A CONSULTATION
          </a>
        </motion.div>
      </div>
    </section>
  )
}
