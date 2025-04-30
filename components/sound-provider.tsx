"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type SoundType = "click" | "hover" | "whoosh" | "type"

interface SoundContextType {
  playSound: (type: SoundType) => void
  isMuted: boolean
  toggleMute: () => void
}

const SoundContext = createContext<SoundContextType>({
  playSound: () => {},
  isMuted: false,
  toggleMute: () => {},
})

export default function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(true)
  const [sounds, setSounds] = useState<Record<SoundType, HTMLAudioElement | null>>({
    click: null,
    hover: null,
    whoosh: null,
    type: null,
  })

  useEffect(() => {
    // Initialize audio elements
    const clickSound = new Audio("/placeholder.svg?height=10&width=10")
    clickSound.volume = 0.2

    const hoverSound = new Audio("/placeholder.svg?height=10&width=10")
    hoverSound.volume = 0.1

    const whooshSound = new Audio("/placeholder.svg?height=10&width=10")
    whooshSound.volume = 0.3

    const typeSound = new Audio("/placeholder.svg?height=10&width=10")
    typeSound.volume = 0.05

    setSounds({
      click: clickSound,
      hover: hoverSound,
      whoosh: whooshSound,
      type: typeSound,
    })

    return () => {
      // Cleanup
      Object.values(sounds).forEach((sound) => {
        if (sound) {
          sound.pause()
          sound.currentTime = 0
        }
      })
    }
  }, [])

  const playSound = (type: SoundType) => {
    if (isMuted || !sounds[type]) return

    // For type sound, we need to clone it to allow rapid succession
    if (type === "type") {
      const clonedSound = sounds.type.cloneNode() as HTMLAudioElement
      clonedSound.volume = 0.05
      clonedSound.play()
      return
    }

    // For other sounds, just play them
    const sound = sounds[type]
    if (sound) {
      sound.currentTime = 0
      sound.play()
    }
  }

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return <SoundContext.Provider value={{ playSound, isMuted, toggleMute }}>{children}</SoundContext.Provider>
}

export function useSound() {
  return useContext(SoundContext)
}
