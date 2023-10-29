import React from 'react'

function SermonsOverview() {
    return (

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-gray-600">Recent Media Archives</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                
                <div className="text-center">
                    <img className="rounded-xl w-[80%] mx-auto" src="https://theblazingcenter.com/wp-content/uploads/2018/11/Bible.png" alt="Recent Media Archive" />
                    <div className="mt-2 sm:mt-4">
                        <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-600">
                            Sermon Title
                        </h3>
                        <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                            Date:
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <img className="rounded-xl w-[80%] mx-auto" src="https://theblazingcenter.com/wp-content/uploads/2018/11/Bible.png" alt="Recent Media Archive" />
                    <div className="mt-2 sm:mt-4">
                        <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-600">
                            Sermon Title
                        </h3>
                        <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                            Date:
                        </p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default SermonsOverview