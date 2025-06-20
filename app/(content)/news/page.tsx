import { NEWS_DB } from '@/news-db';
import NewsList from '@/components/NewsList';

export default function NewsPage() {
  return (
    <>
      <h1>NEWS LIST page</h1>
      <NewsList news={NEWS_DB} />
    </>
  );
}
