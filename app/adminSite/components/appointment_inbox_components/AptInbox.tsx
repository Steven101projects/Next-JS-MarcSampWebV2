"use client"

import { useEffect, useMemo, useState } from "react"

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

type FilterType = "all" | "pending" | "confirmed" | "cancelled"

export default function AptInbox() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [selected, setSelected] = useState<Appointment | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<FilterType>("all")

  useEffect(() => {
    fetchAppointments()
  }, [])

  async function fetchAppointments() {
    try {
      const res = await fetch("/api/appointments")
      if (!res.ok) throw new Error()

      const data = await res.json()
      setAppointments(data || [])
      if (data.length > 0) setSelected(data[0])
    } catch {
      setError("Could not load appointments.")
    } finally {
      setLoading(false)
    }
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/appointments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })

    fetchAppointments()
  }

  const filteredAppointments = useMemo(() => {
    return appointments
      .filter(a =>
        filter === "all" ? true : a.status === filter
      )
      .filter(a =>
        `${a.firstName} ${a.lastName} ${a.message}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
  }, [appointments, filter, search])

  if (loading)
    return (
      <div className="flex items-center justify-center py-20 text-white/60">
        Loading inbox...
      </div>
    )

  if (error)
    return (
      <div className="flex items-center justify-center py-20 text-red-400">
        {error}
      </div>
    )

  return (
    <div className="flex flex-col h-[75vh] bg-gradient-to-b from-gray-950 to-gray-900 rounded-3xl border border-white/10 shadow-xl overflow-hidden">

      {/* TOP TOOLBAR */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div>
          <h2 className="text-lg font-semibold">Appointment Inbox</h2>
          <p className="text-sm text-white/50">
            {appointments.length} total appointments
          </p>
        </div>

        <button
          onClick={fetchAppointments}
          className="text-sm px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          Refresh
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-1/3 border-r border-white/10 flex flex-col">

          {/* SEARCH */}
          <div className="p-4 border-b border-white/10">
            <input
              placeholder="Search appointments..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-xl bg-black/40 px-4 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-lime-500/40"
            />
          </div>

          {/* FILTER TABS */}
          <div className="flex gap-2 px-4 py-3 border-b border-white/10 text-xs">
            {(["all", "pending", "confirmed", "cancelled"] as FilterType[]).map(
              f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-full transition ${
                    filter === f
                      ? "bg-lime-500/20 text-lime-400"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {f}
                </button>
              )
            )}
          </div>

          {/* LIST */}
          <div className="flex-1 overflow-y-auto">
            {filteredAppointments.length === 0 && (
              <div className="p-6 text-sm text-white/50 text-center">
                No results found.
              </div>
            )}

            {filteredAppointments.map(apt => (
              <div
                key={apt._id}
                onClick={() => setSelected(apt)}
                className={`p-4 cursor-pointer border-b border-white/5 transition hover:bg-white/10 ${
                  selected?._id === apt._id
                    ? "bg-white/10"
                    : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">
                    {apt.firstName} {apt.lastName}
                  </span>

                  {apt.status === "pending" && (
                    <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                  )}
                </div>

                <p className="text-xs text-white/60 truncate mt-1">
                  {apt.message}
                </p>

                <p className="text-[11px] text-white/40 mt-1">
                  {apt.date}
                </p>
              </div>
            ))}
          </div>
        </div>

{/* RIGHT PANEL */}
<div className="flex-1 p-8 overflow-y-auto relative">

  {selected ? (
    <>
      {/* STATUS ACCENT BAR */}
      <div
        className={`absolute left-0 top-0 h-full w-1 ${
          selected.status === "pending"
            ? "bg-yellow-400"
            : selected.status === "confirmed"
            ? "bg-green-400"
            : "bg-red-400"
        }`}
      />

      {/* HEADER */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-3xl font-bold tracking-tight">
            Name: {selected.firstName} {selected.lastName}
          </h3>
        </div>

        <div
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide border ${
            selected.status === "pending"
              ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
              : selected.status === "confirmed"
              ? "bg-green-500/20 text-green-300 border-green-400/30"
              : "bg-red-500/20 text-red-300 border-red-400/30"
          }`}
        >
          {selected.status}
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT: MESSAGE */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl bg-black/40 border border-white/10 p-6 text-white/80 leading-relaxed text-sm shadow-inner">
            {selected.message || "No message provided."}
          </div>
{/* ACTIONS */}
{selected.status === "pending" && (
  <div className="mt-8 flex gap-4">
    <button
      onClick={() =>
        updateStatus(selected._id, "confirmed")
      }
      className="rounded-xl bg-gradient-to-b from-green-600 to-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 active:scale-95"
    >
      Confirm
    </button>

    <button
      onClick={() =>
        updateStatus(selected._id, "cancelled")
      }
      className="rounded-xl bg-gradient-to-b from-red-600 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 active:scale-95"
    >
      Cancel
    </button>
  </div>
)}
        </div>

        {/* RIGHT: DETAILS SIDEBAR */}
        <div className="space-y-6">

          <div className="bg-white/5 border border-white/10 p-5">
            <p className="text-xs text-white/40 uppercase tracking-wide">
              Appointment Date
            </p>
            <p className="mt-2 text-lg font-semibold">
              {new Date(selected.date).toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

<div className="bg-white/5 border border-white/10 p-5">
  <p className="text-xs text-white/40 uppercase tracking-wide">
    Designated Time
  </p>
  <p className="mt-2 text-lg font-semibold">
    {new Date(`1970-01-01T${selected.time}`).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })}
  </p>
</div>


          <div className=" bg-white/5 border border-white/10 p-5">
            <p className="text-xs text-white/40 uppercase tracking-wide">
              Contact Email
            </p>
            <p className="mt-2 text-sm text-white/70">
              {selected.email}
            </p>
          </div>

        </div>
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center h-full text-white/40">
      Select an appointment to view details
    </div>
  )}
</div>


      </div>
    </div>
  )
}
