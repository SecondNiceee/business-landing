import { type NextRequest, NextResponse } from "next/server"
import { sendEmail, generateEmailHTML } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const { to, subject, formData } = await request.json()

    const html = generateEmailHTML(formData)

    await sendEmail(to, subject, html)

    console.log("Email sent successfully to:", to)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
