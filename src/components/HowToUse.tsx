'use client'

import { Upload, MousePointer, Download } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function HowToUse() {
  const { t } = useTranslation()

  const steps = [
    {
      number: '1',
      icon: Upload,
      title: 'Select Images',
      description: 'Choose multiple images from your device or drag & drop them into the upload area. Supports JPG, PNG, WEBP, GIF, and BMP formats.'
    },
    {
      number: '2', 
      icon: MousePointer,
      title: 'Arrange & Preview',
      description: 'Drag and drop to reorder your images as needed. Preview the arrangement and make sure everything looks perfect.'
    },
    {
      number: '3',
      icon: Download,
      title: 'Convert & Download',
      description: 'Click the convert button and your PDF will be generated instantly. Download your merged PDF file to your device.'
    }
  ]

  return (
    <section id="how-to-use" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Convert Images to PDF
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Convert your images to PDF in just 3 simple steps. No technical knowledge required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center group">
                {/* Step Number & Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-200">
                    {step.number}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full border-4 border-primary-100 flex items-center justify-center">
                    <Icon size={20} className="text-primary-600" />
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Line (except last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent transform translate-x-1/2"></div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#converter"
            className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Try it Now - It's Free!
          </a>
        </div>
      </div>
    </section>
  )
} 