"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import {
  CheckCircle,
  ChevronRight,
  Globe,
  Shield,
  Zap,
  BarChart3,
  Users,
  Server,
  Clock,
  ArrowRight,
} from "lucide-react"

// Custom animated component for feature cards
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
    >
      <div className="bg-gradient-to-br from-primary to-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  )
}

// Custom animated component for roadmap items
const RoadmapItem = ({ phase, title, description, isActive, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className={`relative pl-8 pb-8 border-l ${isActive ? "border-primary" : "border-white/20"}`}
    >
      <div
        className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full ${isActive ? "bg-primary" : "bg-white/20"}`}
      ></div>
      <div className={`font-mono text-sm ${isActive ? "text-primary" : "text-white/50"}`}>{phase}</div>
      <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  )
}

// Custom animated component for industry cards
const IndustryCard = ({ industry, icon, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay }}
      className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center gap-3 hover:bg-black/30 transition-all duration-300"
    >
      <div className="text-primary">{icon}</div>
      <span>{industry}</span>
    </motion.div>
  )
}

// Custom animated component for pricing tiers
const PricingTier = ({ name, price, features, isPopular = false, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className={`relative bg-black/30 backdrop-blur-lg border ${isPopular ? "border-primary" : "border-white/10"} rounded-xl p-6 flex flex-col h-full`}
    >
      {isPopular && (
        <div className="absolute -top-3 right-4 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-white/70">/month</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-white/80">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`w-full py-3 px-4 rounded-lg text-center font-medium transition-all duration-300 ${
          isPopular ? "bg-primary hover:bg-primary/80 text-white" : "bg-white/10 hover:bg-white/20 text-white"
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  )
}

// Animated counter component
const AnimatedCounter = ({ value, label, delay = 0 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = Number.parseInt(value.toString().replace(/,/g, ""))
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start > end) start = end
        setCount(Math.floor(start))
        if (start === end) clearInterval(timer)
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {count.toLocaleString()}+
      </div>
      <div className="text-white/70 mt-2">{label}</div>
    </motion.div>
  )
}

// Animated gradient background
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <style jsx global>{`
        @keyframes growUp {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
      `}</style>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow animation-delay-2000">
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-primary/20 blur-[100px]"></div>
        <div className="absolute top-[40%] right-[30%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-[100px]"></div>
      </div>
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow animation-delay-3000">
        <div className="absolute bottom-[30%] left-[35%] w-[25%] h-[25%] rounded-full bg-accent/20 blur-[100px]"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20"></div>
    </div>
  )
}

export default function CRMPage() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  // Refs for scroll animations
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })

  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  return (
    <div className="min-h-screen bg-background text-white">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  The Next Generation <span className="gradient-text">AI-Powered CRM</span> System
                </h1>
                <p className="text-xl text-white/70 mb-8 max-w-xl">
                  Revolutionize your business operations with advanced AI technologies, enhancing efficiency, customer
                  interaction, and business scalability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#features"
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    Explore Features
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Request Demo
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
                  <div className="absolute -top-3 -right-3 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>

                  {/* Mock CRM Dashboard UI */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xl font-bold">Skynet CRM Dashboard</div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-white/50 text-sm mb-1">Total Leads</div>
                      <div className="text-2xl font-bold">1,248</div>
                      <div className="text-green-500 text-xs mt-1">+12% ↑</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-white/50 text-sm mb-1">Conversion</div>
                      <div className="text-2xl font-bold">24.8%</div>
                      <div className="text-green-500 text-xs mt-1">+3.2% ↑</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-white/50 text-sm mb-1">Revenue</div>
                      <div className="text-2xl font-bold">$84.5K</div>
                      <div className="text-green-500 text-xs mt-1">+18% ↑</div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-medium">Monthly Performance</div>
                      <div className="text-white/50 text-sm">Last 30 days</div>
                    </div>
                    <div className="h-32 flex items-end gap-1">
                      {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 85, 95].map((height, i) => (
                        <div key={i} className="flex-1 flex items-end">
                          <div
                            className="w-full bg-gradient-to-t from-primary to-secondary rounded-sm"
                            style={{
                              height: `${height}%`,
                              animation: `growUp 1.5s ease forwards`,
                              animationDelay: `${0.5 + i * 0.05}s`,
                              transform: "scaleY(0)",
                              transformOrigin: "bottom",
                            }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="font-medium mb-3">Recent Leads</div>
                    <div className="space-y-3">
                      {[
                        { name: "Alex Johnson", company: "TechCorp", status: "New Lead" },
                        { name: "Sarah Williams", company: "GameStar", status: "Meeting Scheduled" },
                        { name: "Michael Chen", company: "FinEdge", status: "Proposal Sent" },
                      ].map((lead, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
                          <div>
                            <div className="font-medium">{lead.name}</div>
                            <div className="text-white/50 text-sm">{lead.company}</div>
                          </div>
                          <div className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">{lead.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute top-10 left-0 transform -translate-x-1/2 bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-3 z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Active Users</div>
                    <div className="text-sm font-medium">1,248</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute bottom-10 right-0 transform translate-x-1/3 bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-3 z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">AI Responses</div>
                    <div className="text-sm font-medium">24.8K</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20" ref={featuresRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Product Features</h2>
            <p className="text-white/70 text-lg">
              Our AI-powered CRM system is designed to revolutionize how businesses interact with customers and manage
              their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Users className="w-6 h-6 text-white" />}
              title="AI Customer Support Agents"
              description="Handle inquiries, FAQs, and interactive flows with pre-trained industry-specific scenarios and customizable prompt engineering."
              delay={0.1}
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6 text-white" />}
              title="Advanced Analytics"
              description="Gain deep insights into customer behavior, sales performance, and business metrics with our powerful analytics dashboard."
              delay={0.2}
            />
            <FeatureCard
              icon={<Server className="w-6 h-6 text-white" />}
              title="CRM System & Dashboard"
              description="Efficient lead tracking, segmentation & pipeline management with full admin control and customizable workflows."
              delay={0.3}
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-white" />}
              title="Multilingual Support"
              description="Engage with customers in their preferred language with our advanced multilingual AI support system."
              delay={0.4}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-white" />}
              title="Enterprise-Grade Security"
              description="Full adherence to key data security frameworks, including HIPAA, GDPR, ISO 27001, SOC 2, and China's MLPS 2.0."
              delay={0.5}
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6 text-white" />}
              title="24/7 Availability"
              description="Provide round-the-clock support to your customers with our always-on AI agents that never sleep."
              delay={0.6}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold mb-2">Coming Soon: AI Call Center</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Our next phase includes automated voice support with voice bots and multilingual adaptation for a complete
              customer service solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Join the Waitlist <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Use Cases</h2>
            <p className="text-white/70 text-lg">
              Our AI CRM system is adaptable to various industries, providing tailored solutions for specific business
              needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <IndustryCard industry="Online Gaming & Betting" icon={<div className="text-2xl">🎮</div>} delay={0.1} />
            <IndustryCard industry="Live Entertainment" icon={<div className="text-2xl">🎭</div>} delay={0.15} />
            <IndustryCard industry="Crypto Trading" icon={<div className="text-2xl">💰</div>} delay={0.2} />
            <IndustryCard industry="Real Estate" icon={<div className="text-2xl">🏢</div>} delay={0.25} />
            <IndustryCard industry="Online Education" icon={<div className="text-2xl">🎓</div>} delay={0.3} />
            <IndustryCard industry="Logistics & E-Commerce" icon={<div className="text-2xl">🚚</div>} delay={0.35} />
            <IndustryCard industry="Insurance & Banking" icon={<div className="text-2xl">🏦</div>} delay={0.4} />
            <IndustryCard industry="SaaS Platforms" icon={<div className="text-2xl">☁️</div>} delay={0.45} />
            <IndustryCard industry="Government Services" icon={<div className="text-2xl">🏛️</div>} delay={0.5} />
            <IndustryCard industry="Healthcare" icon={<div className="text-2xl">🏥</div>} delay={0.55} />
            <IndustryCard industry="Retail" icon={<div className="text-2xl">🛍️</div>} delay={0.6} />
            <IndustryCard industry="Hospitality" icon={<div className="text-2xl">🏨</div>} delay={0.65} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" ref={statsRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter value="5000" label="Active Users" delay={0.1} />
            <AnimatedCounter value="1000000" label="AI Interactions" delay={0.2} />
            <AnimatedCounter value="98" label="Customer Satisfaction" delay={0.3} />
            <AnimatedCounter value="24" label="Hours Support" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Development Roadmap</h2>
            <p className="text-white/70 text-lg">
              Our vision for the future of Skynet CRM and the milestones we're working towards.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <RoadmapItem
              phase="Phase 1"
              title="Custom AI Agents & CRM Dashboard"
              description="Completed: Our core CRM system with AI customer support agents is now live and serving clients."
              isActive={true}
              delay={0.1}
            />
            <RoadmapItem
              phase="Phase 2"
              title="Modular Industry Templates"
              description="In Progress: We're developing specialized templates for different industries to provide tailored solutions."
              isActive={true}
              delay={0.2}
            />
            <RoadmapItem
              phase="Phase 3"
              title="Prompt & Workflow Builder"
              description="Coming Soon: A powerful tool to customize AI agent behaviors and create complex workflow automations."
              isActive={false}
              delay={0.3}
            />
            <RoadmapItem
              phase="Phase 4"
              title="AI Call Center & Multi-Client Platform"
              description="Planned: Expanding our capabilities to include voice interactions and support for multiple client management."
              isActive={false}
              delay={0.4}
            />
            <RoadmapItem
              phase="Phase 5"
              title="API Integration & Full Ecosystem"
              description="Future: Complete API ecosystem for seamless integration with other business tools and platforms."
              isActive={false}
              delay={0.5}
            />
            <RoadmapItem
              phase="Future"
              title="AGI-Driven AI Sales Center"
              description="Vision: Fully automated calls & complete sales outsourcing powered by Artificial General Intelligence."
              isActive={false}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-white/70 text-lg">
              Choose the plan that works best for your business needs with unlimited user access at all tiers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingTier
              name="Base Plan"
              price="1,299"
              features={[
                "AI Customer Support Agents",
                "CRM Dashboard",
                "Lead Management",
                "Basic Analytics",
                "Email Support",
                "Unlimited Users",
              ]}
              delay={0.1}
            />
            <PricingTier
              name="Professional"
              price="2,199"
              features={[
                "Everything in Base Plan",
                "Advanced Analytics",
                "Custom AI Training",
                "Workflow Automation",
                "Priority Support",
                "API Access",
              ]}
              isPopular={true}
              delay={0.2}
            />
            <PricingTier
              name="Enterprise"
              price="3,000"
              features={[
                "Everything in Professional",
                "Custom Integration",
                "Dedicated Account Manager",
                "SLA Guarantees",
                "Custom Reporting",
                "White Labeling",
              ]}
              delay={0.3}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/70 mb-6">All plans include a 10% annual price increase. Need a custom solution?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Security & Compliance</h2>
              <p className="text-white/70 text-lg">
                We ensure full adherence to key data security frameworks to keep your business and customer data safe.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {["HIPAA", "GDPR", "ISO 27001", "SOC 2", "MLPS 2.0"].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-bold">{cert}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                  Join the AI revolution and take your customer interactions to the next level with Skynet's AI-powered
                  CRM system.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Schedule a Demo
                </Link>
                <Link
                  href="#features"
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
