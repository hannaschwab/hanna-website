import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.07] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-[#f1f5f9] font-semibold text-sm">
            Hanna Schwab<span className="text-blue-400">.</span>
          </p>
          <p className="text-[#64748b] text-xs mt-1">
            Data & AI Lead · Microsoft Fabric · Speaker
          </p>
        </div>

        <nav className="flex items-center gap-6">
          {[
            { href: "/about", label: "About" },
            { href: "/speaking", label: "Speaking" },
            { href: "/blog", label: "Blog" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/hanna-schwab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://sessionize.com/hanna-schwab173/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] hover:text-blue-400 transition-colors text-xs"
          >
            Sessionize
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.04] py-4 text-center">
        <p className="text-xs text-[#475569]">
          © {year} Hanna Schwab. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
