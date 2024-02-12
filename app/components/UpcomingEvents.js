"use client"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";

import { useState, useEffect } from 'react'



const EventsOverview = () => {
  // Assuming events are fetched from somewhere or hard-coded
  const events = [
    {
      id: 1,
      name: 'First Event',
      title: 'Community Outreach Event',
      date: 'February 20, 2024',
      location: 'Church Auditorium',
      img: 'https://newevent.rs/wp-content/uploads/2021/06/new-event-fb-1.jpg'
    },
    {
      id: 2,
      name: 'New Event',
      title: 'Bible Study Group',
      date: 'February 25, 2024',
      location: 'Fellowship Hall',
      img: 'https://newevent.rs/wp-content/uploads/2021/06/new-event-fb-1.jpg'
    },
  ];


  return (

    <div className="px-4 py-10 sm:px-6 lg:px-24 lg:py-36 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-gray-600">Upcoming Events</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Stay up to date with our upcoming events.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">

        {events?.map((event) => {
          console.log(events)
          return (
            <div key={event.id}>
              <Link className="group rounded-xl overflow-hidden" href={`/events/${event.id}`}>
                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                  {event.img ? <img className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={`${event.img}`} /> : <div>No Image</div>}
                  <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                    New
                  </span>
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-600">
                    {event.name}
                  </h3>
                  <div className="mt-3 text-gray-800 dark:text-gray-600">
                    <ReactMarkdown>{event.short_description}</ReactMarkdown>
                  </div>
                  <div className="mt-5 inline-flex items-center gap-x-1.5 text-gray dark:text-gray-600 decoration-2 group-hover:underline font-medium">
                    Find out more
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </Link>

            </div>
          )
        })}
      </div>
    </div>

  )
}

export default EventsOverview
