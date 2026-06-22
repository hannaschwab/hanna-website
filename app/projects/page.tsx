import type { Metadata } from "next"
import Image from "next/image"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Communities, initiatives, and projects by Hanna Schwab — Global AI Community Würzburg, Women in Tech Circle, and Adoption First User Group.",
}

const podcasts = [
  {
    title: "Finding (Data) Friends Podcast",
    hosts: "Ben Weissman, Jess Pomfret",
    date: "April 2026",
    url: "https://www.youtube.com/@findingdatafriends",
  },
  {
    title: "DOAG Voices",
    hosts: "David Koenig (Host)",
    date: "July 2026",
    url: "https://shows.acast.com/doag-voices-arbeitstitel/episodes",
  },
]

const articles = [
  {
    title: "6 AI-Trends, über die wir 2026 wirklich sprechen sollten",
    publication: "ITgirls.de",
    date: "February 2026",
    url: "https://www.itgirls.de/blog/6-ai-trends",
  },
  {
    title: "6 Wege, wie Yoga mich zu einer besseren Entwicklerin gemacht hat",
    publication: "ITgirls.de",
    date: "October 2025",
    url: "https://www.itgirls.de/blog/yoga-entwicklerin",
  },
  {
    title: "5 Gründe, warum sich die Cloud auch für Quereinsteiger*innen lohnt",
    publication: "ITgirls.de",
    date: "July 2025",
    url: "https://www.itgirls.de/blog/quereinstieg-cloud",
  },
  {
    title: "Ein Tag als Azure Cloud Consultant",
    publication: "ITgirls.de",
    date: "May 2025",
    url: "https://www.itgirls.de/blog/azure-cloud-consultant",
  },
  {
    title: "Prompt Engineering — Dein Cheatcode für ChatGPT & Co.",
    publication: "ITgirls.de",
    date: "March 2025",
    url: "https://www.itgirls.de/blog/prompt-engineering",
  },
]

export default function Projects() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-4">
          Projects
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-6 leading-tight">
          Communities & Work
        </h1>
        <p className="text-xl text-[#94a3b8] max-w-2xl leading-relaxed">
          Beyond consulting. Things I've built, communities I run, and writing
          published elsewhere.
        </p>
      </section>

      {/* Communities */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs text-[#64748b] uppercase tracking-widest mb-8">
            Communities
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="card flex flex-col overflow-hidden">
                {project.image && (
                  <div className="relative h-44 w-full shrink-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1829]/60 to-transparent" />
                  </div>
                )}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="tag tag-blue">{project.role}</span>
                      <span className="text-[#64748b] text-xs">{project.year}</span>
                    </div>
                    <h3 className="text-[#f1f5f9] font-semibold mt-3">
                      {project.name}
                    </h3>
                    <p className="text-[#64748b] text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-2 flex items-center gap-3">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Website →
                      </a>
                    )}
                    {project.linkedinUrl && (
                      <a
                        href={project.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors"
                      >
                        LinkedIn →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs text-[#64748b] uppercase tracking-widest mb-8">
            Podcasts
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {podcasts.map((pod) => (
              <a
                key={pod.title}
                href={pod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group"
              >
                <h3 className="text-[#f1f5f9] font-semibold group-hover:text-blue-300 transition-colors">
                  {pod.title}
                </h3>
                <p className="text-[#64748b] text-sm mt-2">
                  with {pod.hosts}
                </p>
                <p className="text-[#64748b] text-xs mt-1">{pod.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs text-[#64748b] uppercase tracking-widest mb-8">
            Published Articles
          </p>
          <div className="space-y-3">
            {articles.map((article) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 flex items-center justify-between gap-4 group block"
              >
                <div>
                  <h3 className="text-[#f1f5f9] text-sm font-medium group-hover:text-blue-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#64748b] text-xs mt-1">
                    {article.publication} · {article.date}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-[#64748b] group-hover:text-blue-400 transition-colors shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
