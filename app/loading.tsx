export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="relative">
        <div className="w-12 h-12 border-2 border-primary/30 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-r-2 border-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary text-xs font-syncopate">SKYNET</span>
        </div>
      </div>
    </div>
  )
}
