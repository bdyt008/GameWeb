import { useState } from 'react'

const gamesList = [
  {
    id: 1,
    title: '2048',
    description: '经典数字拼图游戏，将相同的数字合并以获得2048。',
    embedUrl: '/games/2048-source/index.html',
    isExternal: false,
    needsFullPage: true
  },
  {
    id: 2,
    title: '贪吃蛇',
    description: '控制蛇吃食物并不断增长，但要避免撞到墙壁或自己的身体。',
    embedUrl: '/games/snake.html',
    isExternal: false
  },
  {
    id: 3,
    title: '俄罗斯方块',
    description: '经典俄罗斯方块游戏，旋转和移动方块以消除行。',
    embedUrl: '/games/tetris.html',
    isExternal: false
  },
  {
    id: 4,
    title: '弹球游戏',
    description: '用挡板反弹小球，打破所有砖块。',
    embedUrl: 'https://embed.gamepix.com/d9740/html5-breakout-unblocked',
    isExternal: true
  },
  {
    id: 5,
    title: '数独',
    description: '填充9x9网格，使每行、每列和每个3x3方格都包含数字1-9，不重复。',
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

  // 计算是否需要特殊的sandbox属性
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
        <h1 className="text-3xl font-bold mb-2">在线游戏</h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          直接在我们的网站上体验这些精彩的HTML5游戏，无需下载安装！
        </p>
      </div>

      {/* 游戏选择器 */}
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

      {/* 游戏信息 */}
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm p-4">
        <h2 className="text-2xl font-bold mb-2">{selectedGame.title}</h2>
        <p className="text-secondary-700 dark:text-secondary-300 mb-4">
          {selectedGame.description}
        </p>
        {selectedGame.isExternal && (
          <div className="text-sm text-secondary-500 dark:text-secondary-400">
            <span className="bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded text-yellow-800 dark:text-yellow-200">注意</span>
            <span className="ml-2">此游戏来自第三方网站，如未能加载，请点击下方的"在新标签页中打开游戏"链接</span>
          </div>
        )}
        {selectedGame.needsFullPage && (
          <div className="text-sm text-secondary-500 dark:text-secondary-400">
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200">提示</span>
            <span className="ml-2">为获得最佳游戏体验，请<a href={selectedGame.embedUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">直接访问游戏页面</a></span>
          </div>
        )}
      </div>

      {/* 游戏iframe */}
      <div className="aspect-video w-full">
        {iframeError ? (
          <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center bg-secondary-100 dark:bg-secondary-800">
            <div className="text-red-500 mb-4 text-5xl">⚠️</div>
            <h3 className="text-xl font-bold mb-2">无法加载游戏</h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4">
              由于安全限制，此游戏无法在网页中嵌入。
            </p>
            <a
              href={selectedGame.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              在新标签页中打开游戏
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

      {/* 备选方案 */}
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm p-4">
        <h3 className="font-bold mb-2">加载问题？</h3>
        <p className="text-secondary-700 dark:text-secondary-300 mb-2">
          如果游戏未正确加载，您可以尝试：
        </p>
        <ul className="list-disc list-inside space-y-1 text-secondary-700 dark:text-secondary-300 mb-4">
          <li>尝试选择其他游戏，特别是本地托管的游戏（贪吃蛇和俄罗斯方块）</li>
          <li>确保您的浏览器允许运行JavaScript</li>
          <li>刷新页面后再试一次</li>
        </ul>
        <a
          href={selectedGame.embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:underline"
        >
          在新标签页中打开 {selectedGame.title}
        </a>
      </div>

      {/* 注意事项 */}
      <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-4 text-sm">
        <h3 className="font-bold mb-2">注意事项：</h3>
        <ul className="list-disc list-inside space-y-1 text-secondary-700 dark:text-secondary-300">
          <li>部分游戏因安全限制无法直接嵌入，您可以使用提供的链接在新标签页中打开</li>
          <li>游戏加载时间可能因您的网络连接而异</li>
          <li>第三方游戏由外部网站提供，GameWeb不对其内容负责</li>
        </ul>
      </div>
    </div>
  )
}

export default GameEmbed 