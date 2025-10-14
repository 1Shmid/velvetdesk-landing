'use client'

import { CheckCircle } from 'lucide-react'

interface FinalCTASectionProps {
  t: any
}

export default function FinalCTASection({ t }: FinalCTASectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 to-purple-600 text-white text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Заголовок */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t.finalCTA.title}
          </h2>
          
          {/* Подзаголовок */}
          <p className="text-xl mb-10 text-purple-100">
            {t.finalCTA.subtitle}
          </p>
          
          {/* CTA кнопка */}
          <div className="flex flex-col items-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
              {t.finalCTA.ctaButton}
            </button>
            
            {/* Trust badges под кнопкой */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-purple-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{t.finalCTA.badges.setup}</span>
              </div>
              <span className="text-purple-300">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{t.finalCTA.badges.freeTrial}</span>
              </div>
              <span className="text-purple-300">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{t.finalCTA.badges.cancel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}