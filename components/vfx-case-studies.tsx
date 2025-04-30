"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export default function VfxCaseStudies() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const caseStudies = [
    {
      title: "ZBX Crypto Card",
      category: "3D Animation & Motion Graphics",
      image: "/images/zbx-grid.jpeg",
      link: "/projects/zbx",
    },
    {
      title: "GhostDrive Cloud Storage",
      category: "UI Animation & Visual Effects",
      image: "/images/ghostdrive-grid.jpeg",
      link: "/projects/ghostdrive",
    },
    {
      title: "XPlus Vegas",
      category: "Compositing & Color Grading",
      image: "/images/xplus-grid.jpeg",
      link: "/projects",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return null
}
