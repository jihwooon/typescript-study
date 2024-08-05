import styled from 'styled-components';
import { Book } from '@/models/book.model.ts';
import BookBestItem from '@/components/books/BookBestItem.tsx';

interface Props {
  books: Book[];
}

const MainBest = ({ books }: Props) => {
  return (
    <MainBestStyle>
      {books.map((book, index) => (
        <BookBestItem book={book} itemIndex={index} />
      ))}
    </MainBestStyle>
  );
};

const MainBestStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;

  @media screen AND ${({ theme }) => theme.mediaQuery.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default MainBest;
