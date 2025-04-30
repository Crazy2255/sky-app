"use client"

import { useState, useEffect } from "react"
import UltraSimpleVideo from "@/components/ultra-simple-video"

export default function VideoTestPage() {
  const [fileExists, setFileExists] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [videoInfo, setVideoInfo] = useState<string[]>([])
  const videoSrc = "/videos/SKYNET_SOLUTIONS_01__78pct_smaller.mp4"
  const posterImage = "/abstract-thumbnail.png"

  // Check if the video file exists
  useEffect(() => {
    const checkFile = async () => {
      try {
        const response = await fetch(videoSrc, { method: "HEAD" })
        setFileExists(response.ok)

        if (response.ok) {
          const info = [
            `Status: ${response.status} ${response.statusText}`,
            `Content-Type: ${response.headers.get("content-type") || "unknown"}`,
            `Content-Length: ${response.headers.get("content-length") || "unknown"} bytes`,
          ]
          setVideoInfo(info)
        }
      } catch (error) {
        console.error("Error checking file:", error)
        setFileExists(false)
        setVideoInfo([`Error: ${error instanceof Error ? error.message : String(error)}`])
      } finally {
        setIsLoading(false)
      }
    }

    checkFile()
  }, [videoSrc])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Video Test Page</h1>

      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          <p>Checking video file...</p>
        </div>
      ) : (
        <>
          <div className="mb-6 p-4 rounded bg-gray-100 dark:bg-gray-800">
            <h2 className="text-lg font-semibold mb-2">Video File Status:</h2>
            <p className={fileExists ? "text-green-600" : "text-red-600"}>
              <strong>File exists:</strong> {fileExists ? "Yes ✓" : "No ✗"}
            </p>
            <p>
              <strong>Path:</strong> {videoSrc}
            </p>

            {videoInfo.length > 0 && (
              <div className="mt-2">
                <h3 className="font-medium">File Details:</h3>
                <ul className="list-disc pl-5 mt-1">
                  {videoInfo.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Ultra Simple Video Component:</h2>
            <div className="max-w-2xl mx-auto">
              <UltraSimpleVideo
                src={videoSrc}
                poster={posterImage}
                className="w-full aspect-video object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Native HTML5 Video Element:</h2>
            <video
              src={videoSrc}
              poster={posterImage}
              className="w-full max-w-2xl mx-auto rounded-lg"
              controls
              muted
              autoPlay
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Browser Information:</h2>
            <div id="browser-info" className="text-sm">
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  document.getElementById('browser-info').innerHTML = 
                    '<p><strong>User Agent:</strong> ' + navigator.userAgent + '</p>' +
                    '<p><strong>Browser:</strong> ' + (navigator.userAgentData?.brands?.[0]?.brand || 'Unknown') + '</p>' +
                    '<p><strong>Platform:</strong> ' + navigator.platform + '</p>' +
                    '<p><strong>Video Support:</strong> ' + (document.createElement('video').canPlayType('video/mp4') ? 'Yes' : 'No') + '</p>';
                `,
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
