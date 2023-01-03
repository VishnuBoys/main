import { LazyLoadImage } from "react-lazy-load-image-component"



export default function Hero() {


  return (

    <div>
    <div className="bg-student-bg-o bg-cover bg-no-repeat">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-40 sm:pt-28 sm:pb-30">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Welcome to <br/> Vishnu Boys' Hindu College
                </h1>
                <p className="mt-6 text-lg leading-8  text-zinc-700 font-medium  sm:text-center">
                Vishnu Boys' Hindu College is one of five denominational secondary schools governed by the Sanatan Dharma Maha Sabha Board of Education. As such, the day to day operation and overall organization of the school is informed by the tenets and principles of Hinduism.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                    href="/"
                    className="inline-block rounded-lg bg-amber-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-amber-600 hover:bg-amber-700 hover:ring-amber-700"
                  >
                    Meet our Staff Members!
                    <span className="text-amber-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">200</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Students
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">40</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Teachers
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">27</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Subjects Taught
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">25</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Office & Ancillary Staff
          </p>
        </div>
      </div>
    </div>
    </div>
     
    
  )
}
