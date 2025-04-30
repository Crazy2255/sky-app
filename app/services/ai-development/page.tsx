"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Brain, Sparkles, Code, Database, Bot } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import GradientBackground from "@/components/gradient-background"
import ReliableVideo from "@/components/reliable-video"

export default function AIDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GradientBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <ReliableVideo
            src="/videos/cyberpunk-ai-02-2023-11-27-05-15-24-utc__97pct_smaller.mp4"
            className="w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 blur-lg bg-purple-500/30 rounded-lg transform scale-110"></span>
                  <span className="relative text-white font-bold">AI Development</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white mb-8 text-shadow-md"
              >
                Custom AI solutions to automate processes, gain insights, and create innovative user experiences for
                your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium hover:shadow-glow transition-all"
                >
                  Get Started
                </button>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40 z-10"></div>

              {/* AI Visualization */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 p-6 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold">AI Model Training</h3>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="px-2 py-1 bg-purple-500/30 rounded-md text-xs"
                    >
                      Processing...
                    </motion.div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <motion.div
                        animate={{ width: ["30%", "80%", "60%"] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                        className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      ></motion.div>

                      <motion.div
                        animate={{ width: ["60%", "40%", "90%"] }}
                        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
                        className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      ></motion.div>

                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              backgroundColor: [
                                "rgba(168, 85, 247, 0.2)",
                                "rgba(59, 130, 246, 0.2)",
                                "rgba(168, 85, 247, 0.2)",
                              ],
                            }}
                            transition={{ duration: 3, delay: i * 0.5, repeat: Number.POSITIVE_INFINITY }}
                            className="aspect-square rounded-md bg-purple-500/20"
                          ></motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-xs text-gray-300">Accuracy</p>
                        <p className="text-lg font-bold text-purple-400">98.7%</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-xs text-gray-300">Iterations</p>
                        <p className="text-lg font-bold text-blue-400">1.2M</p>
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
                className="absolute top-10 right-10 w-16 h-16 bg-purple-500/30 rounded-full backdrop-blur-md z-10"
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
                className="absolute bottom-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-md z-10"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI Development Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We develop custom AI solutions that help businesses automate processes, gain insights from data, and
              create innovative user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Custom AI Models",
                description: "Develop tailored AI models specific to your business needs and use cases.",
                features: [
                  "Supervised & unsupervised learning",
                  "Deep learning & neural networks",
                  "Transfer learning for efficiency",
                  "Model optimization & deployment",
                ],
                color: "from-purple-600 to-blue-600",
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Natural Language Processing",
                description: "Build systems that understand, interpret, and generate human language.",
                features: [
                  "Sentiment analysis & text classification",
                  "Named entity recognition",
                  "Chatbots & conversational AI",
                  "Document summarization & generation",
                ],
                color: "from-blue-600 to-cyan-600",
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "AI Integration",
                description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
                features: [
                  "API development for AI services",
                  "Legacy system integration",
                  "Cloud-based AI deployment",
                  "Real-time processing pipelines",
                ],
                color: "from-cyan-600 to-teal-600",
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Data Analysis & Insights",
                description: "Extract actionable insights from your data using advanced AI techniques.",
                features: [
                  "Predictive analytics",
                  "Anomaly detection",
                  "Pattern recognition",
                  "Business intelligence dashboards",
                ],
                color: "from-teal-600 to-green-600",
              },
              {
                icon: <Bot className="h-8 w-8" />,
                title: "AI Automation",
                description: "Automate repetitive tasks and processes with intelligent AI systems.",
                features: [
                  "Workflow automation",
                  "Document processing",
                  "Intelligent decision systems",
                  "Process optimization",
                ],
                color: "from-green-600 to-yellow-600",
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Computer Vision",
                description: "Develop systems that can interpret and understand visual information.",
                features: [
                  "Image recognition & classification",
                  "Object detection & tracking",
                  "Facial recognition",
                  "Video analysis",
                ],
                color: "from-yellow-600 to-orange-600",
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
                      <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-white/80">{feature}</p>
                    </div>
                  ))}
                </div>

                <Link href="#contact">
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    Learn more <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI Development Process</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We follow a structured approach to ensure your AI solution is effective, scalable, and delivers real
              business value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We analyze your business needs, data availability, and define clear objectives for your AI solution.",
                color: "purple",
              },
              {
                step: "02",
                title: "Data Collection & Preparation",
                description: "We gather, clean, and prepare the data needed to train and validate your AI models.",
                color: "blue",
              },
              {
                step: "03",
                title: "Model Development & Training",
                description: "We develop and train custom AI models tailored to your specific business requirements.",
                color: "cyan",
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "We deploy your AI solution and continuously monitor and optimize its performance.",
                color: "teal",
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

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Success Stories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how our AI solutions have helped businesses across various industries achieve their goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Predictive Analytics for E-commerce",
                description:
                  "Developed a predictive analytics system that increased conversion rates by 35% and customer retention by 28%.",
                image: "/placeholder.svg?key=szu2i",
                industry: "E-commerce",
              },
              {
                title: "Intelligent Customer Service Bot",
                description:
                  "Created an AI-powered customer service bot that handles 75% of inquiries automatically, reducing support costs by 40%.",
                image: "/modern-ai-interface.png",
                industry: "SaaS",
              },
              {
                title: "Computer Vision for Quality Control",
                description:
                  "Implemented a computer vision system that improved defect detection accuracy by 98% and reduced manual inspection time by 85%.",
                image: "/placeholder.svg?key=x9l80",
                industry: "Manufacturing",
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
                    <span className="px-3 py-1 bg-purple-500/80 rounded-full text-xs font-medium">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                  <p className="text-white/70 mb-6">{caseStudy.description}</p>

                  <Link href="#contact">
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      Read full case study <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-white/70 mb-8">
              Let's discuss how our AI development services can help you automate processes, gain insights, and create
              innovative experiences.
            </p>

            <Link href="#contact">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium hover:shadow-glow transition-all">
                Schedule a Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
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
                Fill out the form below and our AI development team will get back to you within 24 hours.
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
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your project and AI development needs"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 px-6 rounded-md font-medium hover:shadow-glow transition-all"
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
