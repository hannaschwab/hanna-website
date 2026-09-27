import Image from "next/image"
import Link from "next/link"
import { upcomingTalks } from "@/data/talks"

export const revalidate = 3600

const proof = [
  { value: "30+", label: "Conference talks" },
  { value: "5", label: "Microsoft certifications" },
  { value: "3", label: "Communities founded" },
]

const paths = [
  {
    audience: "For event organizers",
    title: "Speaking",
    description:
      "Talks and workshops on Microsoft Fabric, Fabric IQ, data agents, and AI strategy.",
    href: "/speaking",
    link: "See talks and recordings",
  },
  {
    audience: "For data leaders",
    title: "Projects",
    description:
      "Data platform strategy and implementation across Microsoft Fabric and Azure AI.",
    href: "/projects",
    link: "Explore my work",
  },
  {
    audience: "For practitioners",
    title: "Writing & community",
    description:
      "Practical technical writing and communities built around knowledge people can use.",
    href: "/blog",
    link: "Read and connect",
  },
]

function formatDate(date?: string, label?: string) {
  if (label) return label
  if (!date) return "Date to be announced"
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default function Home() {
  const now = new Date()
  const nextTalk = upcomingTalks
    .filter((talk) => !talk.date || new Date(`${talk.date}T23:59:59`) >= now)
    .sort((a, b) => {
      if (!a.date) return 1
      if (!b.date) return -1
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })[0]

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-copy">
          <a
            className="home-mvp"
            href="https://mvp.microsoft.com/de-DE/MVP/profile/e2d3f9c8-007b-4f13-aa77-2759fd1c30c9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Foundry MVP · since 2026
          </a>
          <h1>Data and AI that works beyond the demo.</h1>
          <p>
            I build data platforms, speak about what works in practice, and
            bring technical communities together.
          </p>
          <div className="home-actions">
            <Link href="/contact?intent=speaking" className="home-button home-button-primary">
              Invite me to speak
            </Link>
            <Link href="/contact?intent=consulting" className="home-button">
              Work with me
            </Link>
          </div>
        </div>
        <figure className="home-hero-image">
          <Image
            src="/IMG_3728.jpg"
            alt="Hanna Schwab speaking about Fabric IQ to a live audience"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 55vw"
          />
          <figcaption>
            Recent appearance · CloudLand 2026
            <br />
            Beyond BI: Developing Real Data Applications with Microsoft Fabric
          </figcaption>
        </figure>
      </section>

      <section className="home-proof" aria-label="Professional highlights">
        <a
          className="home-proof-mvp"
          href="https://mvp.microsoft.com/de-DE/MVP/profile/e2d3f9c8-007b-4f13-aa77-2759fd1c30c9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Microsoft Foundry MVP</strong>
          <span>View official profile →</span>
        </a>
        {proof.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="home-overview">
        <h2>Choose what brought you here.</h2>
        <div className="home-paths">
          {paths.map((path) => (
            <article key={path.title}>
              <span>{path.audience}</span>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <Link href={path.href}>{path.link} ↗</Link>
            </article>
          ))}
        </div>
      </section>

      {nextTalk && (
        <section className="home-next">
          <div>
            <p>Next confirmed event · {formatDate(nextTalk.date, nextTalk.dateLabel)}</p>
            <h2>{nextTalk.title}</h2>
          </div>
          <div>
            <strong>{nextTalk.event}</strong>
            <span>{nextTalk.location}</span>
            {nextTalk.eventUrl ? (
              <a href={nextTalk.eventUrl} target="_blank" rel="noopener noreferrer">
                View event details →
              </a>
            ) : (
              <span>Event link to be announced</span>
            )}
          </div>
        </section>
      )}
    </>
  )
}
