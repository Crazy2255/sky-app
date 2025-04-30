"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { ArrowRight, CheckCircle, Coins, Code, Zap, Users, Shield, BarChart3 } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import GradientBackground from "@/components/gradient-background"

export default function Web3Page() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        setVideoLoaded(true)
      }

      video.addEventListener("canplay", handleCanPlay)

      return () => {
        video.removeEventListener("canplay", handleCanPlay)
      }
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <GradientBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover opacity-30 transition-opacity duration-1000 ${videoLoaded ? "opacity-30" : "opacity-0"}`}
          >
            <source src="/videos/camera-movement-along-technological-tunnel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  Web3 Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white/70 mb-8"
              >
                Comprehensive Web3 project support from token launches to NFT collections and DApp development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full font-medium hover:shadow-glow transition-all"
                >
                  Get Started
                </button>
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="px-6 py-3 border border-white/30 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Explore Services
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 to-orange-900/40 z-10"></div>

              {/* Web3 Visualization */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 p-6 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold">Token Dashboard</h3>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="px-2 py-1 bg-yellow-500/30 rounded-md text-xs"
                    >
                      Live
                    </motion.div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/70">Token Price</span>
                        <span className="text-lg font-bold text-yellow-400">$0.0875</span>
                      </div>

                      <motion.div
                        animate={{ width: ["60%", "80%", "70%"] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                        className="h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                      ></motion.div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/70">Market Cap</span>
                        <span className="text-lg font-bold text-yellow-400">$8.75M</span>
                      </div>

                      <motion.div
                        animate={{ width: ["40%", "60%", "50%"] }}
                        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
                        className="h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                      ></motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-xs text-gray-300">Holders</p>
                        <p className="text-lg font-bold text-yellow-400">12,547</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-xs text-gray-300">24h Volume</p>
                        <p className="text-lg font-bold text-orange-400">$1.2M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute top-10 right-10 w-16 h-16 bg-yellow-500/30 rounded-full backdrop-blur-md z-10"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, -15, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute bottom-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full backdrop-blur-md z-10"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Web3 Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We provide comprehensive Web3 services to help you navigate the decentralized landscape and build
              successful blockchain projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Coins className="h-8 w-8" />,
                title: "Token Launch Campaigns",
                description: "Strategic planning and execution of token launches to maximize visibility and adoption.",
                features: [
                  "Tokenomics design & implementation",
                  "Smart contract development & auditing",
                  "Pre-sale & IDO management",
                  "Exchange listing support",
                ],
                color: "from-yellow-600 to-orange-600",
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "NFT Collection Development",
                description: "End-to-end NFT collection creation from concept to minting and marketplace integration.",
                features: [
                  "Artwork creation & optimization",
                  "Smart contract development",
                  "Metadata generation & IPFS storage",
                  "Marketplace integration",
                ],
                color: "from-orange-600 to-red-600",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "DApp Development",
                description: "Custom decentralized application development for various blockchain platforms.",
                features: [
                  "Frontend & backend development",
                  "Smart contract integration",
                  "Web3 wallet integration",
                  "Cross-chain compatibility",
                ],
                color: "from-red-600 to-pink-600",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Web3 Community Building",
                description: "Strategic community development and management for Web3 projects.",
                features: [
                  "Discord & Telegram setup & management",
                  "Community engagement strategies",
                  "Ambassador & influencer programs",
                  "DAO structure & governance",
                ],
                color: "from-pink-600 to-purple-600",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Smart Contract Auditing",
                description: "Comprehensive security audits for smart contracts to identify vulnerabilities.",
                features: [
                  "Code review & vulnerability assessment",
                  "Gas optimization",
                  "Security best practices implementation",
                  "Audit report & recommendations",
                ],
                color: "from-purple-600 to-blue-600",
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Web3 Marketing",
                description: "Specialized marketing strategies for Web3 projects to reach target audiences.",
                features: [
                  "Token marketing campaigns",
                  "NFT launch promotion",
                  "Crypto influencer outreach",
                  "Web3 PR & media relations",
                ],
                color: "from-blue-600 to-cyan-600",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-white/80">{feature}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  Learn more <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-950/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Web3 Success Stories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how our Web3 solutions have helped projects achieve their goals and make an impact in the blockchain
              space.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ZBX Token Launch",
                description:
                  "Developed and executed a comprehensive token launch strategy that resulted in a successful IDO raising $3.5M and 12,000+ token holders.",
                image: "/placeholder.svg?key=o7mhl",
                category: "Token Launch",
              },
              {
                title: "Crypto Gaming NFT Collection",
                description:
                  "Created a 10,000 piece NFT collection for a play-to-earn game that sold out in 48 hours and generated $2.8M in primary sales.",
                image: "/placeholder.svg?key=jng5o",
                category: "NFT Collection",
              },
              {
                title: "DeFi Lending Platform",
                description:
                  "Developed a decentralized lending platform that attracted $15M in TVL within the first month of launch and 5,000+ active users.",
                image: "/decentralized-finance-lend.png",
                category: "DApp Development",
              },
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-yellow-500/80 rounded-full text-xs font-medium text-black">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                  <p className="text-white/70 mb-6">{caseStudy.description}</p>

                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Read full case study <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Web3 Development Process</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We follow a structured approach to ensure your Web3 project is successful, secure, and delivers value to
              your community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Strategy & Planning",
                description:
                  "We define your project goals, target audience, and develop a comprehensive roadmap for your Web3 project.",
                color: "yellow",
              },
              {
                step: "02",
                title: "Design & Development",
                description:
                  "Our team designs and develops the smart contracts, frontend interfaces, and backend systems for your project.",
                color: "orange",
              },
              {
                step: "03",
                title: "Testing & Auditing",
                description:
                  "We thoroughly test and audit all aspects of your project to ensure security, functionality, and optimal performance.",
                color: "red",
              },
              {
                step: "04",
                title: "Launch & Growth",
                description:
                  "We support your project launch and implement strategies to grow your community and achieve long-term success.",
                color: "pink",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative"
              >
                <div
                  className={`absolute -top-4 -left-4 w-8 h-8 rounded-full bg-${step.color}-500 flex items-center justify-center text-xs font-bold text-black`}
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Web3 Project?</h2>
            <p className="text-xl text-white/70 mb-8">
              Let's discuss how our Web3 services can help you build a successful blockchain project that stands out in
              the market.
            </p>

            <button
              onClick={() => scrollToSection(contactRef)}
              className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full font-medium hover:shadow-glow transition-all"
            >
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" ref={contactRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-white/70">
                Fill out the form below and our Web3 team will get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select project type</option>
                    <option value="token">Token Launch</option>
                    <option value="nft">NFT Collection</option>
                    <option value="dapp">DApp Development</option>
                    <option value="audit">Smart Contract Audit</option>
                    <option value="marketing">Web3 Marketing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="small">$5,000 - $10,000</option>
                    <option value="medium">$10,000 - $25,000</option>
                    <option value="large">$25,000 - $50,000</option>
                    <option value="enterprise">$50,000+</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Tell us about your Web3 project and requirements"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 py-3 px-6 rounded-md font-medium hover:shadow-glow transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
