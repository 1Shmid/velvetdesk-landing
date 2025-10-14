// lib/useVapi.ts
'use client';

import { useEffect, useState } from 'react';
import Vapi from '@vapi-ai/web';

const PUBLIC_KEY = 'b6b162b1-35d1-4a29-90c9-7d8f0d39628b';

export function useVapi() {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);

  useEffect(() => {
    const vapiInstance = new Vapi(PUBLIC_KEY);
    setVapi(vapiInstance);

    // Слушаем события звонка
    vapiInstance.on('call-start', () => {
      setIsCallActive(true);
    });

    vapiInstance.on('call-end', () => {
      setIsCallActive(false);
    });

    return () => {
      vapiInstance.stop();
    };
  }, []);

  const startCall = (assistantId: string) => {
    if (vapi) {
      vapi.start(assistantId);
    }
  };

  const stopCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return { startCall, stopCall, isCallActive };
}