"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CuboidIcon as Cube, Sparkles, Layers, Wand2, Camera, Tv2, Palette, Lightbulb } from "lucide-react"

export default function VfxServices() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Cube className="w-8 h-8" />,
      title: "3D Modeling & Animation",
      description: "Create stunning 3D models and animations for products, characters, environments, and more.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Particle Effects",
      description: "Add dynamic particle systems like fire, smoke, dust, and magical effects to enhance visual impact.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Compositing",
      description: "Seamlessly blend live-action footage with digital elements for a cohesive final product.",
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Motion Graphics",
      description: "Create eye-catching animated graphics, titles, and transitions for videos and presentations.",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Virtual Production",
      description: "Utilize LED walls and real-time rendering for immersive virtual production environments.",
    },
    {
      icon: <Tv2 className="w-8 h-8" />,
      title: "Screen Replacement",
      description: "Replace screens in post-production with custom content, interfaces, and animations.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Color Grading",
      description: "Enhance the visual tone and mood of your footage with professional color grading.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Consultation",
      description: "Expert advice on how to achieve your creative vision with the right VFX techniques.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="py-24 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(0, 0, 0, 0) 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-syncopate">OUR VFX SERVICES</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive visual effects solutions to bring your creative vision to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
