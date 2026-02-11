"use client"

import { useEffect, useState } from "react"
import LogInForm from "../adminSite/components/logIn_components/LogInForm"
import MainHeader from "../adminSite/MainHeader"
import Dashboard from "../adminSite/components/dashboard_components/DashBoardPage"

export default function AdminPage() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [activeView, setActiveView] = useState("dashboard")

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/me", {
        credentials: "include",
      })
      const data = await res.json()
      setAuthenticated(data.authenticated)
      setLoading(false)
    }

    checkAuth()
  }, [])

  if (loading) {
    return <div className="text-white p-10">Checking session...</div>
  }

  if (!authenticated) {
    return <LogInForm />
  }

  return (
    <>
      <MainHeader setActiveView={setActiveView} />
      <Dashboard activeView={activeView} />
    </>
  )
}
