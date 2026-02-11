const features = [
  {
    title: "Quisque at urna",
    description:
      "Vivamus ultricies bibendum tortor, molestie imperdiet justo cursus eu."
  },
  {
    title: "Quisque eu dui lacinia",
    description:
      "Quisque ultricies volutpat sapien nec varius."
  },
  {
    title: "Mauris dignissim",
    description:
      "Phasellus nec molestie arcu. Proin dictum lorem mollis rutrum."
  },
  {
    title: "Proin nulla eros",
    description:
      "Sed ornare ultricies gravida. Morbi egestas dolor turpis."
  },
  {
    title: "Proin dictum",
    description:
      "Lorem mollis rutrum efficitur, lectus velit pharetra elit."
  },
  {
    title: "Cras vel bibendum tellus",
    description:
      "Curabitur molestie neque ac massa pulvinar."
  },
  {
    title: "Dignissim magna",
    description:
      "Cras ac lectus erat. Curabitur condimentum luctus nisi."
  },
  {
    title: "Integer tempor",
    description:
      "Donec mattis orci eros, vitae porttitor risus pretium eget."
  }
]


import Image from "next/image"


export default function FeaturesPage() {
  return (
    <div id="features" className="relative overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0  bg-gradient-to-b from-lime-400 to-green-500 dark:from-green-950 dark:via-green-900 dark:to-lime-900" />

      {/* Radial highlights */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.35),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(250,204,21,0.35),transparent_40%)]" />


      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-90 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/service-texture3.png')",
          backgroundRepeat: "repeat"
        }}
      />

<div className="flex justify-center">
  {/* Features Section */}
        <section className="mt-10 mb-24 w-2/3 bg-green-500/60 rounded-2xl px-4 py-20 backdrop-blur dark:bg-gray-900/90 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-x5l text-center">
            <h2 className="text-6xl font-extrabold text-white dark:text-white sm:text-5xl">
              All the features you want
            </h2>

          </div>

          <dl className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 flex-shrink-0 text-yellow-400 dark:text-lime-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>

                <div className="ml-3">
                  <dt className="text-lg font-medium text-white dark:text-white">
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-white dark:text-gray-300">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

</div>
      
      </div>
  )
}
