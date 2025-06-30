import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Practice.module.css';

export default function HtmlBasics() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HTML 基础结构练习</title>
        <meta name="description" content="学习HTML基本标签和文档结构" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backButton}>
            ← 返回首页
          </Link>
          <h1>HTML 基础结构练习</h1>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.practiceContainer}>
          <div className={styles.section}>
            <h2>📝 标题标签练习</h2>
            <div className={styles.example}>
              <h1>这是一级标题 (h1)</h1>
              <h2>这是二级标题 (h2)</h2>
              <h3>这是三级标题 (h3)</h3>
              <h4>这是四级标题 (h4)</h4>
              <h5>这是五级标题 (h5)</h5>
              <h6>这是六级标题 (h6)</h6>
            </div>
          </div>

          <div className={styles.section}>
            <h2>📄 文本格式化</h2>
            <div className={styles.example}>
              <p>这是一个普通段落。</p>
              <p><strong>这是粗体文本</strong></p>
              <p><em>这是斜体文本</em></p>
              <p><u>这是下划线文本</u></p>
              <p><del>这是删除线文本</del></p>
              <p><mark>这是高亮文本</mark></p>
              <p>这是<sub>下标</sub>和<sup>上标</sup>的示例</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>🔗 链接和导航</h2>
            <div className={styles.example}>
              <nav className={styles.nav}>
                <a href="#section1">跳转到第一部分</a>
                <a href="#section2">跳转到第二部分</a>
                <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                  MDN HTML 文档
                </a>
              </nav>
            </div>
          </div>

          <div className={styles.section}>
            <h2>🖼️ 图片展示</h2>
            <div className={styles.example}>
              <img 
                src="https://via.placeholder.com/300x200/4f46e5/ffffff?text=HTML+练习" 
                alt="HTML练习示例图片" 
                className={styles.image}
              />
              <p>图片说明：这是一个示例图片，展示了HTML中img标签的使用。</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>📋 列表练习</h2>
            <div className={styles.example}>
              <div className={styles.listContainer}>
                <div>
                  <h4>无序列表 (ul)</h4>
                  <ul>
                    <li>HTML 基础</li>
                    <li>CSS 样式</li>
                    <li>JavaScript 交互</li>
                    <li>响应式设计</li>
                  </ul>
                </div>
                <div>
                  <h4>有序列表 (ol)</h4>
                  <ol>
                    <li>学习HTML结构</li>
                    <li>掌握CSS布局</li>
                    <li>理解JavaScript逻辑</li>
                    <li>实践项目开发</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>📊 表格练习</h2>
            <div className={styles.example}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>技术</th>
                    <th>用途</th>
                    <th>难度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HTML</td>
                    <td>页面结构</td>
                    <td>基础</td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>样式设计</td>
                    <td>中等</td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>交互逻辑</td>
                    <td>进阶</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.section}>
            <h2>📝 表单练习</h2>
            <div className={styles.example}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">姓名：</label>
                  <input type="text" id="name" name="name" placeholder="请输入您的姓名" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">邮箱：</label>
                  <input type="email" id="email" name="email" placeholder="请输入您的邮箱" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">留言：</label>
                  <textarea id="message" name="message" rows="4" placeholder="请输入您的留言"></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>提交</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 