import type { Metadata } from "next"
import { Suspense } from "react"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hanna Schwab for speaking inquiries, collaboration, or consulting.",
}

function ContactFormWrapper({ intent }: { intent?: string }) {
  const topicMap: Record<string, string> = {
    speaking: "Speaking invitation",
    collaboration: "Collaboration",
    consulting: "Consulting",
  }
  const defaultTopic = intent ? topicMap[intent] : undefined
  return <ContactForm defaultTopic={defaultTopic} />
}

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>
}) {
  const { intent } = await searchParams

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-4">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-6 leading-tight">
          Get in Touch
        </h1>
        <p className="text-xl text-[#94a3b8] max-w-2xl leading-relaxed">
          Speaking invitation, collaboration idea, or just a question — use the
          form or reach out on LinkedIn.
        </p>
      </section>

      {/* Form + info */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-16">
          {/* Form — wider */}
          <div className="md:col-span-3">
            <p className="text-xs text-[#64748b] uppercase tracking-widest mb-8">
              Send a message
            </p>
            <Suspense>
              <ContactFormWrapper intent={intent} />
            </Suspense>
          </div>

          {/* Right: what I'm open to + links */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <p className="text-xs text-[#64748b] uppercase tracking-widest mb-6">
                What I'm open to
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Speaking invitation",
                    description:
                      "Microsoft Fabric, Azure AI, multi-agent systems, Women in Tech. Tell me the event, date, and location.",
                  },
                  {
                    label: "Collaboration",
                    description:
                      "Community events, content partnerships, workshop co-hosting.",
                  },
                  {
                    label: "Consulting",
                    description:
                      "Data platform strategy and Fabric implementation — reach out via teccle group.",
                  },
                ].map((item) => (
                  <div key={item.label} className="card p-5">
                    <p className="text-[#f1f5f9] text-sm font-semibold mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#64748b] text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-[#64748b] uppercase tracking-widest mb-6">
                Find me here
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/hanna-schwab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-4 flex items-center gap-3 group block"
                >
                  <div className="w-7 h-7 rounded-md bg-blue-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-[#f1f5f9] text-sm group-hover:text-blue-300 transition-colors">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://sessionize.com/hanna-schwab173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-4 flex items-center gap-3 group block"
                >
                  <div className="w-7 h-7 rounded-md bg-blue-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <span className="text-[#f1f5f9] text-sm group-hover:text-blue-300 transition-colors">
                    Sessionize
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
