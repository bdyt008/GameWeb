import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-secondary-800 text-secondary-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 网站信息 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">GameWeb</h3>
            <p className="text-secondary-400 mb-4">您的一站式游戏资讯平台，提供最新游戏新闻、评测和内容。</p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-white">
                <span className="sr-only">微博</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.8,8.6c0.2-0.5-0.1-1-0.5-1.2c-0.5-0.2-1,0.1-1.2,0.5c-0.2,0.5,0.1,1,0.5,1.2C20.1,9.2,20.6,9,20.8,8.6z M18.8,5.1c0.9-0.3,1.9,0.2,2.2,1.1c0.3,0.9-0.2,1.9-1.1,2.2c-0.9,0.3-1.9-0.2-2.2-1.1C17.4,6.3,17.9,5.4,18.8,5.1z M13.3,16.2c-0.6-0.2-1,0.2-1,0.7c0,0.5,0.5,1,1.1,1.2c0.6,0.2,1-0.1,1-0.7C14.4,16.8,13.9,16.4,13.3,16.2z M18.5,14.2c-1.4-0.3-2.9,0.4-3.5,1.7c-0.7,1.3-0.1,2.7,1.3,3.2c1.4,0.4,3-0.3,3.7-1.8C20.7,15.9,19.9,14.5,18.5,14.2z M18.9,9.5c-2-0.5-4.1,0.9-4.9,3.2c-0.8,2.3,0.1,4.7,2.1,5.2c2,0.5,4.1-0.9,4.9-3.2C21.8,12.3,20.9,10,18.9,9.5z M11.3,14.5c-1.3-0.5-2.7-0.5-3.9-0.2c0,0-0.6,0.2-0.9,0.6c-2,3,4.6,2.9,4.6,2.9c1.3-0.3,2.7-0.8,3.9-1.6c1.2-0.7,2.1-1.6,2.3-2.4C16.8,12.4,14.1,15,11.3,14.5z"></path>
                </svg>
              </a>
              <a href="#" className="text-secondary-400 hover:text-white">
                <span className="sr-only">微信</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5,7.7c-0.7,0-1.4,0.5-1.4,1.1c0,0.6,0.7,1.1,1.4,1.1c0.7,0,1.4-0.5,1.4-1.1C10.9,8.2,10.2,7.7,9.5,7.7z M14.7,7.7c-0.7,0-1.4,0.5-1.4,1.1c0,0.6,0.7,1.1,1.4,1.1c0.7,0,1.4-0.5,1.4-1.1C16.1,8.2,15.4,7.7,14.7,7.7z M8.1,13.4c-0.6,0-1.2,0.4-1.2,1c0,0.5,0.6,1,1.2,1c0.6,0,1.2-0.4,1.2-1C9.3,13.8,8.7,13.4,8.1,13.4z M12.4,13.4c-0.6,0-1.2,0.4-1.2,1c0,0.5,0.6,1,1.2,1c0.6,0,1.2-0.4,1.2-1C13.6,13.8,13,13.4,12.4,13.4z M12,3C7,3,3,6.5,3,11c0,2.5,1.3,4.7,3.3,6.2c0,0,0.1,0,0.1,0.1l-0.8,2.4c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0,0.1,0.1,0.2c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0l2.7-1.6c0,0,0.1,0,0.1,0c0.3,0.1,0.7,0.2,1,0.2C9.9,18.6,10,19,10,19c0-0.5,0.4-0.9,0.9-0.9h2.2c5,0,9-3.5,9-8C22,6.5,18,3,12,3z"></path>
                </svg>
              </a>
              <a href="#" className="text-secondary-400 hover:text-white">
                <span className="sr-only">抖音</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.8,7.8c-1-0.7-1.7-1.9-1.8-3.2h-3v10.4c0,0.8-0.2,1.6-0.8,2.2c-0.5,0.6-1.3,1-2.1,1c-1.6,0-3-1.3-3-3c0-1.6,1.3-3,3-3c0.3,0,0.6,0.1,0.9,0.2V9.1C11.7,9,10.4,9,9.2,9.4C8,9.8,7,10.6,6.2,11.7c-0.7,1.1-1,2.3-0.9,3.6c0.1,1.2,0.5,2.4,1.3,3.3c0.8,0.9,1.9,1.6,3.1,1.8c1.2,0.2,2.4,0.1,3.5-0.4c1.1-0.5,2-1.3,2.6-2.4c0.3-0.5,0.5-1.1,0.6-1.7h0V8.6c1,0.7,2.1,1.1,3.3,1.2L19.8,7.8z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary-400 hover:text-white">首页</Link></li>
              <li><Link to="/games" className="text-secondary-400 hover:text-white">游戏库</Link></li>
              <li><Link to="/news" className="text-secondary-400 hover:text-white">新闻</Link></li>
              <li><Link to="/about" className="text-secondary-400 hover:text-white">关于我们</Link></li>
            </ul>
          </div>

          {/* 游戏分类 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">游戏分类</h3>
            <ul className="space-y-2">
              <li><Link to="/games/category/action" className="text-secondary-400 hover:text-white">动作游戏</Link></li>
              <li><Link to="/games/category/rpg" className="text-secondary-400 hover:text-white">角色扮演</Link></li>
              <li><Link to="/games/category/strategy" className="text-secondary-400 hover:text-white">策略游戏</Link></li>
              <li><Link to="/games/category/sports" className="text-secondary-400 hover:text-white">体育游戏</Link></li>
              <li><Link to="/games/category/indie" className="text-secondary-400 hover:text-white">独立游戏</Link></li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">联系我们</h3>
            <ul className="space-y-2 text-secondary-400">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@gameweb.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>400-123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-700 text-center text-secondary-500">
          <p>&copy; {currentYear} GameWeb. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 