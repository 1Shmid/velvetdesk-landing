import { FileText, Euro, Link2, Rocket, ArrowRight } from 'lucide-react'
import React from 'react'

interface HowToGetStartedSectionProps {
  t: any
}

export default function HowToGetStartedSection({ t }: HowToGetStartedSectionProps) {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Sign Up",
      description: "Fill out a 5-min form about your business.",
      time: "Time: 10 minutes"
    },
    {
      number: 2,
      icon: Euro,
      title: "Setup & Training",
      description: "One-time payment: €50\nWhat's included:\n• Train AI on your services & pricing\n• Test everything before going live",
      time: "Time: 48 hours"
    },
    {
      number: 3,
      icon: Link2,
      title: "Connect",
      description: "We connect your AI to your phone line & booking system.",
      time: "Time: 1 hour"
    },
    {
      number: 4,
      icon: Rocket,
      title: "Go Live",
      description: "Start receiving calls. Monitor from dashboard. 30-day free trial. No risk.",
      time: "Time: Day 3+"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How to Get Started
          </h2>
          <p className="text-xl text-gray-600">
            From signup to first call in 48 hours.
          </p>
        </div>
        
        {/* Сетка шагов с стрелками */}
        <div className="flex items-stretch justify-center gap-6 max-w-7xl mx-auto flex-wrap lg:flex-nowrap">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Карточка */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative min-h-[380px] flex flex-col flex-1 min-w-[250px] max-w-[280px]">
                {/* Номер в круге - СЛЕВА ВВЕРХУ */}
                <div className="absolute -top-4 left-6 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                
                {/* Иконка */}
                <div className="w-16 h-16 mt-4 mb-4 flex items-center justify-start">
                  <step.icon className="w-16 h-16 text-purple-600 stroke-[1.5]" />
                </div>
                
                {/* Заголовок */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                {/* Подчеркивание */}
                <div className="w-12 h-1 bg-purple-600 mb-4"></div>
                
                {/* Описание - занимает оставшееся место */}
                <p className="text-gray-600 leading-relaxed text-sm mb-4 whitespace-pre-line flex-1">
                  {step.description}
                </p>
                
                {/* Время - всегда внизу */}
                <p className="text-gray-400 text-xs italic">
                  {step.time}
                </p>
              </div>
              
              {/* СТРЕЛОЧКА МЕЖДУ КАРТОЧКАМИ (кроме последней) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}