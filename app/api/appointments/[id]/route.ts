import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb"

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json()

  const client = await clientPromise
  const db = client.db("clientWebsite")

  await db.collection("appointments").updateOne(
    { _id: new ObjectId(params.id) },
    { $set: { status: body.status } }
  )

  return NextResponse.json({ success: true })
}
