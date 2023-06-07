import React from 'react'

function SermonsOverview() {
    return (

        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-gray-600">Recent Media Archives</h2>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                
                <div class="text-center">
                    <img class="rounded-xl w-[80%] mx-auto" src="https://theblazingcenter.com/wp-content/uploads/2018/11/Bible.png" alt="Recent Media Archive" />
                    <div class="mt-2 sm:mt-4">
                        <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-600">
                            Sermon Title
                        </h3>
                        <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                            Date:
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <img class="rounded-xl w-[80%] mx-auto" src="https://theblazingcenter.com/wp-content/uploads/2018/11/Bible.png" alt="Recent Media Archive" />
                    <div class="mt-2 sm:mt-4">
                        <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-600">
                            Sermon Title
                        </h3>
                        <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                            Date:
                        </p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default SermonsOverview