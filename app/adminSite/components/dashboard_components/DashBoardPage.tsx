"use client"

import { useEffect, useState } from "react"
import AptInbox from "../appointment_inbox_components/AptInbox"

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
        {activeView === "settings" && <SettingsPanel />}
        {activeView === "messages" && <AptInbox />}
        {activeView === "edit" && <EditContentPanel />}
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

  useEffect(() => {
    async function fetchStats() {
      const res = await fetch("/api/admin/dashboard")
      const data = await res.json()
      setStats(data)
      setLoading(false)
    }

    fetchStats()
  }, [])

  if (loading) {
    return <div className="text-white/60">Loading dashboard...</div>
  }

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Dashboard Overview"
        subtitle="Quick summary of your admin activity"
      />

      {/* Stats */}
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

      {/* Notification */}
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

function SettingsPanel() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="Settings"
        subtitle="Manage your website configuration"
      />

      <GlassCard>
        <h3 className="text-lg font-semibold mb-4">Site Preferences</h3>
        <div className="space-y-4">
          <SettingRow label="Enable Notifications" />
          <SettingRow label="Maintenance Mode" />
          <SettingRow label="Public Visibility" />
        </div>
      </GlassCard>
    </div>
  )
}

/* ===============================
   Edit Content
=================================*/

function EditContentPanel() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="Edit Content"
        subtitle="Update your homepage content"
      />

      <GlassCard>
        <div className="space-y-4">
          <input
            placeholder="Hero Title"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-lime-400/60 focus:ring-2 focus:ring-lime-400/20"
          />

          <textarea
            placeholder="Hero Description"
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-lime-400/60 focus:ring-2 focus:ring-lime-400/20"
          />

          <button
            className="rounded-xl bg-gradient-to-b from-lime-500 to-green-600 px-6 py-3 font-bold text-white shadow-lg shadow-lime-500/20 transition hover:scale-105"
          >
            Save Changes
          </button>
        </div>
      </GlassCard>
    </div>
  )
}

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

function SettingRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white/80">{label}</span>
      <div className="h-6 w-11 rounded-full bg-white/10"></div>
    </div>
  )
}
