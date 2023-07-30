import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'About - Bethesda Evengelical Church',
  description: 'Bethesda Evengelical Church',
  keywords: 'church, ukrainian, evengelical, bethesda'
}


const About = async () => {

  return (
    <div className="">
      <div className="bg-gradient-to-b from-gray-600/[.12] via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-600 text-4xl sm:text-3xl md:text-4xl">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="text-3xl text-gray-600 font-bold lg:text-4xl">
              Seek Jesus - Grow in Him
            </h2>
            <p className="mt-3 text-gray-600 leading-loose">
              At Bethesda Evengelical Church, our mission extends beyond being just a place of good worship and preaching. We are dedicated to growing through our spiritual journey to discover and nurture our identity in Christ, fostering personal transformation and a sense of purpose. We strive to create a welcoming environment, offering diverse opportunities for spiritual growth and development to everyone.
              <br/><br/>

              We emphasize serving others within our church community and beyond, encouraging participation in outreach programs and volunteer opportunities reflecting Christ’s love and compassion. Ultimately, our mission is to inspire everyone to discover their identity in Christ through inclusive worship, transformational teachings, a supportive community that becomes like family, and service-oriented action, accompanying each person on their journey towards a deeper relationship with Jesus Christ.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600">
              Contact someone to learn more
              <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
              </svg>
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            <div className="flex">
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-600">
                  Growth in Jesus
                </h3>
                <p className="mt-1 text-gray-60 leading-loose">
                  "I am the vine, you are the branches; he who abides in Me and I in him, he bears much fruit, for apart from Me you can do nothing."
                  <br/><br/>
                  John 15:5
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-600">
                  Growth in Community
                </h3>
                <p className="mt-1 text-gray-600">
                  "For just as each of us has one body with many members, and these members do not all have the same function, so in Christ we, though many, form one body, and each member belongs to all the others."
                  <br/><br/>
                  Romans 12:4-5
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About