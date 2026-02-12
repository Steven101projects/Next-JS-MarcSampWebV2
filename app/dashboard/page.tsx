"use client"

import MainHeader from "@/app/adminSite/MainHeader"
import Dashboard from "@/app/adminSite/components/dashboard_components/DashBoardPage"
import {useState } from "react"

export default function AdminPage() {
    const [activeView, setActiveView] = useState("dashboard")
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 text-white">
      <MainHeader setActiveView={setActiveView} />
      <Dashboard activeView={activeView} />
    </div>
  )
}
