import { Link } from 'react-router-dom'

// 简化的游戏数据
const featuredGames = [
  {
    id: 1,
    title: '赛博朋克2077',
    developer: 'CD Projekt Red',
    genre: '角色扮演',
    rating: 4.5,
    imageUrl: 'https://via.placeholder.com/600x350?text=赛博朋克2077'
  },
  {
    id: 2,
    title: '原神',
    developer: '米哈游',
    genre: '开放世界',
    rating: 4.7,
    imageUrl: 'https://via.placeholder.com/600x350?text=原神'
  },
  {
    id: 3,
    title: '艾尔登法环',
    developer: 'FromSoftware',
    genre: '动作角色扮演',
    rating: 4.9,
    imageUrl: 'https://via.placeholder.com/600x350?text=艾尔登法环'
  }
]

const latestNews = [
  {
    id: 1,
    title: '《艾尔登法环》DLC"黑影之地"将于下月发布',
    date: '2023-05-20',
    category: '新闻',
    imageUrl: 'https://via.placeholder.com/300x200?text=艾尔登法环DLC'
  },
  {
    id: 2,
    title: '全新次世代主机将于年底发布，性能提升50%',
    date: '2023-05-18',
    category: '硬件',
    imageUrl: 'https://via.placeholder.com/300x200?text=次世代主机'
  },
  {
    id: 3,
    title: '《我的世界》庆祝15周年，推出特别版本及活动',
    date: '2023-05-15',
    category: '新闻',
    imageUrl: 'https://via.placeholder.com/300x200?text=我的世界15周年'
  }
]

const HomePage = () => {
  return (
    <div className="space-y-8">
      {/* 英雄区域 */}
      <section className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">探索游戏的无限可能</h1>
        <p className="text-xl mb-6">在GameWeb，您可以找到最新、最热门的游戏资讯、评测和游戏推荐。</p>
        <div className="flex justify-center gap-4">
          <Link to="/games" className="bg-white text-primary-700 px-6 py-2 rounded-md font-bold">
            浏览游戏库
          </Link>
        </div>
      </section>

      {/* 精选游戏 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">精选游戏</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGames.map(game => (
            <div key={game.id} className="bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden">
              <img 
                src={game.imageUrl} 
                alt={game.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <div className="flex justify-between items-center">
                  <span>{game.developer} • {game.genre}</span>
                  <span className="bg-primary-600 text-white px-2 py-1 rounded">{game.rating} ★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 最新资讯 */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">最新资讯</h2>
          <Link to="/news" className="text-primary-600 hover:text-primary-700 font-medium">
            查看所有资讯
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map(news => (
            <div key={news.id} className="card group">
              <img 
                src={news.imageUrl} 
                alt={news.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex justify-between items-center text-sm text-secondary-600 dark:text-secondary-400 mb-2">
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded">
                    {news.category}
                  </span>
                  <span>{news.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 line-clamp-2">{news.title}</h3>
                <Link 
                  to={`/news/${news.id}`}
                  className="inline-block text-primary-600 hover:text-primary-700 font-medium"
                >
                  阅读全文
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 订阅区域 */}
      <section className="bg-secondary-100 dark:bg-secondary-800 rounded-xl p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">订阅获取最新游戏资讯</h2>
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            第一时间获取最新游戏发布、优惠折扣和独家内容的通知
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="您的邮箱地址" 
              className="flex-grow px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button 
              type="submit"
              className="btn btn-primary px-6"
            >
              订阅
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HomePage 