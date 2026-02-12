"use client"

import { useEffect, useState } from "react"
import Switch from "@mui/material/Switch"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"

type Settings = {
  notifications: boolean
  maintenanceMode: boolean
  publicVisibility: boolean
}

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

function SettingRow({
  label,
  value,
  onChange,
}: {
  label: string
  value: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-white/80 text-sm font-medium">
        {label}
      </span>

      <Switch
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#84cc16",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#84cc16",
          },
          "& .MuiSwitch-track": {
            backgroundColor: "#ffffff33",
          },
        }}
      />
    </div>
  )
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    notifications: false,
    maintenanceMode: false,
    publicVisibility: true,
  })

  const [loading, setLoading] = useState(true)

  const [snackbar, setSnackbar] = useState<{
    open: boolean
    message: string
    severity: "success" | "error"
  }>({
    open: false,
    message: "",
    severity: "success",
  })

  useEffect(() => {
    fetchSettings()
  }, [])

  async function fetchSettings() {
    try {
      const res = await fetch("/api/admin/settings")
      if (!res.ok) throw new Error("Failed to load settings")

      const data = await res.json()
      setSettings(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  async function updateSetting(key: keyof Settings, value: boolean) {
    const previous = { ...settings }

    setSettings({ ...settings, [key]: value })

    try {
      const res = await fetch("/api/admin/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [key]: value }),
      })

      if (!res.ok) throw new Error("Update failed")

      setSnackbar({
        open: true,
        message: `${key} turned ${value ? "ON" : "OFF"} successfully`,
        severity: "success",
      })
    } catch (err) {
      console.error(err)
      setSettings(previous)

      setSnackbar({
        open: true,
        message: "Failed to update setting",
        severity: "error",
      })
    }
  }

  if (loading) {
    return (
      <div className="text-white/60">
        Loading settings...
      </div>
    )
  }

  return (
    <>
      <div className="space-y-8">
        <SectionTitle
          title="Settings"
          subtitle="Manage your website configuration"
        />

        <GlassCard>
          <h3 className="text-lg font-semibold mb-4">
            Site Preferences
          </h3>

          <div className="space-y-2">
            <SettingRow
              label="Enable Notifications"
              value={settings.notifications}
              onChange={(v) =>
                updateSetting("notifications", v)
              }
            />

            <SettingRow
              label="Maintenance Mode"
              value={settings.maintenanceMode}
              onChange={(v) =>
                updateSetting("maintenanceMode", v)
              }
            />

            <SettingRow
              label="Public Visibility"
              value={settings.publicVisibility}
              onChange={(v) =>
                updateSetting("publicVisibility", v)
              }
            />
          </div>
        </GlassCard>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnackbar({ ...snackbar, open: false })
        }
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() =>
            setSnackbar({ ...snackbar, open: false })
          }
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  )
}
