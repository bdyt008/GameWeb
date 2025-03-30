import { useState } from 'react'

const resourceCategories = [
  {
    id: 'tutorials',
    name: '教程',
    resources: [
      {
        id: 1,
        title: 'Unity官方教程',
        description: 'Unity官方提供的入门和进阶教程，涵盖所有基础知识。',
        url: 'https://learn.unity.com/'
      },
      {
        id: 2,
        title: 'C#编程基础',
        description: '面向Unity开发者的C#编程教程，从基础到高级。',
        url: 'https://docs.microsoft.com/zh-cn/dotnet/csharp/'
      },
      {
        id: 3,
        title: '游戏设计模式',
        description: '学习游戏开发中常用的设计模式和最佳实践。',
        url: 'https://gameprogrammingpatterns.com/'
      }
    ]
  },
  {
    id: 'tools',
    name: '工具',
    resources: [
      {
        id: 4,
        title: 'ProBuilder',
        description: '在Unity中进行3D建模和关卡设计的工具。',
        url: 'https://unity.com/features/probuilder'
      },
      {
        id: 5,
        title: 'Shader Graph',
        description: '可视化着色器编辑工具，无需编写代码创建复杂视觉效果。',
        url: 'https://unity.com/features/shader-graph'
      },
      {
        id: 6,
        title: 'Cinemachine',
        description: '强大的摄像机系统，提供专业的摄像机控制和过渡效果。',
        url: 'https://unity.com/unity/features/editor/art-and-design/cinemachine'
      }
    ]
  },
  {
    id: 'assets',
    name: '资源',
    resources: [
      {
        id: 7,
        title: 'Unity Asset Store',
        description: '数千种免费和付费资源，从模型到脚本，应有尽有。',
        url: 'https://assetstore.unity.com/'
      },
      {
        id: 8,
        title: 'Mixamo',
        description: '免费的角色动画库，可直接导入Unity使用。',
        url: 'https://www.mixamo.com/'
      },
      {
        id: 9,
        title: 'OpenGameArt',
        description: '免费游戏素材库，包含2D和3D资源。',
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
        <h1 className="text-3xl font-bold mb-2">Unity游戏开发资源</h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          为Unity开发者精心整理的资源集合，帮助您开发出色的游戏。
        </p>
      </div>
      
      {/* 资源类别选择器 */}
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
      
      {/* 资源列表 */}
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
                访问资源
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {/* Unity嵌入iframe */}
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm overflow-hidden mt-8">
        <h2 className="text-2xl font-bold p-4 border-b border-secondary-200 dark:border-secondary-700">
          Unity WebGL示例
        </h2>
        <div className="aspect-video w-full">
          <iframe
            src="https://play.unity.com/webgl/b895c4ae-22cb-4ee0-bd69-ef9a6767747b"
            title="Unity WebGL示例"
            className="w-full h-full border-0"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
        <div className="p-4 bg-secondary-50 dark:bg-secondary-900 text-sm">
          <p className="text-secondary-700 dark:text-secondary-300">
            此示例展示了Unity WebGL导出的游戏如何在网页中运行。您的Unity游戏也可以这样发布到网页！
          </p>
        </div>
      </div>
      
      {/* 快速入门指南 */}
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">Unity WebGL发布快速指南</h2>
        <ol className="list-decimal list-inside space-y-3 text-secondary-700 dark:text-secondary-300">
          <li>在Unity中创建您的游戏项目</li>
          <li>在构建设置中选择WebGL平台</li>
          <li>配置播放器设置，优化内存使用和加载性能</li>
          <li>点击"构建"生成WebGL文件</li>
          <li>将生成的文件上传到您的网络服务器</li>
          <li>使用iframe标签在您的网站中嵌入游戏</li>
        </ol>
        <div className="mt-4">
          <a 
            href="https://docs.unity3d.com/Manual/webgl-building.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            查看完整Unity WebGL文档 →
          </a>
        </div>
      </div>
    </div>
  )
}

export default GameDevPage 