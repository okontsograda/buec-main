import React from 'react'

function SermonsOverview() {
  return (
    <div>

        {/* <!-- Card Blog --> */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* <!-- Title --> */}
            <div className="max-w-2xl mb-10">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-600">Customer stories</h2>
                <p className="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Preline.</p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Grid --> */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <!-- Card --> */}
                <a className="group block" href="#">
                    <div className="aspect-w-16 aspect-h-10">
                        <iframe
                            className='rounded-xl'
                            width="350" 
                            height="225" 
                            src="https://www.youtube.com/embed/u00NxQpGncs?modestbranding=1?" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    Unity’s inside sales team drives 80% of its revenue with Preline.
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    September 12, 2022
                    </p>
                </a>
                {/* <!-- End Card --> */}

                {/* <!-- Card --> */}
                <a className="group block" href="#">
                    <div className="aspect-w-16 aspect-h-10">
                        <iframe
                            className='rounded-xl'
                            width="350" 
                            height="225" 
                            src="https://www.youtube.com/embed/u00NxQpGncs?modestbranding=1?" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    Living Spaces creates a unified experience across the customer journey.
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    September 12, 2022
                    </p>
                </a>
                {/* <!-- End Card --> */}

                {/* <!-- Card --> */}
                <a className="group block" href="#">
                    <div className="aspect-w-16 aspect-h-10">
                        <iframe
                            className='rounded-xl'
                            width="350" 
                            height="225" 
                            src="https://www.youtube.com/embed/u00NxQpGncs?modestbranding=1?" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    Atlassian powers sales and support at scale with Preline.
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    September 12, 2022
                    </p>
                </a>
                {/* <!-- End Card --> */}

            </div>
            {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Card Blog --> */}

    </div>
  )
}

export default SermonsOverview