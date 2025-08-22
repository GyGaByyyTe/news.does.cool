import sql from 'better-sqlite3';
import { NewsItem } from '@/types/news';

const db = sql('data.db');

export async function getAllNews(): Promise<NewsItem[]> {
  const news = db.prepare('SELECT * FROM news').all() as NewsItem[];
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
  return news;
}

export async function getNewsItem(slug: string): Promise<NewsItem> {
  const newsItem = db
    .prepare('SELECT * FROM news WHERE slug = ?')
    .get(slug) as NewsItem;
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

  return newsItem;
}

export async function getLatestNews(): Promise<NewsItem[]> {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date LIMIT 3')
    .all() as NewsItem[];

  return latestNews;
}

export async function getAvailableNewsYears(): Promise<string[]> {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => (year as { year: string }).year);

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

export async function getAvailableNewsMonths(year: string): Promise<string[]> {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?",
    )
    .all(year)
    .map((month) => (month as { month: string }).month);
}

export async function getNewsForYear(year: string): Promise<NewsItem[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC",
    )
    .all(year) as NewsItem[];

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(
  year: string,
  month: string,
): Promise<NewsItem[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC",
    )
    .all(year, month) as NewsItem[];

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}
