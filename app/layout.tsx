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
    default: "Hanna Schwab — Data & AI Lead, Microsoft Fabric Expert, Speaker",
    template: "%s | Hanna Schwab",
  },
  description:
    "Data & AI Lead at teccle group. Building data platforms with Microsoft Fabric and Azure AI. International speaker, founder of Global AI Community Würzburg, and Women in Tech advocate.",
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
    title: "Hanna Schwab — Data & AI Lead, Microsoft Fabric Expert, Speaker",
    description:
      "Data & AI Lead at teccle group. Building data platforms with Microsoft Fabric and Azure AI. International speaker and Women in Tech advocate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanna Schwab — Data & AI Lead, Microsoft Fabric Expert, Speaker",
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
      <body className="antialiased bg-[#070d1a] text-[#f1f5f9] min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
