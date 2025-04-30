export interface Client {
  id: string
  name: string
  tagline: string
  image: string
  detailedImage?: string
  color: string
  stat: string
  services: string[]
  description: string
  challenge: string
  solution: string
  results: {
    label: string
    value: string
    percentage: number
  }[]
  quote?: {
    text: string
    author: string
    title: string
  }
}

// Empty client data - removed CGAI, ZBX, and Ghostdrive
export const clientData: Client[] = [
  {
    id: "superfuture",
    name: "SuperFuture",
    tagline: "Digital Marketing Campaign",
    image: "/images/superfuture-grid.jpeg",
    color: "#6366f1",
    stat: "45% conversion increase",
    services: ["Digital Marketing", "Content Strategy", "SEO Optimization"],
    description:
      "Developed a comprehensive digital marketing strategy for a tech startup, focusing on audience targeting and conversion optimization.",
    challenge:
      "The startup was struggling to reach their target audience despite having an innovative product. Their marketing efforts were scattered and ineffective.",
    solution:
      "We created a cohesive digital marketing strategy with targeted content, optimized their website for search engines, and implemented conversion-focused landing pages.",
    results: [
      { label: "Conversion Rate", value: "+45%", percentage: 80 },
      { label: "Organic Traffic", value: "+120%", percentage: 90 },
      { label: "Cost Per Acquisition", value: "-30%", percentage: 65 },
    ],
  },
]
