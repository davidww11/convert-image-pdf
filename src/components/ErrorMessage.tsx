'use client'

import { AlertCircle, X } from 'lucide-react'
import { AppError } from '@/types'

interface ErrorMessageProps {
  error: AppError
  onDismiss?: () => void
}

const getErrorColor = (type: AppError['type']) => {
  switch (type) {
    case 'file_format':
    case 'file_size':
    case 'total_size':
    case 'file_count':
      return 'border-orange-200 bg-orange-50 text-orange-800'
    case 'conversion':
    case 'network':
      return 'border-red-200 bg-red-50 text-red-800'
    default:
      return 'border-gray-200 bg-gray-50 text-gray-800'
  }
}

const getErrorIcon = (type: AppError['type']) => {
  return <AlertCircle size={20} />
}

export default function ErrorMessage({ error, onDismiss }: ErrorMessageProps) {
  const colorClasses = getErrorColor(error.type)

  return (
    <div className={`rounded-lg border p-4 ${colorClasses}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {getErrorIcon(error.type)}
        </div>
        
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium">
            {error.message}
          </h3>
          {error.details && (
            <p className="mt-1 text-sm opacity-90">
              {error.details}
            </p>
          )}
        </div>

        {onDismiss && (
          <div className="ml-auto flex-shrink-0">
            <button
              onClick={onDismiss}
              className="inline-flex rounded-md p-1.5 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <span className="sr-only">关闭</span>
              <X size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 