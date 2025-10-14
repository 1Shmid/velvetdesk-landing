// lib/useLanguage.ts
'use client'

import { useState, useEffect } from 'react'
import { translations, type Translation } from './translations'

export function useLanguage(): Translation {
  const [lang, setLang] = useState<'en' | 'es'>('en')

  useEffect(() => {
    // Определяем язык браузера
    const browserLang = navigator.language.toLowerCase()
    
    // Если испанский - используем es, иначе en
    if (browserLang.startsWith('es')) {
      setLang('es')
    } else {
      setLang('en')
    }
  }, [])

  return translations[lang]
}