




export default function AboutPage() {
  return (
    <main>
      {/* APPROACH SECTION */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-10 xl:px-0 lg:pt-20 lg:pb-20">
          {/* Title */}
          <div className="mb-10 max-w-3xl lg:mb-14">
            <h2 className="text-2xl font-semibold text-foreground md:text-4xl md:leading-tight">
              Our approach
            </h2>
            <p className="mt-1 text-muted-foreground-1">
              This insight guides our strategy from research and planning to
              execution and continuous improvement.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Image */}
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop"
                alt="Our approach"
                className="w-full rounded-xl object-cover"
              />
            </div>

            {/* Timeline */}
            <div>
              <div className="mb-4">
                <h3 className="text-xs font-medium uppercase text-primary">
                  Steps
                </h3>
              </div>

              <TimelineItem
                step="1"
                title="Market research and analysis"
                text="Identify your target audience and understand their needs, preferences, and behaviors."
              />

              <TimelineItem
                step="2"
                title="Product development and testing"
                text="Build and validate digital products that solve real user problems."
              />

              <TimelineItem
                step="3"
                title="Marketing and promotion"
                text="Develop a clear strategy to communicate value and reach the right users."
              />

              <TimelineItem
                step="4"
                title="Launch and optimization"
                text="Launch, measure performance, and iterate based on real feedback."
                isLast
              />

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-x-2 rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
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
    <div className="flex gap-x-5 ms-1">
      <div className="relative">
        {!isLast && (
          <span className="absolute top-8 bottom-0 start-4 border-s border-line-2" />
        )}
        <div className="relative z-10 flex size-8 items-center justify-center">
          <span className="flex size-8 items-center justify-center rounded-full border border-line-2 text-xs font-semibold text-primary">
            {step}
          </span>
        </div>
      </div>

      <div className="grow pb-8 pt-0.5 sm:pb-12">
        <p className="text-sm text-muted-foreground-1 lg:text-base">
          <span className="text-foreground">{title}:</span> {text}
        </p>
      </div>
    </div>
  )
}
