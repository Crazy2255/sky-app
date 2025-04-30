import React from 'react';

export default function VideoCheckPage() {
  const videos = [
    {
      name: "SKYNET_SOLUTIONS_01",
      path: "/videos/SKYNET_SOLUTIONS_01__78pct_smaller.mp4",
      poster: "/abstract-thumbnail.png"
    },
    {
      name: "Background Video",
      path: "/videos/background-video.mp4",
      poster: "/abstract-thumbnail.png"
    },
    {
      name: "ZBX Showcase",
      path: "/videos/zbx-showcase.mp4",
      poster: "/abstract-thumbnail.png"
    },
    {
      name: "Ghostdrive Showcase",
      path: "/videos/ghostdrive-showcase.mp4",
      poster: "/abstract-thumbnail.png"
    },
    {
      name: "VFX Showcase 1",
      path: "/videos/vfx-showcase-1.mp4",
      poster: "/abstract-thumbnail.png"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Video Check Page</h1>
        <p className="text-center mb-8">This page verifies that all videos are properly loaded and can be played.</p>

        <div className="grid gap-12">
          {videos.map((video, index) => (
            <div key={index} className="border border-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">{video.name}</h2>
              
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <video
                  src={video.path}
                  poster={video.poster}
                  controls
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-4 flex flex-col gap-2">
                <p className="text-gray-400">Path: {video.path}</p>
                <a 
                  href={video.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  Direct link to video file
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
