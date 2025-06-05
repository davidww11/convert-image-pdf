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
        relative group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-md
        ${isDragging ? 'opacity-50 z-50' : ''}
        ${isActive ? 'ring-2 ring-primary-500' : ''}
        ${isDisabled ? 'opacity-50' : ''}
      `}
    >
      {/* Image Preview */}
      <div className="aspect-square relative">
        <img
          src={image.url}
          alt={image.name}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
          {/* Drag Handle */}
          <div
            {...attributes}
            {...listeners}
            className={`
              opacity-0 group-hover:opacity-100 transition-opacity
              cursor-grab active:cursor-grabbing text-white bg-black bg-opacity-50 rounded-full p-2
              ${isDisabled ? 'cursor-not-allowed' : ''}
            `}
          >
            <GripVertical size={16} />
          </div>
        </div>

        {/* Index Badge */}
        <div className="absolute top-2 left-2 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-medium shadow-lg">
          {index + 1}
        </div>

        {/* Remove Button */}
        <button
          onClick={() => onRemove(image.id)}
          disabled={isDisabled}
          className={`
            absolute top-2 right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full 
            flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg
            ${isDisabled ? 'cursor-not-allowed' : ''}
          `}
          title="移除图片"
        >
          <X size={12} />
        </button>
      </div>

      {/* File Info */}
      <div className="p-2">
        <p className="text-xs font-medium text-gray-900 truncate" title={image.name}>
          {image.name}
        </p>
        <p className="text-xs text-gray-500">
          {formatFileSize(image.size)}
        </p>
      </div>
    </div>
  )
} 