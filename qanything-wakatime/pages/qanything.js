import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import styles from '../styles/QAnything.module.css';

export default function QAnything() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: '您好！我是 QAnything 智能助手，可以回答您的各种问题。请问有什么可以帮助您的吗？',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 模拟的智能回答函数
  const generateResponse = (question) => {
    const responses = {
      'qanything': 'QAnything 是一个强大的问答系统，主要功能包括：\n• 📚 知识库管理 - 支持多种文档格式\n• 🔍 智能检索 - 快速找到相关信息\n• 💬 对话问答 - 自然语言交互\n• 🎯 精准回答 - 基于上下文理解\n• 🔧 API 集成 - 易于集成到其他系统',
      '功能': 'QAnything 的核心功能包括：\n1. 文档上传和解析\n2. 知识库构建和管理\n3. 智能问答和对话\n4. 多语言支持\n5. API 接口调用\n6. 实时学习和优化',
      '如何使用': '使用 QAnything 很简单：\n1. 上传您的文档到知识库\n2. 系统自动解析和索引\n3. 直接提问，获得智能回答\n4. 支持多轮对话和上下文理解\n5. 可通过 API 集成到您的应用中',
      '优势': 'QAnything 的主要优势：\n• ⚡ 快速响应 - 毫秒级查询速度\n• 🎯 精准匹配 - 先进的语义理解\n• 📈 持续学习 - 不断优化回答质量\n• 🔒 数据安全 - 企业级安全保障\n• 🌐 多语言 - 支持中英文等多种语言',
      '技术': 'QAnything 采用了先进的技术栈：\n• 大语言模型 (LLM)\n• 向量数据库\n• 语义搜索引擎\n• 自然语言处理 (NLP)\n• 机器学习算法\n• 云原生架构',
      '默认': '这是一个很好的问题！QAnything 可以帮助您：\n• 快速获取准确信息\n• 提高工作效率\n• 减少重复性查询工作\n• 构建智能化的知识管理系统\n\n您还想了解什么其他方面的信息吗？'
    };

    const lowerQuestion = question.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuestion.includes(key)) {
        return response;
      }
    }
    
    return responses['默认'];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // 模拟AI思考时间
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: generateResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // 1-3秒随机延迟
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageContent = (content) => {
    return content.split('\n').map((line, index) => (
      <div key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>QAnything 问答服务嵌套演示</title>
        <meta name="description" content="QAnything AI question answering service demo" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backButton}>
            ← 返回首页
          </Link>
          <h1>QAnything 问答服务嵌套演示</h1>
        </div>
      </header>

      <div className={styles.layout}>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        
        <div className={styles.content}>
          <div className={styles.demoContainer}>
            <div className={styles.demoHeader}>
              <h2>QAnything 智能问答演示</h2>
              <p>这里展示 QAnything 问答服务的功能界面 - 可以真实对话！</p>
            </div>
            
            <div className={styles.chatInterface}>
              <div className={styles.messageList}>
                {messages.map((message, index) => (
                  <div key={index} className={`${styles.message} ${message.type === 'bot' ? styles.botMessage : styles.userMessage}`}>
                    {message.type === 'bot' && <div className={styles.avatar}>🤖</div>}
                    <div className={styles.messageContent}>
                      {formatMessageContent(message.content)}
                    </div>
                    {message.type === 'user' && <div className={styles.avatar}>👤</div>}
                  </div>
                ))}
                
                {isTyping && (
                  <div className={`${styles.message} ${styles.botMessage}`}>
                    <div className={styles.avatar}>🤖</div>
                    <div className={styles.messageContent}>
                      <div className={styles.typingIndicator}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <div className={styles.inputArea}>
                <input 
                  type="text" 
                  placeholder="请输入您的问题..." 
                  className={styles.messageInput}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button 
                  className={styles.sendButton} 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                >
                  {isTyping ? '思考中...' : '发送'}
                </button>
              </div>
            </div>
            
            <div className={styles.notice}>
              <p>💡 <strong>交互说明：</strong>这是一个可交互的演示界面，您可以输入问题并获得模拟回答。尝试询问"QAnything功能"、"如何使用"、"技术优势"等问题！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 