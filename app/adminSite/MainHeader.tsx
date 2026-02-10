"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function MainHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="absolute top-0 z-52 w-full bg-gradient-to-bl from-yellow-500/50 to-green-400/50 "
    >
      <div className="flex h-24 items-center justify-between px-4 sm:px-6 lg:justify-center">
        {/* Logo */}
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
          <NavItem text="Dashboard" />
          <NavItem text="Settings" />
          <NavItem text="Messages" />
          <CTA />
        </nav>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-60 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="flex flex-col bg-gradient-to-b from-yellow-500/60 to-green-700/60 backdrop-blur-sm lg:hidden"
        >
          <MobileNavItem text="Dashboard" />
          <MobileNavItem text="Settings" />
          <MobileNavItem text="Messages" />
          <div className="px-10">
            <CTA full />
          </div>
        </div>
      )}
    </header>
  )
}

/* Desktop item */
function NavItem({ text }: { text: string }) {
  return (
    <a
      href="/services"
      className="flex h-24 items-center px-16 text-lg font-bold text-white transition hover:bg-gradient-to-b from-yellow-200/30 to-green-500/30"
    >
      {text}
    </a>
  )
}

/* Mobile item */
function MobileNavItem({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="px-4 py-4 text-lg font-bold text-white transition  hover:bg-gradient-to-b from-yellow-200/30 to-green-500/30"
    >
      {text}
    </a>
  )
}

/* Call to action */
function CTA({ full = false }: { full?: boolean }) {
  return (
    <a
      href="/appointment"
      className={`flex items-center justify-center text-xl font-bold text-white transition 
      bg-gradient-to-b from-green-600 to-lime-500
      rounded-xl hover:border-2 border-white
      hover:scale-105
      ${full ? "h-14 w-full my-5" : "h-full px-8 py-4 m-10"}`}
    >
      Log In
    </a>
  )
}
