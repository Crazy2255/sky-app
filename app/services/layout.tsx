import type React from "react"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Skynet Services | AI-Powered Marketing Solutions",
  description:
    "Explore Skynet's comprehensive range of marketing services including AI Strategy, Content Creation, Digital Marketing, and Web Development.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
    </>
  )
}
