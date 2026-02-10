const approachSteps = [
  {
    step: "1",
    title: "Market research and analysis",
    text: "Identify your target audience and understand their needs, preferences, and behaviors."
  },
  {
    step: "2",
    title: "Product development and testing",
    text: "Build and validate digital products that solve real user problems."
  },
  {
    step: "3",
    title: "Marketing and promotion",
    text: "Develop a clear strategy to communicate value and reach the right users."
  },
  {
    step: "4",
    title: "Launch and optimization",
    text: "Launch, measure performance, and iterate based on real feedback."
  }
]

export default function AboutPage() {
  return (
    <main id="about" className="relative overflow-hidden">
<div className="">

</div>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Radial highlights */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.35),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(250,204,21,0.35),transparent_45%)]" />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-45 mix-blend-overlay pointer-events-none"
            style={{
    backgroundImage: "url('/service-texture3.png')",
    backgroundRepeat: "repeat"
  }}
     />

      {/* Content */}
      <section className="relative">
        <div className="mx-auto max-w-5xl px-4 py-14 lg:py-20">

          {/* Title glass */}
          <div className="mb-14 max-w-8xl flex flex-col items-center rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-lime-500/80 to-green-500/80 px-8 py-8 backdrop-blur-md shadow-lg shadow-lime-500/10">
            <h2 className="text-2xl font-extrabold text-white md:text-6xl">
              Our approach
            </h2>
            <p className="mt-2 text-white/90">
              This insight guides our strategy from research and planning to
              execution and continuous improvement.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

            {/* Image */}
            <div className="overflow-hidden rounded-2xl border border-white/25 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop"
                alt="Our approach"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Timeline glass */}
            <div className="rounded-2xl border border-white/25 bg-green-500 px-6 py-8 backdrop-blur-md shadow-lg shadow-green-500/10">

              <h3 className="mb-6 text-xs font-semibold uppercase tracking-wide text-white/80">
                Our process
              </h3>

              {approachSteps.map((item, index) => (
                <TimelineItem
                  key={item.step}
                  step={item.step}
                  title={item.title}
                  text={item.text}
                  isLast={index === approachSteps.length - 1}
                />
              ))}

              <a
                href="#"
                className="mt-4 inline-flex items-center rounded-full bg-gradient-to-b from-green-600 to-lime-500 px-4 py-2 text-sm font-bold text-white shadow-md transition hover:scale-105"
              >
                Schedule a call
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

type TimelineItemProps = {
  step: string
  title: string
  text: string
  isLast?: boolean
}

function TimelineItem({ step, title, text, isLast }: TimelineItemProps) {
  return (
    <div className="flex gap-x-5">
      <div className="relative">
        {!isLast && (
          <span className="absolute top-8 left-1/2 h-full w-px -translate-x-1/2 bg-white/40" />
        )}

        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/90 text-xs font-bold text-green-700">
          {step}
        </div>
      </div>

      <div className="pb-8">
        <p className="text-sm text-white/90 lg:text-base">
          <span className="font-semibold text-white">{title}:</span>{" "}
          {text}
        </p>
      </div>
    </div>
  )
}
