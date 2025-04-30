"use client"

import { Navbar } from "@/components/navbar"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Brain, Cpu, Zap, Code, Rocket, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="min-h-screen bg-background text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-sm uppercase tracking-wider font-space text-primary mb-4">About Skynet</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center mb-12"
            >
              <div className="relative w-64 h-64">
                <Image src="/images/skynet-logo.png" alt="Skynet Logo" fill className="object-contain" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Pioneering AI-Powered Digital Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl text-white/70 mb-10 max-w-3xl mx-auto"
            >
              Skynet is at the forefront of the AI revolution, transforming businesses through innovative digital
              strategies and cutting-edge technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center"
              >
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="#our-story"
                className="px-8 py-3 border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-colors"
              >
                Our Story
              </a>
            </motion.div>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-0 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative rounded-lg overflow-hidden h-[400px]">
                  <Image src="/images/ai-media-production.png" alt="Skynet Team" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 mix-blend-overlay"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  ></motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-primary">From Vision to Reality</h3>
                <p className="text-white/80">
                  Founded in 2018, Skynet began with a bold vision: to harness the power of artificial intelligence to
                  transform how businesses connect with their audiences in the digital realm.
                </p>
                <p className="text-white/80">
                  What started as a small team of innovators has grown into a global collective of AI specialists,
                  creative strategists, and technical experts united by a passion for pushing the boundaries of what's
                  possible in digital marketing and technology.
                </p>
                <p className="text-white/80">
                  Today, Skynet stands at the intersection of human creativity and machine intelligence, delivering
                  solutions that not only meet the current needs of our clients but anticipate the digital landscape of
                  tomorrow.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 relative bg-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We combine strategic thinking, creative excellence, and technological innovation to deliver results that
                exceed expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-First Strategy",
                  description:
                    "We place artificial intelligence at the core of everything we do, leveraging machine learning, natural language processing, and predictive analytics to drive results.",
                },
                {
                  icon: Rocket,
                  title: "Rapid Iteration",
                  description:
                    "Our agile methodology enables quick adaptation to changing market conditions and continuous improvement of campaigns and products.",
                },
                {
                  icon: Users,
                  title: "Human-Centered",
                  description:
                    "Despite our technological focus, we never lose sight of the human element, creating experiences that resonate on an emotional level.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expertise</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Skynet specializes in a range of cutting-edge digital services, all enhanced by our proprietary AI
                technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Cpu,
                  title: "AI Strategy & Implementation",
                  description:
                    "We help businesses identify opportunities for AI integration and implement custom solutions that drive efficiency and growth.",
                  features: [
                    "AI Readiness Assessment",
                    "Custom AI Solution Development",
                    "Machine Learning Implementation",
                    "AI-Powered Analytics",
                  ],
                },
                {
                  icon: Code,
                  title: "Web & App Development",
                  description:
                    "Our development team creates cutting-edge digital experiences that combine stunning design with powerful functionality.",
                  features: [
                    "Progressive Web Applications",
                    "E-commerce Solutions",
                    "Custom CMS Development",
                    "Mobile App Development",
                  ],
                },
                {
                  icon: Zap,
                  title: "Digital Marketing",
                  description:
                    "We leverage AI to optimize marketing campaigns, ensuring maximum ROI and meaningful engagement with target audiences.",
                  features: [
                    "AI-Driven Content Strategy",
                    "Predictive Marketing Analytics",
                    "Automated Campaign Optimization",
                    "Personalized Customer Journeys",
                  ],
                },
                {
                  icon: Globe,
                  title: "Content Creation",
                  description:
                    "Our content team combines human creativity with AI assistance to produce compelling, data-informed content that converts.",
                  features: [
                    "AI-Enhanced Copywriting",
                    "Video Production & Animation",
                    "Automated Content Generation",
                    "Multilingual Content Scaling",
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/70 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 relative bg-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                These core principles guide everything we do at Skynet, from how we develop our technology to how we
                interact with our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We constantly push the boundaries of what's possible, embracing emerging technologies and pioneering new approaches.",
                },
                {
                  title: "Integrity",
                  description:
                    "We operate with transparency and honesty, building trust through ethical practices and straightforward communication.",
                },
                {
                  title: "Excellence",
                  description:
                    "We are committed to delivering the highest quality in everything we do, exceeding expectations and setting new standards.",
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe in the power of teamwork, fostering partnerships with our clients and within our team to achieve shared goals.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Partner with Skynet to harness the power of AI and take your business to new heights in the digital
              landscape.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-colors inline-flex items-center"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
