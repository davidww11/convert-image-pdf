# PicToPDF - 图片转PDF工具

一个快速、简洁的图片转PDF工具，支持批量上传、拖拽排序和实时预览。

## ✨ 功能特点

- 📤 **批量上传**: 支持同时选择多张图片
- 🖱️ **拖拽排序**: 可视化调整图片顺序
- 👀 **实时预览**: 即时查看图片列表和顺序
- 📋 **多格式支持**: JPG、PNG、WEBP、GIF、BMP
- 📊 **进度显示**: 实时显示转换进度
- ⚡ **纯前端处理**: 无需上传服务器，保护隐私
- 🚀 **快速下载**: 一键生成并下载PDF文件

## 🎯 技术栈

- **前端**: React 18 + Next.js 14 + TypeScript
- **样式**: Tailwind CSS
- **拖拽**: @dnd-kit
- **PDF生成**: pdf-lib
- **图标**: Lucide React

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 📝 使用说明

1. **上传图片**: 点击上传区域或拖拽图片文件到页面
2. **调整顺序**: 拖拽图片项目来重新排序
3. **预览确认**: 查看图片列表和文件信息
4. **转换下载**: 点击"转换为PDF"按钮开始处理

## ⚙️ 配置选项

可以在 `src/utils/config.ts` 中调整以下配置：

- `maxFiles`: 最大文件数量（默认：500）
- `maxTotalSize`: 最大总文件大小（默认：500MB）
- `supportedFormats`: 支持的图片格式

## 🔧 项目结构

```
src/
├── app/                 # Next.js App Router
├── components/          # React组件
│   ├── FileUpload.tsx   # 文件上传组件
│   ├── ImagePreview.tsx # 图片预览组件
│   ├── SortableImageItem.tsx # 可排序图片项
│   ├── ProgressBar.tsx  # 进度条组件
│   └── ErrorMessage.tsx # 错误提示组件
├── types/               # TypeScript类型定义
├── utils/               # 工具函数
│   ├── config.ts        # 配置文件
│   └── pdfGenerator.ts  # PDF生成工具
└── styles/              # 样式文件
```

## 🌟 核心特性

### 拖拽排序
使用 @dnd-kit 实现流畅的拖拽体验，支持键盘操作和无障碍访问。

### 错误处理
完善的错误处理机制，包括：
- 文件格式验证
- 文件大小检查
- 总大小限制
- 转换过程错误

### 进度反馈
详细的进度提示：
- 文件上传进度
- PDF转换进度
- 状态实时更新

## 📱 响应式设计

完全响应式设计，支持桌面端和移动端使用。

## 🔒 隐私保护

所有处理都在浏览器本地完成，图片文件不会上传到任何服务器，完全保护用户隐私。

## 📄 License

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！ 