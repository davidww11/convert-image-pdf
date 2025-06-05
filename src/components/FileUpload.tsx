'use client'

import { useCallback, useState } from 'react'
import { Upload, Image as ImageIcon } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void
  isDisabled?: boolean
}

export default function FileUpload({ onFilesSelected, isDisabled = false }: FileUploadProps) {
  const { t } = useTranslation()
  const [isDragOver, setIsDragOver] = useState(false)

  const handleFileSelect = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return
    const fileArray = Array.from(files)
    onFilesSelected(fileArray)
  }, [onFilesSelected])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    if (!isDisabled) {
      setIsDragOver(true)
    }
  }, [isDisabled])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    if (isDisabled) return
    
    const files = e.dataTransfer.files
    handleFileSelect(files)
  }, [handleFileSelect, isDisabled])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files)
    // 重置input值，允许重复选择同一文件
    e.target.value = ''
  }, [handleFileSelect])

  return (
    <div className="w-full">
      <div
        className={`
          relative border-3 border-dashed rounded-xl p-8 text-center transition-all duration-300
          ${isDragOver 
            ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-blue-50 shadow-lg scale-105' 
            : 'border-primary-300 bg-gradient-to-br from-gray-50 to-white hover:border-primary-400 hover:shadow-md'
          }
          ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-102'}
        `}
        style={{ borderWidth: '3px' }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => {
          if (!isDisabled) {
            document.getElementById('file-input')?.click()
          }
        }}
      >
        <input
          id="file-input"
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleInputChange}
          disabled={isDisabled}
        />
        
        <div className="space-y-4">
          {/* Icon */}
          <div className={`mx-auto w-16 h-16 p-3 rounded-full transition-all duration-300 ${
            isDragOver 
              ? 'bg-primary-500 text-white scale-110' 
              : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
          }`}>
            {isDragOver ? (
              <Upload className="w-full h-full" />
            ) : (
              <ImageIcon className="w-full h-full" />
            )}
          </div>
          
          {/* Main Content */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isDragOver ? '📂 Drop files here' : `📸 ${t.uploadTitle}`}
            </h3>
            <p className="text-base text-gray-600 mb-3">
              {t.uploadDragText} <span className="text-primary-600 font-semibold underline decoration-2 underline-offset-2">{t.uploadClickText}</span>
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                ✅ {t.uploadFormats}
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                📊 {t.uploadLimit}
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                🔒 100% Secure
              </span>
            </div>
            
            {/* CTA Button */}
            <div className="mt-4">
              <button 
                type="button"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={(e) => {
                  e.stopPropagation()
                  if (!isDisabled) {
                    document.getElementById('file-input')?.click()
                  }
                }}
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Choose Images
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 