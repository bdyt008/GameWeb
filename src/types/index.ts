// 类似于Unity中的接口和类定义

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
