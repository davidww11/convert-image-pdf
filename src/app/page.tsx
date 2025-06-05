'use client'

import { useState, useCallback } from 'react'
import { ImageFile, ConversionProgress, AppError } from '@/types'
import { DEFAULT_CONFIG, isValidImageFormat, formatFileSize } from '@/utils/config'
import { useTranslation } from '@/hooks/useTranslation'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FileUpload from '@/components/FileUpload'
import ImagePreview from '@/components/ImagePreview'
import ProgressBar from '@/components/ProgressBar'
import ErrorMessage from '@/components/ErrorMessage'
import Features from '@/components/Features'
import HowToUse from '@/components/HowToUse'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { PDFGenerator, downloadPDF } from '@/utils/pdfGenerator'

export default function Home() {
  const { t } = useTranslation()
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
        message: `${t.errorFileCount} (${DEFAULT_CONFIG.maxFiles})`
      })
      return { valid, errors }
    }

    for (const file of files) {
      // 检查文件格式
      if (!isValidImageFormat(file.type)) {
        errors.push({
          type: 'file_format',
          message: `${t.errorFileFormat} ${file.name}`,
          details: t.supportedFormats
        })
        continue
      }

      // 检查单个文件大小 (50MB)
      if (file.size > 50 * 1024 * 1024) {
        errors.push({
          type: 'file_size',
          message: `${t.errorFileSize} ${file.name}`,
          details: t.maxFileSize
        })
        continue
      }

      // 检查总文件大小
      if (totalSize + file.size > DEFAULT_CONFIG.maxTotalSize) {
        errors.push({
          type: 'total_size',
          message: t.errorTotalSize,
          details: `${t.maxTotalSize}: ${formatFileSize(DEFAULT_CONFIG.maxTotalSize)}`
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
        message: t.errorSelectImages
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
      console.error('PDF generation failed:', err)
      setError({
        type: 'conversion',
        message: t.errorConversion,
        details: err instanceof Error ? err.message : 'Unknown error'
      })
    } finally {
      setIsConverting(false)
      setConversionProgress(null)
    }
  }, [images])

  const totalSize = images.reduce((sum, img) => sum + img.size, 0)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Converter Section */}
      <section id="converter" className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            {/* Error Display */}
            {error && (
              <div className="mb-6">
                <ErrorMessage error={error} onDismiss={() => setError(null)} />
              </div>
            )}

            {/* Upload Section */}
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              isDisabled={isConverting}
            />

            {/* Stats and Actions */}
            {images.length > 0 && (
              <div className="mt-8">
                {/* File Stats */}
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-4 mb-6 border border-primary-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm">
                      <span className="flex items-center text-primary-700 font-medium">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        {images.length} {t.selectedFiles}
                      </span>
                      <span className="text-gray-600">{t.totalSize} {formatFileSize(totalSize)}</span>
                    </div>
                    <button
                      onClick={() => setImages([])}
                      className="text-xs text-gray-500 hover:text-red-600 transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                {/* Convert Button */}
                <div className="mb-6 flex justify-center">
                  <button
                    onClick={handleConvertToPDF}
                    disabled={isConverting || images.length === 0}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-12 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-lg min-w-[200px]"
                  >
                    {isConverting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t.converting}
                      </span>
                    ) : (
                      `🔄 ${t.convertButton}`
                    )}
                  </button>
                </div>

                {/* Progress Bar */}
                {isConverting && conversionProgress && (
                  <div className="mb-6">
                    <ProgressBar progress={conversionProgress} />
                  </div>
                )}

                {/* Images Preview */}
                <ImagePreview
                  images={images}
                  onRemove={handleRemoveImage}
                  onReorder={handleReorderImages}
                  isDisabled={isConverting}
                />
              </div>
            )}

            {/* Empty State */}
            {images.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{t.emptyStateTitle}</h3>
                <p className="text-gray-500">
                  {t.emptyStateDesc}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* How To Use Section */}
      <HowToUse />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  )
} 