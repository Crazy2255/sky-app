import DeploymentReadyVideo from "@/components/deployment-ready-video"

export default function VideoSolutionPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Video Solution Test Page</h1>

        <div className="grid gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Solution 1: Deployment Ready Video</h2>
            <DeploymentReadyVideo
              src="/videos/SKYNET_SOLUTIONS_01__78pct_smaller.mp4"
              poster="/abstract-thumbnail.png"
              className="w-full"
            />
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Solution 2: Simple Image with Link</h2>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img src="/abstract-thumbnail.png" alt="Video thumbnail" className="w-full h-full object-cover" />
              <a
                href="/videos/SKYNET_SOLUTIONS_01__78pct_smaller.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-amber-500/80 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Solution 3: Direct HTML Video Element</h2>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <video
                src="/videos/SKYNET_SOLUTIONS_01__78pct_smaller.mp4"
                poster="/abstract-thumbnail.png"
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Deployment Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Use the DeploymentReadyVideo component for all videos</li>
            <li>Make sure all videos have poster images</li>
            <li>If videos still don't play, use Solution 2 (image with link)</li>
            <li>Test on multiple browsers and devices before final deployment</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
