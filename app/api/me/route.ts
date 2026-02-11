import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie")

  if (!cookieHeader) {
    return NextResponse.json({ authenticated: false })
  }

  const tokenMatch = cookieHeader.match(/token=([^;]+)/)
  const token = tokenMatch?.[1]

  if (!token) {
    return NextResponse.json({ authenticated: false })
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    await jwtVerify(token, secret)

    return NextResponse.json({ authenticated: true })
  } catch {
    return NextResponse.json({ authenticated: false })
  }
}
