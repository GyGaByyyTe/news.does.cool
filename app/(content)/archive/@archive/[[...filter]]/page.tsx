import NewsList from '@/components/NewsList';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/newsHelpers';
import Link from 'next/link';

export default async function FilteredNewsPage({
  params,
}: {
  params: Promise<{ filter: string }>;
}) {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news = undefined;
  let links = getAvailableNewsYears();

  if (selectedMonth && selectedYear) {
    news = getNewsForYearAndMonth(Number(selectedYear), Number(selectedMonth));
    links = [];
  } else if (selectedYear) {
    news = getNewsForYear(Number(selectedYear));
    links = getAvailableNewsMonths(Number(selectedYear));
  }

  let newContent = <p>No news are defined for this period</p>;

  if (news && news.length > 0) {
    newContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(Number(selectedYear))) ||
    (selectedMonth &&
      !getAvailableNewsMonths(Number(selectedYear)).includes(
        Number(selectedMonth),
      ))
  ) {
    throw new Error(`Invalid filter`);
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newContent}
    </>
  );
}
