import type React from "react"
import "./globals.css"
import "./output.css"
import { Inter, Space_Grotesk, Syncopate, Heebo } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import SoundProvider from "@/components/sound-provider"
import { Cursor } from "@/components/cursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const syncopate = Syncopate({
  subsets: ["latin"],
  variable: "--font-syncopate",
  weight: ["400", "700"],
  display: "swap",
})

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-heebo",
  display: "swap",
})

export const metadata = {
  title: "Skynet | AI Marketing Agency",
  description:
    "We forge success with AI alchemy. Marketing mastery meets artificial intelligence—your future starts here.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syncopate.variable} ${heebo.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SoundProvider>
            {children}
            <Cursor />
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
