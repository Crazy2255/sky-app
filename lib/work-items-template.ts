// Template for adding your new work items
// After uploading your images, copy this file to work-items.ts and fill in the details

export interface WorkItem {
  id: string
  title: string
  image: string
  description: string
  services?: string[]
}

// Replace with your actual work items after uploading images
export const workItems: WorkItem[] = [
  // Example format:
  // {
  //   id: "project-1",
  //   title: "Project Name",
  //   image: "/images/your-uploaded-image.jpg",
  //   description: "Description of your project",
  //   services: ["Service 1", "Service 2"]
  // },
  // Add more items as needed
]
