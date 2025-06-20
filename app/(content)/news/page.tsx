import NewsList from '@/components/NewsList';
import { getAllNews } from '@/lib/newsHelpers';

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>NEWS LIST page</h1>
      <NewsList news={news} />
    </>
  );
}
