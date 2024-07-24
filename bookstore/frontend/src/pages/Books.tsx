import styled from "styled-components";
import Title from "../components/common/Title";
import BooksList from "../components/books/BooksList";
import BooksEmpty from "../components/books/BooksEmpty";
import BooksFilter from "../components/books/BooksFilter";
import BooksSwitcher from "../components/books/BooksSwitcher";
import Pagination from "../components/books/Pageination";
import { useBooks } from "../hooks/useBooks";

const Books = () => {
  const { books, pagination, isEmpty } = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <BooksFilter />
        <BooksSwitcher />
        {books.length > 0 && <BooksList books={books} />}
        {books.length === 0 && <BooksEmpty />}
        {!isEmpty && <Pagination />}
      </BooksStyle>
    </>
  );
};

const BooksStyle = styled.div``;

export default Books;
