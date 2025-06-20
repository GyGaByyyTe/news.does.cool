import MainHeader from '@/components/MainHeader';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
};

interface ContentLayoutProps {
  children: ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div id="page">
      <MainHeader />
      {children}
    </div>
  );
}
