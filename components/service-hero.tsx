"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ServiceHeroProps {
  title: string
  description: string
  color: string
  bgGradient: string
}

export default function ServiceHero({ title, description, color, bgGradient }: ServiceHeroProps) {
  return (
    <section className={`relative w-full ${bgGradient} py-24 overflow-hidden`}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-15"></div>

      <div className="container mx-auto px-4">
        <Link
          href="/#services"
          className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${color}`}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
