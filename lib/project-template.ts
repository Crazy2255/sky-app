export interface Project {
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

// Template for adding your own projects
export const projectTemplate: Project = {
  id: "your-project-id",
  name: "Your Project Name",
  tagline: "Your Project Tagline",
  image: "/images/your-project-image.jpg", // Add your image path here
  detailedImage: "/videos/your-project-video.mp4", // Optional: Add your video path here
  color: "#3B82F6", // Choose a brand color
  stat: "Key achievement stat",
  services: ["Service 1", "Service 2", "Service 3"],
  description: "A brief description of your project and what you accomplished.",
  challenge: "Describe the challenges the client was facing before working with you.",
  solution: "Explain the solutions you provided to address the client's challenges.",
  results: [
    { label: "Key Metric 1", value: "Result 1", percentage: 85 },
    { label: "Key Metric 2", value: "Result 2", percentage: 90 },
    { label: "Key Metric 3", value: "Result 3", percentage: 75 },
  ],
  quote: {
    text: "A testimonial quote from the client about your work.",
    author: "Client Name",
    title: "Client Position at Company",
  },
}

// Example of how to add your projects to the clientData array
export const yourProjects: Project[] = [
  // Copy the template above and fill in your project details
  // Add as many projects as you need
]
