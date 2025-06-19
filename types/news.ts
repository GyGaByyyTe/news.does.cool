/**
 * Type definitions for news-related components
 */

/**
 * Represents a news item with its properties
 */
export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

/**
 * Props for the NewsList component
 */
export interface NewsListProps {
  news: NewsItem[];
}
