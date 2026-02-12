import "./globals.css"
import { ReactNode } from "react"
import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const client = await clientPromise
  const db = client.db("marCrisWebsite")

  const settings = await db.collection("settings").findOne({})

  // if (settings?.maintenanceMode) {
  //   redirect("/maintenance")
  // }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
