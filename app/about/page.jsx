import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'About - Bethesda Evengelical Church',
  description: 'Bethesda Evengelical Church',
  keywords: 'church, ukrainian, evengelical, bethesda'
}


const Ministries = async () => {

  return (
    <div className="bg-slate-900">
      <div className="bg-gradient-to-b from-gray-600/[.12] via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-3xl md:text-4xl">
              About Us
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ministries