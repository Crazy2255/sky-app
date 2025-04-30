"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Film, Monitor, Laptop, Tv, Smartphone, Gamepad, Clapperboard, Projector } from "lucide-react"

export default function VfxDetailedInfo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const applications = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Feature Films",
      description:
        "From blockbuster spectacles to indie productions, our VFX elevates storytelling through visual innovation.",
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Television",
      description: "High-quality visual effects for episodic content, bringing cinematic quality to the small screen.",
    },
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: "Commercials",
      description: "Eye-catching effects that make your brand stand out in today's competitive advertising landscape.",
    },
    {
      icon: <Gamepad className="w-8 h-8" />,
      title: "Game Cinematics",
      description: "Immersive game trailers and cutscenes that captivate players and showcase gameplay.",
    },
    {
      icon: <Projector className="w-8 h-8" />,
      title: "Virtual Production",
      description: "Cutting-edge LED wall technology for real-time visual effects during filming.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Content",
      description: "Optimized visual effects for mobile platforms, ensuring quality across all devices.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Content",
      description: "Engaging visual effects for websites, online marketing, and social media campaigns.",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Corporate Videos",
      description: "Professional visual enhancements for corporate communications and presentations.",
    },
  ]

  return (
    <div ref={ref} className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* VFX & CGI Overview */}
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn} className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-syncopate">VFX & CGI EXPERTISE</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">The Art of Visual Effects</h3>
              <p className="text-lg text-white/80 mb-6">
                Visual Effects (VFX) is the process of creating or manipulating imagery outside the context of a live
                action shot. Our team combines artistry with technical expertise to create seamless visual experiences
                that enhance storytelling and bring impossible concepts to life.
              </p>
              <p className="text-lg text-white/80">
                From subtle enhancements like clean-up work and set extensions to complex sequences featuring
                fantastical creatures and explosive action, our VFX capabilities span the entire spectrum of visual
                manipulation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Computer-Generated Imagery</h3>
              <p className="text-lg text-white/80 mb-6">
                Computer-Generated Imagery (CGI) allows us to create fully digital environments, characters, and objects
                that would be impossible or impractical to film in real life. Our CGI artists use advanced 3D modeling,
                texturing, lighting, and animation techniques to create photorealistic or stylized elements.
              </p>
              <p className="text-lg text-white/80">
                Whether it's creating a digital double of an actor, building an entire fantasy world, or visualizing
                complex scientific concepts, our CGI capabilities bring imagination to reality with precision and
                creativity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technical Capabilities */}
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn} className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Technical Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3 text-blue-400">Compositing</h4>
              <p className="text-white/80">
                Our compositing artists blend multiple visual elements from different sources into a single, seamless
                image. Using industry-standard tools like Nuke and After Effects, we ensure perfect integration of
                live-action footage with digital elements.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3 text-purple-400">3D Modeling & Animation</h4>
              <p className="text-white/80">
                From character design to environmental modeling, our 3D artists create detailed digital assets and bring
                them to life through animation. We utilize Maya, Blender, and ZBrush to craft everything from subtle
                movements to complex character performances.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3 text-blue-400">Simulation</h4>
              <p className="text-white/80">
                Our simulation experts create realistic physics-based effects like fluid dynamics, cloth, destruction,
                and particle systems. Using Houdini and other specialized software, we generate natural phenomena that
                behave authentically within your visual world.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3 text-purple-400">Lighting & Rendering</h4>
              <p className="text-white/80">
                Our lighting artists create mood, atmosphere, and realism through sophisticated lighting setups.
                Combined with advanced rendering techniques using Arnold, Redshift, and V-Ray, we achieve photorealistic
                results that seamlessly integrate with live-action footage.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3 text-blue-400">Motion Capture</h4>
              <p className="text-white/80">
                We utilize cutting-edge motion capture technology to translate human performance into digital
                characters. Our pipeline supports both full-body and facial capture, ensuring natural movement and
                emotional expression in CG characters.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3 text-purple-400">Real-time VFX</h4>
              <p className="text-white/80">
                Leveraging game engines like Unreal Engine and Unity, we create real-time visual effects for virtual
                production, interactive experiences, and pre-visualization. This technology allows for immediate
                feedback and creative iteration.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gradient-to-br from-black to-blue-950/30 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="text-blue-400 mb-4">{app.icon}</div>
                <h4 className="text-xl font-bold mb-2">{app.title}</h4>
                <p className="text-white/70">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
