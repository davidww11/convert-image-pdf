'use client'

import { useCallback, useState } from 'react'
import { Upload, Image as ImageIcon } from 'lucide-react'

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void
  isDisabled?: boolean
}

export default function FileUpload({ onFilesSelected, isDisabled = false }: FileUploadProps) {
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
          relative border-2 border-dashed rounded-lg p-8 text-center transition-colors
          ${isDragOver 
            ? 'border-primary-500 bg-primary-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
          ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
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
          <div className={`mx-auto w-12 h-12 ${isDragOver ? 'text-primary-500' : 'text-gray-400'}`}>
            {isDragOver ? (
              <Upload className="w-full h-full" />
            ) : (
              <ImageIcon className="w-full h-full" />
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {isDragOver ? '释放以上传文件' : '选择图片文件'}
            </h3>
            <p className="text-gray-500">
              拖拽图片到此处，或 <span className="text-primary-500 font-medium">点击选择文件</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              支持 JPG、PNG、WEBP、GIF、BMP 格式
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 