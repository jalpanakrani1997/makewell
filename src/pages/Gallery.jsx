import React from 'react'

export default function Gallery() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-[#2E3192] mb-4 text-center">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Replace with real images */}
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="bg-gray-200 h-40 rounded-lg shadow flex items-center justify-center text-2xl text-gray-400">
            Image {i}
          </div>
        ))}
      </div>
    </div>
  )
} 