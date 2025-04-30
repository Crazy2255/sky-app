"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, Users, FileCheck, BarChart4, ChevronRight } from "lucide-react"
import Link from "next/link"
import ServiceCTA from "@/components/service-cta"

export default function AthleteEndorsementPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-black z-0"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center space-x-4 mb-6">
                <Award className="w-8 h-8 text-amber-400" />
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Celebrity Athlete <span className="gradient-text-neon">Endorsement</span>
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-xl">
                Unlock the Power of Sports Stardom. Drive Trust, Traffic, and Engagement for your iGaming & Digital
                Platforms.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                >
                  Contact Us <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Animated frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-purple-500 to-blue-500 rounded-2xl opacity-70 blur-lg animate-pulse"></div>

              {/* Image */}
              <div className="relative z-10 bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 overflow-hidden">
                <img src="/esports-deal.png" alt="Celebrity Athlete Endorsement" className="w-full h-auto rounded-lg" />

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-5 -right-5 bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg"
                  animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  Global Reach
                </motion.div>

                <motion.div
                  className="absolute -bottom-5 -left-5 bg-gradient-to-br from-blue-500 to-cyan-600 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg"
                  animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                >
                  Elite Athletes
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-white/80 leading-relaxed">
              In a competitive iGaming landscape, brand credibility and user acquisition are more critical than ever.
              Nothing elevates your brand like the trusted face of a professional athlete. We specialize in connecting
              elite sports stars with iGaming, esports, and digital entertainment platforms looking to scale their reach
              and solidify market trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-purple-950"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text-neon">Service</span> Offering
            </h2>
            <p className="text-xl text-white/80">
              We provide end-to-end celebrity endorsement and talent acquisition services for iGaming companies,
              sportsbooks, Web3 platforms, and emerging tech brands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Service 1 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-bg-neon flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Talent Scouting & Strategic Matchmaking</h3>
              </div>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Access to a wide network of current and former international athletes across football, basketball,
                    MMA, boxing, motorsports, and more.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    We match athletes based on your brand identity, market goals, and campaign vision.
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-bg-primary flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Contract Negotiation & Legal Management</h3>
              </div>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Full negotiation support to secure the best rates and endorsement terms.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">Legal and compliance advisory tailored to iGaming industry standards.</p>
                </li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-bg-secondary flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Branding, PR & Content Strategy</h3>
              </div>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Campaign planning: image rights, digital assets, ad spots, livestreams, interviews.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Coordination of social media campaigns and press launches with the athlete.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Full creative support for photo/video production, shoots, and public appearances.
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-bg-neon flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Licensing & Regulatory Compliance</h3>
              </div>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Guidance to ensure celebrity endorsements comply with gaming and advertising regulations in your
                    operational jurisdictions (EU, Asia, MENA, etc.).
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Risk management and reputation advisory to ensure brand-safe partnerships.
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Service 5 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-bg-primary flex items-center justify-center">
                  <BarChart4 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Post-Signing Campaign Execution</h3>
              </div>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Ongoing support in managing talent schedules, content rollout, and brand engagement KPIs.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">Performance tracking, audience analytics, and ROI reporting.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-black"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="h-px bg-white/20 flex-grow"></div>
              <span className="px-4 text-white/60 text-sm tracking-widest">WHY CHOOSE US</span>
              <div className="h-px bg-white/20 flex-grow"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Why Work With <span className="gradient-text-neon">Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-bg-neon flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Trust</h3>
              <p className="text-white/70">Trusted by top-tier platforms across iGaming, crypto, and online betting.</p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Extensive Network</h3>
              <p className="text-white/70">Deep ties with athlete agents, sports federations, and media agencies.</p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-bg-secondary flex items-center justify-center mb-6 mx-auto">
                <BarChart4 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Results-Driven</h3>
              <p className="text-white/70">We don't just sign stars—we help you convert influence into revenue.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA
        title="Looking to boost your brand with real star power?"
        description="Let us bring the right athlete to your platform and take your business to the next level. Contact us now to explore available talent and custom campaigns."
        buttonText="Schedule a Consultation"
        buttonLink="/#contact"
        bgGradient="bg-gradient-to-br from-black via-blue-950 to-purple-950"
      />
    </main>
  )
}
