import { BookDetail } from '@/app/book/[id]/BookDetail';
import style from '@/app/book/[id]/page.module.css';
import { BookData, ReviewData } from '@/types';
import ReviewItem from '@/components/review-item';
import ReviewEditor from '@/components/review-editor';
import { Metadata } from 'next';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

async function ReviewList({ bookId }: { bookId: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`, {
    next: { tags: [`review-${bookId}`] },
  });

  if (!response.ok) {
    throw new Error(`Review fetch failed : ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<Metadata | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${params.id}`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const book: BookData = await response.json();

  return {
    title: `${book.title} - 한입북스`,
    description: `${book.description}`,
    openGraph: {
      title: `${book.title} - 한입북스`,
      description: `${book.description}`,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className={style.container}>
      <BookDetail bookId={params.id} />
      <ReviewEditor bookId={params.id} />
      <ReviewList bookId={params.id} />
    </div>
  );
}
