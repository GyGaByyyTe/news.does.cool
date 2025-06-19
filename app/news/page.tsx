import Link from 'next/link';
import { NEWS_DB } from '@/news-db';

export default function NewsPage() {
  return (
    <>
      <h1>NEWS LIST page</h1>
      <ul className="news-list">
        {NEWS_DB.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
