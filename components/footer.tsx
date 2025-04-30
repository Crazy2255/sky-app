"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { isMobile } = useMobile()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent! We'll get back to you soon.")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-10 md:py-16 border-t border-white/10 bg-black/90 backdrop-blur-sm" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <Link href="/" className="inline-block mb-4 md:mb-6">
              <Image src="/images/skynet-logo.png" alt="Skynet" width={120} height={40} className="object-contain" />
            </Link>
            <p className="text-white/60 text-base md:text-lg max-w-md mb-6 md:mb-8">
              Transforming brands with cutting-edge digital marketing, content creation, and AI-powered solutions.
            </p>

            <div className="mb-6 md:mb-8">
              <h3 className="text-white font-medium mb-3 md:mb-4 text-lg md:text-xl">Navigation</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/projects" className="text-white/60 hover:text-white transition-colors">
                  Our Work
                </Link>
                <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/services/vfx" className="text-white/60 hover:text-white transition-colors">
                  VFX
                </Link>
                <Link href="/services/igaming" className="text-white/60 hover:text-white transition-colors">
                  iGaming
                </Link>
                <Link href="/services/web3" className="text-white/60 hover:text-white transition-colors">
                  Web3
                </Link>
                <Link href="/services/ai-development" className="text-white/60 hover:text-white transition-colors">
                  AI Development
                </Link>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3 md:mb-4 text-lg md:text-xl">Legal</h3>
              <div className="flex gap-4">
                <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                  Terms of Use
                </Link>
                <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 md:mb-6 text-xl md:text-2xl">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 md:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD56C] text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 md:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD56C] text-sm md:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 md:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={isMobile ? 3 : 5}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD56C] text-sm md:text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFD56C] hover:bg-[#FFD56C]/90 text-black font-bold py-2 md:py-3 px-4 md:px-6 rounded-md transition-colors text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-xs md:text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Skynet Vision. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={isMobile ? 16 : 20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
