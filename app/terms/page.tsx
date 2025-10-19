'use client'

import { useState, useEffect } from 'react'
import { translations } from '@/lib/translations'

export default function TermsOfService() {
  const [language, setLanguage] = useState<'en' | 'es'>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'es'
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else if (navigator.language.startsWith('es')) {
      setLanguage('es')
    }
  }, [])

  const t = translations[language]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t.terms.title}
        </h1>
        
        <p className="text-sm text-gray-500 mb-12">
          {t.terms.lastUpdated}
        </p>

        <div className="space-y-8 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {t.terms.sections.service.title}
            </h2>
            <p>{t.terms.sections.service.content}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {t.terms.sections.pricing.title}
            </h2>
            <p>{t.terms.sections.pricing.content}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {t.terms.sections.refunds.title}
            </h2>
            <p>{t.terms.sections.refunds.content}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {t.terms.sections.termination.title}
            </h2>
            <p>{t.terms.sections.termination.content}</p>
          </section>
        </div>
      </div>
    </div>
  )
}