"use client"

import { useActionState, useEffect, useRef } from "react"
import { submitContact, type ContactState } from "@/app/actions/contact"

const topics = [
  "Speaking invitation",
  "Collaboration",
  "Consulting",
  "Other",
]

const initialState: ContactState = { status: "idle" }

export default function ContactForm({ defaultTopic }: { defaultTopic?: string }) {
  const [state, action, isPending] = useActionState(submitContact, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
    }
  }, [state.status])

  return (
    <form ref={formRef} action={action} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs text-[#64748b] uppercase tracking-widest mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-[#0d1829] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#475569] text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs text-[#64748b] uppercase tracking-widest mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full bg-[#0d1829] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#475569] text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="block text-xs text-[#64748b] uppercase tracking-widest mb-2">
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          required
          defaultValue={defaultTopic ?? ""}
          className="w-full bg-[#0d1829] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f1f5f9] text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none"
        >
          <option value="" disabled>Select a topic…</option>
          {topics.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs text-[#64748b] uppercase tracking-widest mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your event, project, or question…"
          className="w-full bg-[#0d1829] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#475569] text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
        />
      </div>

      {state.status === "error" && (
        <p className="text-red-400 text-sm">{state.message}</p>
      )}

      {state.status === "success" && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-5 py-4">
          <p className="text-green-400 text-sm font-medium">Message sent.</p>
          <p className="text-[#64748b] text-xs mt-1">I'll get back to you within a few days.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
      >
        {isPending ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  )
}
