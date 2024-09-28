import SearchableLayout from '@/components/searchable-layout';
import { ReactNode, useEffect, useState } from 'react';
import BookItem from '@/components/book-item';
import fetchBooksSearch from '@/lib/fetch-books-search';
import { useRouter } from 'next/router';
import { BookData } from '@/types';

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);

 const router = useRouter()
  const q = router.query.q;

 const fetchSearchResult = async () => {
   const searchBooks = await fetchBooksSearch(q as string)
   setBooks(searchBooks)
 }

  useEffect(() => {
    if(q) {
      fetchSearchResult()
    }
  }, [q]);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
