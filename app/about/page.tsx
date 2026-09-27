import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { certifications } from "@/data/projects"

export const metadata: Metadata = {
  title: "About",
  description:
    "Data & AI Lead at teccle group. Microsoft Fabric expert, international speaker, and Women in Tech advocate based in Würzburg, Germany.",
}

const languages = [
  { name: "German", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Fluent" },
  { name: "Hindi", level: "Learning" },
  { name: "German Sign Language", level: "Learning" },
]

const expertise = [
  "Microsoft Fabric",
  "Azure AI Services",
  "Azure Data Engineering",
  "OpenAI / GenAI",
  "Multi-Agent Workflows",
  "RAG Architecture",
  "Power BI",
  "Data Platform Design",
  "Cloud Consulting",
  "Digital Strategy",
]

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-8 max-w-2xl leading-tight">
          Data & AI Lead.
          <br />
          Speaker. Community Builder.
        </h1>
        <p className="text-xl text-[#94a3b8] max-w-2xl leading-relaxed">
          I&apos;m Hanna Schwab — based in Würzburg, Germany, working at the
          intersection of data engineering, AI systems, and people who need
          both to actually work.
        </p>
      </section>

      {/* Bio */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
          <div className="space-y-5 text-[#94a3b8] leading-relaxed">
            <p>
              I lead data and AI at teccle group, where I design and implement
              data platforms using Microsoft Fabric, Azure AI, and OpenAI
              services. My work spans architecture, development, and
              deployment — across industries, from first conversation to
              production systems.
            </p>
            <p>
              I&apos;ve been working in cloud and data for four years. Before that,
              digital strategy. The common thread is that I don&apos;t separate
              the technical from the business problem. A data platform that
              nobody uses is not a platform — it&apos;s a cost center.
            </p>
            <p>
              I speak at conferences across Europe about what&apos;s actually
              happening: what Fabric updates matter, why most AI strategies
              fail before the data layer, and how to build multi-agent
              workflows that hold up in production. I try to be specific
              rather than optimistic.
            </p>
            <p>
              Outside of work: certified yoga instructor, currently learning
              Hindi and German Sign Language. I believe both slow things down
              enough to notice what&apos;s actually going on.
            </p>
          </div>

          <div className="space-y-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/Hanna MVP.png"
                alt="Hanna Schwab"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Current role */}
            <div className="card p-6">
              <p className="text-xs text-[#64748b] uppercase tracking-widest mb-3">
                Current Role
              </p>
              <p className="text-[#f1f5f9] font-semibold">Data & AI Lead</p>
              <p className="text-[#94a3b8] text-sm mt-1">teccle group</p>
              <p className="text-[#64748b] text-sm mt-3 leading-relaxed">
                Microsoft Fabric · Azure AI · OpenAI · Data Platform
                Architecture · Cloud Consulting
              </p>
            </div>

            {/* Location & languages */}
            <div className="card p-6">
              <p className="text-xs text-[#64748b] uppercase tracking-widest mb-3">
                Location & Languages
              </p>
              <p className="text-[#94a3b8] text-sm mb-4">
                Würzburg, Germany
              </p>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-[#f1f5f9] text-sm">{lang.name}</span>
                    <span
                      className={`text-xs ${
                        lang.level === "Learning"
                          ? "text-[#64748b]"
                          : "text-[#94a3b8]"
                      }`}
                    >
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs text-[#64748b] uppercase tracking-widest mb-8">
            Technical Focus
          </p>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill) => (
              <span key={skill} className="tag tag-blue text-sm py-1.5 px-3">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs text-[#64748b] uppercase tracking-widest mb-8">
            Microsoft Certifications
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="card p-5 flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                <div>
                  <p className="text-[#f1f5f9] text-sm font-medium">
                    {cert.name}
                  </p>
                  <p className="text-[#64748b] text-xs mt-1">
                    Earned {cert.earned}
                    {cert.expires ? ` · Valid until ${cert.expires}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs text-[#64748b] uppercase tracking-widest mb-8">
            Recognition
          </p>
          <div className="card p-6 max-w-xl">
            <p className="text-[#f1f5f9] text-sm font-semibold">
              Microsoft Foundry MVP
            </p>
            <p className="text-[#64748b] text-xs mt-1">Recognized September 2026</p>
            <a
              href="https://mvp.microsoft.com/de-DE/MVP/profile/e2d3f9c8-007b-4f13-aa77-2759fd1c30c9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Microsoft MVP profile →
            </a>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs text-[#64748b] uppercase tracking-widest mb-8">
            Community Work
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Global AI Community Würzburg",
                role: "Founder",
                description:
                  "Official Global AI chapter for the Würzburg region. Meetups, workshops, and panel discussions on data & AI.",
              },
              {
                name: "Women in Tech Circle",
                role: "Founder",
                description:
                  "Career-focused community for women in tech. Salary negotiation coaching, peer support, workshops.",
              },
              {
                name: "Adoption First User Group",
                role: "Co-Founder",
                description:
                  "Microsoft user group focused on turning Fabric, Power Platform, and Copilot investments into real usage.",
              },
              {
                name: "ITgirls",
                role: "Mentor & Content Creator",
                description:
                  "Writing and mentoring for women entering tech careers in Germany.",
              },
              {
                name: "ReDI School",
                role: "Mentor",
                description:
                  "Supporting career changers and newcomers building skills in tech.",
              },
            ].map((item) => (
              <div key={item.name} className="card p-6">
                <p className="text-[#f1f5f9] font-semibold text-sm">
                  {item.name}
                </p>
                <p className="text-blue-400 text-xs mt-1">{item.role}</p>
                <p className="text-[#64748b] text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[#f1f5f9] font-semibold text-lg mb-1">
              Want to work together?
            </p>
            <p className="text-[#94a3b8] text-sm">
              Speaking invitations, community collaborations, or consulting — I&apos;m happy to hear from you.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
