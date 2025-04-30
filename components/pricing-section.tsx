"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// Pricing plan interface
interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: string
  yearlyPrice: string
  color: string
  popular?: boolean
  features: PricingFeature[]
  cta: string
}

// Pricing plans data
const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses looking to establish their digital presence.",
    monthlyPrice: "$2,500",
    yearlyPrice: "$25,000",
    color: "#3CDBC0",
    features: [
      { text: "Social Media Management (2 platforms)", included: true },
      { text: "Content Creation (8 posts/month)", included: true },
      { text: "Basic Performance Analytics", included: true },
      { text: "Monthly Strategy Call", included: true },
      { text: "AI-Powered Optimization", included: true },
      { text: "Dedicated Account Manager", included: false },
      { text: "Advanced AI Implementation", included: false },
      { text: "Custom Reporting Dashboard", included: false },
    ],
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    description: "Ideal for businesses ready to accelerate their digital marketing efforts.",
    monthlyPrice: "$5,000",
    yearlyPrice: "$50,000",
    color: "#8B5CF6",
    popular: true,
    features: [
      { text: "Social Media Management (4 platforms)", included: true },
      { text: "Content Creation (16 posts/month)", included: true },
      { text: "Advanced Performance Analytics", included: true },
      { text: "Bi-weekly Strategy Calls", included: true },
      { text: "AI-Powered Optimization", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Basic AI Implementation", included: true },
      { text: "Custom Reporting Dashboard", included: false },
    ],
    cta: "Get Started",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Comprehensive solution for established businesses seeking maximum impact.",
    monthlyPrice: "$10,000",
    yearlyPrice: "$100,000",
    color: "#EC4899",
    features: [
      { text: "Social Media Management (All platforms)", included: true },
      { text: "Content Creation (30+ posts/month)", included: true },
      { text: "Real-time Performance Analytics", included: true },
      { text: "Weekly Strategy Calls", included: true },
      { text: "AI-Powered Optimization", included: true },
      { text: "Dedicated Account Team", included: true },
      { text: "Advanced AI Implementation", included: true },
      { text: "Custom Reporting Dashboard", included: true },
    ],
    cta: "Contact Sales",
  },
]

export default function PricingSection() {
  // Removed billing cycle state
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative py-24 w-full overflow-hidden" id="pricing">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate mb-4">Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-syncopate font-bold mb-6">Investment Plans</h3>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Choose the perfect plan to accelerate your business growth with our AI-powered marketing solutions.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
            >
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 py-1 text-center text-xs font-medium"
                  style={{ backgroundColor: plan.color, color: "#000" }}
                >
                  MOST POPULAR
                </div>
              )}

              <div className="pt-10 px-6 pb-6 border-b border-white/10">
                <h4 className="text-xl font-syncopate font-bold mb-2" style={{ color: plan.color }}>
                  {plan.name}
                </h4>
                <p className="text-white/70 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-xl font-light">Contact us for pricing</span>
                </div>
              </div>

              <div className="p-6">
                <h5 className="text-sm font-syncopate uppercase text-white/50 mb-4">What's Included</h5>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 ${
                          feature.included ? `bg-${plan.color.replace("#", "")}/20` : "bg-white/10"
                        }`}
                      >
                        {feature.included ? (
                          <Check size={12} style={{ color: feature.included ? plan.color : "#ffffff60" }} />
                        ) : (
                          <div className="w-2 h-0.5 bg-white/40"></div>
                        )}
                      </div>
                      <span className={feature.included ? "text-white/90" : "text-white/40"}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full py-6 text-white font-space relative overflow-hidden group"
                  style={{
                    backgroundColor: `${plan.color}20`,
                    borderColor: plan.color,
                  }}
                  variant="outline"
                >
                  <span className="relative z-10">{plan.cta}</span>
                  <span
                    className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: plan.color }}
                  ></span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              icon: Zap,
              title: "Fast Implementation",
              description: "Get up and running quickly with our streamlined onboarding process.",
              color: "#3CDBC0",
            },
            {
              icon: Shield,
              title: "Satisfaction Guarantee",
              description: "If you're not satisfied within 30 days, we'll refund your investment.",
              color: "#8B5CF6",
            },
            {
              icon: Clock,
              title: "Flexible Contracts",
              description: "No long-term commitments required. Cancel with 30 days notice.",
              color: "#EC4899",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="flex items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-syncopate font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-lg text-white/70 mb-6">
              Contact our team to discuss your specific requirements and get a personalized quote.
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
        </motion.div>
      </div>
    </section>
  )
}
