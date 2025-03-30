import { useParams, Link } from 'react-router-dom'

// 简化的游戏数据
const gamesData = [
  {
    id: 1,
    title: '赛博朋克2077',
    developer: 'CD Projekt Red',
    genre: '角色扮演',
    platforms: ['PC', 'PS5', 'XSX'],
    rating: 4.5,
    imageUrl: 'https://via.placeholder.com/700x400?text=赛博朋克2077',
    releaseDate: '2020-12-10',
    description: '《赛博朋克2077》是一款开放世界动作冒险RPG游戏，故事发生在夜之城，一个充满力量、魅力和身体改造痴迷的大都市。'
  },
  {
    id: 2,
    title: '原神',
    developer: '米哈游',
    genre: '开放世界',
    platforms: ['PC', 'PS5', 'Mobile'],
    rating: 4.7,
    imageUrl: 'https://via.placeholder.com/700x400?text=原神',
    releaseDate: '2020-09-28',
    description: '《原神》是一款开放世界冒险RPG。在游戏中，玩家将扮演一位名为"旅行者"的神秘角色，在提瓦特大陆上寻找失散的亲人并揭开世界的神秘。'
  },
  {
    id: 3,
    title: '艾尔登法环',
    developer: 'FromSoftware',
    genre: '动作角色扮演',
    platforms: ['PC', 'PS5', 'XSX'],
    rating: 4.9,
    imageUrl: 'https://via.placeholder.com/700x400?text=艾尔登法环',
    releaseDate: '2022-02-25',
    description: '《艾尔登法环》是FromSoftware开发的一款动作RPG游戏，由《黑暗之魂》系列创作者宫崎英高与《权力的游戏》作者乔治·R·R·马丁联合创作。'
  },
  {
    id: 4,
    title: '塞尔达传说：王国之泪',
    developer: '任天堂',
    genre: '动作冒险',
    platforms: ['Switch'],
    rating: 4.8,
    imageUrl: 'https://via.placeholder.com/700x400?text=塞尔达传说',
    releaseDate: '2023-05-12',
    description: '《塞尔达传说：王国之泪》是《塞尔达传说：旷野之息》的续作，玩家将再次扮演林克，探索更加广阔的海拉鲁世界。'
  }
]

const GameDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const gameId = parseInt(id || '0')
  
  // 查找游戏
  const game = gamesData.find(game => game.id === gameId)
  
  // 未找到游戏
  if (!game) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-2">未找到游戏</h2>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          抱歉，无法找到ID为 {id} 的游戏。
        </p>
        <Link 
          to="/games" 
          className="inline-block px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
        >
          返回游戏列表
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* 游戏头部信息 */}
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm overflow-hidden mb-6">
        <img 
          src={game.imageUrl} 
          alt={game.title} 
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{game.title}</h1>
              <div className="flex items-center text-secondary-600 dark:text-secondary-400 mt-2">
                <span>{game.developer}</span>
                <span className="mx-2">•</span>
                <span>{game.genre}</span>
                <span className="mx-2">•</span>
                <span>{new Date(game.releaseDate).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="flex items-center bg-primary-600 text-white px-3 py-1 rounded">
              <span className="text-xl font-bold">{game.rating}</span>
              <span className="ml-1">★</span>
            </div>
          </div>
          
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">游戏简介</h2>
            <p className="text-secondary-700 dark:text-secondary-300">
              {game.description}
            </p>
          </div>
          
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">可用平台</h2>
            <div className="flex flex-wrap gap-2">
              {game.platforms.map(platform => (
                <span 
                  key={platform} 
                  className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 rounded text-secondary-800 dark:text-secondary-300"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* 返回按钮 */}
      <div className="mb-8">
        <Link 
          to="/games" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700"
        >
          <span>←</span>
          <span className="ml-1">返回游戏列表</span>
        </Link>
      </div>
    </div>
  )
}

export default GameDetailPage 