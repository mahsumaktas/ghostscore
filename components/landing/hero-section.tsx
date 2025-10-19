"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Language, getTranslations } from "@/lib/translations"

interface HeroSectionProps {
  lang?: Language
}

export function HeroSection({ lang = 'tr' }: HeroSectionProps) {
  const t = getTranslations(lang)
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/30 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "700ms" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Ghost emoji with float animation */}
        <div className="text-8xl mb-6 animate-float">
          👻
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
          {t.hero.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm md:text-base">
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2,547</div>
            <div className="text-gray-600 dark:text-gray-400">{t.hero.stats.applications}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">342</div>
            <div className="text-gray-600 dark:text-gray-400">{t.hero.stats.companies}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">127</div>
            <div className="text-gray-600 dark:text-gray-400">{t.hero.stats.users}</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            {t.hero.cta.login}
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
            {t.hero.cta.viewScores}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Trust indicators */}
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          {t.hero.trust}
        </p>
      </div>
    </section>
  )
}
