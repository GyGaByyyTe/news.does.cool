import Link from 'next/link';
import PathLink from '@/components/PathLink';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <PathLink href="/news">News</PathLink>
          </li>
          <li>
            <PathLink href="/archive">Archive</PathLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
