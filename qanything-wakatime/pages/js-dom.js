import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Practice.module.css';

export default function JsDom() {
  const [clickCount, setClickCount] = useState(0);
  const [textContent, setTextContent] = useState('这是原始文本');
  const [bgColor, setBgColor] = useState('#f8fafc');
  const [items, setItems] = useState(['项目 1', '项目 2', '项目 3']);
  const [newItem, setNewItem] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const colors = ['#f8fafc', '#fee2e2', '#fef3c7', '#d1fae5', '#dbeafe', '#e0e7ff'];

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>JavaScript DOM 操作练习</title>
        <meta name="description" content="学习JavaScript DOM操作和事件处理" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backButton}>
            ← 返回首页
          </Link>
          <h1>JavaScript DOM 操作练习</h1>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.practiceContainer}>
          <div className={styles.section}>
            <h2>🖱️ 事件处理练习</h2>
            <div className={styles.example}>
              <div className={styles.eventDemo}>
                <button 
                  className={styles.demoButton}
                  onClick={() => setClickCount(clickCount + 1)}
                >
                  点击我！已点击 {clickCount} 次
                </button>
                <button 
                  className={styles.demoButton}
                  onClick={() => setClickCount(0)}
                >
                  重置计数
                </button>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>📝 文本内容操作</h2>
            <div className={styles.example}>
              <div className={styles.textDemo}>
                <p className={styles.demoText}>{textContent}</p>
                <div className={styles.buttonGroup}>
                  <button 
                    className={styles.demoButton}
                    onClick={() => setTextContent('文本已被修改！')}
                  >
                    修改文本
                  </button>
                  <button 
                    className={styles.demoButton}
                    onClick={() => setTextContent('这是原始文本')}
                  >
                    恢复原文
                  </button>
                  <button 
                    className={styles.demoButton}
                    onClick={() => setTextContent(textContent.toUpperCase())}
                  >
                    转为大写
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>🎨 样式动态修改</h2>
            <div className={styles.example}>
              <div 
                className={styles.colorBox}
                style={{ backgroundColor: bgColor }}
              >
                点击按钮改变我的背景色
              </div>
              <button 
                className={styles.demoButton}
                onClick={changeBackgroundColor}
              >
                随机改变颜色
              </button>
            </div>
          </div>

          <div className={styles.section}>
            <h2>📋 动态列表操作</h2>
            <div className={styles.example}>
              <div className={styles.listDemo}>
                <div className={styles.addItemForm}>
                  <input 
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="输入新项目"
                    className={styles.itemInput}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
                  />
                  <button 
                    className={styles.demoButton}
                    onClick={handleAddItem}
                  >
                    添加项目
                  </button>
                </div>
                <ul className={styles.dynamicList}>
                  {items.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                      <span>{item}</span>
                      <button 
                        className={styles.removeButton}
                        onClick={() => handleRemoveItem(index)}
                      >
                        删除
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>👁️ 元素显示/隐藏</h2>
            <div className={styles.example}>
              <div className={styles.visibilityDemo}>
                {isVisible && (
                  <div className={styles.toggleBox}>
                    这是一个可以显示/隐藏的元素
                  </div>
                )}
                <button 
                  className={styles.demoButton}
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? '隐藏元素' : '显示元素'}
                </button>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>⚡ 综合交互练习</h2>
            <div className={styles.example}>
              <div className={styles.interactiveDemo}>
                <div className={styles.gameArea}>
                  <h4>简单计算器</h4>
                  <Calculator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// 简单计算器组件
function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorDisplay}>{display}</div>
      <div className={styles.calculatorButtons}>
        <button className={styles.calcButton + ' ' + styles.clear} onClick={clearAll}>C</button>
        <button className={styles.calcButton} onClick={() => inputOperation('÷')}>÷</button>
        <button className={styles.calcButton} onClick={() => inputOperation('×')}>×</button>
        <button className={styles.calcButton} onClick={() => inputOperation('-')}>-</button>
        
        <button className={styles.calcButton} onClick={() => inputNumber(7)}>7</button>
        <button className={styles.calcButton} onClick={() => inputNumber(8)}>8</button>
        <button className={styles.calcButton} onClick={() => inputNumber(9)}>9</button>
        <button className={styles.calcButton + ' ' + styles.rowSpan} onClick={() => inputOperation('+')}>+</button>
        
        <button className={styles.calcButton} onClick={() => inputNumber(4)}>4</button>
        <button className={styles.calcButton} onClick={() => inputNumber(5)}>5</button>
        <button className={styles.calcButton} onClick={() => inputNumber(6)}>6</button>
        
        <button className={styles.calcButton} onClick={() => inputNumber(1)}>1</button>
        <button className={styles.calcButton} onClick={() => inputNumber(2)}>2</button>
        <button className={styles.calcButton} onClick={() => inputNumber(3)}>3</button>
        <button className={styles.calcButton + ' ' + styles.rowSpan} onClick={performCalculation}>=</button>
        
        <button className={styles.calcButton + ' ' + styles.colSpan} onClick={() => inputNumber(0)}>0</button>
        <button className={styles.calcButton} onClick={() => inputNumber('.')}>.</button>
      </div>
    </div>
  );
} 