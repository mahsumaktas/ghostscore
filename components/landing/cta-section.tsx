import { Button } from "@/components/ui/button"
import { Language, getTranslations } from "@/lib/translations"

interface CtaSectionProps {
  lang?: Language
}

export function CtaSection({ lang = 'tr' }: CtaSectionProps) {
  const t = getTranslations(lang)
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t.cta.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <p className="text-xl mb-10 text-blue-100">
          {t.cta.subtitle}
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-10 py-7 h-auto">
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          {t.cta.button}
        </Button>
        <p className="mt-6 text-sm text-blue-200">
          {t.cta.social}
        </p>
      </div>
    </section>
  )
}
