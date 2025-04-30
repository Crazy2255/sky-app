"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show cursor after a short delay to prevent initial position flicker
    const timer = setTimeout(() => setIsVisible(true), 1000)

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseDown = () => setCursorVariant("click")
    const mouseUp = () => setCursorVariant("default")

    const handleLinkHover = () => setCursorVariant("hover")
    const handleLinkLeave = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover)
      link.addEventListener("mouseleave", handleLinkLeave)
    })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 40,
      width: 40,
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: "2px solid rgba(255, 255, 255, 0.5)",
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 20,
      },
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 64,
      width: 64,
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: "2px solid rgba(255, 255, 255, 0.8)",
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 20,
      },
    },
    click: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "2px solid rgba(255, 255, 255, 0.8)",
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 20,
      },
    },
  }

  // Only show custom cursor on desktop
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {isVisible && (
        <>
          <motion.div
            className="custom-cursor"
            variants={variants}
            animate={cursorVariant}
            style={{ transform: "translate(-50%, -50%)" }}
          />
          <motion.div
            className="custom-cursor-dot"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              scale: cursorVariant === "click" ? 0.5 : 1,
            }}
            transition={{
              type: "spring",
              mass: 0.1,
              damping: 15,
            }}
            style={{ transform: "translate(-50%, -50%)" }}
          />
        </>
      )}
    </>
  )
}
