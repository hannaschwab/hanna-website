import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Hanna Schwab — Microsoft Foundry MVP, Data & AI Lead, Speaker",
    template: "%s | Hanna Schwab",
  },
  description:
    "Microsoft Foundry MVP and Data & AI Lead at teccle group. Building data platforms with Microsoft Fabric and Azure AI. International speaker and community founder.",
  keywords: [
    "Microsoft Fabric",
    "Data Engineering",
    "Azure AI",
    "Data Platform",
    "Speaker",
    "Women in Tech",
    "Hanna Schwab",
    "teccle group",
  ],
  authors: [{ name: "Hanna Schwab" }],
  creator: "Hanna Schwab",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hanna Schwab",
    title: "Hanna Schwab — Microsoft Foundry MVP, Data & AI Lead, Speaker",
    description:
      "Microsoft Foundry MVP and Data & AI Lead at teccle group. Building data platforms with Microsoft Fabric and Azure AI. International speaker and community founder.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanna Schwab — Microsoft Foundry MVP, Data & AI Lead, Speaker",
    description:
      "Data & AI Lead at teccle group. Building data platforms with Microsoft Fabric and Azure AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-blue-500 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
