'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface SocialProofSectionProps {
  t: any;
}

export default function SocialProofSection({ t }: SocialProofSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalTestimonials = t.socialProof.testimonials.length;

  // Отслеживаем позицию скролла для dots
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.offsetWidth;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
        <div className="grid grid-cols-3 gap-8 mb-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {t.socialProof.stat1.number}
            </div>
            <div className="text-gray-600 text-sm">
              {t.socialProof.stat1.label}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {t.socialProof.stat2.number}
            </div>
            <div className="text-gray-600 text-sm">
              {t.socialProof.stat2.label}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {t.socialProof.stat3.number}
            </div>
            <div className="text-gray-600 text-sm">
              {t.socialProof.stat3.label}
            </div>
          </div>
        </div>

        {/* Подсказка свайпа + Dots индикатор (только мобилка) */}
        <div className="md:hidden flex flex-col items-center gap-3 mb-6">
          {/* Текст-подсказка с иконками */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ChevronLeft className="w-4 h-4 animate-pulse" />
            <span>{t.socialProof.swipeHint}</span>
            <ChevronRight className="w-4 h-4 animate-pulse" />
          </div>
          
          {/* Dots индикатор */}
          <div className="flex gap-2">
            {[...Array(totalTestimonials)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-purple-600 w-6'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Отзывы - с горизонтальным свайпом на мобилке */}
        <div
          ref={scrollRef}
          className="md:grid md:grid-cols-3 md:gap-8 max-w-6xl mx-auto flex md:flex-none overflow-x-auto gap-6 snap-x snap-mandatory pb-4 md:pb-0 scrollbar-hide"
        >
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