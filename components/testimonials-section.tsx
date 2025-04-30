"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    quote:
      "Skynet's AI-powered marketing strategy completely transformed our customer acquisition process. We've seen a 215% increase in qualified leads and a 40% reduction in cost per acquisition.",
    author: "Jessica Chen",
    title: "CMO, TechVision Inc.",
    image: "/placeholder.svg?height=100&width=100",
    color: "#8B5CF6",
  },
  {
    quote:
      "The personalization capabilities of Skynet's AI content engine have revolutionized our email campaigns. Open rates increased by 78% and conversion rates doubled within just two months.",
    author: "Michael Rodriguez",
    title: "Digital Marketing Director, Elevate Retail",
    image: "/placeholder.svg?height=100&width=100",
    color: "#EC4899",
  },
  {
    quote:
      "Working with Skynet has been a game-changer for our social media presence. Their AI-driven content strategy helped us increase engagement by 300% and grow our following by 150K in six months.",
    author: "Sarah Johnson",
    title: "Social Media Manager, FitLife",
    image: "/placeholder.svg?height=100&width=100",
    color: "#3B82F6",
  },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-32 w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-syncopate font-bold mb-6">What Our Clients Say</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the businesses that have transformed their marketing with our
            AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="p-8 border border-white/10 backdrop-blur-sm relative"
            >
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: testimonial.color }}></div>

              <div className="text-4xl font-serif mb-6 opacity-20" style={{ color: testimonial.color }}>
                "
              </div>

              <p className="text-white/70 mb-8 relative">{testimonial.quote}</p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-white/60 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-white/20 text-white font-syncopate text-sm tracking-wider font-bold hover:bg-white/10 transition-colors"
          >
            BECOME OUR NEXT SUCCESS STORY
          </a>
        </motion.div>
      </div>
    </section>
  )
}
