import { PDFDocument } from 'pdf-lib'
import { ImageFile, ConversionProgress } from '@/types'

export class PDFGenerator {
  private onProgress?: (progress: ConversionProgress) => void

  constructor(onProgress?: (progress: ConversionProgress) => void) {
    this.onProgress = onProgress
  }

  async generatePDF(images: ImageFile[]): Promise<Uint8Array> {
    if (images.length === 0) {
      throw new Error('没有图片可转换')
    }

    this.updateProgress(0, images.length, 'preparing')

    try {
      const pdfDoc = await PDFDocument.create()

      for (let i = 0; i < images.length; i++) {
        const image = images[i]
        this.updateProgress(i, images.length, 'converting')

        try {
          // 读取图片数据
          const imageBytes = await this.fileToArrayBuffer(image.file)
          
          // 根据图片类型嵌入到PDF
          let pdfImage
          if (image.type === 'image/jpeg' || image.type === 'image/jpg') {
            pdfImage = await pdfDoc.embedJpg(imageBytes)
          } else if (image.type === 'image/png') {
            pdfImage = await pdfDoc.embedPng(imageBytes)
          } else {
            // 对于其他格式，先转换为canvas再转为PNG
            pdfImage = await this.embedImageAsCanvas(pdfDoc, image.file)
          }

          // 获取图片尺寸
          const { width, height } = pdfImage.scale(1)
          
          // 创建新页面，尺寸适应图片
          const page = pdfDoc.addPage([width, height])
          
          // 绘制图片到页面
          page.drawImage(pdfImage, {
            x: 0,
            y: 0,
            width,
            height,
          })

        } catch (error) {
          console.error(`处理图片 ${image.name} 时出错:`, error)
          throw new Error(`处理图片 "${image.name}" 时出错`)
        }
      }

      this.updateProgress(images.length, images.length, 'completed')

      // 生成PDF字节数据
      const pdfBytes = await pdfDoc.save()
      return pdfBytes

    } catch (error) {
      this.updateProgress(0, images.length, 'error')
      throw error
    }
  }

  private async fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as ArrayBuffer)
      reader.onerror = () => reject(new Error('读取文件失败'))
      reader.readAsArrayBuffer(file)
    })
  }

  private async embedImageAsCanvas(pdfDoc: PDFDocument, file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        reject(new Error('无法创建Canvas上下文'))
        return
      }

      img.onload = async () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        
        canvas.toBlob(async (blob) => {
          if (!blob) {
            reject(new Error('Canvas转换失败'))
            return
          }
          
          try {
            const arrayBuffer = await blob.arrayBuffer()
            const pdfImage = await pdfDoc.embedPng(arrayBuffer)
            resolve(pdfImage)
          } catch (error) {
            reject(error)
          }
        }, 'image/png')
      }

      img.onerror = () => reject(new Error('图片加载失败'))
      img.src = URL.createObjectURL(file)
    })
  }

  private updateProgress(current: number, total: number, status: ConversionProgress['status']) {
    if (this.onProgress) {
      const percentage = total === 0 ? 0 : Math.round((current / total) * 100)
      this.onProgress({
        current,
        total,
        percentage,
        status
      })
    }
  }
}

export const downloadPDF = (pdfBytes: Uint8Array, filename: string = 'images.pdf') => {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
} 