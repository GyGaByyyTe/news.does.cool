import Link from 'next/link';

export default function NewsPage() {
  return (
    <div id="news">
      <h1>NEWS LIST page</h1>
      <Link href="/news/1">News 1</Link>
      <Link href="/news/2">News 2</Link>
      <Link href="/news/3-test-link">News 3</Link>
    </div>
  );
}
