"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Check, Users, Sparkles, Code, Rocket, BarChart3, Zap, Lightbulb } from "lucide-react"
import Link from "next/link"

// Service data structure
interface ServiceFeature {
  title: string
  description: string
}

interface ServicePackage {
  id: string
  title: string
  icon: React.ElementType
  description: string
  features: ServiceFeature[]
  caseStudy?: string
  color: string
  popular?: boolean
}

// Service packages data
const servicePackages: ServicePackage[] = [
  {
    id: "social-media",
    title: "Social Media Marketing",
    icon: Users,
    description: "Comprehensive social media management to grow your audience and convert followers into customers.",
    color: "#3CDBC0",
    popular: true,
    features: [
      {
        title: "Content Creation",
        description: "Custom videos, graphics, and copy tailored to each platform's unique requirements.",
      },
      {
        title: "Community Management",
        description: "Active engagement with your audience to build relationships and loyalty.",
      },
      {
        title: "Growth Strategy",
        description: "Data-driven approach to expanding your reach and increasing engagement.",
      },
      {
        title: "Performance Analytics",
        description: "Detailed reporting on key metrics and ROI to optimize your strategy.",
      },
    ],
    caseStudy: "zbx",
  },
  {
    id: "ai-implementation",
    title: "AI Implementation",
    icon: Sparkles,
    description: "Custom AI solutions that automate processes, enhance decision-making, and drive business growth.",
    color: "#8B5CF6",
    features: [
      {
        title: "Process Automation",
        description: "Streamline operations and reduce manual tasks with intelligent automation.",
      },
      {
        title: "Predictive Analytics",
        description: "Forecast trends and identify opportunities before they emerge.",
      },
      {
        title: "AI Chatbots",
        description: "Enhance customer service with intelligent, 24/7 automated support.",
      },
      {
        title: "Data Analysis",
        description: "Extract actionable insights from your business data to inform strategy.",
      },
    ],
    caseStudy: "cgai",
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: Code,
    description: "Cutting-edge website development with AI-powered features that convert visitors into customers.",
    color: "#EC4899",
    features: [
      {
        title: "Custom Design",
        description: "Visually stunning, brand-aligned websites that create a powerful first impression.",
      },
      {
        title: "User Experience",
        description: "Intuitive navigation and interaction designed to maximize conversions.",
      },
      {
        title: "AI Integration",
        description: "Smart features that personalize the user experience and drive engagement.",
      },
      {
        title: "Performance Optimization",
        description: "Lightning-fast loading speeds and seamless functionality across all devices.",
      },
    ],
    caseStudy: "ghostdrive",
  },
  {
    id: "growth-strategy",
    title: "Growth Strategy",
    icon: Rocket,
    description: "Comprehensive marketing strategy combining AI, content, and analytics to fuel rapid business growth.",
    color: "#F59E0B",
    features: [
      {
        title: "Market Analysis",
        description: "Deep insights into your industry, competitors, and target audience.",
      },
      {
        title: "Multi-channel Campaigns",
        description: "Coordinated marketing efforts across all relevant platforms and channels.",
      },
      {
        title: "Conversion Optimization",
        description: "Data-driven refinements to maximize your marketing ROI.",
      },
      {
        title: "Performance Tracking",
        description: "Real-time monitoring and reporting on all key performance indicators.",
      },
    ],
    caseStudy: "onlytwins",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    icon: Lightbulb,
    description: "High-quality, engaging content that tells your brand story and connects with your target audience.",
    color: "#10B981",
    features: [
      {
        title: "Video Production",
        description: "Professional videos optimized for different platforms and marketing goals.",
      },
      {
        title: "Graphic Design",
        description: "Eye-catching visuals that strengthen your brand identity and message.",
      },
      {
        title: "Copywriting",
        description: "Compelling text content that drives action and builds brand voice.",
      },
      {
        title: "AI-Enhanced Editing",
        description: "Advanced tools to ensure polished, professional final products.",
      },
    ],
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    icon: BarChart3,
    description: "Comprehensive data analysis and reporting to measure performance and guide strategic decisions.",
    color: "#6366F1",
    features: [
      {
        title: "Custom Dashboards",
        description: "Personalized reporting interfaces focused on your key business metrics.",
      },
      {
        title: "Competitive Analysis",
        description: "Insights into competitor performance and market positioning.",
      },
      {
        title: "ROI Tracking",
        description: "Clear measurement of return on investment for all marketing activities.",
      },
      {
        title: "Strategic Recommendations",
        description: "Data-backed suggestions for optimizing your marketing strategy.",
      },
    ],
  },
]

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative py-24 w-full overflow-hidden" id="services">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-syncopate font-bold mb-6">AI-Powered Solutions</h3>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Our comprehensive suite of services combines cutting-edge AI technology with human creativity to deliver
            exceptional results for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicePackages.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-syncopate font-bold mb-4">Our Process</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project delivers maximum value and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your business, goals, target audience, and competitors to develop a deep understanding of your unique challenges and opportunities.",
                icon: Lightbulb,
                color: "#3CDBC0",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Our team develops a customized strategy leveraging AI and human creativity to address your specific needs and maximize results.",
                icon: Zap,
                color: "#8B5CF6",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We execute the strategy with precision, continuously monitoring performance and making real-time adjustments for optimal outcomes.",
                icon: Rocket,
                color: "#EC4899",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Using advanced analytics, we refine and enhance your strategy over time, ensuring continuous improvement and long-term success.",
                icon: BarChart3,
                color: "#F59E0B",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div
                  className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: step.color, color: "#000" }}
                >
                  {step.step}
                </div>
                <div className="mb-4">
                  <step.icon size={24} style={{ color: step.color }} />
                </div>
                <h4 className="text-xl font-syncopate font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            href="/pricing"
            className="inline-flex items-center px-8 py-4 bg-white text-background font-syncopate text-sm tracking-wider font-bold hover:bg-white/90 transition-colors"
          >
            VIEW PRICING PACKAGES
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Service Card Component
function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: ServicePackage
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Service Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${service.color}20` }}
          >
            <service.icon size={24} style={{ color: service.color }} />
          </div>
          {service.popular && (
            <div
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: service.color, color: "#000" }}
            >
              Popular
            </div>
          )}
        </div>
        <h4 className="text-xl font-syncopate font-bold mb-2" style={{ color: service.color }}>
          {service.title}
        </h4>
        <p className="text-white/70 text-sm">{service.description}</p>
      </div>

      {/* Service Features */}
      <div className="p-6 flex-grow">
        <h5 className="text-sm font-syncopate uppercase text-white/50 mb-4">What's Included</h5>
        <ul className="space-y-4">
          {service.features.map((feature, i) => (
            <li key={i} className="flex">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <Check size={12} style={{ color: service.color }} />
              </div>
              <div>
                <div className="font-medium mb-1">{feature.title}</div>
                <div className="text-sm text-white/60">{feature.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Service Footer */}
      <div className="p-6 border-t border-white/10 mt-auto">
        <div className="flex justify-between items-center">
          <Link
            href={service.caseStudy ? `/projects/${service.caseStudy}` : "#contact"}
            className="text-sm font-space"
            style={{ color: service.color }}
          >
            {service.caseStudy ? "View Case Study" : "Learn More"}
          </Link>
          <Link
            href="#contact"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors"
          >
            <ArrowRight size={16} className="text-white/70 group-hover:text-white transition-colors" />
          </Link>
        </div>
      </div>

      {/* Hover effect */}
      <div
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: service.color }}
      ></div>
    </motion.div>
  )
}
