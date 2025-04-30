"use client"

import { Dice5, Globe, CreditCard, TrendingUp, Shield, Coins } from "lucide-react"
import ServiceCTA from "@/components/service-cta"
import IGamingServiceCard from "@/components/igaming-service-card"
import CasinoChip from "@/components/casino-chip"
import IGamingHero from "@/components/igaming-hero"
import FloatingGamingElements from "@/components/floating-gaming-elements"
import { motion } from "framer-motion"
import ReliableVideo from "@/components/reliable-video"

export default function IGamingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with video background */}
      <section className="relative">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative w-full h-full opacity-40">
            <ReliableVideo
              src="/videos/gambling-1.mp4"
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        <FloatingGamingElements count={15} />
        <div className="relative z-10">
          <IGamingHero />
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Services Section */}
      <section id="services" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        {/* Floating Casino Chips */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <CasinoChip color="bg-purple-500" delay={0.5} x={-100} y={100} size={100} />
          <CasinoChip color="bg-blue-500" delay={1.2} x={200} y={-150} size={120} />
          <CasinoChip color="bg-green-500" delay={2.1} x={-250} y={-200} size={90} />
          <CasinoChip color="bg-red-500" delay={0.8} x={300} y={300} size={110} />
          <CasinoChip color="bg-yellow-500" delay={1.5} x={-300} y={400} size={80} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-neon">Comprehensive</span> iGaming Solutions
              </h2>
              <p className="text-xl text-white/80">
                Skynet provides end-to-end consultation services for iGaming operators looking to establish, expand, or
                optimize their online gambling operations across global markets.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IGamingServiceCard
              title="iGaming Licensing & Regulatory Support"
              items={[
                "European gambling licenses (Malta, Curacao, Isle of Man)",
                "Cryptocurrency gambling licenses (Anjouan, Costa Rica)",
                "Currency exchange & offshore structure consultation",
                "Local compliance advisory for regulated markets",
              ]}
              icon={<Globe className="w-6 h-6 text-white" />}
              color="bg-gradient-bg-neon"
              delay={0.1}
            />

            <IGamingServiceCard
              title="Payment Solutions"
              items={[
                "Fiat and crypto payment gateway setup",
                "High-risk merchant account solutions",
                "Localized payment processing in Asia, Europe, and LatAm",
                "On-ramping and off-ramping services for crypto operations",
              ]}
              icon={<CreditCard className="w-6 h-6 text-white" />}
              color="bg-gradient-bg-primary"
              delay={0.2}
            />

            <IGamingServiceCard
              title="Market Entry & Operational Support"
              items={[
                "Turnkey iGaming setup for Southeast Asia, Japan, Korea",
                "Western market expansion support (EU, LatAm)",
                "KYC/AML implementation strategy",
                "Back-office operational support (HR, CS, fraud, risk)",
              ]}
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              color="bg-gradient-bg-secondary"
              delay={0.3}
            />

            <IGamingServiceCard
              title="User Acquisition & Traffic Management"
              items={[
                "Affiliate network management and onboarding",
                "Paid media strategy (SEO, SEM, PPC)",
                "Influencer and KOL marketing for key regions",
                "Localized marketing campaigns tailored to player behavior",
              ]}
              icon={<Dice5 className="w-6 h-6 text-white" />}
              color="bg-gradient-bg-neon"
              delay={0.4}
            />

            <IGamingServiceCard
              title="Crypto Integration & Blockchain Gaming"
              items={[
                "Tokenomics advisory for crypto casinos",
                "Smart contract integration for provably fair games",
                "NFT and GameFi advisory for hybrid platforms",
                "Blockchain platform setup and audit coordination",
              ]}
              icon={<Coins className="w-6 h-6 text-white" />}
              color="bg-gradient-bg-primary"
              delay={0.5}
            />

            <IGamingServiceCard
              title="Risk Management & Fraud Prevention"
              items={[
                "Anti-fraud systems & tools consultation",
                "Chargeback mitigation strategies",
                "Real-time transaction monitoring systems",
                "Player behavior analysis for risk assessment",
              ]}
              icon={<Shield className="w-6 h-6 text-white" />}
              color="bg-gradient-bg-secondary"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-purple-950"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text-neon">Skynet</span> for iGaming
            </h2>
            <p className="text-xl text-white/80">
              Our expertise and global network provide unmatched advantages for iGaming operators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-bg-neon flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Years of Experience</h3>
              <p className="text-white/70 text-center">
                Over a decade of specialized experience in the iGaming industry across multiple jurisdictions.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Successful Launches</h3>
              <p className="text-white/70 text-center">
                We've helped over 50 iGaming operators successfully launch and scale their platforms globally.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-bg-secondary flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Dedicated Support</h3>
              <p className="text-white/70 text-center">
                Round-the-clock support from our team of iGaming specialists to address any issues immediately.
              </p>
            </motion.div>
          </div>

          {/* Global presence map visualization */}
          <motion.div
            className="relative max-w-4xl mx-auto h-96 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold gradient-text-neon mb-2">Global Expertise</h3>
                <p className="text-white/80">Operating in 20+ jurisdictions worldwide</p>
              </div>
            </div>

            {/* Animated dots representing global presence */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-cyan-500"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                <g stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1">
                  {[...Array(15)].map((_, i) => {
                    const x1 = 10 + Math.random() * 80
                    const y1 = 10 + Math.random() * 80
                    const x2 = 10 + Math.random() * 80
                    const y2 = 10 + Math.random() * 80
                    return (
                      <motion.line
                        key={i}
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{
                          duration: 2 + Math.random() * 3,
                          delay: Math.random() * 2,
                        }}
                      />
                    )
                  })}
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-black"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-12">
              <div className="h-px bg-white/20 flex-grow"></div>
              <span className="px-4 text-white/60 text-sm tracking-widest">ADDITIONAL SERVICES</span>
              <div className="h-px bg-white/20 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 gradient-text-neon group-hover:scale-105 transition-transform duration-300">
                  White Label Casino Solutions
                </h3>
                <p className="text-white/80">
                  For clients who want a fast and legal entry into iGaming with minimal technical hassle.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-3 gradient-text-neon group-hover:scale-105 transition-transform duration-300">
                  Legal & Tax Structuring Advisory
                </h3>
                <p className="text-white/80">
                  Especially useful for operators wanting to reduce risk and optimize financial flows.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-3 gradient-text-neon group-hover:scale-105 transition-transform duration-300">
                  Talent Recruitment & Outsourcing
                </h3>
                <p className="text-white/80">For customer support, tech development, and local market managers.</p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-3 gradient-text-neon group-hover:scale-105 transition-transform duration-300">
                  Game Aggregation Advisory
                </h3>
                <p className="text-white/80">
                  Help with sourcing and integrating top game providers (slots, live dealer, etc.).
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3 gradient-text-neon group-hover:scale-105 transition-transform duration-300">
                Banking & Wallet Solutions
              </h3>
              <p className="text-white/80">For jurisdictions where standard banking access is limited or complex.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA
        title="Ready to Launch or Optimize Your iGaming Operation?"
        description="Contact our team of iGaming specialists to discuss your project requirements and discover how Skynet can help you succeed in this competitive industry."
        buttonText="Schedule a Consultation"
        buttonLink="/#contact"
        bgGradient="bg-gradient-to-br from-black via-blue-950 to-purple-950"
      />
    </main>
  )
}
