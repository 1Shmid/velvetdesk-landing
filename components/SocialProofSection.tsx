'use client';

import { Star } from 'lucide-react';

interface SocialProofSectionProps {
  t: any;
}

export default function SocialProofSection({ t }: SocialProofSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.socialProof.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.socialProof.subtitle}
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {t.socialProof.stat1.number}
            </div>
            <div className="text-gray-600">
              {t.socialProof.stat1.label}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {t.socialProof.stat2.number}
            </div>
            <div className="text-gray-600">
              {t.socialProof.stat2.label}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {t.socialProof.stat3.number}
            </div>
            <div className="text-gray-600">
              {t.socialProof.stat3.label}
            </div>
          </div>
        </div>

        {/* Отзывы - с горизонтальным свайпом на мобилке */}
        <div className="md:grid md:grid-cols-3 md:gap-8 max-w-6xl mx-auto flex md:flex-none overflow-x-auto gap-6 snap-x snap-mandatory pb-4 md:pb-0 scrollbar-hide">
          {t.socialProof.testimonials.map((testimonial: any, index: number) => (
            <div
              key={index}
              className="bg-purple-50 rounded-2xl p-8 min-w-[280px] md:min-w-0 snap-center"
            >
              {/* Звёзды */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Текст отзыва */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Автор */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}