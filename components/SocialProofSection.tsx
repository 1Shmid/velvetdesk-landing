'use client'

import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface SocialProofSectionProps {
  t: any
}

export default function SocialProofSection({ t }: SocialProofSectionProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const logos = [
    { name: 'Bella Salon', category: 'Beauty' },
    { name: 'Dr. García Dental', category: 'Healthcare' },
    { name: 'La Terrazza', category: 'Restaurant' },
    { name: 'Global Travel', category: 'Agency' },
    { name: 'Fitness Hub', category: 'Gym' }
  ]

  const testimonials = [
    {
      text: "VelvetDesk doubled our bookings in the first month. Customers love that they can call anytime and get instant answers — even at 11 PM.",
      author: "Maria González, Owner",
      company: "Bella Beauty Salon, Madrid",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200"
    },
    {
      text: "We used to miss 30% of calls after hours. Now VelvetDesk handles everything — appointment booking, service questions, even rescheduling. Our patients love it!",
      author: "Dr. Carlos Méndez",
      company: "SmileCenter Dental Clinic, Barcelona",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200"
    },
    {
      text: "Best decision we made this year. VelvetDesk books tables 24/7 and confirms reservations automatically. It pays for itself in the first week!",
      author: "Paolo Rossi",
      company: "La Terrazza Restaurant, Valencia",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Заголовок */}
        <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Trusted by Businesses Across Europe
            </h2>
            <p className="text-xl text-gray-600">
                Real stories from real customers
            </p>
            </div>
        
        
        
        {/* CAROUSEL ОТЗЫВОВ */}
        <div className="max-w-3xl mx-auto relative">
          {/* Отзыв */}
          <div className="bg-purple-50 rounded-2xl p-10 shadow-sm">
            {/* Кавычка */}
            <div className="text-purple-300 text-6xl leading-none mb-4 font-serif">"</div>
            
            {/* Текст отзыва */}
            <p className="text-lg text-gray-800 italic leading-relaxed mb-8 min-h-[100px]">
              {testimonials[currentTestimonial].text}
            </p>
            
            {/* Автор */}
            <div className="flex items-center gap-4">
              {/* Фото (реальное из Unsplash) */}
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].author}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>
                <p className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentTestimonial].company}
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
              {testimonials.map((_, index) => (
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