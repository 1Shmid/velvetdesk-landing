'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQSectionProps {
  t: any
}

export default function FAQSection({ t }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.faq.title}
          </h2>
        </div>
        
        {/* FAQ Grid - 2 колонки */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {t.faq.items.map((faq: any, index: number) => (
              <div
                key={index}
                className="border-b border-gray-200"
              >
                {/* Вопрос */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 flex items-start justify-between gap-4 text-left hover:bg-purple-50 transition-colors px-4 -mx-4 rounded-lg"
                >
                  <span className="text-lg font-semibold text-purple-600 flex-1">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-1">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-purple-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-purple-600" />
                    )}
                  </span>
                </button>
                
                {/* Ответ */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-5 px-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}