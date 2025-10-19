import { Language, getTranslations } from "@/lib/translations"

interface FooterProps {
  lang?: Language
}

export function Footer({ lang = 'tr' }: FooterProps) {
  const t = getTranslations(lang)
  return (
    <footer className="py-12 px-4 border-t dark:border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">👻</span>
              <span className="text-xl font-bold">GhostScore</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="/about" className="hover:text-blue-600 transition-colors">{t.footer.links.about}</a>
            <a href="/privacy" className="hover:text-blue-600 transition-colors">{t.footer.links.privacy}</a>
            <a href="/terms" className="hover:text-blue-600 transition-colors">{t.footer.links.terms}</a>
            <a href="https://github.com/mahsumaktas/ghostscore" className="hover:text-blue-600 transition-colors">{t.footer.links.github}</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t dark:border-slate-800 text-center text-sm text-gray-600 dark:text-gray-400">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
