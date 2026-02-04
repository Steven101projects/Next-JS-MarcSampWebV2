




export default function BookAppointment() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="rounded-xl bg-layer p-4 shadow-xs sm:p-7">
        <form>
          {/* Section */}
          <div className="grid gap-2 border-t border-layer-line py-8 first:border-transparent sm:grid-cols-12 sm:gap-4">
            <div className="sm:col-span-12">
              <h2 className="text-lg font-semibold text-foreground">
                Book an appointment
              </h2>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="full-name"
                className="mt-2.5 inline-block text-sm font-medium text-muted-foreground-1"
              >
                Full name
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  id="full-name"
                  type="text"
                  placeholder="First name"
                  className="relative -mt-px -ms-px block w-full bg-layer px-3 py-1.5 text-foreground shadow-2xs placeholder:text-muted-foreground-1 focus:z-10 focus:border-primary-focus focus:ring-primary-focus sm:mt-0 sm:rounded-s-lg sm:py-2 sm:text-sm"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="relative -mt-px -ms-px block w-full bg-layer px-3 py-1.5 text-foreground shadow-2xs placeholder:text-muted-foreground-1 focus:z-10 focus:border-primary-focus focus:ring-primary-focus sm:mt-0 sm:rounded-e-lg sm:py-2 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="mt-2.5 inline-block text-sm font-medium text-muted-foreground-1"
              >
                Email
              </label>
            </div>

            <div className="sm:col-span-9">
              <input
                id="email"
                type="email"
                className="block w-full rounded-lg bg-layer px-3 py-1.5 text-foreground shadow-2xs placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus sm:py-2 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="phone"
                className="mt-2.5 inline-block text-sm font-medium text-muted-foreground-1"
              >
                Phone
              </label>
            </div>

            <div className="sm:col-span-9">
              <input
                id="phone"
                type="text"
                className="block w-full rounded-lg bg-layer px-3 py-1.5 text-foreground shadow-2xs placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus sm:py-2 sm:text-sm"
              />
            </div>
          </div>

          {/* Appointment Details */}
          <div className="grid gap-2 border-t border-layer-line py-8 sm:grid-cols-12 sm:gap-4">
            <div className="sm:col-span-12">
              <h2 className="text-lg font-semibold text-foreground">
                Appointment details
              </h2>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="date"
                className="mt-2.5 inline-block text-sm font-medium text-muted-foreground-1"
              >
                Preferred date
              </label>
            </div>

            <div className="sm:col-span-9">
              <input
                id="date"
                type="date"
                className="block w-full rounded-lg bg-layer px-3 py-1.5 text-foreground shadow-2xs focus:border-primary-focus focus:ring-primary-focus sm:py-2 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="time"
                className="mt-2.5 inline-block text-sm font-medium text-muted-foreground-1"
              >
                Preferred time
              </label>
            </div>

            <div className="sm:col-span-9">
              <input
                id="time"
                type="time"
                className="block w-full rounded-lg bg-layer px-3 py-1.5 text-foreground shadow-2xs focus:border-primary-focus focus:ring-primary-focus sm:py-2 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="notes"
                className="mt-2.5 inline-block text-sm font-medium text-muted-foreground-1"
              >
                Notes
              </label>
            </div>

            <div className="sm:col-span-9">
              <textarea
                id="notes"
                rows={5}
                placeholder="Tell us what you'd like to discuss"
                className="block w-full rounded-lg bg-layer px-3 py-1.5 text-foreground shadow-2xs placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus sm:py-2 sm:text-sm"
              />
            </div>
          </div>

          {/* Consent */}
          <div className="border-t border-layer-line py-8">
            <div className="flex items-center">
              <input
                id="consent"
                type="checkbox"
                className="size-4 rounded-sm border-line-3 text-primary focus:ring-0"
              />
              <label
                htmlFor="consent"
                className="ms-2 text-sm text-muted-foreground-1"
              >
                I agree to be contacted regarding my appointment.
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover focus:bg-primary-focus"
          >
            Book appointment
          </button>
        </form>
      </div>
    </section>
  )
}
