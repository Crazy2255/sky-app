import ServiceHero from "@/components/service-hero"
import ServiceFeature from "@/components/service-feature"
import ServiceCTA from "@/components/service-cta"

export default function WebDevelopmentPage() {
  return (
    <div className="bg-black text-white">
      <ServiceHero
        title="Web & App Development"
        description="Create powerful digital experiences with custom websites and applications built for performance, security, and scalability."
        color="text-green-400"
        bgGradient="bg-gradient-to-br from-black via-green-950/30 to-black"
      />

      <ServiceFeature
        title="Custom Website Development"
        description="Build a unique online presence with custom websites designed to showcase your brand, engage visitors, and drive conversions."
        features={[
          "Responsive design for all devices and screen sizes",
          "Performance optimization for fast loading speeds",
          "SEO-friendly architecture and implementation",
          "Content management system integration",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-green-500"
      />

      <ServiceFeature
        title="E-commerce Solutions"
        description="Launch and scale your online store with custom e-commerce solutions designed for seamless shopping experiences and maximum conversions."
        features={[
          "Custom e-commerce platform development",
          "Payment gateway integration and security",
          "Inventory and order management systems",
          "Customer account and loyalty program features",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-green-500"
        reverse={true}
      />

      <ServiceFeature
        title="Web3 & Blockchain Development"
        description="Embrace the future of the internet with Web3 applications, smart contracts, and blockchain integration for your business."
        features={[
          "Smart contract development and auditing",
          "DApp (Decentralized Application) development",
          "Wallet integration and cryptocurrency payment systems",
          "NFT marketplace development and integration",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-green-500"
      />

      <ServiceFeature
        title="Mobile App Development"
        description="Extend your digital presence with native and cross-platform mobile applications that deliver exceptional user experiences."
        features={[
          "iOS and Android app development",
          "Cross-platform solutions (React Native, Flutter)",
          "App Store optimization and submission",
          "Ongoing maintenance and updates",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-green-500"
        reverse={true}
      />

      <ServiceCTA
        title="Ready to Build Your Digital Future?"
        description="Let's discuss how our web and app development services can help you achieve your business goals."
        buttonText="Contact Us"
        buttonLink="/contact"
        bgGradient="bg-gradient-to-br from-green-950/30 via-black to-green-950/30"
      />
    </div>
  )
}
