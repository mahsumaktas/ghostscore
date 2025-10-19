import { Language, getTranslations } from "@/lib/translations"

interface StatsSectionProps {
  lang?: Language
}

export function StatsSection({ lang = 'tr' }: StatsSectionProps) {
  const t = getTranslations(lang)
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-3">📊</div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              2,547
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t.stats.totalApplications}
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-3">🏬</div>
            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              342
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t.stats.companyData}
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-3">👥</div>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              127
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t.stats.activeUsers}
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-3">⚡</div>
            <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              67%
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t.stats.avgGhostRate}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
