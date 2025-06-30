import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const projects = [
    {
      id: 'html-basics',
      title: 'HTML 基础结构练习',
      description: '学习HTML基本标签、标题层级、文本格式化、链接和图片等基础元素的使用。',
      features: ['标题标签', '文本格式', '链接导航', '图片展示'],
      link: '/html-basics',
      icon: '📝',
      color: 'orange'
    },
    {
      id: 'css-layout',
      title: 'CSS 盒模型布局练习',
      description: '掌握CSS盒模型概念，学习margin、padding、border以及各种布局技术。',
      features: ['盒模型', 'Flexbox布局', 'Grid网格', '响应式设计'],
      link: '/css-layout',
      icon: '🎨',
      color: 'blue'
    },
    {
      id: 'js-dom',
      title: 'JavaScript DOM 操作',
      description: '通过实际案例学习DOM操作，包括元素选择、事件处理和动态内容更新。',
      features: ['元素选择', '事件处理', '动态更新', '交互效果'],
      link: '/js-dom',
      icon: '⚡',
      color: 'yellow'
    },
    {
      id: 'qanything',
      title: 'QAnything 问答服务',
      description: '智能问答系统演示，支持自然语言交互，提供知识库管理和智能检索功能。',
      features: ['智能问答', '知识库管理', '自然语言处理', 'API集成'],
      link: '/qanything',
      icon: '🤖',
      color: 'purple'
    },
    {
      id: 'wakatime',
      title: 'WakaTime 数据展示',
      description: '编程时间统计和数据可视化，展示开发者的编码习惯和项目分析。',
      features: ['时间统计', '数据可视化', '编程分析', '图表展示'],
      link: '/wakatime',
      icon: '📊',
      color: 'green'
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>个人项目展示</title>
        <meta name="description" content="个人作品集和项目展示页面" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            <span className={styles.titleIcon}>🚀</span>
            《Web前端开发》课程练习
          </h1>
          <p className={styles.subtitle}>
            从基础到进阶，全面掌握Web前端开发技术栈，包含HTML、CSS、JavaScript基础练习和实战项目
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            欢迎来到我的项目展示页面
          </h1>
          <p className={styles.description}>
            这里展示了我的一些项目和技术练习，包括问答服务、编程统计和前端基础练习
          </p>
        </div>

        <div className={styles.projectGrid}>
          <Link href="/qanything" className={`${styles.projectCard} ${styles.blue}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>🤖</div>
              <h2>QAnything 问答服务</h2>
              <p>智能问答系统演示，展示AI对话界面和交互功能</p>
              <span className={styles.cardTag}>AI服务</span>
            </div>
          </Link>
          
          <Link href="/wakatime" className={`${styles.projectCard} ${styles.green}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>📊</div>
              <h2>WakaTime 编程统计</h2>
              <p>个人编程时间统计和可视化展示，使用Chart.js绘制图表</p>
              <span className={styles.cardTag}>数据可视化</span>
            </div>
          </Link>

          <Link href="/html-basics" className={`${styles.projectCard} ${styles.orange}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>📝</div>
              <h2>HTML 基础练习</h2>
              <p>HTML标签和结构练习，包含标题、段落、列表、表格、表单等基础元素</p>
              <span className={styles.cardTag}>前端基础</span>
            </div>
          </Link>

          <Link href="/css-layout" className={`${styles.projectCard} ${styles.purple}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>🎨</div>
              <h2>CSS 布局练习</h2>
              <p>CSS盒模型、Flexbox、Grid布局和响应式设计的实践练习</p>
              <span className={styles.cardTag}>样式设计</span>
            </div>
          </Link>

          <Link href="/js-dom" className={`${styles.projectCard} ${styles.yellow}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>⚡</div>
              <h2>JavaScript DOM 操作</h2>
              <p>JavaScript DOM操作练习，包含事件处理、动态内容和交互功能</p>
              <span className={styles.cardTag}>交互开发</span>
            </div>
          </Link>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h2>🎯 课程特色</h2>
            <ul>
              <li>✨ 从基础到进阶的完整学习路径</li>
              <li>🔧 理论与实践相结合的教学方式</li>
              <li>⚡ 交互式练习，即学即用</li>
              <li>🎨 现代化项目案例展示</li>
            </ul>
          </div>
          
          <div className={styles.infoCard}>
            <h2>🛠️ 技术栈</h2>
            <div className={styles.techStack}>
              <span className={styles.techTag}>HTML5</span>
              <span className={styles.techTag}>CSS3</span>
              <span className={styles.techTag}>JavaScript</span>
              <span className={styles.techTag}>React</span>
              <span className={styles.techTag}>Next.js</span>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Web前端开发课程练习 - 从基础到实战</p>
      </footer>
    </div>
  );
} 