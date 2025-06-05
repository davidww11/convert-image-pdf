'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Is this image to PDF converter free?',
      answer: 'Yes, our image to PDF converter is completely free to use with no hidden costs, subscription fees, or registration requirements. You can convert unlimited images to PDF.'
    },
    {
      question: 'How many images can I convert at once?',
      answer: 'You can convert up to 500 images in a single batch. The total file size limit is 500MB to ensure optimal performance and quick processing.'
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support all major image formats including JPG, JPEG, PNG, WEBP, GIF, and BMP. The converter automatically handles different formats and converts them to a single PDF file.'
    },
    {
      question: 'Is my data safe and secure?',
      answer: 'Absolutely! All image processing is done locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security of your files.'
    },
    {
      question: 'Do I need to install any software?',
      answer: 'No installation required! Our converter works entirely in your web browser. It\'s compatible with all modern browsers including Chrome, Firefox, Safari, and Edge.'
    },
    {
      question: 'Can I reorder my images before converting?',
      answer: 'Yes! You can easily drag and drop to reorder your images before conversion. The PDF will maintain the order you set, giving you complete control over the final document.'
    },
    {
      question: 'What quality will my PDF have?',
      answer: 'Your PDF will maintain the original quality of your images. We don\'t compress or reduce image quality during the conversion process, ensuring your PDF looks exactly as intended.'
    },
    {
      question: 'Does it work on mobile devices?',
      answer: 'Yes! Our converter is fully responsive and works perfectly on smartphones and tablets. You can convert images to PDF on any device with a modern web browser.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our image to PDF converter
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
} 