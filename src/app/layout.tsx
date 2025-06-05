import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PicToPDF - 图片转PDF工具',
  description: '快速将多张图片合并成PDF文件，支持拖拽排序',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
} 