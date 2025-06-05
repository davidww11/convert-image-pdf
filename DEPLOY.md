# 部署指南

## 部署到 Vercel

### 方法一：通过 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署应用**
   ```bash
   vercel
   ```

   首次部署时会询问项目配置，选择：
   - Set up and deploy? `Y`
   - Which scope? 选择你的账户
   - Link to existing project? `N`
   - What's your project's name? `pictopdf` (或其他名称)
   - In which directory is your code located? `./`

4. **生产部署**
   ```bash
   vercel --prod
   ```

### 方法二：通过 GitHub + Vercel

1. **推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/pictopdf.git
   git push -u origin main
   ```

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账户登录
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 配置项目设置（通常自动检测）
   - 点击 "Deploy"

### 环境变量配置

本项目是纯前端应用，不需要任何环境变量配置。

### 域名配置

部署完成后，Vercel 会自动生成一个域名，如：
- `https://pdf.pullvideo.com`
- `https://pictopdf-git-main-yourusername.vercel.app`

你也可以在 Vercel 控制台配置自定义域名。

### 性能优化建议

1. **启用压缩**
   - Vercel 默认启用 Gzip/Brotli 压缩

2. **CDN 缓存**
   - 静态资源自动使用 CDN

3. **图片优化**
   - 考虑使用 WebP 格式
   - 实现图片懒加载

### 监控和分析

在 Vercel 控制台可以查看：
- 部署状态
- 访问统计
- 性能指标
- 错误日志

## 本地构建测试

在部署前，建议本地测试生产构建：

```bash
npm run build
npm start
```

访问 http://localhost:3000 验证功能正常。

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 TypeScript 错误
   - 确保所有依赖已安装
   - 查看构建日志详细信息

2. **运行时错误**
   - 检查浏览器控制台
   - 确认所有组件正确导入
   - 验证 PDF 生成库兼容性

3. **PDF 生成失败**
   - 检查图片格式是否支持
   - 确认文件大小在限制范围内
   - 验证浏览器兼容性

### 性能优化

1. **减少包大小**
   ```bash
   npm run build
   npx @next/bundle-analyzer
   ```

2. **代码分割**
   - 使用动态导入
   - 懒加载组件

3. **缓存策略**
   - 利用 Vercel Edge Cache
   - 配置适当的缓存头 