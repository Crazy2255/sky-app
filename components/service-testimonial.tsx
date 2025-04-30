"use client"

import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"
import { useRef } from "react"

interface ServiceTestimonialProps {
  quote: string
  author: string
  position: string
  company: string
  color: string
}

export default function ServiceTestimonial({ quote, author, position, company, color }: ServiceTestimonialProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`absolute -top-10 -left-10 text-8xl`}
              style={{ color }}
            >
              <Quote size={100} />
            </motion.div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl italic mb-8 relative z-10"
              >
                "{quote}"
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center"
              >
                <div className={`w-12 h-12 rounded-full mr-4`} style={{ background: color }}></div>
                <div>
                  <p className="font-bold">{author}</p>
                  <p className="text-sm text-white/70">
                    {position}, {company}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
