import fs from 'fs';
import path from 'path';

// 需要创建的目录结构
const directories = [
  'src/assets',
  'src/assets/images',
  'src/hooks',
  'src/services',
  'src/types',
  'src/utils',
  'public/assets'
];

// 创建目录
directories.forEach(dir => {
  const dirPath = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ 目录已创建: ${dir}`);
  } else {
    console.log(`⚠️ 目录已存在: ${dir}`);
  }
});

// 创建hooks示例文件
const useLocalStorageContent = `import { useState, useEffect } from 'react';

// 本地存储Hook - 类似于Unity中的PlayerPrefs工具
export function useLocalStorage<T>(key: string, initialValue: T) {
  // 获取初始值
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(\`错误读取localStorage键 "\${key}":\`, error);
      return initialValue;
    }
  };

  // 状态管理
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // 返回一个包装版的setState函数
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 允许value是一个函数
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      
      // 保存state
      setStoredValue(valueToStore);
      
      // 保存到localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(\`错误设置localStorage键 "\${key}":\`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [storedValue, setValue] as const;
}`;

// 创建types示例文件
const typesContent = `// 类似于Unity中的接口和类定义

// 游戏数据模型接口
export interface Game {
  id: number;
  title: string;
  developer: string;
  publisher?: string;
  genre: string;
  platforms: string[];
  rating: number;
  releaseDate: string;
  imageUrl: string;
  description: string;
}

// 评论数据模型接口
export interface Review {
  id: number;
  gameId: number;
  username: string;
  rating: number;
  date: string;
  content: string;
}

// 系统需求接口，类似于Unity的系统要求
export interface SystemRequirements {
  minimum: {
    os: string;
    cpu: string;
    ram: string;
    gpu: string;
    storage: string;
  };
  recommended: {
    os: string;
    cpu: string;
    ram: string;
    gpu: string;
    storage: string;
  };
}

// 应用程序状态接口，类似于Unity的GameManager
export interface AppState {
  darkMode: boolean;
  user: User | null;
  cart: CartItem[];
}

// 用户接口
export interface User {
  id: number;
  username: string;
  email: string;
  avatar?: string;
  preferences: {
    genres: string[];
    platforms: string[];
  };
}

// 购物车项目接口
export interface CartItem {
  gameId: number;
  quantity: number;
  price: number;
}
`;

// 创建utils示例文件
const formattersContent = `// 格式化工具函数，类似于Unity中的辅助工具类

/**
 * 格式化日期
 * @param dateString 日期字符串
 * @returns 格式化后的日期
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * 格式化价格
 * @param price 价格数值
 * @param currency 货币符号
 * @returns 格式化后的价格
 */
export const formatPrice = (price: number, currency: string = '¥'): string => {
  return \`\${currency}\${price.toFixed(2)}\`;
};

/**
 * 截断文本
 * @param text 文本内容
 * @param maxLength 最大长度
 * @returns 截断后的文本
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return \`\${text.slice(0, maxLength)}...\`;
};

/**
 * 计算折扣百分比
 * @param originalPrice 原价
 * @param currentPrice 现价
 * @returns 折扣百分比
 */
export const calculateDiscount = (originalPrice: number, currentPrice: number): string => {
  const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
  return \`\${Math.round(discount)}%\`;
};
`;

const createFile = (filePath, content) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
    console.log(`✅ 文件已创建: ${filePath}`);
  } else {
    console.log(`⚠️ 文件已存在: ${filePath}`);
  }
};

// 创建示例文件
createFile('src/hooks/useLocalStorage.ts', useLocalStorageContent);
createFile('src/types/index.ts', typesContent);
createFile('src/utils/formatters.ts', formattersContent);

console.log('\n🎮 GameWeb 项目初始化完成！');
console.log('👨‍💻 现在可以开始开发了。');
console.log('📝 提示: 运行 "npm run dev" 或 "yarn dev" 或 "pnpm dev" 启动开发服务器。'); 