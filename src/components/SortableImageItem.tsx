'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, X } from 'lucide-react'
import { ImageFile } from '@/types'
import { formatFileSize } from '@/utils/config'

interface SortableImageItemProps {
  image: ImageFile
  index: number
  onRemove: (id: string) => void
  isActive?: boolean
  isDisabled?: boolean
}

export default function SortableImageItem({
  image,
  index,
  onRemove,
  isActive = false,
  isDisabled = false
}: SortableImageItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id, disabled: isDisabled })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        flex items-center gap-4 p-3 bg-gray-50 rounded-lg border transition-all
        ${isDragging ? 'opacity-50 z-50' : ''}
        ${isActive ? 'ring-2 ring-primary-500' : ''}
        ${isDisabled ? 'opacity-50' : ''}
      `}
    >
      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className={`
          cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600
          ${isDisabled ? 'cursor-not-allowed' : ''}
        `}
      >
        <GripVertical size={20} />
      </div>

      {/* Index */}
      <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
        {index + 1}
      </div>

      {/* Image Preview */}
      <div className="flex-shrink-0">
        <img
          src={image.url}
          alt={image.name}
          className="w-16 h-16 object-cover rounded border"
        />
      </div>

      {/* File Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {image.name}
        </p>
        <p className="text-xs text-gray-500">
          {formatFileSize(image.size)} • {image.type.split('/')[1].toUpperCase()}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(image.id)}
        disabled={isDisabled}
        className={`
          flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors
          ${isDisabled ? 'cursor-not-allowed' : ''}
        `}
        title="移除图片"
      >
        <X size={16} />
      </button>
    </div>
  )
} 