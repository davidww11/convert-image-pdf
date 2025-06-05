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
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { ImageFile } from '@/types'
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
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium text-gray-900">图片预览</h3>
        <p className="text-sm text-gray-500">拖拽调整图片顺序</p>
      </div>

      <div className="p-4">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={images} strategy={verticalListSortingStrategy}>
            <div className="space-y-2">
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
    </div>
  )
} 