'use client'

import { FileImage, Mail, Clock, MessageCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function Footer() {
  const { t } = useTranslation()

  const quickLinks = [
    { label: 'Image Converter', href: '#converter' },
    { label: 'Features', href: '#features' },
    { label: 'How to Use', href: '#how-to-use' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'DMCA', href: '#dmca' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3">
                <FileImage size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Image to PDF Converter</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The fastest and most reliable way to convert images to PDF for free. 
              Secure, private, and available worldwide with no registration required.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-2">
                This tool is for converting images you own or have permission to convert. 
                Please respect copyright laws and image usage rights.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span></span>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock size={16} className="mr-2" />
                <span>24/7 Online Support</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MessageCircle size={16} className="mr-2" />
                <span>Response: Within 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Image to PDF Converter. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#dmca" className="text-gray-400 hover:text-white transition-colors">
                DMCA
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 