export type Project = {
  name: string
  role: string
  description: string
  mission: string
  url?: string
  linkedinUrl?: string
  year: string
  category: "community" | "content" | "initiative"
  image?: string
}

export const projects: Project[] = [
  {
    name: "Global AI Community Würzburg",
    role: "Founder",
    description:
      "Official Global AI chapter for Würzburg. Bringing together AI enthusiasts, developers, and decision-makers through meetups, hands-on workshops, and panel discussions.",
    mission: "Connect people, share knowledge, drive AI adoption in the region.",
    url: "https://globalai.community/chapters/wurzburg/",
    linkedinUrl: "https://www.linkedin.com/company/global-ai-community-wuerzburg/",
    year: "2025",
    category: "community",
    image: "/Community Event Würzburg 2025.jpeg",
  },
  {
    name: "Women in Tech Circle",
    role: "Founder",
    description:
      "A career-focused community for women in tech — online and offline. Workshops, peer support, and salary negotiation coaching.",
    mission: "Connect and empower women in tech through targeted coaching and workshops.",
    linkedinUrl: "https://www.linkedin.com/groups/17939048/",
    year: "2024",
    category: "community",
    image: "/Cloudland WiT Panel.jpeg",
  },
  {
    name: "Adoption First User Group",
    role: "Co-Founder",
    description:
      "A Microsoft user group focused on turning technology investments into real usage and impact — specifically Microsoft Fabric, Power Platform, and Copilot.",
    mission: "Help organizations actually adopt the tools they buy.",
    linkedinUrl: "https://www.linkedin.com/company/adoption-first/",
    year: "2025",
    category: "community",
  },
]

export const certifications = [
  {
    name: "Microsoft Certified: Azure Data Engineer Associate",
    earned: "May 2024",
    expires: "May 2027",
  },
  {
    name: "Microsoft Certified: Fabric Analytics Engineer Associate",
    earned: "November 2024",
    expires: "November 2026",
  },
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    earned: "June 2024",
    expires: "June 2027",
  },
  {
    name: "Microsoft Certified: Fabric Data Engineer Associate",
    earned: "August 2025",
    expires: "August 2027",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    earned: "September 2023",
  },
]
