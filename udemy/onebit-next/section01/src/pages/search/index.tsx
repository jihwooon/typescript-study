import SearchableLayout from '@/components/searchable-layout';
import { ReactNode, useEffect, useState } from 'react';
import BookItem from '@/components/book-item';
import fetchBooksSearch from '@/lib/fetch-books-search';
import { useRouter } from 'next/router';
import { BookData } from '@/types';
import Head from 'next/head';

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
      <Head>
        <title>한입 북스 - 검색결과</title>
        <meta property="og:image"
              content="/Users/jihwooon/Workspaces/js-in-action/onebit-next/section01/public/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요" />
      </Head>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
