import React from 'react'
import Link from 'next/link'

function UrlCard({ url, shorturl }) {
  return (
    <div className="group m-auto mb-4 flex w-[90%] max-w-4xl items-center justify-between gap-6 rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-all hover:border-blue-400 hover:shadow-md md:w-[70%]">
      
      {/* Original URL Section */}
      <div className="flex-1 overflow-hidden">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Original Link</p>
        <p className="truncate text-gray-600">
          {url}
        </p>
      </div>

      {/* Short URL Section */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Shortened</p>
          <Link 
            href={shorturl} 
            className="text-lg font-bold text-blue-600 transition-colors hover:text-blue-800"
          >
            {`${process.env.NEXT_PUBLIC_APP_URL}/${shorturl}`}
          </Link>
        </div>
        
        {/* Simple visual indicator/button */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
          <img src="/goto.svg" className='h-5 w-5'/>
        </div>
      </div>
    </div>
  )
}

export default UrlCard