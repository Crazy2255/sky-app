import ServiceHero from "@/components/service-hero"
import ServiceFeature from "@/components/service-feature"
import ServiceCTA from "@/components/service-cta"

export default function DigitalMarketingPage() {
  return (
    <div className="bg-black text-white">
      <ServiceHero
        title="Digital Marketing Excellence"
        description="Drive growth, increase visibility, and connect with your target audience through our comprehensive digital marketing strategies."
        color="text-purple-400"
        bgGradient="bg-gradient-to-br from-black via-purple-950/30 to-black"
      />

      <ServiceFeature
        title="Web3 & Crypto Marketing"
        description="Navigate the evolving landscape of blockchain technology with marketing strategies specifically designed for Web3 projects and cryptocurrency ventures."
        features={[
          "Token launch and ICO/IDO marketing campaigns",
          "Community building and management",
          "Crypto influencer partnerships and outreach",
          "DeFi and NFT marketing strategies",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-purple-500"
      />

      <ServiceFeature
        title="Social Media Marketing"
        description="Build a strong social presence, engage with your community, and drive conversions through strategic social media marketing."
        features={[
          "Platform-specific strategy development",
          "Content creation and community management",
          "Paid social advertising campaigns",
          "Performance analytics and optimization",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-purple-500"
        reverse={true}
      />

      <ServiceFeature
        title="SEO & Content Marketing"
        description="Improve your visibility in search results and attract qualified traffic with our comprehensive SEO and content marketing services."
        features={[
          "Technical SEO audits and optimization",
          "Keyword research and content strategy",
          "Link building and authority development",
          "Local SEO and Google Business Profile optimization",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-purple-500"
      />

      <ServiceFeature
        title="PPC & Performance Marketing"
        description="Drive immediate results with targeted paid advertising campaigns across search engines, social media, and display networks."
        features={[
          "Google Ads and Microsoft Advertising campaigns",
          "Social media advertising (Facebook, Instagram, LinkedIn, Twitter)",
          "Retargeting and remarketing strategies",
          "Conversion rate optimization",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-purple-500"
        reverse={true}
      />

      <ServiceCTA
        title="Ready to Dominate Your Digital Presence?"
        description="Let's discuss how our digital marketing strategies can help you achieve your business objectives."
        buttonText="Contact Us"
        buttonLink="/contact"
        bgGradient="bg-gradient-to-br from-purple-950/30 via-black to-purple-950/30"
      />
    </div>
  )
}
