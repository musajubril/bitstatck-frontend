import React from 'react'

export default function SectionHeader({children}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                {children}
              </h1>
            </div>
  )
}
