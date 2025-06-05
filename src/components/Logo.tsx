'use client'

import { FileImage } from 'lucide-react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`
        ${sizeClasses[size]} 
        bg-gradient-to-br from-primary-500 to-primary-600 
        rounded-lg flex items-center justify-center
        shadow-lg
      `}>
        <FileImage 
          size={size === 'sm' ? 14 : size === 'md' ? 18 : 24} 
          className="text-white" 
        />
      </div>
      {showText && (
        <span className={`
          font-bold bg-gradient-to-r from-primary-600 to-primary-700 
          bg-clip-text text-transparent
          ${textSizeClasses[size]}
        `}>
          Image to PDF Converter
        </span>
      )}
    </div>
  )
} 