import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/newsHelpers';

export default async function ImagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: newsSlug } = await params;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
