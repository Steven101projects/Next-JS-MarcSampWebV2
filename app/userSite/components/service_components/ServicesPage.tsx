




export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl dark:text-white">
          Features for growth
        </h2>

        <p className="mt-4 text-lg text-pretty text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis tenetur, nemo quam
          voluptas sunt impedit dolorem asperiores aliquid doloribus fugit.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>

          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            High performance
          </h3>

          <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
            Lightning quick load times optimized for every device
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>

          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Enterprise security
          </h3>

          <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
            Enterprise grade security built into every layer
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
          </div>

          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Highly configurable
          </h3>

          <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
            Adapt every aspect to match your brand and needs
          </p>
        </div>
      </div>

      
      {/* FEATURES SECTION */}
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              All the features you want
            </h2>
            <p className="mt-4 text-lg dark:text-gray-600">
              Pellentesque viverra, leo id euismod laoreet, nunc risus molestie
              orci, vel faucibus quam justo id mauris.
            </p>
          </div>

          <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6 flex-shrink-0 dark:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <div className="ml-3">
                  <dt className="text-lg font-medium">{feature.title}</dt>
                  <dd className="mt-2 dark:text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  )
}


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