import fs from "fs"
import path from "path"
import matter from "gray-matter"

const CONTENT_DIR = path.join(process.cwd(), "content/blog")

export type PostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: number
}

export type Post = PostMeta & {
  content: string
}

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8")
      const { data, content } = matter(raw)

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        readingTime: estimateReadingTime(content),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    readingTime: estimateReadingTime(content),
    content,
  }
}
