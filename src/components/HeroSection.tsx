'use client'

import { useTranslation } from '@/hooks/useTranslation'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="converter" className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
            {t.headerTitle}
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
          {t.headerSubtitle}
        </p>

        {/* Key Features Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            ⚡ Lightning Fast
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            🆓 100% Free
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            🔒 Secure & Private
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            📱 Mobile Friendly
          </span>
        </div>

        {/* Trust Indicators */}
        <div className="text-center text-gray-500 text-xs">
          <p className="mb-1">✓ No registration required • ✓ No watermarks • ✓ Unlimited conversions</p>
          <p>✓ Supports up to 500 images • ✓ Multiple formats • ✓ Works offline</p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
} 