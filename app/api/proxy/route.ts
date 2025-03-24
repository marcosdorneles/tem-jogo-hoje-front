import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const response = await fetch("http://localhost:3000/matches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to register" }, { status: response.status })
    }

    const data = await response.json().catch(() => ({}))
    return NextResponse.json(data || { success: true })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}