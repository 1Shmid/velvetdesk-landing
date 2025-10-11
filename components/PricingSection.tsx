import { CheckCircle } from 'lucide-react'

interface PricingSectionProps {
  t: any
}

export default function PricingSection({ t }: PricingSectionProps) {
  const features = [
    'Unlimited incoming calls',
    'Smart appointment booking',
    'Follow-up messages (SMS/Email)',
    '10+ languages supported',
    'Calendar integration',
    'Real-time dashboard'
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            One plan. Everything included.
          </p>
          
          {/* Features в 2 колонки под заголовком */}
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-left">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Компактная карточка */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl border-2 border-purple-600 shadow-2xl overflow-hidden">
            {/* Цена */}
            <div className="px-8 py-8 text-center bg-gradient-to-br from-purple-50 to-white">
              <div className="mb-2">
                <span className="text-7xl font-bold text-purple-600">€350</span>
              </div>
              <p className="text-gray-600 text-lg">per month</p>
              <p className="text-sm text-gray-500 mt-2">
                + €50 one-time setup
              </p>
            </div>
            
            {/* First Month FREE badge */}
            <div className="px-8 py-5 bg-gradient-to-r from-green-500 to-green-600">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🎁</span>
                <span className="text-xl font-bold text-white">First Month FREE</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="px-8 py-6 bg-white">
              <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl">
                Get Started Now
              </button>
            </div>
            
            {/* Process - МЕЛКИЙ ТЕКСТ В ОДНУ СТРОКУ */}
            <div className="px-6 py-3 bg-gray-50">
              <p className="text-center text-xs text-gray-600 leading-tight">
                Fill form (5 min) → Pay €50 → We train AI → Go live in 48h
              </p>
            </div>
            
            {/* Trust badges */}
            <div className="px-8 py-4 bg-white">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Setup in 48 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>First month free</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Guarantee box - компактнее */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">
                  30-Day Money-Back Guarantee
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Not satisfied? Full refund, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}