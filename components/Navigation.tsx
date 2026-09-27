"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <aside className="site-sidebar">
        <div>
          <Link href="/" className="site-brand">
            Hanna Schwab<span>.</span>
          </Link>
          <p className="site-role">
            Microsoft Foundry MVP
            <br />
            Data & AI Lead
            <br />
            Speaker
          </p>
        </div>

        <nav className="site-nav" aria-label="Main navigation">
          {links.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="site-sidebar-footer">
          <div className="site-socials">
            <a
              href="https://www.linkedin.com/in/hanna-schwab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://sessionize.com/hanna-schwab173/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sessionize
            </a>
          </div>
          <p>Würzburg, Germany · Europe-wide</p>
        </div>
      </aside>

      <header className="mobile-header">
        <Link href="/" className="site-brand" onClick={() => setMenuOpen(false)}>
          Hanna Schwab<span>.</span>
        </Link>
        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
            {links.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mobile-socials">
              <a
                href="https://www.linkedin.com/in/hanna-schwab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://sessionize.com/hanna-schwab173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sessionize
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
