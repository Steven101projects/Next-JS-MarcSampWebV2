import Image from "next/image"



export default function BookAppointment() {
  return (
    <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">

      {/* Card */}
      <div className="rounded-3xl border border-black/10 bg-white/80 p-6 backdrop-blur-md shadow-xl sm:p-10">
      

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Book an appointment
          </h1>
          
          <p className="mt-3 text-gray-600">
            Tell us a bit about yourself and what you would like to discuss
          </p>
        </div>

        <form className="space-y-12">

          {/* Personal info */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Your information
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>
          </div>

          {/* Appointment details */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Appointment details
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="date"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
              <input
                type="time"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Tell us what you would like to discuss"
              className="mt-6 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-black/20 text-green-600"
            />
            <p className="text-sm text-gray-600">
              I agree to be contacted regarding my appointment
            </p>
          </div>

          {/* Action */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-b from-green-600 to-lime-500 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Confirm appointment
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
              We will confirm your appointment by email
            </p>
          </div>

        </form>
      </div>
    </section>
  )
}
