import { Card, CardContent } from "@/components/ui/card"
import { Language, getTranslations } from "@/lib/translations"

interface HowItWorksProps {
  lang?: Language
}

export function HowItWorks({ lang = 'tr' }: HowItWorksProps) {
  const t = getTranslations(lang)
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step, idx) => {
            const gradients = [
              { bar: 'from-blue-500 to-purple-500', card: 'from-blue-500 to-purple-500' },
              { bar: 'from-purple-500 to-pink-500', card: 'from-purple-500 to-pink-500' },
              { bar: 'from-pink-500 to-red-500', card: 'from-pink-500 to-red-500' },
            ]
            return (
              <Card key={idx} className="relative overflow-hidden border-0 shadow-lg">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradients[idx].bar}`} />
                <CardContent className="pt-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[idx].card} flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
