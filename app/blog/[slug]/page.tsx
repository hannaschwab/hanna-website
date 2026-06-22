import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPost, getAllPosts } from "@/lib/mdx"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <div className="pt-24">
      <article className="max-w-2xl mx-auto px-6 py-16">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to blog
        </Link>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="tag tag-blue">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-[#64748b] mb-12 pb-8 border-b border-white/[0.07]">
          <span>Hanna Schwab</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-blue max-w-none prose-p:text-[#94a3b8] prose-headings:text-[#f1f5f9] prose-strong:text-[#f1f5f9] prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-hr:border-white/[0.07] prose-li:text-[#94a3b8] prose-code:text-cyan-300 prose-code:bg-[#0d1829] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
          <MDXRemote source={post.content} />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.07]">
          <p className="text-[#64748b] text-sm mb-4">
            Thoughts on this? Connect on LinkedIn.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/hanna-schwab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              LinkedIn →
            </a>
            <Link href="/blog" className="text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors">
              More posts →
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
