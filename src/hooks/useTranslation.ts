'use client'

import { useState, useEffect } from 'react'
import { translations, defaultLanguage, Translation } from '@/lib/i18n'

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage)
  const [translation, setTranslation] = useState<Translation>(translations[defaultLanguage])

  useEffect(() => {
    // 尝试从localStorage获取语言设置
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
      setTranslation(translations[savedLanguage])
    }
    // 默认保持英文，不再自动检测浏览器语言
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