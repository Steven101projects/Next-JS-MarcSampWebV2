"use client"

import { useState } from "react"
import Link from "next/link"

export default function LogInForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 px-4 text-white">
      <div className="w-full max-w-md">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-white/70">
              Log in to continue
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white/80">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-lime-400/60 focus:ring-2 focus:ring-lime-400/20"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white/80">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-white outline-none placeholder:text-white/30 focus:border-lime-400/60 focus:ring-2 focus:ring-lime-400/20"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl px-3 py-1 text-xs font-bold text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-white/70">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/10"
                />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-lime-300 hover:underline"
              >
                Forgot password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-b from-lime-500 to-green-600 py-3 text-base font-extrabold text-white shadow-lg shadow-lime-500/20 transition hover:scale-[1.02]"
            >
              Log in
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          By continuing, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  )
}
