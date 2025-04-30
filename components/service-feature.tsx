"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface ServiceFeatureProps {
  title: string
  description: string
  features: string[]
  image: string
  color: string
  reverse?: boolean
}

export default function ServiceFeature({
  title,
  description,
  features,
  image,
  color,
  reverse = false,
}: ServiceFeatureProps) {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src={image || "/placeholder.svg"} alt={title} className="w-full h-auto object-cover" />
              </div>

              {/* Animated corner accents */}
              <div
                className={`absolute -top-3 -left-3 w-12 h-12 ${color} opacity-80`}
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              ></div>
              <div
                className={`absolute -bottom-3 -right-3 w-12 h-12 ${color} opacity-80`}
                style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
              ></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-white/80 mb-8">{description}</p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full ${color} flex items-center justify-center mr-3 mt-1`}
                  >
                    <Check className="w-4 h-4 text-black" />
                  </span>
                  <span className="text-white/90">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
