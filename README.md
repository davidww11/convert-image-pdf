# Image to PDF Converter

A fast, simple image to PDF converter tool that supports batch upload, drag-and-drop reordering, and real-time preview.

## ✨ Features

- 📤 **Batch Upload**: Select multiple images simultaneously
- 🖱️ **Drag & Drop Reordering**: Visually adjust image order
- 👀 **Real-time Preview**: Instantly view image list and order
- 📋 **Multiple Format Support**: JPG, PNG, WEBP, GIF, BMP
- 📊 **Progress Display**: Real-time conversion progress
- ⚡ **Client-side Processing**: No server upload required, privacy protected
- 🚀 **Quick Download**: One-click PDF generation and download

## 🎯 Tech Stack

- **Frontend**: React 18 + Next.js 14 + TypeScript
- **Styling**: Tailwind CSS
- **Drag & Drop**: @dnd-kit
- **PDF Generation**: pdf-lib
- **Icons**: Lucide React

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 📝 Usage Instructions

1. **Upload Images**: Click the upload area or drag image files to the page
2. **Adjust Order**: Drag image items to reorder them
3. **Preview & Confirm**: Check the image list and file information
4. **Convert & Download**: Click "Convert to PDF" button to start processing

## ⚙️ Configuration Options

You can adjust the following configurations in `src/utils/config.ts`:

- `maxFiles`: Maximum number of files (default: 500)
- `maxTotalSize`: Maximum total file size (default: 500MB)
- `supportedFormats`: Supported image formats

## 🔧 Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # React Components
│   ├── FileUpload.tsx   # File upload component
│   ├── ImagePreview.tsx # Image preview component
│   ├── SortableImageItem.tsx # Sortable image item
│   ├── ProgressBar.tsx  # Progress bar component
│   └── ErrorMessage.tsx # Error message component
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
│   ├── config.ts        # Configuration file
│   └── pdfGenerator.ts  # PDF generation utility
└── styles/              # Style files
```

## 🌟 Core Features

### Drag & Drop Reordering
Implements smooth drag-and-drop experience using @dnd-kit, with keyboard operation and accessibility support.

### Error Handling
Comprehensive error handling mechanism including:
- File format validation
- File size checking
- Total size limitation
- Conversion process errors

### Progress Feedback
Detailed progress indicators:
- File upload progress
- PDF conversion progress
- Real-time status updates

## 📱 Responsive Design

Fully responsive design supporting both desktop and mobile devices.

## 🔒 Privacy Protection

All processing is done locally in the browser. Image files are never uploaded to any server, ensuring complete user privacy protection.

## 📄 License

MIT License

## 🤝 Contributing

Issues and Pull Requests are welcome! 