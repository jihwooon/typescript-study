import SearchableLayout from '@/components/searchable-layout';
import { ReactNode } from 'react';
import BookItem from '@/components/book-item';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import fetchBooksSearch from '@/lib/fetch-books-search';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const param = context.query.q as string
  const searchBooks = await fetchBooksSearch(param)

  return {
    props: {
      searchBooks
    }
  }
}

export default function Page({ searchBooks }:  InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <div>
      {searchBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
