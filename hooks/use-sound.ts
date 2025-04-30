"use client"

import { useContext } from "react"
import { createContext } from "react"

// This is just a stub file to avoid import errors

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

export function useSound() {
  return useContext(SoundContext)
}
