'use client'

import { useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { languages } from '@/lib/i18n'
import { useTranslation } from '@/hooks/useTranslation'

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLanguage, changeLanguage } = useTranslation()

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{currentLang.name}</span>
        <span className="sm:hidden">{currentLang.flag}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-1 bg-white border rounded-lg shadow-lg z-20 min-w-[140px]">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  changeLanguage(language.code)
                  setIsOpen(false)
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 transition-colors
                  ${currentLanguage === language.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'}
                  ${language.code === languages[0].code ? 'rounded-t-lg' : ''}
                  ${language.code === languages[languages.length - 1].code ? 'rounded-b-lg' : ''}
                `}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {currentLanguage === language.code && (
                  <div className="ml-auto w-2 h-2 bg-primary-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
} 