'use client';

import { Phone, Scissors, Smile, UtensilsCrossed } from 'lucide-react';
import { useVapi } from '@/lib/useVapi';
import { ASSISTANT_IDS } from '@/lib/vapiConfig';
import { useState } from 'react';

interface HearItInActionSectionProps {
  t: any;
}

export default function HearItInActionSection({ t }: HearItInActionSectionProps) {
  const { startCall, stopCall, isCallActive } = useVapi();
  const [activeAssistantId, setActiveAssistantId] = useState<string | null>(null);

  // Маппинг векторных иконок
  const iconMap = [
    Scissors,         // Beauty Salon (ножницы)
    Smile,            // Dental Clinic (улыбка/зубы)
    UtensilsCrossed   // Restaurant (столовые приборы)
  ];

  // Маппинг Assistant IDs
  const assistantMap = [
    ASSISTANT_IDS.sofia,   // Beauty Salon
    ASSISTANT_IDS.laura,   // Dental Clinic
    ASSISTANT_IDS.carlos   // Restaurant
  ];

  const handleDemoCall = (assistantId: string) => {
    if (isCallActive && activeAssistantId === assistantId) {
      // Завершаем звонок только если это ЭТОТ агент
      stopCall();
      setActiveAssistantId(null);
    } else if (!isCallActive) {
      // Начинаем новый звонок только если НЕТ активного звонка
      startCall(assistantId);
      setActiveAssistantId(assistantId);
    }
    // Если звонок идёт с ДРУГИМ агентом - ничего не делаем
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t.hearItInAction.title}
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto">
            {t.hearItInAction.subtitle}
          </p>
        </div>
        
        {/* Карточки */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.hearItInAction.demos.map((demo: any, index: number) => {
            const IconComponent = iconMap[index];
            const assistantId = assistantMap[index];
            const isThisCardActive = isCallActive && activeAssistantId === assistantId;
            const isAnotherCardActive = isCallActive && activeAssistantId !== assistantId;
            
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${
                  isAnotherCardActive ? 'opacity-60' : ''
                }`}
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
                  {/* Иконка + Type */}
                  <div className="flex items-center gap-3 mb-4">
                    {/* Фиолетовая векторная иконка в белом круге */}
                    <div className="w-12 h-12 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-purple-600" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{demo.type}</h3>
                      <p className="text-sm text-gray-500 italic">{demo.name}</p>
                    </div>
                  </div>
                  
                  {/* Suggestions */}
                  <div className="mb-6">
                    <p className="font-semibold text-gray-600 mb-3">
                      {t.hearItInAction.trySaying}
                    </p>
                    <ul className="space-y-2">
                      {demo.suggestions.map((suggestion: string, idx: number) => (
                        <li 
                          key={idx}
                          className="text-gray-700 border-l-2 border-purple-600 pl-3 py-1 leading-relaxed"
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Call Now кнопка */}
                  <button 
                    onClick={() => handleDemoCall(assistantId)}
                    disabled={isAnotherCardActive}
                    className={`w-full flex items-center justify-center gap-3 font-semibold py-4 rounded-xl transition-all shadow-lg ${
                      isThisCardActive
                        ? 'bg-red-500 hover:bg-red-600 text-white cursor-pointer'
                        : isAnotherCardActive
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        : 'bg-green-500 hover:bg-green-600 text-white cursor-pointer'
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                    {isThisCardActive 
                      ? t.hearItInAction.endCall 
                      : isAnotherCardActive
                      ? 'Unavailable'
                      : t.hearItInAction.callButton
                    }
                  </button>
                  
                  {/* Номер телефона или статус звонка */}
                  {isThisCardActive ? (
                    <p className="text-center text-sm text-purple-600 font-medium mt-3 animate-pulse">
                      📞 {t.hearItInAction.callActive || 'Call in progress...'}
                    </p>
                  ) : (
                    <p className={`text-center text-sm mt-3 ${
                      isAnotherCardActive ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {demo.phone}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}