import React from 'react'

export default function EventsOverview() {
  return (
    <div className='max-w-screen'>
        {/* <!-- Card Blog --> */}
      <div class="px-4 py-10 sm:px-6 lg:px-24 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-gray">Upcoming Events</h2>
          <p class="mt-1 text-gray-600 dark:text-gray-400">Stay up to date with our upcoming events.</p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <a class="group rounded-xl overflow-hidden" href="#">
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Kids VBS Camp" />
              <span class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                New
              </span>
            </div>

            <div class="mt-7">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-600">
                Bible Study
              </h3>
              <p class="mt-3 text-gray-800 dark:text-gray-600">
                Bible study will be gathering this upcoming weekday.
              </p>
              <p class="mt-5 inline-flex items-center gap-x-1.5 text-gray dark:text-gray-600 decoration-2 group-hover:underline font-medium">
                Find out more
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </p>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-xl transition bg-blend-hard-light bg-[url('https://images.pexels.com/photos/296308/pexels-photo-296308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]" href="#">
            <div class="flex-auto p-4 md:p-6 backdrop-brightness-[80%] rounded-t-xl">
              <h3 class="text-xl text-white/[.9] group-hover:text-white"><span class="font-bold">Kids Camp VBS</span><br/><br/> Starting June 30, we will be hosting kids camp for our church members.</h3>
            </div>
            <div class="pt-0 p-4 md:p-6 backdrop-brightness-[80%] rounded-b-xl">
              <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                Register
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </div>
  )
}
