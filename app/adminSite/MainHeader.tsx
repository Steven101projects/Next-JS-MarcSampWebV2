"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

type MainHeaderProps = {
  setActiveView: (view: string) => void
}

export default function MainHeader({ setActiveView }: MainHeaderProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  function handleClick(view: string) {
    setActiveView(view)
    setOpen(false)
  }

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" })
    router.push("/marCrisAdmin")
  }

  return (
    <header className="w-full bg-gradient-to-bl from-yellow-500 to-green-700">
      <div className="flex h-24 items-center justify-between px-4 sm:px-6 lg:justify-center">
        
        <Link href="/">
          <Image
            src="/logoipsum-tempLight.svg"
            alt="Site banner"
            priority
            width={250}
            height={200}
            className="h-full mr-5 w-40 cursor-pointer transition-transform hover:scale-110 sm:w-48"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center lg:flex">
          <NavItem text="Dashboard" onClick={() => handleClick("dashboard")} />
          <NavItem text="Settings" onClick={() => handleClick("settings")} />
          <NavItem text="Inbox" onClick={() => handleClick("messages")} />
          
          <CTA onClick={() => handleClick("edit")} />

          {/* 🔴 Logout Button */}
         <button
  onClick={handleLogout}
  className="ml-6 px-6 py-3 text-lg font-bold text-white rounded-xl 
             bg-red-600 hover:bg-red-500 transition hover:scale-105"
>
  Logout
</button>
        </nav>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col bg-gradient-to-b from-yellow-500/60 to-green-700/60 backdrop-blur-sm lg:hidden">
          <MobileNavItem text="Dashboard" onClick={() => handleClick("dashboard")} />
          <MobileNavItem text="Settings" onClick={() => handleClick("settings")} />
          <MobileNavItem text="Inbox" onClick={() => handleClick("messages")} />

          <div className="px-10">
            <CTA full onClick={() => handleClick("edit")} />
          </div>

          {/* 🔴 Mobile Logout */}
          <div className="px-10">
            <button
              onClick={handleLogout}
              className="w-full my-5 h-14 text-xl font-bold text-white rounded-xl 
                         bg-red-600 hover:bg-red-500 transition"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

/* Desktop nav item */
function NavItem({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex h-24 items-center px-16 text-lg font-bold text-white transition hover:bg-gradient-to-b from-yellow-200/30 to-green-500/30"
    >
      {text}
    </button>
  )
}

/* Mobile nav item */
function MobileNavItem({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-4 text-lg font-bold text-white transition hover:bg-gradient-to-b from-yellow-200/30 to-green-500/30"
    >
      {text}
    </button>
  )
}

/* CTA button */
function CTA({ full = false, onClick }: { full?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-xl font-bold text-white transition 
      bg-gradient-to-b from-green-600 to-lime-500
      rounded-xl hover:border-2 border-white
      hover:scale-105
      ${full ? "h-14 w-full my-5" : "h-full px-8 py-4 m-10"}`}
    >
      Edit Contents
    </button>
  )
}
