import { useState } from 'react'

const resourceCategories = [
  {
    id: 'tutorials',
    name: 'Tutorials',
    resources: [
      {
        id: 1,
        title: 'Unity Official Tutorials',
        description: 'Beginner and advanced tutorials provided by Unity, covering all the basics.',
        url: 'https://learn.unity.com/'
      },
      {
        id: 2,
        title: 'C# Programming Basics',
        description: 'C# programming tutorials for Unity developers, from basic to advanced.',
        url: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
      },
      {
        id: 3,
        title: 'Game Design Patterns',
        description: 'Learn common design patterns and best practices in game development.',
        url: 'https://gameprogrammingpatterns.com/'
      }
    ]
  },
  {
    id: 'tools',
    name: 'Tools',
    resources: [
      {
        id: 4,
        title: 'ProBuilder',
        description: 'A tool for 3D modeling and level design in Unity.',
        url: 'https://unity.com/features/probuilder'
      },
      {
        id: 5,
        title: 'Shader Graph',
        description: 'Visual shader editor that allows you to create complex visual effects without writing code.',
        url: 'https://unity.com/features/shader-graph'
      },
      {
        id: 6,
        title: 'Cinemachine',
        description: 'Powerful camera system that provides professional camera control and transition effects.',
        url: 'https://unity.com/unity/features/editor/art-and-design/cinemachine'
      }
    ]
  },
  {
    id: 'assets',
    name: 'Assets',
    resources: [
      {
        id: 7,
        title: 'Unity Asset Store',
        description: 'Thousands of free and paid resources, from models to scripts, all available for your project.',
        url: 'https://assetstore.unity.com/'
      },
      {
        id: 8,
        title: 'Mixamo',
        description: 'Free character animation library that can be imported directly into Unity.',
        url: 'https://www.mixamo.com/'
      },
      {
        id: 9,
        title: 'OpenGameArt',
        description: 'Free game assets library with 2D and 3D resources.',
        url: 'https://opengameart.org/'
      }
    ]
  }
]

const GameDevPage = () => {
  const [activeCategory, setActiveCategory] = useState(resourceCategories[0].id)
  
  const currentResources = resourceCategories.find(
    category => category.id === activeCategory
  )?.resources || []

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Unity Game Development Resources</h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          A carefully curated collection of resources for Unity developers to help you create amazing games.
        </p>
      </div>
      
      {/* Resource Category Selector */}
      <div className="border-b border-secondary-200 dark:border-secondary-700">
        <div className="flex space-x-4">
          {resourceCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-3 font-medium whitespace-nowrap ${
                activeCategory === category.id
                  ? 'border-b-2 border-primary-600 text-primary-600'
                  : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Resource List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentResources.map(resource => (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary-600">{resource.title}</h3>
              <p className="text-secondary-700 dark:text-secondary-300 mb-4">
                {resource.description}
              </p>
              <div className="text-sm text-primary-600 font-medium flex items-center">
                Visit Resource
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {/* Unity iframe */}
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm overflow-hidden mt-8">
        <h2 className="text-2xl font-bold p-4 border-b border-secondary-200 dark:border-secondary-700">
          Unity WebGL Example
        </h2>
        <div className="aspect-video w-full">
          <iframe
            src="https://play.unity.com/webgl/b895c4ae-22cb-4ee0-bd69-ef9a6767747b"
            title="Unity WebGL Example"
            className="w-full h-full border-0"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
        <div className="p-4 bg-secondary-50 dark:bg-secondary-900 text-sm">
          <p className="text-secondary-700 dark:text-secondary-300">
            This example shows how Unity WebGL exported games can run in a web browser. Your Unity games can also be published to the web like this!
          </p>
        </div>
      </div>
      
      {/* Quick Start Guide */}
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">Unity WebGL Publishing Quick Guide</h2>
        <ol className="list-decimal list-inside space-y-3 text-secondary-700 dark:text-secondary-300">
          <li>Create your game project in Unity</li>
          <li>Select WebGL platform in the build settings</li>
          <li>Configure player settings, optimize memory usage and loading performance</li>
          <li>Click "Build" to generate WebGL files</li>
          <li>Upload the generated files to your web server</li>
          <li>Use iframe tags to embed the game in your website</li>
        </ol>
        <div className="mt-4">
          <a 
            href="https://docs.unity3d.com/Manual/webgl-building.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View Complete Unity WebGL Documentation →
          </a>
        </div>
      </div>
    </div>
  )
}

export default GameDevPage 