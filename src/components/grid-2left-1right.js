import * as React from "react"

export default function Grid2() {
  return (
    <div className="max-w-xl container mx-auto my-24 rounded-3xl bg-slate-900">
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 lg:px-8 xl:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <div className="justify-around pb-0 pt-6 sm:flex sm:flex-row md:py-6">
            <div className="sm:flex-shrink">
              <div className="flow-root">
                <div className="block rounded-2xl rounded-tl-none border border-slate-400 bg-gradient-to-r from-sky-500 to-purple-400 text-center">
                  <div class="rounded-xl-embed card-shadow my-3 rounded-t-none py-8 px-12">
                    <img
                      className="inline h-10"
                      src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png"
                      alt="Gravital Digital Logo"
                    />
                    <h2 className="mt-2 text-2xl font-black text-slate-50">
                      LEFT
                    </h2>
                    <span className="mt-2 text-xl text-slate-50">
                      I'm baby four loko tattooed paleo celiac photo booth
                      kitsch butcher. Try-hard swag shaman yuccie, tumblr
                      tumeric fashion axe vinyl trust fund green juice prism
                      skateboard mixtape. Put a bird on it blue bottle
                      knausgaard gluten-free, chartreuse keffiyeh affogato
                      health goth viral af PBR&B mlkshk yuccie cloud bread
                      raclette. Quinoa chillwave hella biodiesel kale chips
                      drinking vinegar pinterest sustainable photo booth
                      keffiyeh truffaut blog.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="justify-around pt-0 pb-6 sm:flex md:flex-row md:py-6">
            <div className="sm:flex-shrink">
              <div className="flow-root">
                <div className="block rounded-2xl rounded-tl-none border border-gray-400 bg-gradient-to-r from-sky-500 to-purple-400 text-center">
                  <div class="rounded-xl-embed card-shadow my-3 rounded-t-none py-8 px-12">
                    <img
                      className="inline h-10"
                      src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png"
                      alt="Gravital Digital Logo"
                    />
                    <h2 className="mt-2 text-2xl font-black text-slate-50">
                      RIGHT
                    </h2>
                    <span className="mt-2 text-xl text-slate-50">
                      I'm baby four loko tattooed paleo celiac photo booth
                      kitsch butcher. Try-hard swag shaman yuccie, tumblr
                      tumeric fashion axe vinyl trust fund green juice prism
                      skateboard mixtape. Put a bird on it blue bottle
                      knausgaard gluten-free, chartreuse keffiyeh affogato
                      health goth viral af PBR&B mlkshk yuccie cloud bread
                      raclette. Quinoa chillwave hella biodiesel kale chips
                      drinking vinegar pinterest sustainable photo booth
                      keffiyeh truffaut blog.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
