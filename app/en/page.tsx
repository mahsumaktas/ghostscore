import { HeroSection } from "@/components/landing/hero-section"
import { GhostScoreTable } from "@/components/landing/ghost-score-table"
import { HowItWorks } from "@/components/landing/how-it-works"
import { StatsSection } from "@/components/landing/stats-section"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function EnglishHome() {
  return (
    <>
      <LanguageSwitcher />
      <main className="min-h-screen">
        <HeroSection lang="en" />
        <GhostScoreTable lang="en" />
        <HowItWorks lang="en" />
        <StatsSection lang="en" />
        <CtaSection lang="en" />
        <Footer lang="en" />
      </main>
    </>
  )
}
