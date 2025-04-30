"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Check, ArrowRight, Sparkles, Zap, BarChart3, Users, Code, Rocket } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Service package data
const servicePackages = [
  {
    id: "social-media",
    name: "Social Media Mastery",
    icon: Users,
    description: "Comprehensive social media management to grow your audience and convert followers into customers.",
    color: "#3CDBC0",
    popular: true,
    features: [
      "Full-service channel management",
      "Custom video & design creation",
      "Community engagement & growth",
      "Content calendar & strategy",
      "Performance analytics & reporting",
      "Competitor analysis",
    ],
    results: [
      { label: "Average Follower Growth", value: "150K+" },
      { label: "Typical Engagement Rate", value: "15-20%" },
      { label: "Client Conversion Increase", value: "4.5x" },
    ],
    caseStudy: "zbx",
    price: {
      monthly: "$3,500",
      quarterly: "$9,450",
      discount: "10%",
    },
  },
  {
    id: "ai-implementation",
    name: "AI Implementation",
    icon: Sparkles,
    description: "Custom AI solutions that automate processes, enhance decision-making, and drive business growth.",
    color: "#8B5CF6",
    popular: false,
    features: [
      "AI readiness assessment",
      "Custom AI agent development",
      "Process automation implementation",
      "Predictive analytics dashboard",
      "Staff training & onboarding",
      "Ongoing optimization & support",
    ],
    results: [
      { label: "Average Time Saved", value: "85+ hrs/week" },
      { label: "Typical Cost Reduction", value: "30-40%" },
      { label: "Decision Accuracy Improvement", value: "65%" },
    ],
    caseStudy: "cgai",
    price: {
      monthly: "$5,000",
      quarterly: "$13,500",
      discount: "10%",
    },
  },
  {
    id: "web-development",
    name: "Web Transformation",
    icon: Code,
    description: "Cutting-edge website development with AI-powered features that convert visitors into customers.",
    color: "#EC4899",
    popular: false,
    features: [
      "Custom website design & development",
      "AI chatbot integration",
      "User experience optimization",
      "Mobile-first responsive design",
      "SEO & performance optimization",
      "Analytics & conversion tracking",
    ],
    results: [
      { label: "Average Traffic Increase", value: "250%" },
      { label: "Typical Conversion Rate", value: "3.8x higher" },
      { label: "User Retention Improvement", value: "45%" },
    ],
    caseStudy: "ghostdrive",
    price: {
      monthly: "$4,500",
      quarterly: "$12,150",
      discount: "10%",
    },
  },
  {
    id: "growth-accelerator",
    name: "Growth Accelerator",
    icon: Rocket,
    description: "Comprehensive marketing strategy combining AI, content, and analytics to fuel rapid business growth.",
    color: "#F59E0B",
    popular: false,
    features: [
      "Full marketing strategy development",
      "AI-powered content creation",
      "Multi-channel campaign execution",
      "Conversion funnel optimization",
      "Competitor & market analysis",
      "Weekly performance reviews",
    ],
    results: [
      { label: "Average Revenue Growth", value: "185%" },
      { label: "Lead Generation Increase", value: "3.2x" },
      { label: "Marketing ROI Improvement", value: "215%" },
    ],
    caseStudy: "onlytwins",
    price: {
      monthly: "$6,000",
      quarterly: "$16,200",
      discount: "10%",
    },
  },
]

export default function ServicesShowcase() {
  const [activePackage, setActivePackage] = useState(servicePackages[0].id)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const activeService = servicePackages.find((pkg) => pkg.id === activePackage) || servicePackages[0]

  return (
    <section ref={ref} className="relative py-24 w-full overflow-hidden" id="services-packages">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 z-0"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-[15%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/20 to-transparent blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-[10%] w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/20 to-transparent blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate mb-4">Service Packages</h2>
          <h3 className="text-4xl md:text-5xl font-syncopate font-bold mb-6">Elevate Your Business</h3>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Choose from our carefully crafted service packages designed to transform your business with the power of AI
            and expert marketing strategies.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm p-1 rounded-full border border-white/10 flex items-center">
            <button
              className={`px-6 py-2 rounded-full text-sm font-space transition-all ${billingCycle === "monthly" ? "bg-white/10 text-white" : "text-white/60 hover:text-white/80"}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-space transition-all flex items-center ${billingCycle === "quarterly" ? "bg-white/10 text-white" : "text-white/60 hover:text-white/80"}`}
              onClick={() => setBillingCycle("quarterly")}
            >
              Quarterly
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">Save 10%</span>
            </button>
          </div>
        </motion.div>

        {/* Service tabs */}
        <motion.div
          className="flex overflow-x-auto pb-4 md:flex-wrap md:justify-center gap-2 md:gap-4 mb-10 no-scrollbar"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {servicePackages.map((pkg, index) => (
            <motion.button
              key={pkg.id}
              className={`px-4 py-3 md:px-6 md:py-4 rounded-lg flex items-center gap-2 transition-all duration-300 flex-shrink-0 relative ${
                activePackage === pkg.id
                  ? "bg-white/10 backdrop-blur-sm border-white/20"
                  : "bg-transparent border-transparent hover:bg-white/5"
              } border`}
              onClick={() => setActivePackage(pkg.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <pkg.icon size={18} style={{ color: pkg.color }} />
              <span className="font-space text-sm whitespace-nowrap">{pkg.name}</span>
              {pkg.popular && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                  Popular
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Service details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePackage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            {/* Left column - Features */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${activeService.color}20` }}
                  >
                    <activeService.icon size={24} style={{ color: activeService.color }} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-syncopate font-bold" style={{ color: activeService.color }}>
                      {activeService.name}
                    </h4>
                    <p className="text-white/70">{activeService.description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-lg font-space mb-4">What's Included:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                          style={{ backgroundColor: `${activeService.color}20` }}
                        >
                          <Check size={12} style={{ color: activeService.color }} />
                        </div>
                        <span className="text-white/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-lg font-space mb-4">Typical Results:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeService.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: `${activeService.color}10` }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="text-xl font-bold mb-1" style={{ color: activeService.color }}>
                          {result.value}
                        </div>
                        <div className="text-xs text-white/60">{result.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/projects/${activeService.caseStudy}`}
                    className="inline-flex items-center px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-colors text-sm font-space"
                    scroll={true}
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-space transition-colors"
                    style={{
                      backgroundColor: `${activeService.color}20`,
                      border: `1px solid ${activeService.color}40`,
                    }}
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right column - Pricing */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sticky top-24">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-syncopate font-bold mb-2">Investment</h4>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold" style={{ color: activeService.color }}>
                      {billingCycle === "monthly" ? activeService.price.monthly : activeService.price.quarterly}
                    </span>
                    <span className="text-white/60 ml-2">{billingCycle === "monthly" ? "/month" : "/quarter"}</span>
                  </div>
                  {billingCycle === "quarterly" && (
                    <div className="mt-2 text-sm text-green-400">
                      Save {activeService.price.discount} with quarterly billing
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-lg bg-white/10 flex items-center gap-3">
                    <Zap size={18} className="text-yellow-400" />
                    <span className="text-sm">Dedicated account manager</span>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10 flex items-center gap-3">
                    <BarChart3 size={18} className="text-blue-400" />
                    <span className="text-sm">Weekly performance reports</span>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10 flex items-center gap-3">
                    <Rocket size={18} className="text-purple-400" />
                    <span className="text-sm">30-day satisfaction guarantee</span>
                  </div>
                </div>

                <Button
                  className="w-full py-6 text-white font-space relative overflow-hidden group"
                  style={{
                    backgroundColor: activeService.color,
                  }}
                >
                  <span className="relative z-10">Get Started Now</span>
                  <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Button>

                <div className="mt-4 text-center text-sm text-white/60">No long-term contracts. Cancel anytime.</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* FAQ Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-syncopate font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Get answers to common questions about our service packages and how we can help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly will I see results?",
                answer:
                  "Most clients begin seeing measurable improvements within 30 days. However, significant results typically become apparent after 60-90 days as our AI systems learn and optimize based on performance data.",
              },
              {
                question: "Do I need technical expertise to work with you?",
                answer:
                  "Not at all. Our team handles all the technical aspects of implementing AI solutions and managing your digital presence. We provide user-friendly dashboards and regular reports that make it easy to understand the results.",
              },
              {
                question: "Can I customize these packages?",
                answer:
                  "Absolutely. While our packages are designed to provide comprehensive solutions, we understand that every business is unique. We offer customization options to tailor our services to your specific needs and goals.",
              },
              {
                question: "What makes Skynet different from other agencies?",
                answer:
                  "Our unique combination of AI expertise and creative excellence sets us apart. We don't just implement technology – we blend it with human creativity to deliver results that exceed expectations. Our data-driven approach ensures every strategy is optimized for maximum ROI.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 border border-white/10 backdrop-blur-sm rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <h4 className="text-xl font-syncopate font-bold mb-4">{faq.question}</h4>
                <p className="text-white/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl"></div>
            <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-syncopate font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our experts to discuss how our AI-powered solutions can help you
                achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-6 bg-white text-background font-syncopate text-sm hover:bg-white/90">
                  Schedule Consultation
                </Button>
                <Button className="px-8 py-6 bg-transparent border border-white/20 text-white font-syncopate text-sm hover:bg-white/10">
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
