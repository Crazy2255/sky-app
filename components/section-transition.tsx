interface SectionTransitionProps {
  position: "top" | "bottom"
  height?: number
  className?: string
}

export default function SectionTransition({ position, height = 120, className = "" }: SectionTransitionProps) {
  return (
    <div
      className={`absolute ${position}-0 left-0 right-0 z-10 ${className}`}
      style={{
        height: `${height}px`,
        background: `linear-gradient(to ${position === "top" ? "bottom" : "top"}, hsl(var(--background)) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)`,
        pointerEvents: "none",
      }}
    />
  )
}
