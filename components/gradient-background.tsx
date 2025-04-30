"use client"

export default function GradientBackground() {
  return (
    <>
      <div className="fixed inset-0 z-[-1] gradient-blur"></div>
      <div className="fixed inset-0 z-[-2] bg-background"></div>
      <div className="fixed inset-0 z-[-1] opacity-50 pointer-events-none">
        <div className="absolute w-full h-full">
          {/* Distant stars - small, numerous */}
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={`star-small-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.2,
                animationDelay: `${Math.random() * 5}s`,
                animation: `pulse ${Math.random() * 3 + 2}s infinite alternate ease-in-out`,
              }}
            />
          ))}

          {/* Medium stars with glow */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`star-medium-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 2 + "px",
                height: Math.random() * 3 + 2 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.7)`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDelay: `${Math.random() * 5}s`,
                animation: `pulse ${Math.random() * 4 + 3}s infinite alternate ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="noise-filter"></div>
    </>
  )
}
