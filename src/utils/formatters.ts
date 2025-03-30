// 格式化工具函数，类似于Unity中的辅助工具类

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
  return `${currency}${price.toFixed(2)}`;
};

/**
 * 截断文本
 * @param text 文本内容
 * @param maxLength 最大长度
 * @returns 截断后的文本
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

/**
 * 计算折扣百分比
 * @param originalPrice 原价
 * @param currentPrice 现价
 * @returns 折扣百分比
 */
export const calculateDiscount = (originalPrice: number, currentPrice: number): string => {
  const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
  return `${Math.round(discount)}%`;
};
