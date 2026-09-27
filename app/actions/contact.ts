"use server"

import { Resend } from "resend"

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
}

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }

  return value.replace(
    /[&<>"']/g,
    (character) => entities[character] ?? character
  )
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const topic = (formData.get("topic") as string)?.trim()
  const message = (formData.get("message") as string)?.trim()

  if (!name || !email || !topic || !message) {
    return { status: "error", message: "Please fill in all fields." }
  }
  if (name.length > 120 || email.length > 254 || topic.length > 80 || message.length > 5000) {
    return { status: "error", message: "Please keep your message within the allowed length." }
  }
  if (!email.includes("@") || !email.includes(".")) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_your_api_key_here") {
    return { status: "error", message: "Email service not configured yet. Please reach out via LinkedIn in the meantime." }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeTopic = escapeHtml(topic)
  const safeMessage = escapeHtml(message)

  try {
    await resend.emails.send({
      from: "hanna-schwab.com <hello@hanna-schwab.com>",
      to: "hanna.schwab@yahoo.de",
      replyTo: email,
      subject: `[Contact] ${topic} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #1e293b;">New message from hannaschwab.dev</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 80px;">Name</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${safeName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #3b82f6;">${safeEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Topic</td><td style="padding: 8px 0; color: #1e293b;">${safeTopic}</td></tr>
          </table>
          <div style="background: #f8fafc; border-left: 3px solid #3b82f6; padding: 16px 20px; border-radius: 0 8px 8px 0;">
            <p style="margin: 0; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">Reply directly to this email to respond to ${safeName}.</p>
        </div>
      `,
    })

    return { status: "success" }
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again or reach out on LinkedIn.",
    }
  }
}
