'use client'

import { Phone, Calendar, Globe, MessageSquare, BarChart3, Zap } from 'lucide-react'

interface FeaturesSectionProps {
  t: any
}

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  // Маппинг иконок
  const iconMap = {
    0: Phone,      // 24/7 Call Answering
    1: Calendar,   // Smart Appointment Booking
    2: Globe,      // 10+ Languages Supported
    3: MessageSquare, // Instant Follow-ups
    4: BarChart3,  // Real-Time Dashboard
    5: Zap         // Instant Setup
  }

  return (
    <section className="py-24" style={{ backgroundColor: '#f5f3ff' }}>
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>
        
        {/* Сетка карточек */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.features.items.map((feature: any, index: number) => {
            const IconComponent = iconMap[index as keyof typeof iconMap]
            
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                {/* Иконка в фиолетовом круге - БЕЛАЯ ВЕКТОРНАЯ */}
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                
                {/* Заголовок */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Подчеркивание */}
                <div className="w-12 h-1 bg-purple-600 mb-4"></div>
                
                {/* Описание */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}