import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import styles from '../styles/WakaTime.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function WakaTime() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWakaTimeData = async () => {
      try {
        const apiKey = 'waka_8c4e558b-8f24-4f4e-8a1d-37606573b738';
        const response = await fetch(
          `https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch WakaTime data');
        }
        
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWakaTimeData();
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>正在加载 WakaTime 数据...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>数据加载失败</h2>
          <p className={styles.errorMessage}>{error}</p>
          <div className={styles.mockData}>
            <h3>模拟数据展示：</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>总编码时长</h4>
                <p className={styles.totalTime}>42 hrs 30 mins</p>
              </div>
              <div className={styles.statCard}>
                <h4>编程语言分布</h4>
                <ul>
                  <li>JavaScript: 45%</li>
                  <li>Python: 25%</li>
                  <li>TypeScript: 20%</li>
                  <li>CSS: 10%</li>
                </ul>
              </div>
              <div className={styles.statCard}>
                <h4>编辑器分布</h4>
                <ul>
                  <li>VS Code: 80%</li>
                  <li>WebStorm: 15%</li>
                  <li>Vim: 5%</li>
                </ul>
              </div>
            </div>
          </div>
          <Link href="/" className={styles.backButton}>
            ← 返回首页
          </Link>
        </div>
      </div>
    );
  }

  // 准备图表数据
  const languageData = {
    labels: data.languages?.map(lang => lang.name) || [],
    datasets: [
      {
        label: '使用时间 (小时)',
        data: data.languages?.map(lang => lang.total_seconds / 3600) || [],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  const editorData = {
    labels: data.editors?.map(editor => editor.name) || [],
    datasets: [
      {
        label: '使用时间 (小时)',
        data: data.editors?.map(editor => editor.total_seconds / 3600) || [],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>WakaTime 编码统计</title>
        <meta name="description" content="WakaTime coding statistics dashboard" />
      </Head>

      <div className={styles.navigation}>
        <Link href="/" className={styles.backButton}>
          ← 返回首页
        </Link>
      </div>

      <header className={styles.header}>
        <h1>WakaTime 编码统计</h1>
        <p>最近 7 天的编码活动分析</p>
      </header>

      <main className={styles.main}>
        <div className={styles.totalTime}>
          <h2>总编码时长</h2>
          <p className={styles.timeDisplay}>
            {data.human_readable_total || '0 hrs 0 mins'}
          </p>
        </div>

        <div className={styles.chartsContainer}>
          <div className={styles.chartSection}>
            <h3>编程语言分布</h3>
            {data.languages && data.languages.length > 0 ? (
              <div className={styles.chartWrapper}>
                <Doughnut data={languageData} />
              </div>
            ) : (
              <p>暂无语言数据</p>
            )}
          </div>

          <div className={styles.chartSection}>
            <h3>编辑器分布</h3>
            {data.editors && data.editors.length > 0 ? (
              <div className={styles.chartWrapper}>
                <Bar data={editorData} />
              </div>
            ) : (
              <p>暂无编辑器数据</p>
            )}
          </div>
        </div>

        <div className={styles.detailsContainer}>
          <div className={styles.detailSection}>
            <h3>语言详情</h3>
            <div className={styles.itemList}>
              {data.languages?.map((lang, index) => (
                <div key={index} className={styles.item}>
                  <span className={styles.itemName}>{lang.name}</span>
                  <span className={styles.itemTime}>{lang.text}</span>
                  <span className={styles.itemPercent}>{lang.percent.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.detailSection}>
            <h3>编辑器详情</h3>
            <div className={styles.itemList}>
              {data.editors?.map((editor, index) => (
                <div key={index} className={styles.item}>
                  <span className={styles.itemName}>{editor.name}</span>
                  <span className={styles.itemTime}>{editor.text}</span>
                  <span className={styles.itemPercent}>{editor.percent.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 