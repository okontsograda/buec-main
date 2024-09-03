import EventsOverview from './components/UpcomingEvents'
import SermonsOverview from './components/SermonsOverview'
import LiveBanner from './components/LiveBanner'
import Map from './components/map'

export default function Home() {

  return (
    <main className="">
      <div className="max-w-[100%] flex flex-col mx-auto h-screen bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/69825/sunbeam-fog-autumn-nature-69825.jpeg')]">

        {/* <!-- ========== MAIN CONTENT ========== --> */}
        <main id="content" role="main" className='m-auto'>
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <div className='text-white text-2xl'>Welcome to</div>
            <h1 className="flex py-4 text-3xl font-bold text-white sm:text-4xl">Bethesda Ukrainian Gospel&nbsp;Church</h1>
            <p className="py-6 text-lg text-white max-w-xs m-auto">"The LORD is my light and my salvation; whom shall I fear? <br />The LORD is the stronghold of my life; of whom shall I be afraid?"</p>
            <div className="mt-5 flex justify-center items-center gap-2 flex-col lg:flex-row sm:gap-3">
              {/* <a className="lg:mt-[25%] w-[150px] inline-flex justify-center items-center gap-x-3.5 text-center bg-white shadow-sm text-sm font-medium rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition py-3 px-4" href="/contact">
                Get in Touch
              </a> */}
              {/* <a className="lg:mt-[25%] w-[150px] inline-flex justify-center items-center gap-x-3.5 text-center border-2 border-white-600 shadow-sm text-sm font-medium rounded-md text-white hover:bg-white hover:text-gray-500 focus:outline-none focus:ring-offset-gray-800 transition py-3 px-4" href="../examples.html">
                Recent Services
              </a> */}
            </div>
          </div>
        </main>
        {/* <!-- ========== END MAIN CONTENT ========== --> */}
        <div className='mt-auto'></div>
      </div>
      <div className="flex justify-center items-center pt-10 flex-col pb-10">
        <h1 className="text-3xl font-bold">Where We Are (THIS USES A 7 DAY TOKEN BECUASE THERE IS NO DOMAIN TO SET IT UP TO. IF THIS NEEDS PUBLISHING GIVE ME THE NEW DOMAIN AND ILL ADD THE TOKEN)</h1>
          <div className="w-96 h-96">
            <Map />
          </div>
        </div>
      {/* Upcoming Events Section */}
      {/* <EventsOverview /> */}

      {/* Recent Sermons Section */}
      {/* <SermonsOverview /> */}

    </main>
  )
}
