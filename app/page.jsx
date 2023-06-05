"use client"
import { useEffect } from 'react'
import EventsOverview from './components/EventsOverview'
import SermonsOverview from './components/SermonsOverview'
import LiveBanner from './components/LiveBanner'

export default function Home() {
  
  useEffect(() => {
    // @ts-ignore
    import('preline');
  }, []);

  return (
    <main className="">
      <div className="max-w-[100%] -mt-[69px] flex flex-col mx-auto h-screen bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/69825/sunbeam-fog-autumn-nature-69825.jpeg')]">

        {/* <!-- ========== MAIN CONTENT ========== --> */}
        <main id="content" role="main" className='m-auto'>
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
