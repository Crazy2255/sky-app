"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Camera,
  Video,
  Film,
  Instagram,
  Pencil,
  ArrowRight,
  Play,
  Pause,
  Code,
  BarChart3,
  Rocket,
  Sparkles,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

// Interface for showcase items
interface ShowcaseItem {
  id: string
  title: string
  icon: any
  color: string
  description: string
  image: string
  isVideo: boolean
  stats: { label: string; value: string }[]
  features: string[]
}

// Service showcase data
const showcaseItems: ShowcaseItem[] = [
  {
    id: "photography",
    title: "Photography",
    icon: Camera,
    color: "#8B5CF6",
    description:
      "Stunning visual content that captures your brand's essence and connects with your audience on a deeper level.",
    image: "/videos/photography-showcase.mp4",
    isVideo: true,
    stats: [
      { label: "Increase in Engagement", value: "87%" },
      { label: "Brand Recognition", value: "+65%" },
    ],
    features: [
      "Professional studio shoots",
      "On-location photography",
      "Product photography",
      "Lifestyle and brand imagery",
      "AI-enhanced editing",
    ],
  },
  {
    id: "corporate-video",
    title: "Corporate Videos",
    icon: Video,
    color: "#EC4899",
    description:
      "Professional video content that communicates your message with clarity and positions your brand as an industry leader.",
    image: "/placeholder.svg?height=600&width=800",
    isVideo: false,
    stats: [
      { label: "Conversion Rate", value: "+43%" },
      { label: "Time on Page", value: "2.5x" },
    ],
    features: [
      "Brand documentaries",
      "Product demonstrations",
      "Customer testimonials",
      "Company culture videos",
      "AI-driven editing",
    ],
  },
  {
    id: "social-videos",
    title: "Social Media Videos",
    icon: Film,
    color: "#3B82F6",
    description:
      "Scroll-stopping short-form content optimized for social platforms that drives engagement and builds your community.",
    image: "/placeholder.svg?height=600&width=800",
    isVideo: false,
    stats: [
      { label: "Follower Growth", value: "3.2x" },
      { label: "Engagement Rate", value: "+128%" },
    ],
    features: [
      "TikTok content creation",
      "Instagram Reels production",
      "Trending format adaptation",
      "Viral campaign development",
      "AI-powered performance analysis",
    ],
  },
  {
    id: "social-management",
    title: "Social Media Management",
    icon: Instagram,
    color: "#F59E0B",
    description:
      "End-to-end social media management that builds your online presence, engages your audience, and drives measurable results.",
    image: "/placeholder.svg?height=600&width=800",
    isVideo: false,
    stats: [
      { label: "Audience Growth", value: "215%" },
      { label: "ROI", value: "3.7x" },
    ],
    features: [
      "Strategy development",
      "Content calendar creation",
      "Community management",
      "Performance analytics",
      "AI-driven optimization",
    ],
  },
  {
    id: "content-writing",
    title: "Content Creation",
    icon: Pencil,
    color: "#10B981",
    description:
      "Compelling, SEO-optimized content that tells your story, educates your audience, and converts visitors into customers.",
    image: "/videos/content-creation-showcase.mp4",
    isVideo: true,
    stats: [
      { label: "Organic Traffic", value: "+156%" },
      { label: "Lead Generation", value: "2.8x" },
    ],
    features: [
      "Blog articles",
      "Website copy",
      "Email campaigns",
      "Social media captions",
      "AI-enhanced SEO optimization",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: Code,
    color: "#3CDBC0",
    description: "Cutting-edge website development with AI-powered features that convert visitors into customers.",
    image: "/placeholder.svg?height=600&width=800",
    isVideo: false,
    stats: [
      { label: "Conversion Rate", value: "+67%" },
      { label: "Page Load Speed", value: "1.8x faster" },
    ],
    features: [
      "Custom design",
      "User experience optimization",
      "AI integration",
      "Performance optimization",
      "Mobile responsiveness",
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    icon: BarChart3,
    color: "#6366F1",
    description: "Comprehensive data analysis and reporting to measure performance and guide strategic decisions.",
    image: "/placeholder.svg?height=600&width=800",
    isVideo: false,
    stats: [
      { label: "Data Accuracy", value: "99.8%" },
      { label: "Decision Speed", value: "2.3x faster" },
    ],
    features: [
      "Custom dashboards",
      "Competitive analysis",
      "ROI tracking",
      "Strategic recommendations",
      "AI-powered insights",
    ],
  },
  {
    id: "ai-implementation",
    title: "AI Implementation",
    icon: Sparkles,
    color: "#8B5CF6",
    description: "Custom AI solutions that automate processes, enhance decision-making, and drive business growth.",
    image: "/placeholder.svg?height=600&width=800",
    isVideo: false,
    stats: [
      { label: "Efficiency Gain", value: "+78%" },
      { label: "Cost Reduction", value: "42%" },
    ],
    features: ["Process automation", "Predictive analytics", "AI chatbots", "Data analysis", "Custom AI solutions"],
  },
  {
    id: "growth-strategy",
    title: "Growth Strategy",
    icon: Rocket,
    color: "#F59E0B",
    description: "Comprehensive marketing strategy combining AI, content, and analytics to fuel rapid business growth.",
    image: "/placeholder.svg?height=600&width=800",
    isVideo: false,
    stats: [
      { label: "Revenue Growth", value: "+124%" },
      { label: "Market Share", value: "+18%" },
    ],
    features: [
      "Market analysis",
      "Multi-channel campaigns",
      "Conversion optimization",
      "Performance tracking",
      "Competitive positioning",
    ],
  },
]

export default function CreativeShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeService, setActiveService] = useState(showcaseItems[0].id)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    // Reset playing state when changing services
    setIsPlaying(false)
    setVideoLoaded(false)
    setVideoError(false)

    // Force loading to complete after 2 seconds even if video doesn't load
    const timer = setTimeout(() => {
      if (!videoLoaded) {
        console.log("Loading timed out, showing content anyway")
        setVideoLoaded(true)
      }
    }, 2000)

    // Auto-play video if the active item is a video
    if (activeItem.isVideo && videoRef.current) {
      // Small delay to ensure the video has loaded
      const playTimer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current
            .play()
            .then(() => {
              setIsPlaying(true)
              setVideoLoaded(true)
            })
            .catch((e) => {
              console.error("Video play error:", e.message || "Unknown error")
              setVideoError(true)
              setVideoLoaded(true)
              setIsPlaying(false)
            })
        }
      }, 300)

      return () => {
        clearTimeout(timer)
        clearTimeout(playTimer)
      }
    } else {
      setVideoLoaded(true)
      return () => clearTimeout(timer)
    }
  }, [activeService])

  const activeItem = showcaseItems.find((item) => item.id === activeService) || showcaseItems[0]

  const handlePlayPause = () => {
    if (!videoRef.current || videoError) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.error("Video play error on click:", e.message || "Unknown error")
          setVideoError(true)
          setIsPlaying(false)
        })
    }
  }

  return (
    <section ref={ref} className="relative py-20 md:py-32 w-full overflow-hidden" id="creative-services">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/60 font-syncopate mb-4">
            Our Creative Services
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-syncopate font-bold mb-4 md:mb-6">
            Creative Solutions That Captivate
          </h3>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
            From stunning visuals to engaging content, our creative services are designed to make your brand stand out
            in today's digital landscape. Powered by AI, delivered with human creativity.
          </p>
        </motion.div>

        {/* Services Grid - Professional Box Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {showcaseItems.map((service, index) => (
            <motion.div
              key={service.id}
              className={`group relative overflow-hidden border border-white/10 backdrop-blur-sm transition-all duration-300 ${
                activeService === service.id ? "ring-2" : "hover:border-white/20"
              }`}
              style={{
                backgroundColor: `${service.color}05`,
                boxShadow: activeService === service.id ? `0 0 20px ${service.color}30` : "none",
                ringColor: service.color,
              }}
              onClick={() => setActiveService(service.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <service.icon size={24} style={{ color: service.color }} />
                  </div>
                  {index < 3 && (
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

                <p className="text-white/70 text-sm mb-4 line-clamp-2">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${service.color}15`, color: `${service.color}` }}
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center mt-auto pt-2">
                  <div className="text-xs text-white/60">
                    {service.stats[0].label}: <span style={{ color: service.color }}>{service.stats[0].value}</span>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center border group-hover:border-white/40 transition-colors"
                    style={{ borderColor: `${service.color}40` }}
                  >
                    <ArrowRight size={14} style={{ color: service.color }} />
                  </div>
                </div>
              </div>

              {/* Bottom highlight bar */}
              <div
                className="absolute bottom-0 left-0 h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: service.color }}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Visual showcase */}
          <motion.div
            className="relative rounded-lg overflow-hidden aspect-video"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Loading indicator */}
            {!videoLoaded && activeItem.isVideo && (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {activeItem.isVideo && !videoError ? (
                  <video
                    ref={videoRef}
                    src={activeItem.image}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                    onError={(e) => {
                      console.error("Video error in showcase:", e)
                      setVideoError(true)
                      setVideoLoaded(true)
                    }}
                  />
                ) : (
                  <div className="relative w-full h-full bg-gray-900">
                    <img
                      src={activeItem.image || "/placeholder.svg"}
                      alt={activeItem.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onLoad={() => setVideoLoaded(true)}
                      onError={(e) => {
                        console.error("Image loading error:", e)
                        setVideoLoaded(true)
                      }}
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>

                {/* Play button overlay - only show for videos */}
                {activeItem.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePlayPause}
                    >
                      {isPlaying && !videoError ? (
                        <Pause className="text-white" size={isMobile ? 18 : 24} />
                      ) : (
                        <Play className="text-white ml-1" size={isMobile ? 18 : 24} />
                      )}
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Animated border */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                boxShadow: [
                  `0 0 0 1px ${activeItem.color}30`,
                  `0 0 0 2px ${activeItem.color}50`,
                  `0 0 0 1px ${activeItem.color}30`,
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          {/* Service details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <h4
                  className="text-2xl md:text-3xl font-syncopate font-bold mb-2 md:mb-4"
                  style={{ color: activeItem.color }}
                >
                  {activeItem.title}
                </h4>
                <p className="text-base md:text-lg text-white/70 mb-4 md:mb-8">{activeItem.description}</p>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {activeItem.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-3 md:p-4 rounded-lg"
                    style={{ backgroundColor: `${activeItem.color}10`, borderLeft: `3px solid ${activeItem.color}` }}
                  >
                    <div className="text-xl md:text-2xl font-bold mb-1" style={{ color: activeItem.color }}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Features */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h5 className="text-base md:text-lg font-space mb-2 md:mb-4">Key Features</h5>
                <ul className="space-y-1 md:space-y-2">
                  {activeItem.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <div
                        className="w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center mt-0.5 mr-2 md:mr-3 flex-shrink-0"
                        style={{ backgroundColor: `${activeItem.color}20` }}
                      >
                        <div
                          className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                          style={{ backgroundColor: activeItem.color }}
                        ></div>
                      </div>
                      <span className="text-sm md:text-base text-white/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-2 md:pt-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-space text-sm transition-colors"
                  style={{
                    backgroundColor: `${activeItem.color}20`,
                    border: `1px solid ${activeItem.color}40`,
                    boxShadow: `0 0 20px ${activeItem.color}20`,
                  }}
                >
                  <span>Get Started with {activeItem.title}</span>
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
