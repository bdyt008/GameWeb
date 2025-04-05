import { useState } from 'react'

const gamesList = [
  {
    id: 1,
    title: '2048',
    description: 'Classic number puzzle game. Merge identical numbers to reach 2048.',
    embedUrl: '/games/2048.html',
    isExternal: false,
    needsFullPage: true
  },
  {
    id: 2,
    title: 'Snake',
    description: 'Control the snake to eat food and grow, while avoiding walls and your own body.',
    embedUrl: '/games/snake.html',
    isExternal: false
  },
  {
    id: 3,
    title: 'Tetris',
    description: 'Classic tetris game. Rotate and move blocks to clear lines.',
    embedUrl: '/games/tetris.html',
    isExternal: false
  },
  {
    id: 4,
    title: 'Breakout',
    description: 'Use the paddle to bounce the ball and break all the blocks.',
    embedUrl: 'https://embed.gamepix.com/d9740/html5-breakout-unblocked',
    isExternal: true
  },
  {
    id: 5,
    title: 'Sudoku',
    description: 'Fill the 9x9 grid so that each row, column, and 3x3 box contains digits 1-9 without repetition.',
    embedUrl: '/games/sudoku.html',
    isExternal: false
  }
]

const GameEmbed = () => {
  const [selectedGame, setSelectedGame] = useState(gamesList[0])
  const [iframeError, setIframeError] = useState(false)

  const handleIframeError = () => {
    setIframeError(true)
  }

  // Calculate if special sandbox attributes are needed
  const getSandboxAttributes = (game: typeof gamesList[0]) => {
    if (game.isExternal) {
      return "allow-same-origin allow-scripts allow-popups allow-forms"
    } else if (game.title === '2048') {
      return "allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-top-navigation allow-storage-access-by-user-activation"
    } else {
      return "allow-same-origin allow-scripts"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Online Games</h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Experience these exciting HTML5 games directly on our website, no download or installation required!
        </p>
      </div>

      {/* Game Selector */}
      <div className="flex flex-wrap gap-4">
        {gamesList.map(game => (
          <button
            key={game.id}
            onClick={() => {
              setSelectedGame(game)
              setIframeError(false)
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedGame.id === game.id
                ? 'bg-primary-600 text-white'
                : 'bg-secondary-100 dark:bg-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-600'
            }`}
          >
            {game.title}
          </button>
        ))}
      </div>

      {/* Game Info */}
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm p-4">
        <h2 className="text-2xl font-bold mb-2">{selectedGame.title}</h2>
        <p className="text-secondary-700 dark:text-secondary-300 mb-4">
          {selectedGame.description}
        </p>
        {selectedGame.isExternal && (
          <div className="text-sm text-secondary-500 dark:text-secondary-400">
            <span className="bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded text-yellow-800 dark:text-yellow-200">Note</span>
            <span className="ml-2">This game is from a third-party website. If it doesn't load, please click the "Open game in new tab" link below</span>
          </div>
        )}
        {selectedGame.needsFullPage && (
          <div className="text-sm text-secondary-500 dark:text-secondary-400">
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200">Tip</span>
            <span className="ml-2">For the best gaming experience, please <a href={selectedGame.embedUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">visit the game page directly</a></span>
          </div>
        )}
      </div>

      {/* Game iframe */}
      <div className="aspect-video w-full">
        {iframeError ? (
          <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center bg-secondary-100 dark:bg-secondary-800">
            <div className="text-red-500 mb-4 text-5xl">⚠️</div>
            <h3 className="text-xl font-bold mb-2">Unable to load game</h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4">
              Due to security restrictions, this game cannot be embedded.
            </p>
            <a
              href={selectedGame.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Open game in new tab
            </a>
          </div>
        ) : (
          <iframe
            src={selectedGame.embedUrl}
            title={selectedGame.title}
            className="w-full h-full border-0"
            allowFullScreen
            sandbox={getSandboxAttributes(selectedGame)}
            allow="storage-access"
            onError={handleIframeError}
          />
        )}
      </div>

      {/* Alternatives */}
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm p-4">
        <h3 className="font-bold mb-2">Loading issues?</h3>
        <p className="text-secondary-700 dark:text-secondary-300 mb-2">
          If the game doesn't load correctly, you can try:
        </p>
        <ul className="list-disc list-inside space-y-1 text-secondary-700 dark:text-secondary-300 mb-4">
          <li>Try selecting other games, especially locally hosted ones (Snake and Tetris)</li>
          <li>Make sure your browser allows JavaScript to run</li>
          <li>Refresh the page and try again</li>
        </ul>
        <a
          href={selectedGame.embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:underline"
        >
          Open {selectedGame.title} in a new tab
        </a>
      </div>

      {/* Notes */}
      <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-4 text-sm">
        <h3 className="font-bold mb-2">Important Notes:</h3>
        <ul className="list-disc list-inside space-y-1 text-secondary-700 dark:text-secondary-300">
          <li>Some games cannot be embedded directly due to security restrictions. You can use the provided links to open them in a new tab</li>
          <li>Game loading times may vary depending on your network connection</li>
          <li>Third-party games are provided by external websites. GameWeb is not responsible for their content</li>
        </ul>
      </div>
    </div>
  )
}

export default GameEmbed 