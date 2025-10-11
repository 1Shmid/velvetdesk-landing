'use client'

import { Phone } from 'lucide-react'

interface HearItInActionSectionProps {
  t: any
}

export default function HearItInActionSection({ t }: HearItInActionSectionProps) {
  const demos = [
    {
      emoji: '💇',
      type: 'Beauty Salon',
      name: 'Bella Hair Studio',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop',
      phone: '+34 xxx xxx xxx',
      suggestions: [
        '"I\'d like to book a haircut for tomorrow"',
        '"What are your prices for highlights?"',
        '"Do you do your own manicures?"'
      ]
    },
    {
      emoji: '🦷',
      type: 'Dental Clinic',
      name: 'SmileCenter',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      phone: '+34 xxx xxx xxx',
      suggestions: [
        '"I need to book a cleaning appointment"',
        '"Do you accept emergency patients?"',
        '"What\'s the cost for a teeth whitening?"'
      ]
    },
    {
      emoji: '🍽️',
      type: 'Restaurant',
      name: 'La Terrazza',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
      phone: '+34 xxx xxx xxx',
      suggestions: [
        '"I\'d like to reserve a table for 4 people tonight"',
        '"Do you have vegetarian options?"',
        '"What time do you close?"'
      ]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Hear It In Action
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto">
            Call our demo businesses right now. Speak freely in the language you prefer. The system will adapt automatically.
          </p>
        </div>
        
        {/* Карточки */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demos.map((demo, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Фото */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={demo.image} 
                  alt={demo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Контент */}
              <div className="p-6 text-gray-900">
                {/* Emoji + Type */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{demo.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold">{demo.type}</h3>
                    <p className="text-sm text-gray-500 italic">{demo.name}</p>
                  </div>
                </div>
                
                {/* Suggestions */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-600 mb-3">
                    Try saying:
                  </p>
                  <ul className="space-y-2">
                    {demo.suggestions.map((suggestion, idx) => (
                      <li 
                        key={idx}
                        className="text-sm text-gray-700 border-l-2 border-purple-600 pl-3 py-1"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Call Now кнопка */}
                <button className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
                
                {/* Номер телефона */}
                <p className="text-center text-sm text-gray-500 mt-3">
                  {demo.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}