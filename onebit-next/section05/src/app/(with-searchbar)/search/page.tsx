import BookItem from '@/components/book-item';
import { Books } from '@/models/book.model';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`, {
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
