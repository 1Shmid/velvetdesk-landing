'use client'

import { Phone, CheckCircle } from 'lucide-react'

interface HeroSectionProps {
  t: any
}

export default function HeroSection({ t }: HeroSectionProps) {
  const handleDemoCall = () => {
    // Здесь будет логика запуска demo call
    // Пока просто прокрутка к demo секции
    const demoSection = document.querySelector('#demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      alert('Demo call feature coming soon! Call +34 xxx xxx xxx to try now.')
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center relative overflow-hidden py-20">
      {/* Фоновая текстура */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* ЛЕВАЯ КОЛОНКА - Текст */}
          <div className="space-y-6">
            {/* Логотип */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">VelvetDesk</span>
            </div>
            
            {/* Заголовок */}
            <h1 className="text-5xl lg:text-[56px] font-bold text-gray-900 leading-[1.1] tracking-tight">
              Your AI Receptionist That Never Sleeps.
            </h1>
            
            {/* Подзаголовок */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Answers calls 24/7. Books appointments. Speaks 10+ languages.
            </p>
            
            {/* Экономия */}
            <p className="text-lg text-gray-700">
              From €350/month. Saves you{' '}
              <span className="text-green-500 font-semibold">€1,650/month</span>
              {' '}vs hiring an admin.
            </p>
            
            {/* Кнопка CTA */}
            <div className="flex flex-col items-start gap-3 pt-4">
              <button 
                onClick={handleDemoCall}
                className="flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold text-lg hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-6 h-6" />
                Try a Demo Call Now
              </button>
              
              <p className="text-sm text-gray-500">
                Free • Takes 30 seconds • No signup
              </p>
              
              <a href="#pricing" className="text-purple-600 font-medium hover:underline">
                Or start your 30-day free trial →
              </a>
            </div>
          </div>
          
          {/* ПРАВАЯ КОЛОНКА - Phone mockup */}
          <div className="flex flex-col items-center gap-6 lg:items-end">
            {/* Реалистичный телефон */}
            <div className="relative w-[280px] h-[580px]">
              {/* Корпус телефона */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
                {/* Экран */}
                <div className="absolute inset-3 bg-gradient-to-b from-purple-600 to-purple-700 rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                  
                  {/* Содержимое экрана */}
                  <div className="flex flex-col items-center justify-between h-full py-12 px-6">
                    {/* Incoming Call текст */}
                    <p className="text-purple-200 text-sm">Incoming Call...</p>
                    
                    {/* Иконка телефона в круге */}
                    <div className="flex flex-col items-center gap-6">
                      <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center">
                        <Phone className="w-12 h-12 text-white" />
                      </div>
                      
                      <div className="text-center">
                        <p className="text-white font-semibold text-lg">VelvetDesk AI Assistant</p>
                        <p className="text-purple-200 text-sm mt-1">+34 xxx xxx xxx</p>
                      </div>
                    </div>
                    
                    {/* Кнопки ответа - ТЕПЕРЬ КЛИКАБЕЛЬНЫЕ */}
                    <div className="flex gap-16">
                      {/* Отклонить - декоративная */}
                      <button 
                        className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all cursor-not-allowed opacity-70"
                        disabled
                        title="Decline call (demo)"
                      >
                        <Phone className="w-7 h-7 text-white rotate-135" />
                      </button>
                      
                      {/* Принять - АКТИВНАЯ КНОПКА */}
                      <button 
                        onClick={handleDemoCall}
                        className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg"
                        title="Answer call - Try demo"
                      >
                        <Phone className="w-7 h-7 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust badges - 2 СТРОКИ (2+1), ЦЕНТРИРОВАННЫЕ */}
            <div className="flex flex-col items-center gap-2 text-sm text-gray-600 w-[280px]">
              {/* Первая строка: 2 элемента */}
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Setup in 48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>First month free</span>
                </div>
              </div>
              
              {/* Вторая строка: 1 элемент по центру */}
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}