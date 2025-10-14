'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Vapi from '@vapi-ai/web';

const PUBLIC_KEY = 'b6b162b1-35d1-4a29-90c9-7d8f0d39628b';

interface VapiContextType {
  startCall: (assistantId: string) => void;
  stopCall: () => void;
  isCallActive: boolean;
  activeAssistantId: string | null;
}

const VapiContext = createContext<VapiContextType | undefined>(undefined);

export function VapiProvider({ children }: { children: ReactNode }) {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [activeAssistantId, setActiveAssistantId] = useState<string | null>(null);

  useEffect(() => {
    const vapiInstance = new Vapi(PUBLIC_KEY);
    setVapi(vapiInstance);

    vapiInstance.on('call-start', () => {
      setIsCallActive(true);
    });

    vapiInstance.on('call-end', () => {
      setIsCallActive(false);
      setActiveAssistantId(null);
    });

    return () => {
      vapiInstance.stop();
    };
  }, []);

  const startCall = (assistantId: string) => {
    if (vapi && !isCallActive) {
      vapi.start(assistantId);
      setActiveAssistantId(assistantId);
    }
  };

  const stopCall = () => {
    if (vapi) {
      vapi.stop();
      setActiveAssistantId(null);
    }
  };

  return (
    <VapiContext.Provider value={{ startCall, stopCall, isCallActive, activeAssistantId }}>
      {children}
    </VapiContext.Provider>
  );
}

export function useVapi() {
  const context = useContext(VapiContext);
  if (context === undefined) {
    throw new Error('useVapi must be used within a VapiProvider');
  }
  return context;
}