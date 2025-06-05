'use client'

import { useState, useEffect } from 'react'
import { translations, defaultLanguage, Translation } from '@/lib/i18n'

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage)
  const [translation, setTranslation] = useState<Translation>(translations[defaultLanguage])

  useEffect(() => {
    // 固定使用英文，不检查localStorage或浏览器语言
    setCurrentLanguage(defaultLanguage)
    setTranslation(translations[defaultLanguage])
  }, [])

  const changeLanguage = (languageCode: string) => {
    if (translations[languageCode]) {
      setCurrentLanguage(languageCode)
      setTranslation(translations[languageCode])
      localStorage.setItem('language', languageCode)
    }
  }

  return {
    currentLanguage,
    translation,
    changeLanguage,
    t: translation // 简写别名
  }
} 