import { useState } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white dark:bg-secondary-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-primary-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"/>
              <circle cx="14.5" cy="13.5" r="1.5"/>
              <circle cx="18.5" cy="10.5" r="1.5"/>
            </svg>
            <span className="text-xl font-bold text-primary-600">GameWeb</span>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-secondary-600 hover:text-primary-600 font-medium">首页</Link>
            <Link to="/games" className="text-secondary-600 hover:text-primary-600 font-medium">游戏库</Link>
            <Link to="/news" className="text-secondary-600 hover:text-primary-600 font-medium">新闻</Link>
            <Link to="/about" className="text-secondary-600 hover:text-primary-600 font-medium">关于</Link>
          </nav>

          {/* 右侧操作区 */}
          <div className="flex items-center space-x-4">
            {/* 深色模式切换 */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-secondary-600 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:bg-secondary-700"
              aria-label={darkMode ? '切换到浅色模式' : '切换到深色模式'}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* 移动端菜单按钮 */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-secondary-600 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:bg-secondary-700"
              aria-label="菜单"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-3">
            <Link to="/" className="block py-2 text-secondary-600 hover:text-primary-600 font-medium" onClick={() => setIsMenuOpen(false)}>首页</Link>
            <Link to="/games" className="block py-2 text-secondary-600 hover:text-primary-600 font-medium" onClick={() => setIsMenuOpen(false)}>游戏库</Link>
            <Link to="/news" className="block py-2 text-secondary-600 hover:text-primary-600 font-medium" onClick={() => setIsMenuOpen(false)}>新闻</Link>
            <Link to="/about" className="block py-2 text-secondary-600 hover:text-primary-600 font-medium" onClick={() => setIsMenuOpen(false)}>关于</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header 