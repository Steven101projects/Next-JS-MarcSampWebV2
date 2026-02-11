"use client"

import { useState } from "react"

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
    consent: false,
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        consent: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!formData.consent) {
      setError("You must agree before submitting.")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error("Failed to book appointment")
      }

      setSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
        consent: false,
      })
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-3xl font-bold text-green-600">
          Appointment Confirmed
        </h2>
        <p className="mt-4 text-gray-600">
          We will contact you shortly.
        </p>
      </div>
    )
  }

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-16">
      <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-xl sm:p-10">

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Book an appointment
          </h1>
          <p className="mt-3 text-gray-600">
            Tell us a bit about yourself and what you would like to discuss
          </p>
        </div>

        <form className="space-y-12" onSubmit={handleSubmit}>

          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Your information
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="input" />
              <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="input" />
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email address" className="input" />
              <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone number" className="input" />
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Appointment details
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <input name="date" type="date" value={formData.date} onChange={handleChange} className="input" />
              <input name="time" type="time" value={formData.time} onChange={handleChange} className="input" />
            </div>

            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you would like to discuss"
              className="mt-6 input"
            />
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4"
            />
            <p className="text-sm text-gray-600">
              I agree to be contacted regarding my appointment
            </p>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-b from-green-600 to-lime-500 py-4 text-lg font-bold text-white shadow-lg"
          >
            {loading ? "Submitting..." : "Confirm appointment"}
          </button>
        </form>
      </div>
    </section>
  )
}
