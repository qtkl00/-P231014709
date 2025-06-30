import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Practice.module.css';

export default function CssLayout() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSS 盒模型布局练习</title>
        <meta name="description" content="学习CSS盒模型和各种布局技术" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backButton}>
            ← 返回首页
          </Link>
          <h1>CSS 盒模型布局练习</h1>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.practiceContainer}>
          <div className={styles.section}>
            <h2>📦 CSS 盒模型演示</h2>
            <div className={styles.example}>
              <div className={styles.boxModelDemo}>
                <div className={styles.boxModel}>
                  <div className={styles.margin}>
                    <span className={styles.label}>Margin</span>
                    <div className={styles.border}>
                      <span className={styles.label}>Border</span>
                      <div className={styles.padding}>
                        <span className={styles.label}>Padding</span>
                        <div className={styles.content}>
                          <span className={styles.label}>Content</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.boxInfo}>
                <h4>盒模型组成部分：</h4>
                <ul>
                  <li><strong>Content</strong> - 内容区域</li>
                  <li><strong>Padding</strong> - 内边距</li>
                  <li><strong>Border</strong> - 边框</li>
                  <li><strong>Margin</strong> - 外边距</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>🔄 Flexbox 布局练习</h2>
            <div className={styles.example}>
              <h4>水平居中布局</h4>
              <div className={styles.flexContainer + ' ' + styles.justifyCenter}>
                <div className={styles.flexItem}>项目 1</div>
                <div className={styles.flexItem}>项目 2</div>
                <div className={styles.flexItem}>项目 3</div>
              </div>

              <h4>两端对齐布局</h4>
              <div className={styles.flexContainer + ' ' + styles.justifyBetween}>
                <div className={styles.flexItem}>左侧</div>
                <div className={styles.flexItem}>中间</div>
                <div className={styles.flexItem}>右侧</div>
              </div>

              <h4>垂直居中布局</h4>
              <div className={styles.flexContainer + ' ' + styles.alignCenter + ' ' + styles.heightDemo}>
                <div className={styles.flexItem}>垂直居中的内容</div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>🏗️ Grid 网格布局</h2>
            <div className={styles.example}>
              <h4>基础网格布局</h4>
              <div className={styles.gridContainer}>
                <div className={styles.gridItem + ' ' + styles.header}>Header</div>
                <div className={styles.gridItem + ' ' + styles.sidebar}>Sidebar</div>
                <div className={styles.gridItem + ' ' + styles.main}>Main Content</div>
                <div className={styles.gridItem + ' ' + styles.footer}>Footer</div>
              </div>

              <h4>响应式卡片网格</h4>
              <div className={styles.cardGrid}>
                <div className={styles.card}>卡片 1</div>
                <div className={styles.card}>卡片 2</div>
                <div className={styles.card}>卡片 3</div>
                <div className={styles.card}>卡片 4</div>
                <div className={styles.card}>卡片 5</div>
                <div className={styles.card}>卡片 6</div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>📱 响应式设计</h2>
            <div className={styles.example}>
              <div className={styles.responsiveDemo}>
                <div className={styles.responsiveBox + ' ' + styles.desktop}>
                  桌面端显示 (&gt;768px)
                </div>
                <div className={styles.responsiveBox + ' ' + styles.tablet}>
                  平板端显示 (481px-768px)
                </div>
                <div className={styles.responsiveBox + ' ' + styles.mobile}>
                  手机端显示 (≤480px)
                </div>
              </div>
              <p className={styles.note}>
                💡 调整浏览器窗口大小查看响应式效果
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>🎨 CSS 动画效果</h2>
            <div className={styles.example}>
              <div className={styles.animationDemo}>
                <div className={styles.animatedBox + ' ' + styles.bounce}>
                  弹跳动画
                </div>
                <div className={styles.animatedBox + ' ' + styles.rotate}>
                  旋转动画
                </div>
                <div className={styles.animatedBox + ' ' + styles.pulse}>
                  脉冲动画
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 