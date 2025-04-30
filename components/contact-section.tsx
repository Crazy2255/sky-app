"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import ContactForm from "./contact-form"
import SectionTransition from "./section-transition"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 w-full">
      {/* Section Transition - Top Fade */}
      <SectionTransition position="top" height={120} />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm uppercase tracking-wider font-space text-white/50 mb-4">Get in Touch</h2>
              </motion.div>

              <motion.h3
                className="text-3xl md:text-4xl lg:text-5xl font-syncopate font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Let's Create Something Amazing Together
              </motion.h3>
            </div>

            <motion.p
              className="text-base md:text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ready to transform your digital presence? Our team of AI and marketing experts is here to help you achieve
              your goals. Reach out to us to discuss your project.
            </motion.p>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-space hover:from-purple-700 hover:to-blue-700 transition-colors"
              >
                <span>Visit Our Office</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
