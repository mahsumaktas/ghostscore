import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GhostScore - Radio Silence After Job Applications?",
  description: "Track your applications, mark whether you got a response. Let's uncover which companies ghost candidates together.",
  keywords: ["job application", "ghost", "ghosting", "company scores", "job search", "career"],
  authors: [{ name: "GhostScore Team" }],
  openGraph: {
    title: "GhostScore - Radio Silence After Job Applications?",
    description: "Track your applications, mark whether you got a response. Let's uncover which companies ghost candidates together.",
    type: "website",
    locale: "en_US",
    siteName: "GhostScore",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostScore - Radio Silence After Job Applications?",
    description: "A community project for job application transparency in Turkey",
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
