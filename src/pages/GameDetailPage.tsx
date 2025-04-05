import { useParams, Link } from 'react-router-dom'

// Simplified game data
const gamesData = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    developer: 'CD Projekt Red',
    genre: 'RPG',
    platforms: ['PC', 'PS5', 'XSX'],
    rating: 4.5,
    imageUrl: 'https://via.placeholder.com/700x400?text=Cyberpunk2077',
    releaseDate: '2020-12-10',
    description: 'Cyberpunk 2077 is an open-world action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification.'
  },
  {
    id: 2,
    title: 'Genshin Impact',
    developer: 'miHoYo',
    genre: 'Open World',
    platforms: ['PC', 'PS5', 'Mobile'],
    rating: 4.7,
    imageUrl: 'https://via.placeholder.com/700x400?text=GenshinImpact',
    releaseDate: '2020-09-28',
    description: 'Genshin Impact is an open-world adventure RPG. In the game, players will play as a mysterious character known as the "Traveler," searching for lost siblings on the continent of Teyvat and uncovering the mysteries of the world.'
  },
  {
    id: 3,
    title: 'Elden Ring',
    developer: 'FromSoftware',
    genre: 'Action RPG',
    platforms: ['PC', 'PS5', 'XSX'],
    rating: 4.9,
    imageUrl: 'https://via.placeholder.com/700x400?text=EldenRing',
    releaseDate: '2022-02-25',
    description: 'Elden Ring is an action RPG developed by FromSoftware, created by Hidetaka Miyazaki, the creator of the Dark Souls series, in collaboration with George R.R. Martin, the author of "Game of Thrones".'
  },
  {
    id: 4,
    title: 'Legend of Zelda: Tears of the Kingdom',
    developer: 'Nintendo',
    genre: 'Action Adventure',
    platforms: ['Switch'],
    rating: 4.8,
    imageUrl: 'https://via.placeholder.com/700x400?text=ZeldaTOTK',
    releaseDate: '2023-05-12',
    description: 'The Legend of Zelda: Tears of the Kingdom is the sequel to The Legend of Zelda: Breath of the Wild, where players once again take on the role of Link to explore an even more expansive Hyrule world.'
  }
]

const GameDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const gameId = parseInt(id || '0')
  
  // Find game
  const game = gamesData.find(game => game.id === gameId)
  
  // Game not found
  if (!game) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-2">Game Not Found</h2>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          Sorry, we couldn't find a game with ID {id}.
        </p>
        <Link 
          to="/games" 
          className="inline-block px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
        >
          Back to Game List
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Game header information */}
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
            <h2 className="text-xl font-bold mb-2">Game Description</h2>
            <p className="text-secondary-700 dark:text-secondary-300">
              {game.description}
            </p>
          </div>
          
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Available Platforms</h2>
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
      
      {/* Back button */}
      <div className="mb-8">
        <Link 
          to="/games" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700"
        >
          <span>←</span>
          <span className="ml-1">Back to Game List</span>
        </Link>
      </div>
    </div>
  )
}

export default GameDetailPage 