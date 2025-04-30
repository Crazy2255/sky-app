export interface ShowcaseItem {
  id: string
  title: string
  description: string
  image: string
  video?: string
  services: string[]
  color: string
}

// Updated showcase items with the new social media video
export const showcaseItems: ShowcaseItem[] = [
  {
    id: "luxury",
    title: "Luxury Car Rental",
    description: "Premium content creation for a luxury car rental service targeting high-end clientele.",
    image: "/images/luxury-car-rental.png",
    video: "/videos/SM Posts__88pct_smaller.mp4", // Added the new video here
    services: ["Branding", "Photography", "Social Media"],
    color: "#8B5CF6",
  },
  {
    id: "vfx",
    title: "VFX & Animation",
    description: "Stunning visual effects and animations for various media projects.",
    image: "/images/superfuture-grid.jpeg",
    video: "/videos/vfx-showcase-1.mp4",
    services: ["VFX", "3D Animation", "Motion Graphics"],
    color: "#7C4DFF",
  },
]
