
const serviceCards = [
  {
    title: "High performance",
    description: "Lightning quick load times optimized for every device",
    colorBg: "bg-lime-100",
    colorText: "text-lime-700",
    darkBg: "dark:bg-lime-900",
    darkText: "dark:text-lime-200",
    shadow: "shadow-lime-500/10 hover:shadow-lime-500/20",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    )
  },
  {
    title: "Enterprise security",
    description: "Security baked into every layer of the platform",
    colorBg: "bg-green-100",
    colorText: "text-green-700",
    darkBg: "dark:bg-green-900",
    darkText: "dark:text-green-200",
    shadow: "shadow-green-500/10 hover:shadow-green-500/20",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    )
  },
  {
    title: "Highly configurable",
    description: "Tailor every detail to fit your workflow and brand",
    colorBg: "bg-yellow-100",
    colorText: "text-yellow-700",
    darkBg: "dark:bg-yellow-900",
    darkText: "dark:text-yellow-200",
    shadow: "shadow-yellow-500/10 hover:shadow-yellow-500/20",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
      />
    )
  }
]

import Image from "next/image"


export default function ServicesPage() {
  return (
    <div id="services" className="relative overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500 to-lime-400 dark:from-green-950 dark:via-green-900 dark:to-lime-900" />

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

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-2">


        {/* Header */}
        <div className="mx-auto mt-3 max-w-xl text-center">
          <h2 className="text-4xl text-white font-bold sm:text-6xl">
            Get to know us
          </h2>

          <p className="mt-4 text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            tenetur nemo quam voluptas sunt impedit.
          </p>
        </div>

        {/* Cards */}
<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
  {serviceCards.map((card) => (
    <div
      key={card.title}
      className={`rounded-2xl border border-white/30 bg-white/15 p-6 backdrop-blur-md shadow-lg transition hover:-translate-y-1 dark:border-green-800 dark:bg-gray-900/70 ${card.shadow}`}
    >
      <div
        className={`inline-flex rounded-lg p-3 ${card.colorBg} ${card.colorText} ${card.darkBg} ${card.darkText}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          {card.icon}
        </svg>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white dark:text-white">
        {card.title}
      </h3>

      <p className="mt-2 text-white dark:text-gray-200">
        {card.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </div>
  )
}
