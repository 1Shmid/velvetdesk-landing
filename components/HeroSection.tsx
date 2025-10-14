'use client';

import { Phone, CheckCircle } from 'lucide-react';
import { useVapi } from '@/lib/useVapi';
import { ASSISTANT_IDS } from '@/lib/vapiConfig';

interface HeroSectionProps {
  t: any;
}

export default function HeroSection({ t }: HeroSectionProps) {
  const { startCall, stopCall, isCallActive } = useVapi();

  const handleDemoCall = () => {
    if (isCallActive) {
      stopCall();
    } else {
      startCall(ASSISTANT_IDS.marta);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center relative overflow-hidden py-20">
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="space-y-6">
            {/* Логотип */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">{t.hero.logo}</span>
            </div>
            
            {/* Заголовок */}
            <h1 className="text-5xl lg:text-[56px] font-bold text-gray-900 leading-[1.1] tracking-tight">
              {t.hero.title}
            </h1>
            
            {/* Подзаголовок */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            {/* Экономия */}
            <p className="text-lg text-gray-700">
              {t.hero.pricing}{' '}
              <span className="text-green-500 font-semibold">{t.hero.savings}</span>
              {' '}{t.hero.savingsText}
            </p>
            
            {/* Кнопка CTA */}
            <div className="flex flex-col items-start gap-3 pt-4">
              <button 
                onClick={handleDemoCall}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl ${
                  isCallActive
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                <Phone className="w-6 h-6" />
                {isCallActive ? t.hero.endCall : t.hero.ctaButton}
              </button>
              
              {isCallActive && (
                <p className="text-sm text-purple-600 font-medium animate-pulse">
                  📞 {t.hero.callActive}
                </p>
              )}
              
              {!isCallActive && (
                <>
                  <p className="text-sm text-gray-500">
                    {t.hero.ctaSubtext}
                  </p>
                  
                  <a href="#pricing" className="text-purple-600 font-medium hover:underline">
                    {t.hero.ctaLink}
                  </a>
                </>
              )}
            </div>
          </div>
          
          {/* ПРАВАЯ КОЛОНКА - Phone mockup */}
          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div className="relative w-[280px] h-[580px]">
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
                <div className={`absolute inset-3 rounded-[2.5rem] overflow-hidden transition-all ${
                  isCallActive 
                    ? 'bg-gradient-to-b from-green-500 to-green-600' 
                    : 'bg-gradient-to-b from-purple-600 to-purple-700'
                }`}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                  
                  <div className="flex flex-col items-center justify-between h-full py-12 px-6">
                    <p className={`text-sm ${isCallActive ? 'text-green-100' : 'text-purple-200'}`}>
                      {isCallActive ? t.hero.callActive : t.hero.phoneScreen.incomingCall}
                    </p>
                    
                    <div className="flex flex-col items-center gap-6">
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                        isCallActive ? 'bg-green-400 animate-pulse' : 'bg-purple-500'
                      }`}>
                        <Phone className="w-12 h-12 text-white" />
                      </div>
                      
                      <div className="text-center">
                        <p className="text-white font-semibold text-lg">{t.hero.phoneScreen.assistantName}</p>
                        <p className={`text-sm mt-1 ${isCallActive ? 'text-green-100' : 'text-purple-200'}`}>
                          {t.hero.phoneScreen.phoneNumber}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-16">
                      <button 
                        onClick={isCallActive ? stopCall : undefined}
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                          isCallActive
                            ? 'bg-red-500 hover:bg-red-600 cursor-pointer hover:scale-110'
                            : 'bg-red-500 opacity-70 cursor-not-allowed'
                        }`}
                        disabled={!isCallActive}
                      >
                        <Phone className="w-7 h-7 text-white rotate-135" />
                      </button>
                      
                      <button 
                        onClick={handleDemoCall}
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${
                          isCallActive
                            ? 'bg-gray-400 cursor-not-allowed opacity-70'
                            : 'bg-green-500 hover:bg-green-600 cursor-pointer hover:scale-110'
                        }`}
                        disabled={isCallActive}
                      >
                        <Phone className="w-7 h-7 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-col items-center gap-2 text-sm text-gray-600 w-[280px]">
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{t.hero.badges.setup}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{t.hero.badges.freeTrial}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>{t.hero.badges.cancel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}