import UltraReliableVideo from "@/components/ultra-reliable-video"

export default function VideoFixPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Video Fix Test Page</h1>

        <div className="grid gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Ultra Reliable Video Component</h2>
            <UltraReliableVideo src="/videos/SKYNET_SOLUTIONS_01__78pct_smaller.mp4" poster="/abstract-thumbnail.png" />
            <p className="mt-4 text-gray-400">
              This component uses a simple click-to-play approach with the most basic HTML5 video implementation.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Direct HTML Video Element</h2>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <video
                src="/videos/SKYNET_SOLUTIONS_01__78pct_smaller.mp4"
                poster="/abstract-thumbnail.png"
                controls
                className="w-full h-full object-cover"
              >
                <source src="/videos/SKYNET_SOLUTIONS_01__78pct_smaller.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-gray-400">This is a direct HTML video element with no React state management.</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Troubleshooting Steps</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Check if videos are properly uploaded to the server</li>
            <li>Verify that video files have the correct MIME type (video/mp4)</li>
            <li>Ensure server is configured to serve video files correctly</li>
            <li>Try accessing video files directly via URL</li>
            <li>Test on multiple browsers and devices</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
