import ImageExplorer from "@/components/image-explorer"
import Link from "next/link"

export default function ImageExplorerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-4">
        <Link href="/" className="text-blue-400 hover:underline mb-8 block">
          Back to Home
        </Link>
        <ImageExplorer />
      </div>
    </div>
  )
}
