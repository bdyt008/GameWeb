import { Link } from 'react-router-dom'

// Simplified game data
const featuredGames = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    developer: 'CD Projekt Red',
    genre: 'RPG',
    rating: 4.5,
    imageUrl: 'https://via.placeholder.com/600x350?text=Cyberpunk2077'
  },
  {
    id: 2,
    title: 'Genshin Impact',
    developer: 'miHoYo',
    genre: 'Open World',
    rating: 4.7,
    imageUrl: 'https://via.placeholder.com/600x350?text=GenshinImpact'
  },
  {
    id: 3,
    title: 'Elden Ring',
    developer: 'FromSoftware',
    genre: 'Action RPG',
    rating: 4.9,
    imageUrl: 'https://via.placeholder.com/600x350?text=EldenRing'
  }
]

const latestNews = [
  {
    id: 1,
    title: 'Elden Ring DLC "Shadow of the Erdtree" releases next month',
    date: '2023-05-20',
    category: 'News',
    imageUrl: 'https://via.placeholder.com/300x200?text=EldenRingDLC'
  },
  {
    id: 2,
    title: 'New generation console to be released by year end, 50% performance boost',
    date: '2023-05-18',
    category: 'Hardware',
    imageUrl: 'https://via.placeholder.com/300x200?text=NextGenConsole'
  },
  {
    id: 3,
    title: 'Minecraft celebrates 15th anniversary with special edition and events',
    date: '2023-05-15',
    category: 'News',
    imageUrl: 'https://via.placeholder.com/300x200?text=Minecraft15thAnniversary'
  }
]

const HomePage = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Endless Gaming Possibilities</h1>
        <p className="text-xl mb-6">At GameWeb, you can find the latest and most popular game news, reviews, and recommendations.</p>
        <div className="flex justify-center gap-4">
          <Link to="/games" className="bg-white text-primary-700 px-6 py-2 rounded-md font-bold">
            Browse Games
          </Link>
        </div>
      </section>

      {/* Featured Games */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Games</h2>
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

      {/* Latest News */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <Link to="/news" className="text-primary-600 hover:text-primary-700 font-medium">
            View All News
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
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-secondary-100 dark:bg-secondary-800 rounded-xl p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe for Latest Gaming Updates</h2>
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            Get notified about new game releases, discounts, and exclusive content
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button 
              type="submit"
              className="btn btn-primary px-6"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HomePage 