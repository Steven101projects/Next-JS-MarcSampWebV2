import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import clientPromise from "@/lib/mongodb"
import { verifyAdminFromRequest } from "@/lib/authGuard"


export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/dashboard")) {
    const isAdmin = await verifyAdminFromRequest(req)

    if (!isAdmin) {
      return NextResponse.redirect(new URL("/marCrisAdmin", req.url))
    }
  }

  if (pathname.startsWith("/api/admin")) {
    const isAdmin = await verifyAdminFromRequest(req)

    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  return NextResponse.next()
}
