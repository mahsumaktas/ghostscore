import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "GhostScore - İş Başvurularından Sonra Sessizlik mi?",
  description: "Başvurduğun şirketleri kaydet, cevap gelip gelmediğini işaretle. Hangi şirketlerin ghost yaptığını birlikte ortaya çıkaralım.",
  keywords: ["iş başvurusu", "ghost", "ghosting", "şirket skorları", "iş arama", "kariyer"],
  authors: [{ name: "GhostScore Team" }],
  openGraph: {
    title: "GhostScore - İş Başvurularından Sonra Sessizlik mi?",
    description: "Başvurduğun şirketleri kaydet, cevap gelip gelmediğini işaretle. Hangi şirketlerin ghost yaptığını birlikte ortaya çıkaralım.",
    type: "website",
    locale: "tr_TR",
    siteName: "GhostScore",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostScore - İş Başvurularından Sonra Sessizlik mi?",
    description: "İş başvuru transparansı için Türkiye'nin ilk topluluk projesi",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
