"use client"

import { useEffect, useState } from "react"
import AptInbox from "../appointment_inbox_components/AptInbox"
import SettingsPage from "../settings_components/SettingsPage"
import EditContentPage from "../editcontent_components/EditContentPage"

type DashboardProps = {
  activeView: string
}

type DashboardStats = {
  totalAppointments: number
  pendingAppointments: number
  latestAppointment: any | null
}

export default function Dashboard({ activeView }: DashboardProps) {
  return (
    <div className="min-h-[calc(100vh-6rem)] bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        {activeView === "dashboard" && <DashboardOverview />}
        {activeView === "settings" && <SettingsPage />}
        {activeView === "messages" && <AptInbox />}
        {activeView === "edit" && <EditContentPage />}
      </div>
    </div>
  )
}

/* ===============================
   Dashboard Overview
=================================*/
function DashboardOverview() {
  const [stats, setStats] = useState<DashboardStats>({
    totalAppointments: 0,
    pendingAppointments: 0,
    latestAppointment: null,
  })

  const [loading, setLoading] = useState(true)
  const [lastSeenTimestamp, setLastSeenTimestamp] = useState<string | null>(null)

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission()
    }

    fetchStats()

    const interval = setInterval(checkForUpdates, 5000)

    return () => clearInterval(interval)
  }, [])

  async function fetchStats() {
    const res = await fetch("/api/admin/dashboard")
    const data = await res.json()

    setStats(data)

    if (data.latestAppointment?.createdAt) {
      setLastSeenTimestamp(data.latestAppointment.createdAt)
    }

    setLoading(false)
  }

  async function checkForUpdates() {
    const res = await fetch("/api/admin/dashboard")
    const data = await res.json()

    if (!data.latestAppointment) return

    const latestTime = data.latestAppointment.createdAt

    // First load protection
    if (!lastSeenTimestamp) {
      setLastSeenTimestamp(latestTime)
      return
    }

    // New appointment detected
    if (latestTime !== lastSeenTimestamp) {
      setLastSeenTimestamp(latestTime)

      if (Notification.permission === "granted") {
        new Notification("New Appointment", {
          body: `${data.latestAppointment.firstName} ${data.latestAppointment.lastName} booked ${data.latestAppointment.date} at ${data.latestAppointment.time}`,
        })
      }

      setStats(data)
    }
  }

  if (loading) {
    return <div className="text-white/60">Loading dashboard...</div>
  }

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Dashboard Overview"
        subtitle="Quick summary of your admin activity"
      />

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard
          title="Total Appointments"
          value={stats.totalAppointments.toString()}
        />
        <StatCard
          title="Pending Appointments"
          value={stats.pendingAppointments.toString()}
        />
        <StatCard
          title="New Requests"
          value={stats.pendingAppointments.toString()}
        />
      </div>

      {stats.pendingAppointments > 0 ? (
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-500/10 p-6 backdrop-blur-md shadow-xl">
          <h3 className="text-xl font-semibold text-yellow-300">
            New Appointment Request
          </h3>

          {stats.latestAppointment && (
            <div className="mt-4 text-white/80">
              <p className="font-bold">
                {stats.latestAppointment.firstName}{" "}
                {stats.latestAppointment.lastName}
              </p>
              <p className="text-sm text-white/60">
                {stats.latestAppointment.date} at{" "}
                {stats.latestAppointment.time}
              </p>
            </div>
          )}
        </div>
      ) : (
        <GlassCard>
          <p className="text-white/60 text-sm">
            No new appointment requests.
          </p>
        </GlassCard>
      )}
    </div>
  )
}


/* ===============================
   Settings
=================================*/


/* ===============================
   Edit Content
=================================*/


/* ===============================
   Reusable Components
=================================*/

function SectionTitle({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div>
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="mt-2 text-white/60">{subtitle}</p>
    </div>
  )
}

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl">
      {children}
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl">
      <p className="text-sm text-white/50">{title}</p>
      <h2 className="mt-2 text-3xl font-extrabold">{value}</h2>
    </div>
  )
}
