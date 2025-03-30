# GameWeb - 现代游戏展示网站

## 项目简介
GameWeb是一个展示和分享游戏信息的现代化网站。利用最新的前端技术栈构建，提供流畅的用户体验和丰富的游戏内容展示功能。

## 技术栈
- 前端框架：React 18
- 样式解决方案：TailwindCSS
- 类型系统：TypeScript
- 构建工具：Vite
- 包管理器：pnpm
- 部署平台：Vercel

## 项目结构
```
GameWeb/
├── public/            # 静态资源文件
├── src/               # 源代码
│   ├── assets/        # 图片、字体等资源
│   ├── components/    # 可复用组件
│   ├── hooks/         # 自定义React Hooks
│   ├── pages/         # 页面组件
│   ├── services/      # API服务
│   ├── styles/        # 全局样式
│   ├── types/         # TypeScript类型定义
│   ├── utils/         # 工具函数
│   ├── App.tsx        # 应用入口组件
│   └── main.tsx       # 应用入口文件
├── .eslintrc.js       # ESLint配置
├── .gitignore         # Git忽略文件
├── index.html         # HTML模板
├── package.json       # 项目依赖
├── tailwind.config.js # TailwindCSS配置
├── tsconfig.json      # TypeScript配置
└── vite.config.ts     # Vite配置
```

## 功能特性
- 游戏列表展示
- 游戏详情页
- 游戏分类与搜索
- 响应式设计，支持移动设备
- 暗色模式支持
- 游戏评分与评论系统

## 开发指南
1. 克隆项目
2. 安装依赖：`pnpm install`
3. 启动开发服务器：`pnpm dev`
4. 构建生产版本：`pnpm build`

## 浏览器兼容性
- Chrome (最新3个版本)
- Firefox (最新3个版本)
- Safari (最新3个版本)
- Edge (最新3个版本) 