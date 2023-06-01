import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";

async function getEvents() {
  const events = await fetch ('https://www.admin.buec.life/api/event?populate=*');
  return await events.json();
}

const EventsOverview = async () => {
  const events = await getEvents();

  return (
    <div className='max-w-screen'>
      {/* <!-- Card Blog --> */}
      <div className="px-4 py-10 sm:px-6 lg:px-24 lg:py-36 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray">Upcoming Events</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">Stay up to date with our upcoming events.</p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        { events.data.map( (event) => {
          return ( 
          <div>
            {/* <!-- Card --> */}
            <Link className="group rounded-xl overflow-hidden" href={`/events/${event.attributes.Name}`}>
              <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <img className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={`https://admin.buec.life/${event.attributes.image.data[0].attributes.url}`} alt="Kids VBS Camp" />
                <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                  New
                </span>
              </div>

              <div className="mt-7">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-600">
                  {event.attributes.Name}
                </h3>
                <p className="mt-3 text-gray-800 dark:text-gray-600">
                  <ReactMarkdown>{event.attributes.Description}</ReactMarkdown>
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1.5 text-gray dark:text-gray-600 decoration-2 group-hover:underline font-medium">
                    Find out more
                  <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </p>
              </div>
            </Link>
            {/* <!-- End Card --> */}

          </div>
          )
        })}

        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </div>
  )
}

export default EventsOverview
