import React from 'react';
import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/newsHelpers';
import ModalBackdrop from '@/components/ModalBackdrop';

export default async function InterceptedImagePage({
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
    <>
      <ModalBackdrop />
      <dialog open className="modal">
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
