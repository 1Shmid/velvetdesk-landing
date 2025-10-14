'use client'

import { FileText, Settings, Link2, Rocket, ArrowRight } from 'lucide-react'
import React from 'react'

interface HowToGetStartedSectionProps {
  t: any
}

export default function HowToGetStartedSection({ t }: HowToGetStartedSectionProps) {
  // Маппинг иконок
  const iconMap = [
    FileText,    // Sign Up
    Settings,    // Setup & Training
    Link2,       // Connect
    Rocket       // Go Live
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.howToStart.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.howToStart.subtitle}
          </p>
        </div>
        
        {/* Сетка шагов с стрелками */}
        <div className="flex items-stretch justify-center gap-6 max-w-7xl mx-auto flex-wrap lg:flex-nowrap">
          {t.howToStart.steps.map((step: any, index: number) => {
            const IconComponent = iconMap[index]
            
            return (
              <React.Fragment key={index}>
                {/* Карточка */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative min-h-[380px] flex flex-col flex-1 min-w-[250px] max-w-[280px]">
                  {/* Номер в круге - СЛЕВА ВВЕРХУ */}
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  {/* Иконка */}
                  <div className="w-16 h-16 mt-4 mb-4 flex items-center justify-start">
                    <IconComponent className="w-16 h-16 text-purple-600 stroke-[1.5]" />
                  </div>
                  
                  {/* Заголовок */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Подчеркивание */}
                  <div className="w-12 h-1 bg-purple-600 mb-4"></div>
                  
                  {/* Описание - УБРАЛИ text-sm, теперь text-base (как в Features) */}
                  <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line flex-1">
                    {step.description}
                  </p>
                  
                  {/* Время - всегда внизу */}
                  <p className="text-gray-400 text-xs italic">
                    {step.time}
                  </p>
                </div>
                
                {/* СТРЕЛОЧКА МЕЖДУ КАРТОЧКАМИ (кроме последней) */}
                {index < t.howToStart.steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}