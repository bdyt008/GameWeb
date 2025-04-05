import { useState } from 'react'
import { Link } from 'react-router-dom'

// Simplified game data
const gamesData = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    developer: 'CD Projekt Red',
    genre: 'RPG',
    platforms: ['PC', 'PS5', 'XSX'],
    rating: 4.5,
    imageUrl: 'https://via.placeholder.com/300x180?text=Cyberpunk2077',
    releaseDate: '2020-12-10'
  },
  {
    id: 2,
    title: 'Genshin Impact',
    developer: 'miHoYo',
    genre: 'Open World',
    platforms: ['PC', 'PS5', 'Mobile'],
    rating: 4.7,
    imageUrl: 'https://via.placeholder.com/300x180?text=GenshinImpact',
    releaseDate: '2020-09-28'
  },
  {
    id: 3,
    title: 'Elden Ring',
    developer: 'FromSoftware',
    genre: 'Action RPG',
    platforms: ['PC', 'PS5', 'XSX'],
    rating: 4.9,
    imageUrl: 'https://via.placeholder.com/300x180?text=EldenRing',
    releaseDate: '2022-02-25'
  },
  {
    id: 4,
    title: 'Legend of Zelda: Tears of the Kingdom',
    developer: 'Nintendo',
    genre: 'Action Adventure',
    platforms: ['Switch'],
    rating: 4.8,
    imageUrl: 'https://via.placeholder.com/300x180?text=ZeldaTOTK',
    releaseDate: '2023-05-12'
  }
]

const GameListPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Filter games
  const filteredGames = gamesData.filter(game => 
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Game Library</h1>
        <p className="text-secondary-600 dark:text-secondary-300">
          Browse our curated list of games to find your next gaming adventure.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search games..."
          className="w-full p-2 border border-secondary-300 dark:border-secondary-600 rounded bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white"
        />
      </div>

      {/* Game List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredGames.map(game => (
          <div key={game.id} className="bg-white dark:bg-secondary-800 rounded-lg shadow overflow-hidden">
            <img 
              src={game.imageUrl} 
              alt={game.title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{game.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-secondary-600 dark:text-secondary-400">{game.developer}</span>
                <span className="bg-primary-600 text-white px-2 py-1 rounded text-sm">{game.rating}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {game.platforms.map(platform => (
                  <span 
                    key={`${game.id}-${platform}`} 
                    className="text-xs px-2 py-1 bg-secondary-100 dark:bg-secondary-700 rounded"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              <Link 
                to={`/games/${game.id}`}
                className="block mt-3 text-center text-sm bg-primary-600 text-white py-1 rounded hover:bg-primary-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameListPage 