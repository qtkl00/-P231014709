# Next.js QAnything & WakaTime 项目

这是一个基于 Next.js 的小型项目，集成了 QAnything 问答服务和 WakaTime 编码统计功能。

## 📋 项目简介

本项目包含三个主要页面和一个组件，提供导航、问答服务嵌入和编码统计展示功能。

## 🚀 功能模块说明

### 1. 首页导航 (`/`)
- **文件**: `pages/index.js`
- **功能**: 项目入口页面，提供导航功能
- **特性**: 
  - 美观的渐变背景设计
  - 两个主要功能模块的跳转按钮
  - 响应式布局，支持移动端

### 2. QAnything 问答服务 (`/qanything`)
- **文件**: `pages/qanything.js`
- **功能**: 展示 QAnything 问答服务界面
- **特性**: 
  - 左侧导航栏（240px 宽度）
  - 右侧聊天界面演示
  - 左侧导航包含：首页、Agents、知识资料库、辅助提取、人手平台
  - 紫色"进入知识库"按钮
  - 模拟聊天对话界面，展示 QAnything 功能特性
  - **注意**: 使用模拟界面代替原计划的 iframe 嵌入（因域名解析问题）

### 3. WakaTime 编码统计 (`/wakatime`)
- **文件**: `pages/wakatime.js`
- **功能**: 展示 WakaTime API 获取的编码统计数据
- **特性**: 
  - 调用 WakaTime API 获取最近 7 天数据
  - 图表展示编程语言和编辑器分布
  - 详细的统计信息列表
  - 错误处理和模拟数据展示

### 4. 侧边栏组件
- **文件**: `components/Sidebar.js`
- **功能**: QAnything 页面的左侧导航栏
- **特性**: 
  - 模块化设计，可复用
  - 图标和文字组合的菜单项
  - 悬停效果和交互动画

## 🛠 技术栈

- **框架**: Next.js 14.0.4 (Pages Router)
- **前端**: React 18.2.0
- **图表**: Chart.js 4.4.0 + React-ChartJS-2 5.2.0
- **样式**: CSS Modules
- **API**: WakaTime REST API
- **界面**: 自定义聊天界面组件

## 📦 安装与运行

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 访问应用
在浏览器中打开 [http://localhost:3000](http://localhost:3000)

### 4. 构建生产版本
```bash
npm run build
npm start
```

## 📁 项目结构

```
├── pages/
│   ├── _app.js           # Next.js 应用配置
│   ├── index.js          # 首页导航
│   ├── qanything.js      # QAnything 服务页面
│   └── wakatime.js       # WakaTime 统计页面
├── components/
│   └── Sidebar.js        # 侧边栏组件
├── styles/
│   ├── globals.css       # 全局样式
│   ├── Home.module.css   # 首页样式
│   ├── Sidebar.module.css # 侧边栏样式
│   ├── QAnything.module.css # QAnything 页面样式
│   └── WakaTime.module.css  # WakaTime 页面样式
├── public/
│   └── favicon.ico       # 网站图标
├── package.json          # 依赖配置
├── next.config.js        # Next.js 配置
└── README.md            # 项目文档
```

## 🔧 配置说明

### WakaTime API
- API Key: `waka_8c4e558b-8f24-4f4e-8a1d-37606573b738`
- 接口: `https://wakatime.com/api/v1/users/current/stats/last_7_days`
- 功能: 获取最近 7 天的编码统计数据

### QAnything 服务
- **演示方式**: 自定义聊天界面组件
- **布局**: 左侧导航 + 右侧聊天界面
- **功能展示**: 模拟问答对话，展示 QAnything 核心功能

## 🔄 问题修复

### QAnything 域名问题
- **问题**: 原计划嵌入的 `qanything.cn/embed-demo` 域名无法解析
- **解决方案**: 创建自定义聊天界面组件，模拟 QAnything 问答服务
- **优势**: 
  - 完全可控的界面展示
  - 更好的响应式设计
  - 无网络依赖问题
  - 可自定义对话内容

## 📸 运行截图

*（此处可添加项目运行截图）*

## 🎨 样式特性

- **响应式设计**: 支持桌面端和移动端
- **现代化 UI**: 使用渐变、阴影、动画等现代设计元素
- **模块化样式**: CSS Modules 确保样式隔离
- **交互动效**: 悬停效果、过渡动画等
- **聊天界面**: 仿真聊天对话样式，用户友好

## 🚧 开发说明

### Git 提交记录
1. **初始化**: 项目基础结构和配置
2. **功能实现**: 核心功能开发完成
3. **样式优化**: UI/UX 改进和响应式适配
4. **问题修复**: 解决 QAnything 域名问题，优化用户体验

### 开发规范
- 组件模块化设计
- 样式使用 CSS Modules
- 错误处理和用户体验优化
- 代码注释和文档完善

## 👨‍💻 作者

开发者：AI Assistant  
提交时间：2024年  
项目类型：Next.js 全栈应用  

## 📄 许可证

本项目仅用于学习和演示目的。

---

**Ready to go! 🚀** 