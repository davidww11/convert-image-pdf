export interface ImageFile {
  id: string
  file: File
  url: string
  name: string
  size: number
  type: string
}

export interface AppConfig {
  maxFiles: number
  maxTotalSize: number // in bytes
  supportedFormats: string[]
}

export interface UploadProgress {
  total: number
  loaded: number
  percentage: number
}

export interface ConversionProgress {
  current: number
  total: number
  percentage: number
  status: 'preparing' | 'converting' | 'completed' | 'error'
}

export interface AppError {
  type: 'file_format' | 'file_size' | 'total_size' | 'file_count' | 'conversion' | 'network'
  message: string
  details?: string
} 