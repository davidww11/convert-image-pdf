'use client'

import { ConversionProgress } from '@/types'
import { useTranslation } from '@/hooks/useTranslation'

interface ProgressBarProps {
  progress: ConversionProgress
}

const getStatusColor = (status: ConversionProgress['status']) => {
  switch (status) {
    case 'preparing':
      return 'bg-blue-500'
    case 'converting':
      return 'bg-primary-500'
    case 'completed':
      return 'bg-green-500'
    case 'error':
      return 'bg-red-500'
    default:
      return 'bg-gray-500'
  }
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const { t } = useTranslation()
  const { current, total, percentage, status } = progress

  const getStatusText = (status: ConversionProgress['status']) => {
    switch (status) {
      case 'preparing':
        return t.preparing
      case 'converting':
        return t.converting_progress
      case 'completed':
        return t.completed
      case 'error':
        return t.error
      default:
        return t.converting_progress
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          {getStatusText(status)}
        </span>
        <span className="text-sm text-gray-500">
          {current} / {total} ({percentage}%)
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${getStatusColor(status)}`}
          style={{ width: `${Math.max(0, Math.min(100, percentage))}%` }}
        />
      </div>

      {status === 'converting' && (
        <p className="text-xs text-gray-500 mt-2">
          {t.processingImage} {current + 1}...
        </p>
      )}

      {status === 'completed' && (
        <p className="text-xs text-green-600 mt-2">
          {t.pdfGenerated}
        </p>
      )}

      {status === 'error' && (
        <p className="text-xs text-red-600 mt-2">
          {t.conversionError}
        </p>
      )}
    </div>
  )
} 