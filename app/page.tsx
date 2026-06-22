import Image from "next/image"
import Link from "next/link"
import { upcomingTalks } from "@/data/talks"
import { getAllPosts } from "@/lib/mdx"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const stats = [
  { value: "30+", label: "Conference talks" },
  { value: "5", label: "Microsoft certifications" },
  { value: "3", label: "Communities founded" },
  { value: "4+", label: "Years in Data & AI" },
]

export default function Home() {
  const posts = getAllPosts().slice(0, 3)
  const featuredTalks = upcomingTalks.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-16">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Blue glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-6 leading-relaxed">
              Data & AI Lead · Microsoft Fabric · Speaker
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#f1f5f9] leading-[1.05] tracking-tight mb-6">
              Hanna
              <br />
              Schwab
              <span className="text-blue-400">.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#94a3b8] max-w-2xl leading-relaxed mb-10">
              I build data platforms that actually deliver on the AI promise.
              Based in Würzburg. Speaking across Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/speaking"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
              >
                View My Talks
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-white/[0.1] hover:border-white/[0.2] text-[#f1f5f9] hover:bg-white/[0.04] font-medium px-6 py-3 rounded-lg transition-all text-sm"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl font-bold text-[#f1f5f9]">{stat.value}</p>
              <p className="text-[#64748b] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming talks */}
      {featuredTalks.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-2">
                On stage soon
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#f1f5f9]">
                Upcoming Talks
              </h2>
            </div>
            <Link
              href="/speaking"
              className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors hidden md:block"
            >
              All talks →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {featuredTalks.map((talk) => (
              <div key={`${talk.event}-${talk.date}`} className="card p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="tag tag-green">Upcoming</span>
                  <span className="text-[#64748b] text-xs">
                    {formatDate(talk.date)}
                  </span>
                </div>
                <h3 className="text-[#f1f5f9] font-semibold text-sm leading-snug line-clamp-3">
                  {talk.title}
                </h3>
                <div className="mt-auto pt-2 flex items-center gap-2 text-xs text-[#64748b]">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{talk.event} · {talk.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link
              href="/speaking"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              View all talks →
            </Link>
          </div>
        </section>
      )}

      {/* Latest posts */}
      {posts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/[0.07]">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-2">
                From the blog
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#f1f5f9]">
                Latest Writing
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors hidden md:block"
            >
              All posts →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-6 flex flex-col gap-4 group"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tag tag-blue">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[#f1f5f9] font-semibold leading-snug group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-2 flex items-center justify-between text-xs text-[#64748b]">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link
              href="/blog"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              All posts →
            </Link>
          </div>
        </section>
      )}

      {/* Contact teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/[0.07]">
        <div className="card p-10 md:p-14 text-center">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-4">
            Get in touch
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#f1f5f9] mb-4">
            Speaking invitation? Collaboration idea?
          </h2>
          <p className="text-[#94a3b8] max-w-lg mx-auto mb-8 leading-relaxed">
            I'm open to conference talks, workshops, panels, and community
            collaborations. Tell me what you have in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact?intent=speaking"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Speaking inquiry
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.1] hover:border-white/[0.2] text-[#f1f5f9] hover:bg-white/[0.04] font-medium px-6 py-3 rounded-lg transition-all text-sm"
            >
              Other topics
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/[0.07]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-4">
              Who I am
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#f1f5f9] mb-6">
              Industry insider. <br />Not a spectator.
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              I'm a Data & AI Lead at teccle group, building data platforms
              with Microsoft Fabric and Azure AI — from architecture to
              deployment. I hold five Microsoft certifications and speak at
              conferences across Europe about what's actually happening in the
              data world.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-8">
              I founded the Global AI Community Würzburg and the Women in Tech
              Circle because visibility and access matter more than most
              organisations admit.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-[#f1f5f9] hover:text-blue-300 transition-colors"
            >
              Full story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="space-y-4">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/AgentCamp Hamburg.jpeg"
                alt="Hanna Schwab speaking at AgentCamp Hamburg"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/50 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Data & AI Lead", sub: "teccle group" },
                { label: "International Speaker", sub: "Europe-wide" },
                { label: "Community Founder", sub: "Global AI Würzburg" },
                { label: "Women in Tech", sub: "Mentor & Advocate" },
              ].map((item) => (
                <div key={item.label} className="card p-5">
                  <p className="text-[#f1f5f9] font-semibold text-sm">{item.label}</p>
                  <p className="text-[#64748b] text-xs mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
