export default function BareVideoPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Bare-Bones Video Test</h1>

      <div className="max-w-2xl mx-auto mb-8">
        <h2 className="text-xl font-semibold mb-4">Basic Video Element:</h2>
        <video
          src="/videos/SKYNET_SOLUTIONS_01__78pct_smaller.mp4"
          controls
          muted
          autoPlay
          loop
          playsInline
          className="w-full rounded-lg"
        />
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Video with Source Element:</h2>
        <video controls muted autoPlay loop playsInline className="w-full rounded-lg">
          <source src="/videos/SKYNET_SOLUTIONS_01__78pct_smaller.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
