'use client'

import { Shield, Upload, Settings, Zap } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const featureIcons = [Zap, Shield, Upload, Settings]

export default function Features() {
  const { t } = useTranslation()

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index] || Zap
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-200"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors">
                  <Icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 