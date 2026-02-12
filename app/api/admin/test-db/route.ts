import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  const client = await clientPromise
  const db = client.db()

  const collections = await db.listCollections().toArray()

  return NextResponse.json({
    message: "Connected successfully",
    collections
  })
}
