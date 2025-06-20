'use client';
import React from 'react';
import { NEWS_DB } from '@/news-db';
import { notFound, useRouter, useParams } from 'next/navigation';

export default function InterceptedImagePage() {
  const { id: newsSlug } = useParams();
  const router = useRouter();
  const newsItem = NEWS_DB.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog open className="modal">
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
