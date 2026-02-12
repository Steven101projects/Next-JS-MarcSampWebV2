import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { setMaintenanceMode } from "@/lib/maintenanceState"

const DB_NAME = "marCrisWebsite"
const COLLECTION = "settings"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db(DB_NAME)

    const collection = db.collection(COLLECTION)

    let settings = await collection.findOne({})

    if (!settings) {
      const defaultSettings = {
        notifications: false,
        maintenanceMode: false,
        publicVisibility: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const result = await collection.insertOne(defaultSettings)

      settings = {
        _id: result.insertedId,
        ...defaultSettings,
      }
    }

    return NextResponse.json({
      notifications: settings.notifications ?? false,
      maintenanceMode: settings.maintenanceMode ?? false,
      publicVisibility: settings.publicVisibility ?? true,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    )
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json()

    const client = await clientPromise
    const db = client.db(DB_NAME)

    const collection = db.collection(COLLECTION)

    // Get current settings first
    const existing = await collection.findOne({})

    const updatedSettings = {
      notifications: body.notifications ?? existing?.notifications ?? false,
      maintenanceMode:
        body.maintenanceMode ?? existing?.maintenanceMode ?? false,
      publicVisibility:
        body.publicVisibility ?? existing?.publicVisibility ?? true,
      updatedAt: new Date(),
    }

    await collection.updateOne(
      {},
      { $set: updatedSettings },
      { upsert: true }
    )

    // Only update memory if maintenanceMode is provided
    if (typeof body.maintenanceMode === "boolean") {
      setMaintenanceMode(body.maintenanceMode)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    )
  }
}
