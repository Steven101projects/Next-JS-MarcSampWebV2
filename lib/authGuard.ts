import { jwtVerify } from "jose"
import { NextRequest } from "next/server"

export async function verifyAdminFromRequest(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  if (!token) {
    return false
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    const { payload } = await jwtVerify(token, secret)

    return payload.role === "admin"
  } catch {
    return false
  }
}
