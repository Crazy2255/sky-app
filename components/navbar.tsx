"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { isMobile } = useMobile()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-30 py-2 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        scrolled ? "bg-black/80" : "bg-black/50"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-space text-xl tracking-wider z-20">
            <div className="relative w-20 md:w-32 h-10 md:h-16">
              <Image src="/images/skynet-logo.png" alt="Skynet" fill className="object-contain" priority />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="text-white/70 hover:text-white transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects" className="text-white/70 hover:text-white transition-colors relative group">
              Our Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/services" className="text-white/70 hover:text-white transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/services/vfx" className="text-white/70 hover:text-white transition-colors relative group">
              VFX
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/services/igaming" className="text-white/70 hover:text-white transition-colors relative group">
              iGaming
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/services/web3" className="text-white/70 hover:text-white transition-colors relative group">
              Web3
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/services/ai-development"
              className="text-white/70 hover:text-white transition-colors relative group"
            >
              AI Development
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          <div className="md:hidden z-20">
            <button onClick={toggleMenu} className="text-white focus:outline-none p-2" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-10 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-6 px-6 py-20 w-full max-h-screen overflow-y-auto">
              <Link
                href="/"
                className="text-white hover:text-white/80 transition-colors text-xl font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-white/80 transition-colors text-xl font-medium"
                onClick={toggleMenu}
              >
                Our Work
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-white/80 transition-colors text-xl font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/services/vfx"
                className="text-white hover:text-white/80 transition-colors text-xl font-medium"
                onClick={toggleMenu}
              >
                VFX
              </Link>
              <Link
                href="/services/igaming"
                className="text-white hover:text-white/80 transition-colors text-xl font-medium"
                onClick={toggleMenu}
              >
                iGaming
              </Link>
              <Link
                href="/services/web3"
                className="text-white hover:text-white/80 transition-colors text-xl font-medium"
                onClick={toggleMenu}
              >
                Web3
              </Link>
              <Link
                href="/services/ai-development"
                className="text-white hover:text-white/80 transition-colors text-xl font-medium"
                onClick={toggleMenu}
              >
                AI Development
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-white/80 transition-colors text-xl font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export { Navbar }
