'use client'

import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface SocialProofSectionProps {
  t: any
}

export default function SocialProofSection({ t }: SocialProofSectionProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % t.socialProof.testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + t.socialProof.testimonials.length) % t.socialProof.testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.socialProof.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.socialProof.subtitle}
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-20">
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-600 mb-2">
              {t.socialProof.stat1.number}
            </div>
            <div className="text-gray-600 text-lg">
              {t.socialProof.stat1.label}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-600 mb-2">
              {t.socialProof.stat2.number}
            </div>
            <div className="text-gray-600 text-lg">
              {t.socialProof.stat2.label}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-600 mb-2">
              {t.socialProof.stat3.number}
            </div>
            <div className="text-gray-600 text-lg">
              {t.socialProof.stat3.label}
            </div>
          </div>
        </div>
        
        {/* CAROUSEL ОТЗЫВОВ */}
        <div className="max-w-3xl mx-auto relative">
          {/* Отзыв */}
          <div className="bg-purple-50 rounded-2xl p-10 shadow-sm">
            {/* Кавычка */}
            <div className="text-purple-300 text-6xl leading-none mb-4 font-serif">"</div>
            
            {/* Текст отзыва */}
            <p className="text-lg text-gray-800 italic leading-relaxed mb-8 min-h-[100px]">
              {t.socialProof.testimonials[currentTestimonial].text}
            </p>
            
            {/* Автор */}
            <div className="flex items-center gap-4">
              {/* Фото (реальное из Unsplash) */}
              <img 
                src={t.socialProof.testimonials[currentTestimonial].image}
                alt={t.socialProof.testimonials[currentTestimonial].author}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>
                <p className="font-semibold text-gray-900">
                  {t.socialProof.testimonials[currentTestimonial].author}
                </p>
                <p className="text-sm text-gray-600">
                  {t.socialProof.testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>
          
          {/* Навигационные стрелки */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-purple-600" />
            </button>
            
            {/* Индикаторы */}
            <div className="flex items-center gap-2">
              {t.socialProof.testimonials.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-purple-600 w-8' 
                      : 'bg-purple-300 hover:bg-purple-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}