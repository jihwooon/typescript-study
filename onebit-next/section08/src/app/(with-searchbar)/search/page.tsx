import BookItem from '@/components/book-item';
import { Books } from '@/models/book.model';
import { delay } from '@/util/delay';
import { Suspense } from 'react';
import BookListSkeleton from '@/components/skeleton/book-list-skeleton';
import { Metadata } from 'next';

async function SearchResult({ q }: { q: string }) {
  await delay(1500);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`, {
    cache: 'force-cache',
  });
  if (!response.ok) {
    return <div>로딩 중입니다.</div>;
  }

  const books: Books[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export function generateMetadata({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}): Metadata {
  return {
    title: `${searchParams.q} : 검색어`,
    description: `${searchParams.q} 검색 결과입니다.`,
    openGraph: {
      title: `${searchParams.q} : 한입 북스 검색`,
      description: `${searchParams.q} 검색 결과입니다.`,
    },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  return (
    <Suspense key={searchParams.q || ''} fallback={<BookListSkeleton count={3} />}>
      <SearchResult q={searchParams.q || ''} />
    </Suspense>
  );
}
