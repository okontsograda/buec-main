"use client"
import Link from "next/link";
import React from "react";
import { BsCalendar, BsClock } from 'react-icons/bs'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useRouter } from 'next/navigation';


const EventPage = ( {params} ) => {
  const router = useRouter();

  console.log(params)
  
  // const updatedDate = new Date(eventReturn.data.attributes.updatedAt).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "2-digit" });
  // console.log(eventReturn.data.attributes.event_details)

  return (
    <>
      <div className="bg-slate-900">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <Link className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-white" href="/">
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
              Back to home
            </Link>
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                {/* {eventReturn.data.attributes.name} */}
              </h1>
              <div className="flex space-x-12 lg:space-x-24 justify-center my-12 lg:my-24">
                <div>
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full bg-blue-100 dark:bg-white">
                    <BsCalendar size={30} />
                  </div>
                  <div className="flex-shrink-0">
                    {/* <h3 className="block text-lg font-semibold text-gray-800 dark:text-white mt-4">{eventReturn.data.attributes.date}</h3> */}
                  </div>
                </div>
                <div>
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full bg-blue-100 dark:bg-white">
                    <BsClock size={30} />
                  </div>
                  <div className="flex-shrink-0">
                    {/* <h3 className="block text-lg font-semibold text-gray-800 dark:text-white mt-4">{eventReturn.data.attributes.event_time}</h3> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Blog Article --> */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className=" gap-y-8 lg:gap-y-0 lg:gap-x-12">
          {/* <!-- Content --> */}
          <div className="lg:col-span-2">
            <div className="py-8 lg:pr-8">
              <div className="space-y-5 lg:space-y-8">

                <h2 className="text-3xl font-bold lg:text-5xl dark:text-gray-600 text-center my-12 lg:my-24 lg:mb-12">Event Information:</h2>

                <div className="flex items-center gap-x-5">
                  {/* <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-500">Last updated: {updatedDate}</p> */}
                </div>

                {/* <ReactMarkdown className="markdown">{eventReturn.data.attributes.event_details}</ReactMarkdown> */}


              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Content -->    */}
    </>

  )
}

export default EventPage