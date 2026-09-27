export type Podcast = {
  title: string
  date: string
  description: string
  url: string
}

export const podcasts: Podcast[] = [
  {
    title: "Finding (Data) Friends Podcast",
    date: "2026-04-01",
    description: "Conversation with Ben Weissman and Jess Pomfret.",
    url: "https://www.youtube.com/@findingdatafriends",
  },
  {
    title: "DOAG Voices",
    date: "2026-07-01",
    description: "CloudLand conversation with Katarina Medger and host David Koenig.",
    url: "https://open.spotify.com/episode/34l6zwCVu99nxYiZWti1RC",
  },
]

export type Article = {
  title: string
  date: string
  publication: string
  url: string
}

export const articles: Article[] = [
  {
    title: "Prompt Engineering – Dein Cheatcode für ChatGPT & Co.",
    date: "2025-03-05",
    publication: "ITgirls",
    url: "https://www.itgirls.de/blog/prompt-engineering",
  },
  {
    title: "Ein Tag als Azure Cloud Consultant",
    date: "2025-05-28",
    publication: "ITgirls",
    url: "https://www.itgirls.de/blog/azure-cloud-consultant",
  },
  {
    title: "5 Gründe, warum sich die Cloud auch für Quereinsteiger*innen lohnt",
    date: "2025-07-02",
    publication: "ITgirls",
    url: "https://www.itgirls.de/blog/quereinstieg-cloud",
  },
  {
    title: "6 Wege, wie Yoga mich zu einer besseren Entwicklerin gemacht hat",
    date: "2025-10-22",
    publication: "ITgirls",
    url: "https://www.itgirls.de/blog/yoga-entwicklerin",
  },
  {
    title: "6 AI-Trends, über die wir 2026 wirklich sprechen sollten",
    date: "2026-02-04",
    publication: "ITgirls",
    url: "https://www.itgirls.de/blog/6-ai-trends",
  },
]
