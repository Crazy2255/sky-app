import ServiceHero from "@/components/service-hero"
import ServiceFeature from "@/components/service-feature"
import ServiceCTA from "@/components/service-cta"

export default function AIStrategyPage() {
  return (
    <div className="bg-black text-white">
      <ServiceHero
        title="AI Strategy & Implementation"
        description="Harness the power of artificial intelligence to transform your business operations, customer experiences, and decision-making processes."
        color="text-cyan-400"
        bgGradient="bg-gradient-to-br from-black via-cyan-950/30 to-black"
      />

      <ServiceFeature
        title="AI Business Transformation"
        description="We help businesses identify opportunities for AI integration and develop comprehensive strategies to implement AI solutions that drive growth and efficiency."
        features={[
          "AI readiness assessment and roadmap development",
          "Custom AI solution architecture and planning",
          "Integration with existing business systems and processes",
          "ROI analysis and performance metrics establishment",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-cyan-500"
      />

      <ServiceFeature
        title="Conversational AI & Chatbots"
        description="Enhance customer service and streamline operations with intelligent conversational interfaces that understand and respond to user needs."
        features={[
          "Natural language processing (NLP) powered chatbots",
          "Multi-channel deployment (website, social media, messaging apps)",
          "Continuous learning and improvement systems",
          "Analytics and performance tracking",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-cyan-500"
        reverse={true}
      />

      <ServiceFeature
        title="Predictive Analytics"
        description="Leverage your data to forecast trends, anticipate customer behavior, and make proactive business decisions with our predictive analytics solutions."
        features={[
          "Data collection and preparation strategies",
          "Custom predictive model development",
          "Actionable insights and recommendation systems",
          "Ongoing model refinement and optimization",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-cyan-500"
      />

      <ServiceFeature
        title="AI-Powered Content Generation"
        description="Create high-quality, personalized content at scale with our AI content generation tools and strategies."
        features={[
          "AI-assisted copywriting and content creation",
          "Personalized content recommendation engines",
          "Automated content optimization for SEO",
          "Multi-format content generation (text, images, video concepts)",
        ]}
        image="/placeholder.svg?height=600&width=800"
        color="bg-cyan-500"
        reverse={true}
      />

      <ServiceCTA
        title="Ready to Transform Your Business with AI?"
        description="Let's discuss how our AI strategies and solutions can help you achieve your business goals."
        buttonText="Contact Us"
        buttonLink="/contact"
        bgGradient="bg-gradient-to-br from-cyan-950/30 via-black to-cyan-950/30"
      />
    </div>
  )
}
