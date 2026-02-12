import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  const client = await clientPromise
  const db = client.db("marCrisWebsite")

  const existing = await db.collection("admin").findOne({
    email: "admin@email.com"
  })

  if (existing) {
    return NextResponse.json({ message: "Admin already exists" })
  }

  const hashedPassword = await bcrypt.hash("@Nicosteven101", 12)

  await db.collection("admin").insertOne({
    email: "admin@email.com",
    passwordHash: hashedPassword,
    role: "admin",
    createdAt: new Date()
  })

  return NextResponse.json({ message: "Admin created" })
}
