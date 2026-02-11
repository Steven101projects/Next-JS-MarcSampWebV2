import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
      message,
      consent,
    } = body

    if (
      !firstName ||
      !lastName ||
      !email ||
      !date ||
      !time ||
      !consent
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("marCrisWebsite")

    await db.collection("appointments").insertOne({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
      message,
      status: "pending",
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create appointment" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("marCrisWebsite")

    const appointments = await db
      .collection("appointments")
      .find()
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(appointments)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch appointments" },
      { status: 500 }
    )
  }
}
