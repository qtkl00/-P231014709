import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  const menuItems = [
    { name: '首页', icon: '🏠' },
    { name: 'Agents', icon: '🤖' },
    { name: '知识资料库', icon: '📚' },
    { name: '辅助提取', icon: '🔍' },
    { name: '人手平台', icon: '👥' },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h3>QAnything</h3>
      </div>
      
      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.text}>{item.name}</span>
          </div>
        ))}
      </nav>

      <div className={styles.buttonContainer}>
        <button className={styles.knowledgeButton}>
          进入知识库
        </button>
      </div>
    </div>
  );
} 