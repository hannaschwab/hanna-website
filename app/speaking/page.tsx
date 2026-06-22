import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { upcomingTalks, pastTalks, type Talk } from "@/data/talks"

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Conference talks, workshops, and panels by Hanna Schwab on Microsoft Fabric, Azure AI, data engineering, and women in tech.",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const typeLabels: Record<Talk["type"], string> = {
  talk: "Talk",
  workshop: "Workshop",
  panel: "Panel",
  keynote: "Keynote",
  podcast: "Podcast",
}

function TalkCard({ talk, showUpcoming }: { talk: Talk; showUpcoming: boolean }) {
  return (
    <div className="card flex flex-col overflow-hidden">
      {talk.image && (
        <div className="relative h-44 w-full shrink-0">
          <Image
            src={talk.image}
            alt={talk.event}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1829]/70 to-transparent" />
        </div>
      )}
      <div className="p-6 flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`tag ${showUpcoming ? "tag-green" : "tag-gray"}`}>
            {typeLabels[talk.type]}
          </span>
          {showUpcoming && <span className="tag tag-green">Upcoming</span>}
        </div>
        <span className="text-[#64748b] text-xs shrink-0">{formatDate(talk.date)}</span>
      </div>

      <div>
        <h3 className="text-[#f1f5f9] font-semibold leading-snug">
          {talk.title}
        </h3>
        <p className="text-blue-400 text-sm mt-1">{talk.event}</p>
      </div>

      <div className="flex items-center gap-1.5 text-xs text-[#64748b]">
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {talk.location}
      </div>

      {talk.coSpeakers && talk.coSpeakers.length > 0 && (
        <p className="text-[#64748b] text-xs">
          With {talk.coSpeakers.join(", ")}
        </p>
      )}

      <div className="mt-auto flex items-center gap-3">
        {talk.recordingUrl && (
          <a
            href={talk.recordingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch recording
          </a>
        )}
        {talk.eventUrl && !talk.recordingUrl && (
          <a
            href={talk.eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors"
          >
            Event page →
          </a>
        )}
      </div>
      </div>
    </div>
  )
}

export default function Speaking() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-4">
          Speaking
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-6 leading-tight">
          Talks & Events
        </h1>
        <p className="text-xl text-[#94a3b8] max-w-2xl leading-relaxed mb-6">
          Covering Microsoft Fabric, Azure AI, multi-agent architectures, and
          what actually matters in data & AI — at conferences across Europe
          and online.
        </p>
        <a
          href="https://sessionize.com/hanna-schwab173/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors"
        >
          View Sessionize profile →
        </a>
      </section>

      {/* Upcoming */}
      {upcomingTalks.length > 0 && (
        <section className="border-t border-white/[0.07]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-xl font-bold text-[#f1f5f9] mb-8 flex items-center gap-3">
              Upcoming
              <span className="tag tag-green">{upcomingTalks.length}</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingTalks.map((talk) => (
                <TalkCard
                  key={`${talk.event}-${talk.date}`}
                  talk={talk}
                  showUpcoming={true}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-xl font-bold text-[#f1f5f9] mb-8 flex items-center gap-3">
            Past Talks
            <span className="tag tag-gray">{pastTalks.length}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastTalks.map((talk) => (
              <TalkCard
                key={`${talk.event}-${talk.date}`}
                talk={talk}
                showUpcoming={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-4">
            Want me at your event?
          </h2>
          <p className="text-[#94a3b8] mb-8 max-w-md mx-auto">
            I speak on Microsoft Fabric, AI architecture, data engineering,
            and women in tech. Get in touch.
          </p>
          <Link
            href="/contact?intent=speaking"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Send a speaking inquiry
          </Link>
        </div>
      </section>
    </div>
  )
}
