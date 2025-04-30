"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Play, ChevronRight, Filter, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InstagramGrid } from "@/components/instagram-grid"
import { InstagramServiceShowcase } from "@/components/instagram-service-showcase"
import BasicVideo from "@/components/basic-video"

// Categories array - expanded with more specific categories
const categories = [
  "All",
  "Visual Effects",
  "3D Animation",
  "Motion Graphics",
  "UI/UX",
  "Branding",
  "Web Development",
  "Social Media",
  "Video Production",
]

// Industry categories array
const industries = [
  "All Industries",
  "Entertainment",
  "Finance",
  "Technology",
  "Luxury",
  "Food & Beverage",
  "Gaming",
  "Healthcare",
  "Education",
]

// Field categories array with expanded and anonymized project data
const fieldCategories = [
  {
    id: "visual-effects",
    title: "Visual Effects",
    category: "Visual Effects",
    tags: ["VFX", "Compositing", "CGI", "Post-Production"],
    featured: true,
    images: [
      "/videos/skynet video 01__85pct_smaller.mp4",
      "/videos/skynet video 02__76pct_smaller.mp4",
      "/videos/skynet 03__86pct_smaller.mp4",
      "/videos/skynet 04__82pct_smaller.mp4",
    ],
    fallbackImages: [
      "/videos/skynet video 01.mp4",
      "/videos/skynet video 02.mp4",
      "/videos/videoplayback (9).mp4",
      "/videos/videoplayback (10).mp4",
    ],
    isVideo: [true, true, true, true],
    color: "#7C4DFF",
    description: "Cutting-edge visual effects for film, television, and digital media.",
    expertise: [
      "3D modeling and animation",
      "Motion graphics",
      "Visual effects",
      "Compositing",
      "Particle systems",
      "Environment creation",
    ],
    stats: [
      { label: "Projects Completed", value: "120+" },
      { label: "Award Nominations", value: "15" },
      { label: "Client Satisfaction", value: "98%" },
    ],
    industries: ["Entertainment", "Gaming", "Technology"],
    testimonial: {
      quote:
        "The visual effects delivered exceeded our expectations and helped our project stand out in a competitive market.",
      role: "Creative Director, Entertainment Industry",
    },
  },
  {
    id: "3d-animation",
    title: "3D Animation",
    category: "3D Animation",
    tags: ["Character Animation", "Environment Design", "Rigging", "Texturing"],
    featured: true,
    images: [
      "/videos/0420__89pct_smaller.mp4", // Using the new video file
      "/videos/vfx-showcase-2.mp4",
      "/videos/vfx-showcase-1.mp4",
      "/videos/vfx-showcase-4.mp4",
    ],
    isVideo: [true, true, true, true],
    color: "#2196F3",
    description: "Immersive 3D animations that bring concepts and characters to life.",
    expertise: [
      "Character design and rigging",
      "Environment modeling",
      "Texturing and lighting",
      "Physics simulations",
      "Procedural animation",
    ],
    stats: [
      { label: "Characters Created", value: "200+" },
      { label: "Environments Built", value: "85" },
      { label: "Animation Minutes", value: "450+" },
    ],
    industries: ["Entertainment", "Gaming", "Education"],
    testimonial: {
      quote:
        "The 3D animations created for our project were stunning and delivered on time despite our tight deadline.",
      role: "Production Manager, Gaming Industry",
    },
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    category: "Motion Graphics",
    tags: ["2D Animation", "Kinetic Typography", "Logo Animation", "Explainer Videos"],
    featured: false,
    images: ["/videos/skynet-video-09.mp4", "/videos/content-creation-showcase.mp4", "/videos/business-loop.mp4"],
    isVideo: [true, true, true],
    color: "#FF4081",
    description: "Dynamic motion graphics that communicate complex ideas with visual clarity.",
    expertise: [
      "Kinetic typography",
      "Logo animation",
      "Infographic animation",
      "UI motion design",
      "Explainer videos",
    ],
    stats: [
      { label: "Motion Projects", value: "300+" },
      { label: "Brand Identities", value: "75" },
      { label: "Explainer Videos", value: "120" },
    ],
    industries: ["Technology", "Finance", "Healthcare", "Education"],
    testimonial: {
      quote:
        "The motion graphics team translated our complex data into visually compelling animations that our audience could easily understand.",
      role: "Marketing Director, Technology Sector",
    },
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    category: "UI/UX",
    tags: ["User Interface", "User Experience", "Wireframing", "Prototyping"],
    featured: false,
    images: ["/images/modern-ai-interface.png", "/images/ghostdrive-client-computing.png"],
    isVideo: [false, false],
    color: "#00BCD4",
    description: "Intuitive and engaging user interfaces that enhance digital experiences.",
    expertise: [
      "User research",
      "Wireframing",
      "Prototyping",
      "Interaction design",
      "Usability testing",
      "Design systems",
    ],
    stats: [
      { label: "Interfaces Designed", value: "150+" },
      { label: "User Tests", value: "500+" },
      { label: "Conversion Increase", value: "35%" },
    ],
    industries: ["Technology", "Finance", "Healthcare", "E-commerce"],
    testimonial: {
      quote:
        "The UI/UX redesign resulted in a 40% increase in user engagement and significantly reduced our bounce rate.",
      role: "Product Manager, SaaS Company",
    },
  },
  {
    id: "branding",
    title: "Branding & Identity",
    category: "Branding",
    tags: ["Logo Design", "Brand Strategy", "Visual Identity", "Style Guides"],
    featured: false,
    images: ["/images/collaborative-branding-session.png", "/images/luxury-car-rental.png"],
    isVideo: [false, false],
    color: "#8BC34A",
    description: "Distinctive brand identities that resonate with target audiences and stand out in the market.",
    expertise: [
      "Brand strategy",
      "Logo design",
      "Visual identity systems",
      "Brand guidelines",
      "Brand messaging",
      "Brand applications",
    ],
    stats: [
      { label: "Brands Created", value: "90+" },
      { label: "Rebranding Projects", value: "45" },
      { label: "Brand Recognition", value: "+65%" },
    ],
    industries: ["Luxury", "Food & Beverage", "Technology", "Finance"],
    testimonial: {
      quote:
        "The branding work completely transformed how our customers perceive us, positioning us as a premium option in our market.",
      role: "CEO, Luxury Goods Company",
    },
  },
  {
    id: "web-development",
    title: "Web Development",
    category: "Web Development",
    tags: ["Frontend", "Backend", "Full Stack", "E-commerce"],
    featured: false,
    images: ["/images/ghostdrive-grid.jpeg", "/images/superfuture-grid.jpeg"],
    isVideo: [false, false],
    color: "#FFC107",
    description: "High-performance websites and web applications built with cutting-edge technologies.",
    expertise: [
      "Frontend development",
      "Backend systems",
      "E-commerce platforms",
      "Content management",
      "API integration",
      "Performance optimization",
    ],
    stats: [
      { label: "Websites Launched", value: "200+" },
      { label: "Page Load Speed", value: "-65%" },
      { label: "Conversion Rate", value: "+45%" },
    ],
    industries: ["Technology", "E-commerce", "Finance", "Healthcare"],
    testimonial: {
      quote:
        "The web development team delivered a site that not only looks great but performs exceptionally well, resulting in higher conversion rates.",
      role: "Digital Director, Retail Company",
    },
  },
  {
    id: "social-media",
    title: "Social Media Content",
    category: "Social Media",
    tags: ["Content Creation", "Campaign Management", "Video Shorts", "Graphics"],
    featured: false,
    images: [
      "/videos/SM_Posts__88pct_smaller.mp4", // Updated to use the new video
      "/images/marketing-copy-creation.png",
      "/images/levant-sweets-treat.png",
    ],
    isVideo: [true, false, false], // Changed back to true for the first item
    fallbackImage: "/images/marketing-copy-creation.png", // Keep fallback image for error handling
    color: "#E91E63",
    description: "Engaging social media content that builds brand awareness and drives engagement.",
    expertise: [
      "Platform-specific content",
      "Video shorts",
      "Social graphics",
      "Campaign planning",
      "Content calendars",
      "Performance analysis",
    ],
    stats: [
      { label: "Content Pieces", value: "5,000+" },
      { label: "Engagement Rate", value: "+78%" },
      { label: "Follower Growth", value: "+120%" },
    ],
    industries: ["Food & Beverage", "Fashion", "Entertainment", "Retail"],
    testimonial: {
      quote:
        "Our social media presence has completely transformed, with engagement rates tripling since we started working together.",
      role: "Social Media Manager, Consumer Brand",
    },
  },
  {
    id: "video-production",
    title: "Video Production",
    category: "Video Production",
    tags: ["Commercial", "Corporate", "Documentary", "Aerial"],
    featured: true,
    images: ["/videos/ghostdrive-showcase.mp4", "/videos/zbx-showcase.mp4"],
    isVideo: [true, true],
    color: "#9C27B0",
    description: "Professional video production from concept to final delivery for various media channels.",
    expertise: [
      "Commercial production",
      "Corporate videos",
      "Documentary filming",
      "Aerial cinematography",
      "Event coverage",
      "Post-production",
    ],
    stats: [
      { label: "Videos Produced", value: "350+" },
      { label: "Total View Count", value: "25M+" },
      { label: "Client Return Rate", value: "85%" },
    ],
    industries: ["Entertainment", "Corporate", "Non-profit", "Education"],
    testimonial: {
      quote:
        "The video production quality was exceptional, capturing our brand essence perfectly while staying within our budget.",
      role: "Marketing VP, International Corporation",
    },
  },
  {
    id: "interview-videos",
    title: "Interview Videos",
    category: "Video Production",
    tags: ["Interviews", "Corporate", "Testimonials", "Professional"],
    featured: true,
    images: [
      "/videos/interview-showcase.mp4", // Using the newly added video with a simpler name
      "/videos/0420(1)__88pct_smaller.mp4",
      "/videos/zbx-showcase.mp4",
    ],
    isVideo: [true, true, true],
    color: "#FF6D00",
    description: "Professional interview videos that capture authentic stories and testimonials.",
    expertise: [
      "Corporate interviews",
      "Client testimonials",
      "Expert spotlights",
      "Documentary-style interviews",
      "Multi-camera setups",
      "Professional lighting",
    ],
    stats: [
      { label: "Interviews Produced", value: "120+" },
      { label: "Client Satisfaction", value: "99%" },
      { label: "Average View Time", value: "+45%" },
    ],
    industries: ["Corporate", "Technology", "Finance", "Healthcare", "Education"],
    testimonial: {
      quote:
        "The interview videos produced by Skynet Vision perfectly captured our company culture and helped us connect with our audience on a deeper level.",
      role: "Communications Director, Fortune 500 Company",
    },
  },
  {
    id: "commercial-videos",
    title: "Commercial Videos",
    category: "Video Production",
    tags: ["Commercial", "Advertising", "Brand Films", "Product Showcase"],
    featured: true,
    images: ["/videos/yume-commercial.mp4", "/videos/ghostdrive-showcase.mp4", "/videos/zbx-showcase.mp4"],
    isVideo: [true, true, true],
    color: "#FF9800",
    description: "High-impact commercial videos that elevate brands and drive consumer engagement.",
    expertise: [
      "Brand storytelling",
      "Product showcases",
      "Lifestyle commercials",
      "Cinematic advertising",
      "Promotional videos",
      "Broadcast commercials",
    ],
    stats: [
      { label: "Commercials Produced", value: "85+" },
      { label: "Brand Lift", value: "+42%" },
      { label: "ROI Average", value: "3.5x" },
    ],
    industries: ["Luxury", "Fashion", "Retail", "Consumer Goods", "Lifestyle"],
    testimonial: {
      quote:
        "The commercial produced for our brand captured the essence of our product perfectly, resulting in our most successful campaign to date.",
      role: "Marketing Director, Luxury Brand",
    },
  },
]

// Define interfaces for our components
interface Category {
  id: string;
  title: string;
  description: string;
  color: string;
  images: string[];
  fallbackImages?: string[];
  isVideo?: boolean[];
  tags: string[];
  category?: string;
  expertise?: string[];
  industries?: string[];
  stats?: { label: string; value: string }[];
  galleryImages?: string[];
  featured?: boolean;
  testimonial?: {
    quote: string;
    author?: string;
    role?: string;
    position?: string;
  };
  fallbackImage?: string;
}

// Project card component with enhanced information
const ProjectCard = ({ category, setSelectedCategory }: { category: Category; setSelectedCategory: (category: Category) => void }) => {
  return (
    <div 
      onClick={() => setSelectedCategory(category)}
      className="relative w-full h-full rounded-md overflow-hidden cursor-pointer group"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setSelectedCategory(category)
        }
      }}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        {category.isVideo && category.isVideo[0] ? (
          <BasicVideo
            src={category.images[0]}
            fallbackSrc={category.fallbackImages ? category.fallbackImages[0] : undefined}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            poster="/abstract-energy-flow.png"
          />
        ) : (
          <Image
            src={category.images[0] || "/placeholder.svg"}
            alt={category.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          style={{ backgroundColor: category.color }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Play button for videos */}
        {category.isVideo && category.isVideo[0] && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
        )}

        {/* Stats badge */}
        {category.stats && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
            {category.stats[0].value} {category.stats[0].label}
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full p-6">
          <h2 className="text-2xl font-syncopate font-bold mb-2" style={{ color: category.color }}>
            {category.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {category.tags.slice(0, 3).map((tag: string, i: number) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Preview of description */}
      <p className="text-white/70 text-sm line-clamp-2 mb-2">{category.description}</p>

      {/* Industries served */}
      {category.industries && (
        <div className="flex flex-wrap gap-1">
          {category.industries.map((industry: string, i: number) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/50">
              {industry}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

// Modal for expanded project view
const ProjectModal = ({ category, onClose }: { category: Category; onClose: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)

  // Set up the animation for modal entry
  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") setActiveImageIndex((prev) => Math.min(prev + 1, (category.galleryImages?.length || 0) - 1))
      if (e.key === "ArrowLeft") setActiveImageIndex((prev) => Math.max(prev - 1, 0))
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [category, onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Modal Content */}
      <motion.div
        className="bg-gray-900 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 z-10 bg-black/30 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Featured media (top video or image) */}
        <div className="relative aspect-video w-full">
          {category.isVideo && category.isVideo[activeImageIndex] ? (
            <BasicVideo
              src={category.images[activeImageIndex]}
              fallbackSrc={category.fallbackImages ? category.fallbackImages[activeImageIndex] : undefined}
              className="w-full h-full object-cover"
              poster="/abstract-energy-flow.png"
              autoPlay={true}
              loop={true}
              muted={true}
              controls={true}
            />
          ) : (
            <Image
              src={category.images[activeImageIndex] || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-syncopate font-bold mb-4" style={{ color: category.color }}>
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.tags.map((tag: string, i: number) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            {category.stats && (
              <div className="flex flex-wrap gap-4">
                {category.stats.map((stat, index: number) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
                    <p className="text-2xl font-bold mb-1" style={{ color: category.color }}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="text-white/80 text-lg mb-8 max-w-4xl">{category.description}</p>

          {/* Industries Served */}
          {category.industries && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Industries</h3>
              <div className="flex flex-wrap gap-2">
                {category.industries.map((industry: string, i: number) => (
                  <span key={i} className="text-sm px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {category.testimonial && (
            <div className="mb-8 bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <blockquote className="text-xl italic text-white/90 mb-4">"{category.testimonial.quote}"</blockquote>
              <div>
                <p className="font-semibold">{category.testimonial.author}</p>
                <p className="text-sm text-white/70">{category.testimonial.position}</p>
              </div>
            </div>
          )}

          {/* Gallery */}
          {category.galleryImages && category.galleryImages.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {category.galleryImages.map((img, index: number) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg overflow-hidden cursor-pointer relative ${
                      activeImageIndex === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <Image src={img} alt={`Gallery ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Process section component
const ProcessSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your goals, audience, and vision through in-depth consultation.",
      color: "#7C4DFF",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our team develops a comprehensive strategy tailored to your specific needs and objectives.",
      color: "#2196F3",
    },
    {
      number: "03",
      title: "Creation",
      description: "We bring your vision to life through expert design, development, and production.",
      color: "#00BCD4",
    },
    {
      number: "04",
      title: "Refinement",
      description: "Through collaborative feedback and iteration, we perfect every detail of your project.",
      color: "#4CAF50",
    },
    {
      number: "05",
      title: "Delivery",
      description: "We deliver the final product with comprehensive documentation and support.",
      color: "#FFC107",
    },
  ]

  return (
    <div ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-syncopate font-bold mb-16 text-center">Our Creative Process</h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-white/10 hidden md:block"></div>

          <div className="space-y-24">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="text-6xl font-bold mb-4 opacity-20" style={{ color: step.color }}>
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>

                <div className="relative hidden md:block">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center z-10 relative"
                    style={{ backgroundColor: step.color }}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Featured work section
const FeaturedWorkSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Filter for featured work
  const featuredWork = fieldCategories.filter((category) => category.featured)

  return (
    <div ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-syncopate font-bold mb-4 text-center">Featured Work</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto text-center mb-16">
          Explore our most impactful projects that showcase our expertise and creative capabilities.
        </p>

        <div className="grid grid-cols-1 gap-16">
          {featuredWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"} items-center gap-12 mb-24`}
            >
              {/* Media side */}
              <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden">
                {work.isVideo && work.isVideo[0] ? (
                  <video
                    src={work.images[0]}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    key={`featured-video-${work.id}-${Date.now()}`}
                    onError={(e) => console.error(`Featured video error:`, e)}
                  />
                ) : (
                  <Image src={work.images[0] || "/placeholder.svg"} alt={work.title} fill className="object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              </div>

              {/* Content side */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold mb-4" style={{ color: work.color }}>
                  {work.title}
                </h3>
                <p className="text-white/70 mb-6">{work.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${work.color}20`, color: work.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {work.stats && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {work.stats.slice(0, 2).map((stat, i) => (
                      <div key={i} className="bg-white/5 p-4 rounded-lg">
                        <div className="text-2xl font-bold" style={{ color: work.color }}>
                          {stat.value}
                        </div>
                        <div className="text-white/60 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href={`#${work.id}`}
                  className="inline-flex items-center text-sm font-medium"
                  style={{ color: work.color }}
                >
                  <span>View Details</span>
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main ProjectsPage component
export default function ProjectsPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")
  const [selectedFieldCategory, setSelectedFieldCategory] = useState<Category | null>(null)
  const [filteredCategories, setFilteredCategories] = useState(fieldCategories)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter categories when category or industry changes
  useEffect(() => {
    let filtered = fieldCategories

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((cat) => cat.category === selectedCategory)
    }

    // Filter by industry
    if (selectedIndustry !== "All Industries") {
      filtered = filtered.filter((cat) => cat.industries && cat.industries.includes(selectedIndustry))
    }

    setFilteredCategories(filtered)
  }, [selectedCategory, selectedIndustry])

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Video background */}
        <video
          src="/videos/0404-hero-background.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:translate-x-[-5px] transition-transform" />
            <span className="font-space">Back to Home</span>
          </Link>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-syncopate font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Work
          </motion.h1>
          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our portfolio of creative projects across various industries and disciplines.
          </motion.p>
        </div>
      </div>

      {/* Instagram Grid Section */}
      <InstagramGrid />

      {/* Featured Work Section */}
      <FeaturedWorkSection />

      {/* Instagram Service Showcase */}
      <InstagramServiceShowcase />

      {/* Process Section */}
      <ProcessSection />

      {/* Filter Section */}
      <div className="py-8 border-y border-white/10 sticky top-0 z-30 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-syncopate font-bold">Project Gallery</h2>

            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Filter size={18} />
              <span>Filter</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                {selectedCategory !== "All" || selectedIndustry !== "All Industries" ? "Active" : ""}
              </span>
            </button>
          </div>

          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-6 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Category filter */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Filter by Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? "bg-white text-background"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Industry filter */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Filter by Industry</h3>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry, index) => (
                      <button
                        key={industry}
                        onClick={() => setSelectedIndustry(industry)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedIndustry === industry
                            ? "bg-white text-background"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reset filters */}
              {(selectedCategory !== "All" || selectedIndustry !== "All Industries") && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedCategory("All")
                      setSelectedIndustry("All Industries")
                    }}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Categories Grid */}
      <div ref={ref} className="py-16">
        <div className="container mx-auto px-6">
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index) => (
                <ProjectCard 
                  key={category.id} 
                  category={category} 
                  setSelectedCategory={(cat: Category) => setSelectedFieldCategory(cat)} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-white/60 text-lg mb-4">No projects match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedIndustry("All Industries")
                }}
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-black/30">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-syncopate font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Create Your Success Story?
          </motion.h2>
          <motion.p
            className="text-white/70 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our creative solutions can help your business achieve similar results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-background font-syncopate text-sm tracking-wider font-bold hover:bg-white/90 transition-colors"
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Category Modal */}
      <AnimatePresence>
        {selectedFieldCategory && (
          <ProjectModal 
            category={selectedFieldCategory} 
            onClose={() => setSelectedFieldCategory(null)} 
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  )
}
