export interface ShowcaseItem {
  id: string
  title: string
  description: string
  image: string
  video?: string
  services: string[]
  color: string
}

// Template for adding your own showcase items
export const showcaseItemTemplate: ShowcaseItem = {
  id: "your-item-id",
  title: "Your Item Title",
  description: "A brief description of your work showcase item.",
  image: "/images/your-item-image.jpg", // Add your image path here
  video: "/videos/your-item-video.mp4", // Optional: Add your video path here
  services: ["Service 1", "Service 2", "Service 3"],
  color: "#8B5CF6", // Choose a brand color
}

// Example of how to add your showcase items
export const yourShowcaseItems: ShowcaseItem[] = [
  // Copy the template above and fill in your showcase item details
  // Add as many showcase items as you need
]
