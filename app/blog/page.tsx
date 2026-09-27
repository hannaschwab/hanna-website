import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on Microsoft Fabric, Azure AI, data engineering, and what's actually happening in the data world.",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-6 leading-tight">
          Writing
        </h1>
        <p className="text-xl text-[#94a3b8] max-w-2xl leading-relaxed">
          On Microsoft Fabric, Azure AI, data engineering, and what&apos;s actually
          happening in the data & AI world. Practical, opinionated, no hype.
        </p>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {posts.length === 0 ? (
            <p className="text-[#64748b]">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group block"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag tag-blue">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-[#f1f5f9] font-semibold text-lg group-hover:text-blue-300 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-[#64748b] text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex md:flex-col md:items-end gap-4 md:gap-2 shrink-0">
                    <span className="text-[#64748b] text-xs">{formatDate(post.date)}</span>
                    <span className="text-[#64748b] text-xs">{post.readingTime} min read</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
