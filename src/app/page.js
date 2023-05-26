"use client"
import { useEffect } from 'react'

import EventsOverview from '../components/EventsOverview'
import SermonsOverview from '../components/SermonsOverview'

export default function Home() {

  useEffect(() => {
    import('preline')
  })

  return (
    <main className="h-full">

      <div className="max-w-[100%] flex flex-col mx-auto h-screen bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/69825/sunbeam-fog-autumn-nature-69825.jpeg')]">
        {/* <!-- ========== HEADER ========== --> */}
        <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
          <nav className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
            <div className="flex items-center justify-between">
              <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">BUEC</a>
              <div className="sm:hidden">
                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:text-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                  <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
            <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                <a className="font-medium text-white" href="#" aria-current="page">Home</a>
                <a className="font-medium text-gray-400 hover:text-gray-500" href="/ministries">Ministries</a>
                <a className="font-medium text-gray-400 hover:text-gray-500" href="/about">About</a>
                <a className="font-medium text-gray-400 hover:text-gray-500" href="#">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        {/* <!-- ========== END HEADER ========== --> */}

        {/* <!-- ========== MAIN CONTENT ========== --> */}
        <main id="content" role="main">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-2xl font-bold text-white sm:text-4xl">Bethesda Ukrainian Evengelical Church</h1>
            <p className="mt-3 text-lg text-white">"The LORD is my light and my salvation; whom shall I fear? <br />The LORD is the stronghold of my life; of whom shall I be afraid?"</p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center bg-white shadow-sm text-sm font-medium rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition py-3 px-4" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html" target="_blank">
                Get in Touch
              </a>
              <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border-2 border-white-600 shadow-sm text-sm font-medium rounded-md text-white hover:bg-white hover:text-gray-500 focus:outline-none focus:ring-offset-gray-800 transition py-3 px-4" href="../examples.html">
                Recent Services
              </a>
            </div>
          </div>
        </main>
        {/* <!-- ========== END MAIN CONTENT ========== --> */}
        <div className='mt-auto'></div>

      </div>

      {/* Upcoming Events Section */}
      <EventsOverview />

      {/* Recent Sermons Section */}
      {/* <SermonsOverview /> */}

    </main>
  )
}
