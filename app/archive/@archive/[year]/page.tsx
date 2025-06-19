import NewsList from '@/components/NewsList';
import { getNewsForYear } from '@/lib/newsHelpers';

export default async function FilteredNewsPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const news = getNewsForYear(Number(year));

  return <NewsList news={news} />;
}
