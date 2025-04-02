import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import HomePage from './pages/HomePage'
import GameListPage from './pages/GameListPage'
import GameDetailPage from './pages/GameDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import GameEmbed from './pages/GameEmbed'
import GameDevPage from './pages/GameDevPage'

// 简化的Header组件
const Header = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => {
  return (
    <header className="bg-white dark:bg-secondary-800 shadow-sm p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary-600">GameWeb</h1>
        <nav className="flex items-center space-x-4">
          <a href="/" className="hover:text-primary-600">首页</a>
          <a href="/games" className="hover:text-primary-600">游戏库</a>
          <a href="/play" className="hover:text-primary-600">在线游戏</a>
          <a href="/dev" className="hover:text-primary-600">开发者</a>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full"
            aria-label={darkMode ? '切换到浅色模式' : '切换到深色模式'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}

// 简化的Footer组件
const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} GameWeb. 保留所有权利。</p>
      </div>
    </footer>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // 切换暗色模式
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GameListPage />} />
            <Route path="/games/:id" element={<GameDetailPage />} />
            <Route path="/play" element={<GameEmbed />} />
            <Route path="/dev" element={<GameDevPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      <Analytics />
    </div>
  )
}

export default App 