


export default function Hero() {


  return (
    
    <div className="bg-student-bg-o bg-cover bg-no-repeat ">
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
    
  )
}
