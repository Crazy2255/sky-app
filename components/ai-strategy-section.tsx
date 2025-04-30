"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AiStrategySection() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
              <h2 className="text-4xl font-bold text-purple-400">AI Strategy</h2>
            </div>

            <p className="text-lg mb-10 text-gray-300">
              Our AI Strategy services help businesses leverage artificial intelligence to gain competitive advantages,
              streamline operations, and create innovative customer experiences.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-purple-400 h-6 w-6" />
                <span className="text-lg">AI Readiness Assessment</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-purple-400 h-6 w-6" />
                <span className="text-lg">Custom AI Implementation Roadmap</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-purple-400 h-6 w-6" />
                <span className="text-lg">AI Integration with Existing Systems</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-purple-400 h-6 w-6" />
                <span className="text-lg">AI-Powered Business Process Optimization</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-purple-400 h-6 w-6" />
                <span className="text-lg">AI Ethics and Governance Framework</span>
              </div>
            </div>

            <Link
              href="/services/ai-strategy"
              className="mt-10 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          {/* Right side blueprint */}
          <div className="lg:w-1/2">
            <div className="bg-purple-900/50 rounded-3xl p-8 border border-purple-500/20 relative overflow-hidden">
              {/* Background circles */}
              <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-purple-400/10"></div>
              <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-blue-400/10"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">AI Strategy Blueprint</h3>
                <p className="text-gray-400 mb-8">Implementation roadmap for enterprise AI adoption</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-purple-800/50 rounded-xl p-4">
                    <p className="text-sm text-gray-300">Data Analysis</p>
                    <p className="text-2xl font-bold text-purple-300">86%</p>
                  </div>

                  <div className="bg-purple-800/50 rounded-xl p-4">
                    <p className="text-sm text-gray-300">Process Automation</p>
                    <p className="text-2xl font-bold text-purple-300">92%</p>
                  </div>

                  <div className="bg-purple-800/50 rounded-xl p-4">
                    <p className="text-sm text-gray-300">ROI Increase</p>
                    <p className="text-2xl font-bold text-purple-300">215%</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  <div className="ml-auto text-sm text-gray-400">Updated 2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
