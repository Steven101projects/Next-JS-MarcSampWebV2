import Image from "next/image"

export default function BannerPage() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/marcsamp-banner.jpg"
        alt="Site banner"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4">
          <div className="max-w-prose text-left text-white">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Understand user flow and
              <strong className="text-indigo-300"> increase </strong>
              conversions
            </h1>

            <p className="mt-4 sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
              >
                Get Started
              </a>

              <a
                href="#"
                className="rounded border border-white px-5 py-3 font-medium text-white hover:bg-white hover:text-black"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
