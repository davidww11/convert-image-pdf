'use client'

import { useState, useCallback } from 'react'
import { ImageFile, ConversionProgress, AppError } from '@/types'
import { DEFAULT_CONFIG, isValidImageFormat, formatFileSize } from '@/utils/config'
import FileUpload from '@/components/FileUpload'
import ImagePreview from '@/components/ImagePreview'
import ProgressBar from '@/components/ProgressBar'
import ErrorMessage from '@/components/ErrorMessage'
import { PDFGenerator, downloadPDF } from '@/utils/pdfGenerator'

export default function Home() {
  const [images, setImages] = useState<ImageFile[]>([])
  const [isConverting, setIsConverting] = useState(false)
  const [conversionProgress, setConversionProgress] = useState<ConversionProgress | null>(null)
  const [error, setError] = useState<AppError | null>(null)

  const generateUniqueId = () => Math.random().toString(36).substr(2, 9)

  const validateFiles = useCallback((files: File[]): { valid: ImageFile[], errors: AppError[] } => {
    const errors: AppError[] = []
    const valid: ImageFile[] = []
    let totalSize = images.reduce((sum, img) => sum + img.size, 0)

    // 检查文件数量限制
    if (images.length + files.length > DEFAULT_CONFIG.maxFiles) {
      errors.push({
        type: 'file_count',
        message: `最多只能选择 ${DEFAULT_CONFIG.maxFiles} 个文件`
      })
      return { valid, errors }
    }

    for (const file of files) {
      // 检查文件格式
      if (!isValidImageFormat(file.type)) {
        errors.push({
          type: 'file_format',
          message: `不支持的文件格式: ${file.name}`,
          details: `支持的格式: JPG, PNG, WEBP, GIF, BMP`
        })
        continue
      }

      // 检查单个文件大小 (50MB)
      if (file.size > 50 * 1024 * 1024) {
        errors.push({
          type: 'file_size',
          message: `文件过大: ${file.name}`,
          details: `单个文件不能超过 50MB`
        })
        continue
      }

      // 检查总文件大小
      if (totalSize + file.size > DEFAULT_CONFIG.maxTotalSize) {
        errors.push({
          type: 'total_size',
          message: `总文件大小超限`,
          details: `所有文件总大小不能超过 ${formatFileSize(DEFAULT_CONFIG.maxTotalSize)}`
        })
        break
      }

      totalSize += file.size
      valid.push({
        id: generateUniqueId(),
        file,
        url: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        type: file.type
      })
    }

    return { valid, errors }
  }, [images])

  const handleFilesSelected = useCallback((files: File[]) => {
    setError(null)
    const { valid, errors } = validateFiles(files)
    
    if (errors.length > 0) {
      setError(errors[0]) // 显示第一个错误
      return
    }

    setImages(prev => [...prev, ...valid])
  }, [validateFiles])

  const handleRemoveImage = useCallback((id: string) => {
    setImages(prev => {
      const updated = prev.filter(img => img.id !== id)
      // 清理URL
      const removed = prev.find(img => img.id === id)
      if (removed) {
        URL.revokeObjectURL(removed.url)
      }
      return updated
    })
  }, [])

  const handleReorderImages = useCallback((newImages: ImageFile[]) => {
    setImages(newImages)
  }, [])

  const handleConvertToPDF = useCallback(async () => {
    if (images.length === 0) {
      setError({
        type: 'conversion',
        message: '请先选择要转换的图片'
      })
      return
    }

    setIsConverting(true)
    setError(null)
    setConversionProgress(null)

    try {
      const generator = new PDFGenerator((progress) => {
        setConversionProgress(progress)
      })

      const pdfBytes = await generator.generatePDF(images)
      const filename = `images_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.pdf`
      downloadPDF(pdfBytes, filename)

    } catch (err) {
      console.error('PDF生成失败:', err)
      setError({
        type: 'conversion',
        message: 'PDF生成失败',
        details: err instanceof Error ? err.message : '未知错误'
      })
    } finally {
      setIsConverting(false)
      setConversionProgress(null)
    }
  }, [images])

  const totalSize = images.reduce((sum, img) => sum + img.size, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">PicToPDF</h1>
          <p className="text-gray-600 mt-1">将图片快速转换为PDF文件</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upload Section */}
        <div className="mb-8">
          <FileUpload 
            onFilesSelected={handleFilesSelected}
            isDisabled={isConverting}
          />
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6">
            <ErrorMessage error={error} onDismiss={() => setError(null)} />
          </div>
        )}

        {/* Stats */}
        {images.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <span>已选择 {images.length} 个文件</span>
                <span>总大小: {formatFileSize(totalSize)}</span>
              </div>
              <button
                onClick={handleConvertToPDF}
                disabled={isConverting || images.length === 0}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isConverting ? '转换中...' : '转换为PDF'}
              </button>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        {isConverting && conversionProgress && (
          <div className="mb-6">
            <ProgressBar progress={conversionProgress} />
          </div>
        )}

        {/* Images Preview */}
        {images.length > 0 && (
          <ImagePreview
            images={images}
            onRemove={handleRemoveImage}
            onReorder={handleReorderImages}
            isDisabled={isConverting}
          />
        )}

        {/* Empty State */}
        {images.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">开始上传图片</h3>
            <p className="text-gray-500">
              支持 JPG、PNG、WEBP、GIF、BMP 格式，最多 {DEFAULT_CONFIG.maxFiles} 个文件
            </p>
          </div>
        )}
      </main>
    </div>
  )
} 