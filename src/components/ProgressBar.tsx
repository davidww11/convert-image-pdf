'use client'

import { ConversionProgress } from '@/types'

interface ProgressBarProps {
  progress: ConversionProgress
}

const getStatusText = (status: ConversionProgress['status']) => {
  switch (status) {
    case 'preparing':
      return '准备中...'
    case 'converting':
      return '转换中...'
    case 'completed':
      return '完成'
    case 'error':
      return '出错了'
    default:
      return '处理中...'
  }
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
  const { current, total, percentage, status } = progress

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
          正在处理第 {current + 1} 张图片...
        </p>
      )}

      {status === 'completed' && (
        <p className="text-xs text-green-600 mt-2">
          PDF 文件已生成，正在下载...
        </p>
      )}

      {status === 'error' && (
        <p className="text-xs text-red-600 mt-2">
          转换过程中出现错误，请重试
        </p>
      )}
    </div>
  )
} 