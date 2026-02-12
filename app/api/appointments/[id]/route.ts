import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb"

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const body = await req.json()

    const client = await clientPromise
    const db = client.db("marCrisWebsite")

    await db.collection("appointments").updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: body.status } }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update appointment" },
      { status: 500 }
    )
  }
}
