"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

interface NavItem {
  id: string
  label: string
  icon?: React.ReactNode
}

interface ServiceFloatingNavProps {
  items: NavItem[]
  activeColor: string
}

export default function ServiceFloatingNav({ items, activeColor }: ServiceFloatingNavProps) {
  const [activeSection, setActiveSection] = useState("")
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])
  const translateY = useTransform(scrollY, [0, 100], [20, 0])

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => {
        const element = document.getElementById(item.id)
        if (!element) return { id: item.id, top: 0, height: 0 }

        const rect = element.getBoundingClientRect()
        return {
          id: item.id,
          top: rect.top + window.scrollY,
          height: rect.height,
        }
      })

      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        if (scrollPosition >= section.top && scrollPosition <= section.top + section.height) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [items])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.div
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      style={{ opacity, y: translateY }}
    >
      <div className="bg-black/30 backdrop-blur-md rounded-full p-2 border border-white/10">
        <ul className="flex flex-col items-center gap-4 py-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative w-10 h-10 rounded-full flex items-center justify-center group"
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full"
                    style={{ background: activeColor }}
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}

                <span className={`relative z-10 ${activeSection === item.id ? "text-black" : "text-white/70"}`}>
                  {item.icon}
                </span>

                <span className="absolute left-full ml-2 px-2 py-1 rounded bg-black/70 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
