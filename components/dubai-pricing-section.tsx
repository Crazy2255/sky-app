"use client"

import { motion } from "framer-motion"

export default function DubaiPricingSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300">
            Our Pricing Packages
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Choose from our Starter, Growth, or Premium packages, each designed to deliver outstanding results in
            Dubai's vibrant market. Every package includes content creation, social media management, ad campaigns,
            engagement, analytics, and a dedicated account manager to drive your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter Package */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-3xl font-bold text-amber-400 mb-2">
                $1,000<span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-gray-400">Small businesses or startups building their online presence</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Accounts Managed</h4>
                <p className="text-gray-300">
                  2 accounts (e.g., Instagram, TikTok, Facebook, Google My Business, or WhatsApp)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Creation</h4>
                <p className="text-gray-300">
                  14 posts/month (photos, captions)
                  <br />2 videos/month (15–30 sec Reels/promos)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Delivery</h4>
                <p className="text-gray-300">
                  Strategic hashtags & geotags
                  <br />
                  SEO-optimized captions
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dedicated Account Manager</h4>
                <p className="text-gray-300">Personalized growth strategy and Weekly check-ins</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Management</h4>
                <p className="text-gray-300">3–4 posts/week, professionally scheduled</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Engagement</h4>
                <p className="text-gray-300">Responses within 2 hours (1 hour/day)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ad Campaigns</h4>
                <p className="text-gray-300">$100 ad budget included</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Analytics</h4>
                <p className="text-gray-300">PDF report (engagement, reach, views, leads)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Add-Ons</h4>
                <p className="text-gray-300">Available</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Growth Package */}
          <motion.div
            className="bg-gradient-to-b from-amber-900/30 to-gray-900/50 backdrop-blur-sm border border-amber-700/50 rounded-xl overflow-hidden relative z-10 shadow-[0_0_25px_rgba(251,191,36,0.2)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 right-0 bg-amber-500 text-center py-1 text-black font-medium text-sm">
              Most Popular
            </div>
            <div className="p-6 border-b border-amber-700/30 mt-6">
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <div className="text-3xl font-bold text-amber-400 mb-2">
                $2,000<span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-gray-400">Growing businesses scaling their reach and results</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Accounts Managed</h4>
                <p className="text-gray-300">3 accounts (e.g., Instagram, TikTok, LinkedIn, WhatsApp, or others)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Creation</h4>
                <p className="text-gray-300">
                  20 posts/month (photos, captions)
                  <br />4 videos/month (3 Reels, 1 promo, 15–60 sec)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Delivery</h4>
                <p className="text-gray-300">
                  Professional Designs
                  <br />
                  Strategic hashtags & geotags
                  <br />
                  SEO-optimized captions
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dedicated Account Manager</h4>
                <p className="text-gray-300">Enhanced strategy with weekly planning</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Management</h4>
                <p className="text-gray-300">5 posts/week, professionally scheduled</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Engagement</h4>
                <p className="text-gray-300">Responses within 1 hour (2 hours/day)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ad Campaigns</h4>
                <p className="text-gray-300">$200 ad budget included</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Analytics</h4>
                <p className="text-gray-300">Detailed report (clicks, conversions, ROI, insights)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Add-Ons</h4>
                <p className="text-gray-300">WhatsApp campaign included</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <div className="text-3xl font-bold text-amber-400 mb-2">
                $3,500<span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-gray-400">Established businesses dominating their market</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Accounts Managed</h4>
                <p className="text-gray-300">
                  5 accounts (e.g., Instagram, TikTok, LinkedIn, WhatsApp, YouTube, or others)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Creation</h4>
                <p className="text-gray-300">
                  30 posts/month (photos, captions)
                  <br />6 videos/month (4 Reels, 2 long-form, 30–90 sec)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Delivery</h4>
                <p className="text-gray-300">
                  Premium editing (e.g., motion graphics, animations)
                  <br />
                  Strategic hashtags & geotags
                  <br />
                  SEO-optimized captions
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dedicated Account Manager</h4>
                <p className="text-gray-300">Premium strategy with weekly oversight</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Management</h4>
                <p className="text-gray-300">Daily posts, professionally scheduled</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Engagement</h4>
                <p className="text-gray-300">Full community management within 1 hour (3 hours/day)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ad Campaigns</h4>
                <p className="text-gray-300">$400 ad budget included</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Analytics</h4>
                <p className="text-gray-300">Comprehensive report (ROI, conversions, audience) + 30-min call</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Add-Ons</h4>
                <p className="text-gray-300">Influencer collaboration & WhatsApp automation included</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
