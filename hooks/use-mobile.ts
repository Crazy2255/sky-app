"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait")

  useEffect(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== "undefined") {
      const checkDevice = () => {
        const width = window.innerWidth
        setIsMobile(width < 768)
        setIsTablet(width >= 768 && width < 1024)
        setOrientation(window.innerHeight > window.innerWidth ? "portrait" : "landscape")
      }

      // Initial check
      checkDevice()

      // Add event listeners for resize and orientation change
      window.addEventListener("resize", checkDevice)
      window.addEventListener("orientationchange", checkDevice)

      // Cleanup
      return () => {
        window.removeEventListener("resize", checkDevice)
        window.removeEventListener("orientationchange", checkDevice)
      }
    }
  }, [])

  return { isMobile, isTablet, orientation, isTouchDevice: isMobile || isTablet }
}
