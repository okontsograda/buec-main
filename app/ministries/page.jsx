async function getMinistries() {
  const res = await fetch('https://www.admin.buec.life/api/event');
  return await res.json();
}

const Ministries = async () => {
  const ministries = await getMinistries();
  console.log();

  return (
    <>
      <h2 className="text-center mt-16">
        <div>
          <h2 class="font-bold sm:m-12 mx-6 lg:m-24 lg:mx-48 sm:text-sm md:text-3xl lg:leading-tight text-gray-500"><span class="text-4xl underline">Ministry:</span> "We are all called to do ministry and even minister, but in all kinds of different ways so that the gospel can be proclaimed, the kingdom can be built, and God can be glorified — it is the calling of God"</h2>
        </div>
        {ministries.data.map((ministry) => {
          return (
            <div>
              <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="grid sm:grid-cols-2 sm:items-center gap-8">
                  <div class="sm:order-2">
                    <div class="relative pt-[50%] sm:pt-[100%] rounded-lg">
                      <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://eadn-wc04-796033.nxedge.io/wp-content/uploads/home-banner-3-e1646713417424.jpg" alt="Image Description" />
                    </div>
                  </div>

                  <div class="sm:order-1">

                    <h2 class="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
                      <a class="dark:text-blue-500" href="#">
                        Children's Ministry
                      </a>
                    </h2>

                    <p class="my-8 mx-12 text-gray-600 text-lg">Ranging from Sunday School, to Kids Choir and Kids Camp our Children's Ministry focuses on investing our time and energy into the next generation of the church.</p>

                    <div class="mt-5">
                      <a class="inline-flex items-center gap-x-1.5 text-blue-500 decoration-2 hover:underline font-medium" href="#">
                        Learn more
                        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="grid sm:grid-cols-2 sm:items-center gap-8">
                  <div class="sm:order-1">
                    <div class="relative pt-[50%] sm:pt-[100%] rounded-lg">
                      <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://siwi.org/wp-content/uploads/2021/07/why-water_cross-cutting-issues_youth-empowerment.jpg" alt="Image Description" />
                    </div>
                  </div>

                  <div class="sm:order-2">

                    <h2 class="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
                      <a class="dark:text-blue-500" href="#">
                        Youth Ministry
                      </a>
                    </h2>

                    <p class="my-8 mx-12 text-gray-600 text-lg">Ranging from Sunday School, to Kids Choir and Kids Camp our Children's Ministry focuses on investing our time and energy into the next generation of the church.</p>

                    <div class="mt-5">
                      <a class="inline-flex items-center gap-x-1.5 text-blue-500 decoration-2 hover:underline font-medium" href="#">
                        Learn more
                        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        {/* Ministries: {ministries.data[0].attributes.Name} */}
      </h2>
    </>
  )
}

export default Ministries