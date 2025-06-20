import { NEWS_DB } from '@/news-db';
import { notFound } from 'next/navigation';

export default async function ImagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: newsSlug } = await params;
  const newsItem = NEWS_DB.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
