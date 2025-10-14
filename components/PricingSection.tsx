'use client'

import { CheckCircle, Gift } from 'lucide-react'

interface PricingSectionProps {
  t: any
}

export default function PricingSection({ t }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.pricing.subtitle}
          </p>
          
          {/* Features в 2 колонки под заголовком */}
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {t.pricing.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-2 text-left">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Компактная карточка */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl border-2 border-purple-600 shadow-2xl overflow-hidden">
            {/* Цена - ФОН #f5f3ff */}
            <div className="px-8 py-8 text-center" style={{ backgroundColor: '#f5f3ff' }}>
              <div className="mb-2">
                <span className="text-7xl font-bold text-purple-600">{t.pricing.price}</span>
              </div>
              <p className="text-gray-600 text-lg">{t.pricing.period}</p>
              <p className="text-sm text-gray-500 mt-2">
                {t.pricing.setupFee}
              </p>
            </div>
            
            {/* First Month FREE badge - ВЕКТОРНАЯ ИКОНКА */}
            <div className="px-8 py-5 bg-gradient-to-r from-green-500 to-green-600">
              <div className="flex items-center justify-center gap-2">
                <Gift className="w-7 h-7 text-white" strokeWidth={2} />
                <span className="text-xl font-bold text-white">{t.pricing.firstMonthFree}</span>
              </div>
            </div>
            
            {/* CTA Button + Process - ОБЪЕДИНЕНЫ, БЕЗ РАЗДЕЛИТЕЛЯ */}
            <div className="px-8 pt-6 pb-3 bg-white">
              <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl mb-3">
                {t.pricing.ctaButton}
              </button>
              
              {/* Process - сразу под кнопкой */}
              <p className="text-center text-xs text-gray-600 leading-tight">
                {t.pricing.process}
              </p>
            </div>
            
            {/* Trust badges - ФОН #f5f3ff */}
            <div className="px-8 py-4" style={{ backgroundColor: '#f5f3ff' }}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{t.pricing.badges.setup}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{t.pricing.badges.freeTrial}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{t.pricing.badges.cancel}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Guarantee box - компактнее */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">
                  {t.pricing.guarantee.title}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {t.pricing.guarantee.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}