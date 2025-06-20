import sql from 'better-sqlite3';

import { NEWS_DB } from '@/news-db';

const db = sql('data.db');
import { NewsItem } from '@/types/news';

export async function getAllNews(): Promise<NewsItem[]> {
  const news = db.prepare('SELECT * FROM news').all() as NewsItem[];
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
  return news;
}

export function getLatestNews(): NewsItem[] {
  return NEWS_DB.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return NEWS_DB.reduce((years: number[], news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number): number[] {
  return NEWS_DB.reduce((months: number[], news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number): NewsItem[] {
  return NEWS_DB.filter((news) => new Date(news.date).getFullYear() === +year);
}

export function getNewsForYearAndMonth(year: number, month: number) {
  return NEWS_DB.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
