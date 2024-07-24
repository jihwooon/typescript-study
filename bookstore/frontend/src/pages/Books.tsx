import styled from "styled-components";
import Title from "../components/common/Title";
import BooksList from "../components/books/BooksList";
import BooksEmpty from "../components/books/BooksEmpty";
import BooksFilter from "../components/books/BooksFilter";
import Pagination from "../components/books/Pageination";
import { useBooks } from "../hooks/useBooks";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";

const Books = () => {
  const { books, pagination, isEmpty } = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        {books.length > 0 && <BooksList books={books} />}
        {books.length === 0 && <BooksEmpty />}
        {!isEmpty && <Pagination pagination={pagination} />}
      </BooksStyle>
    </>
  );
};

const BooksStyle = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    dispaly: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;

export default Books;
