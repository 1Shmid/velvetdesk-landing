'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQSectionProps {
  t: any
}

export default function FAQSection({ t }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does setup take?",
      answer: "Most businesses go live within 48 hours. We handle the technical setup — you just fill out a 5-minute form about your services and pricing."
    },
    {
      question: "What languages does VelvetDesk speak?",
      answer: "VelvetDesk speaks 10+ languages fluently: Spanish, English, French, German, Italian, Portuguese, Russian, Chinese, Arabic, and more. The AI automatically detects the caller's language."
    },
    {
      question: "How does the 30-day free trial work?",
      answer: "You pay nothing for the first 30 days. We set everything up, train the AI, and you start receiving calls. If you're not satisfied, cancel anytime with no charge."
    },
    {
      question: "Does it integrate with my booking system?",
      answer: "Yes! VelvetDesk integrates with Google Calendar, Outlook, Calendly, Acuity Scheduling, Booksy, Treatwell, and most other booking systems."
    },
    {
      question: "Will the AI replace my receptionist?",
      answer: "VelvetDesk handles routine tasks (booking, rescheduling, FAQs) so your team can focus on high-value work. Complex calls are transferred to you automatically."
    },
    {
      question: "What if the AI can't answer a question?",
      answer: "If the AI encounters a question it can't handle, it will politely transfer the call to you or take a detailed message with callback information."
    },
    {
      question: "Can I customize the voice and responses?",
      answer: "Yes! During setup, we train the AI on your specific services, pricing, and business hours. You can also customize the voice tone and personality."
    },
    {
      question: "What's your refund policy?",
      answer: "30-day money-back guarantee. If you're not satisfied within the first month, we'll refund every cent — no questions asked."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        {/* FAQ Grid - 2 колонки */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {faqs.map((faq, index) => (
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