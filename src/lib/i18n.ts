export interface Translation {
  // SEO and Meta
  title: string
  description: string
  keywords: string
  
  // Header
  headerTitle: string
  headerSubtitle: string
  
  // Upload Section
  uploadTitle: string
  uploadSubtitle: string
  uploadDragText: string
  uploadClickText: string
  uploadFormats: string
  uploadLimit: string
  
  // File Management
  selectedFiles: string
  totalSize: string
  convertButton: string
  converting: string
  
  // Preview Section
  previewTitle: string
  previewSubtitle: string
  
  // Progress
  preparing: string
  converting_progress: string
  completed: string
  error: string
  processingImage: string
  pdfGenerated: string
  conversionError: string
  
  // Empty State
  emptyStateTitle: string
  emptyStateDesc: string
  
  // Errors
  errorFileFormat: string
  errorFileSize: string
  errorTotalSize: string
  errorFileCount: string
  errorConversion: string
  errorRetry: string
  errorClose: string
  errorSelectImages: string
  supportedFormats: string
  maxFileSize: string
  maxTotalSize: string
  
  // Features
  features: {
    title: string
    items: Array<{
      title: string
      description: string
    }>
  }
  
  // Footer
  footer: {
    privacy: string
    terms: string
    contact: string
  }
}

export const translations: Record<string, Translation> = {
  en: {
    title: "Free Image to PDF Converter | Batch Processing | Drag & Drop",
    description: "Free online image to PDF converter. Convert JPG, PNG, WEBP to PDF instantly. Batch processing, drag & drop reordering, no upload required. Secure & private.",
    keywords: "free image to PDF converter, batch image converter, JPG to PDF, PNG to PDF, drag drop PDF, secure PDF converter, no upload required",
    
    headerTitle: "Free Image to PDF Converter",
    headerSubtitle: "Convert multiple images to PDF instantly. Secure, fast, and completely free.",
    
    uploadTitle: "Select Images",
    uploadSubtitle: "Drag & drop or click to upload",
    uploadDragText: "Drop images here, or",
    uploadClickText: "click to select files",
    uploadFormats: "Supports JPG, PNG, WEBP, GIF, BMP formats",
    uploadLimit: "Up to 500 files",
    
    selectedFiles: "selected files",
    totalSize: "Total size:",
    convertButton: "Convert to PDF",
    converting: "Converting...",
    
    previewTitle: "Image Preview",
    previewSubtitle: "Drag to reorder images",
    
    preparing: "Preparing...",
    converting_progress: "Converting...",
    completed: "Completed",
    error: "Error",
    processingImage: "Processing image",
    pdfGenerated: "PDF generated, downloading...",
    conversionError: "Error occurred during conversion, please try again",
    
    emptyStateTitle: "Start Uploading Images",
    emptyStateDesc: "Supports JPG, PNG, WEBP, GIF, BMP formats, up to 500 files",
    
    errorFileFormat: "Unsupported file format:",
    errorFileSize: "File too large:",
    errorTotalSize: "Total size limit exceeded",
    errorFileCount: "Maximum file count exceeded",
    errorConversion: "Conversion failed",
    errorRetry: "Please try again",
    errorClose: "Close",
    errorSelectImages: "Please select images to convert",
    supportedFormats: "Supported formats: JPG, PNG, WEBP, GIF, BMP",
    maxFileSize: "Maximum file size: 50MB",
    maxTotalSize: "Maximum total size",
    
    features: {
      title: "Why Choose Our Converter?",
      items: [
        {
          title: "100% Free",
          description: "No registration, no watermarks, completely free to use"
        },
        {
          title: "Secure & Private", 
          description: "All processing done locally in your browser, no files uploaded"
        },
        {
          title: "Batch Processing",
          description: "Convert up to 500 images at once with drag & drop reordering"
        },
        {
          title: "Multiple Formats",
          description: "Supports JPG, PNG, WEBP, GIF, BMP and more image formats"
        }
      ]
    },
    
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service", 
      contact: "Contact Us"
    }
  },
  
  zh: {
    title: "免费图片转PDF工具 | 批量处理 | 拖拽排序",
    description: "免费在线图片转PDF工具，支持JPG、PNG、WEBP等格式批量转换。拖拽排序，实时预览，隐私保护，无需注册。",
    keywords: "免费图片转PDF,批量图片转换,JPG转PDF,PNG转PDF,拖拽排序,隐私保护",
    
    headerTitle: "免费图片转PDF工具",
    headerSubtitle: "快速将多张图片转换为PDF文件，安全、快速、完全免费。",
    
    uploadTitle: "选择图片",
    uploadSubtitle: "拖拽上传或点击选择",
    uploadDragText: "拖拽图片到此处，或",
    uploadClickText: "点击选择文件",
    uploadFormats: "支持 JPG、PNG、WEBP、GIF、BMP 格式",
    uploadLimit: "最多 500 个文件",
    
    selectedFiles: "个文件",
    totalSize: "总大小：",
    convertButton: "转换为PDF",
    converting: "转换中...",
    
    previewTitle: "图片预览",
    previewSubtitle: "拖拽调整图片顺序",
    
    preparing: "准备中...",
    converting_progress: "转换中...",
    completed: "完成",
    error: "出错了",
    processingImage: "正在处理第",
    pdfGenerated: "PDF文件已生成，正在下载...",
    conversionError: "转换过程中出现错误，请重试",
    
    emptyStateTitle: "开始上传图片",
    emptyStateDesc: "支持 JPG、PNG、WEBP、GIF、BMP 格式，最多 500 个文件",
    
    errorFileFormat: "不支持的文件格式：",
    errorFileSize: "文件过大：",
    errorTotalSize: "总文件大小超限",
    errorFileCount: "文件数量超过限制",
    errorConversion: "转换失败",
    errorRetry: "请重试",
    errorClose: "关闭",
    errorSelectImages: "请先选择要转换的图片",
    supportedFormats: "支持的格式：JPG、PNG、WEBP、GIF、BMP",
    maxFileSize: "单个文件不能超过 50MB",
    maxTotalSize: "所有文件总大小不能超过",
    
    features: {
      title: "为什么选择我们？",
      items: [
        {
          title: "100% 免费",
          description: "无需注册，无水印，完全免费使用"
        },
        {
          title: "安全隐私",
          description: "所有处理都在浏览器本地完成，文件不会上传到服务器"
        },
        {
          title: "批量处理",
          description: "支持一次转换多达500张图片，可拖拽调整顺序"
        },
        {
          title: "多格式支持",
          description: "支持JPG、PNG、WEBP、GIF、BMP等多种图片格式"
        }
      ]
    },
    
    footer: {
      privacy: "隐私政策",
      terms: "服务条款",
      contact: "联系我们"
    }
  },
  
  es: {
    title: "Convertidor Gratuito de Imagen a PDF | Procesamiento por Lotes",
    description: "Convertidor gratuito de imagen a PDF en línea. Convierte JPG, PNG, WEBP a PDF al instante. Procesamiento por lotes, reordenación de arrastrar y soltar.",
    keywords: "convertidor gratuito imagen PDF, convertidor lotes, JPG a PDF, PNG a PDF, arrastrar soltar PDF",
    
    headerTitle: "Convertidor Gratuito de Imagen a PDF",
    headerSubtitle: "Convierte múltiples imágenes a PDF al instante. Seguro, rápido y completamente gratuito.",
    
    uploadTitle: "Seleccionar Imágenes",
    uploadSubtitle: "Arrastra y suelta o haz clic para subir",
    uploadDragText: "Suelta las imágenes aquí, o",
    uploadClickText: "haz clic para seleccionar archivos",
    uploadFormats: "Soporta formatos JPG, PNG, WEBP, GIF, BMP",
    uploadLimit: "Hasta 500 archivos",
    
    selectedFiles: "archivos seleccionados",
    totalSize: "Tamaño total:",
    convertButton: "Convertir a PDF",
    converting: "Convirtiendo...",
    
    previewTitle: "Vista Previa de Imagen",
    previewSubtitle: "Arrastra para reordenar imágenes",
    
    preparing: "Preparando...",
    converting_progress: "Convirtiendo...",
    completed: "Completado",
    error: "Error",
    processingImage: "Procesando imagen",
    pdfGenerated: "PDF generado, descargando...",
    conversionError: "Error durante la conversión, inténtalo de nuevo",
    
    emptyStateTitle: "Comienza Subiendo Imágenes",
    emptyStateDesc: "Soporta formatos JPG, PNG, WEBP, GIF, BMP, hasta 500 archivos",
    
    errorFileFormat: "Formato de archivo no soportado:",
    errorFileSize: "Archivo demasiado grande:",
    errorTotalSize: "Límite de tamaño total excedido",
    errorFileCount: "Número máximo de archivos excedido",
    errorConversion: "Conversión fallida",
    errorRetry: "Por favor inténtalo de nuevo",
    errorClose: "Cerrar",
    errorSelectImages: "Por favor selecciona imágenes para convertir",
    supportedFormats: "Formatos soportados: JPG, PNG, WEBP, GIF, BMP",
    maxFileSize: "Tamaño máximo de archivo: 50MB",
    maxTotalSize: "Tamaño total máximo",
    
    features: {
      title: "¿Por Qué Elegir Nuestro Convertidor?",
      items: [
        {
          title: "100% Gratuito",
          description: "Sin registro, sin marcas de agua, completamente gratuito"
        },
        {
          title: "Seguro y Privado",
          description: "Todo el procesamiento se hace localmente en tu navegador"
        },
        {
          title: "Procesamiento por Lotes",
          description: "Convierte hasta 500 imágenes a la vez con reordenación"
        },
        {
          title: "Múltiples Formatos",
          description: "Soporta JPG, PNG, WEBP, GIF, BMP y más formatos"
        }
      ]
    },
    
    footer: {
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      contact: "Contáctanos"
    }
  },
  
  fr: {
    title: "Convertisseur Gratuit d'Image en PDF | Traitement par Lots",
    description: "Convertisseur gratuit d'image en PDF en ligne. Convertit JPG, PNG, WEBP en PDF instantanément. Traitement par lots, réorganisation par glisser-déposer.",
    keywords: "convertisseur gratuit image PDF, convertisseur lot, JPG en PDF, PNG en PDF, glisser déposer PDF",
    
    headerTitle: "Convertisseur Gratuit d'Image en PDF",
    headerSubtitle: "Convertissez plusieurs images en PDF instantanément. Sécurisé, rapide et entièrement gratuit.",
    
    uploadTitle: "Sélectionner les Images",
    uploadSubtitle: "Glissez-déposez ou cliquez pour télécharger",
    uploadDragText: "Déposez les images ici, ou",
    uploadClickText: "cliquez pour sélectionner les fichiers",
    uploadFormats: "Supporte les formats JPG, PNG, WEBP, GIF, BMP",
    uploadLimit: "Jusqu'à 500 fichiers",
    
    selectedFiles: "fichiers sélectionnés",
    totalSize: "Taille totale:",
    convertButton: "Convertir en PDF",
    converting: "Conversion...",
    
    previewTitle: "Aperçu des Images",
    previewSubtitle: "Glissez pour réorganiser les images",
    
    preparing: "Préparation...",
    converting_progress: "Conversion...",
    completed: "Terminé",
    error: "Erreur",
    processingImage: "Traitement de l'image",
    pdfGenerated: "PDF généré, téléchargement...",
    conversionError: "Erreur lors de la conversion, veuillez réessayer",
    
    emptyStateTitle: "Commencez à Télécharger des Images",
    emptyStateDesc: "Supporte les formats JPG, PNG, WEBP, GIF, BMP, jusqu'à 500 fichiers",
    
    errorFileFormat: "Format de fichier non pris en charge:",
    errorFileSize: "Fichier trop volumineux:",
    errorTotalSize: "Limite de taille totale dépassée",
    errorFileCount: "Nombre maximum de fichiers dépassé",
    errorConversion: "Échec de la conversion",
    errorRetry: "Veuillez réessayer",
    errorClose: "Fermer",
    errorSelectImages: "Veuillez sélectionner des images à convertir",
    supportedFormats: "Formats pris en charge: JPG, PNG, WEBP, GIF, BMP",
    maxFileSize: "Taille maximale du fichier: 50MB",
    maxTotalSize: "Taille totale maximale",
    
    features: {
      title: "Pourquoi Choisir Notre Convertisseur?",
      items: [
        {
          title: "100% Gratuit",
          description: "Pas d'inscription, pas de filigrane, entièrement gratuit"
        },
        {
          title: "Sécurisé et Privé",
          description: "Tout le traitement se fait localement dans votre navigateur"
        },
        {
          title: "Traitement par Lots",
          description: "Convertissez jusqu'à 500 images à la fois avec réorganisation"
        },
        {
          title: "Formats Multiples",
          description: "Supporte JPG, PNG, WEBP, GIF, BMP et plus de formats"
        }
      ]
    },
    
    footer: {
      privacy: "Politique de Confidentialité",
      terms: "Conditions de Service",
      contact: "Nous Contacter"
    }
  }
}

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
]

export const defaultLanguage = 'en' 