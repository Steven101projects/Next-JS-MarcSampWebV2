import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  const client = await clientPromise
  const db = client.db("marCrisWebsite")

  const total = await db.collection("appointments").countDocuments()

  const pending = await db
    .collection("appointments")
    .countDocuments({ status: "pending" })

  const latest = await db
    .collection("appointments")
    .find()
    .sort({ createdAt: -1 })
    .limit(1)
    .toArray()

  return NextResponse.json({
    totalAppointments: total,
    pendingAppointments: pending,
    latestAppointment: latest[0] || null,
  })
}
