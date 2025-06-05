'use client'

import { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable'
import { ImageFile } from '@/types'
import { useTranslation } from '@/hooks/useTranslation'
import SortableImageItem from './SortableImageItem'

interface ImagePreviewProps {
  images: ImageFile[]
  onRemove: (id: string) => void
  onReorder: (newImages: ImageFile[]) => void
  isDisabled?: boolean
}

export default function ImagePreview({ 
  images, 
  onRemove, 
  onReorder, 
  isDisabled = false 
}: ImagePreviewProps) {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragStart = (event: any) => {
    const { active } = event
    setActiveId(active.id)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over?.id) {
      const oldIndex = images.findIndex((item) => item.id === active.id)
      const newIndex = images.findIndex((item) => item.id === over?.id)

      if (oldIndex !== -1 && newIndex !== -1) {
        const newImages = arrayMove(images, oldIndex, newIndex)
        onReorder(newImages)
      }
    }

    setActiveId(null)
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-4">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-1">{t.previewTitle}</h3>
        <p className="text-xs text-gray-500">{t.previewSubtitle}</p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={images} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {images.map((image, index) => (
              <SortableImageItem
                key={image.id}
                image={image}
                index={index}
                onRemove={onRemove}
                isActive={activeId === image.id}
                isDisabled={isDisabled}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
} 