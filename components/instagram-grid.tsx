"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"

// Define the types for our grid items
type GridItem = {
  id: string
  image: string
  title: string
  client: string
  type: "image" | "video"
  link?: string
}

// Sample data for the grid items
const gridItems: GridItem[] = [
  {
    id: "1",
    image: "/images/instagram-grid-showcase.png",
    title: "Crypto Marketing Campaign",
    client: "Various Clients",
    type: "image",
    link: "/projects/crypto-marketing",
  },
]

export function InstagramGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null)

  return null
}
