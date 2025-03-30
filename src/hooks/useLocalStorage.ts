import { useState, useEffect } from 'react';

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
      console.warn(`错误读取localStorage键 "${key}":`, error);
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
      console.warn(`错误设置localStorage键 "${key}":`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [storedValue, setValue] as const;
}