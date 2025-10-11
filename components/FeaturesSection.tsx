import { Phone, Calendar, MessageSquare } from 'lucide-react'

interface FeaturesSectionProps {
  t: any
}

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  const features = [
    {
      icon: Phone,
      title: "24/7 Call Answering",
      description: "Never miss a call again. Your AI receptionist answers instantly, books appointments, and takes messages — even at 3 AM."
    },
    {
      icon: Calendar,
      title: "Smart Booking",
      description: "Syncs with your calendar in real-time. Confirms, reschedules and sends reminders automatically. No double-bookings."
    },
    {
      icon: MessageSquare,
      title: "Follow-Up Messages",
      description: "Sends thank-you messages, review requests, and personalized offers after every visit. Builds loyalty on autopilot."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What VelvetDesk Does For You
          </h2>
          <p className="text-xl text-gray-600">
            All the support your customers need, without hiring anyone new.
          </p>
        </div>
        
        {/* Сетка карточек */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Иконка в круге */}
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Заголовок */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              {/* Подчеркивание (как в Figma) */}
              <div className="w-12 h-1 bg-purple-600 mb-4"></div>
              
              {/* Описание */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}