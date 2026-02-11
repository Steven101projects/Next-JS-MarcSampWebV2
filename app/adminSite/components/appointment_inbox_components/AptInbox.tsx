"use client"

import { useEffect, useState } from "react"

type Appointment = {
  _id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  date: string
  time: string
  message: string
  status: string
}

export default function AptInbox() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchAppointments()
  }, [])

  async function fetchAppointments() {
    try {
      const res = await fetch("/api/appointments")

      if (!res.ok) {
        throw new Error("Failed to fetch appointments")
      }

      const data = await res.json()

      setAppointments(data || [])
    } catch (err) {
      setError("Could not load appointments.")
    } finally {
      setLoading(false)
    }
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/admin/appointments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })

    fetchAppointments()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-white/60">
        Loading appointments...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-20 text-red-400">
        {error}
      </div>
    )
  }

  if (appointments.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md text-center shadow-xl">
        <h2 className="text-xl font-semibold text-white mb-2">
          No appointments yet
        </h2>
        <p className="text-white/60">
          When someone books an appointment, it will appear here.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {appointments.map(apt => (
        <div
          key={apt._id}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl transition hover:border-white/20"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">
                {apt.firstName} {apt.lastName}
              </h3>
              <p className="text-white/60 text-sm">
                {apt.email} · {apt.phone}
              </p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                apt.status === "pending"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : apt.status === "confirmed"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {apt.status}
            </span>
          </div>

          <div className="mt-4 text-white/70">
            <p>
              <span className="font-semibold">Date:</span> {apt.date}
            </p>
            <p>
              <span className="font-semibold">Time:</span> {apt.time}
            </p>
          </div>

          {apt.message && (
            <div className="mt-4 rounded-xl bg-black/30 p-4 text-white/80">
              {apt.message}
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => updateStatus(apt._id, "confirmed")}
              className="rounded-xl bg-gradient-to-b from-green-600 to-lime-500 px-4 py-2 font-semibold text-white transition hover:scale-105"
            >
              Confirm
            </button>

            <button
              onClick={() => updateStatus(apt._id, "cancelled")}
              className="rounded-xl bg-gradient-to-b from-red-600 to-red-500 px-4 py-2 font-semibold text-white transition hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
