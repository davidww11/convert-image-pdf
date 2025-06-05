import { AppConfig } from '@/types'

export const DEFAULT_CONFIG: AppConfig = {
  maxFiles: 500,
  maxTotalSize: 500 * 1024 * 1024, // 500MB
  supportedFormats: [
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/webp',
    'image/gif',
    'image/bmp'
  ]
}

export const FILE_SIZE_LIMITS = {
  maxSingleFile: 50 * 1024 * 1024, // 50MB per file
}

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export const isValidImageFormat = (type: string): boolean => {
  return DEFAULT_CONFIG.supportedFormats.includes(type)
} 