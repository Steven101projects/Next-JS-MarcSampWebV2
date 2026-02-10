"use client"

import { useState } from "react"
import MainHeader from "../adminSite/MainHeader"
import LogInForm from "../adminSite/components/logIn_components/LogInForm"
import Dashboard from "../adminSite/components/dashboard_components/DashBoardPage"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      {isLoggedIn ? (
        <>
          <MainHeader />
          <Dashboard />
        </>
      ) : (
        <LogInForm onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  )
}

