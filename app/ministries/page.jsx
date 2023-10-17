
const Ministries = async () => {

  return (
    <div className="text-center pt-20">
      <div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 sm:items-center gap-8">
            <div className="sm:order-2">
              <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
                <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full_caption/public/field_blog_entry_images/2020-02/shutterstock_101193772_esb_professional.jpg?itok=lpmLCez8" alt="Image Description" />
              </div>
            </div>

            <div className="sm:order-1">

              <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
                <a className="dark:text-gray-600" href="/ministries/kids">
                  Children's Ministry
                </a>
              </h2>

              <p className="my-8 mx-12 text-gray-600 text-lg">
              “Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these." - Mark 10:14
              </p>

              <div className="mt-5">
                <a className="inline-flex items-center gap-x-1.5 text-blue-500 decoration-2 hover:underline font-medium" href="#">
                  Learn more
                  <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 sm:items-center gap-8">
            <div className="sm:order-1">
              <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
                <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.pexels.com/photos/1250346/pexels-photo-1250346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image Description" />
              </div>
            </div>

            <div className="sm:order-2">

              <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
                <a className="dark:text-gray-600" href="#">
                  Youth Ministry
                </a>
              </h2>

              <p className="my-8 mx-12 text-gray-600 text-lg">
              “Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity.” - 1 Timothy 4:12
              </p>

              <div className="mt-5">
                <a className="inline-flex items-center gap-x-1.5 text-blue-500 decoration-2 hover:underline font-medium" href="#">
                  Learn more
                  <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ministries