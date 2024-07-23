import styled from "styled-components";
import Title from "../components/common/Title";
import BooksList from "../components/books/BooksList";
import BooksEmpty from "../components/books/BooksEmpty";
import BooksFilter from "../components/books/BooksFilter";
import BooksSwitcher from "../components/books/BooksSwitcher";
import Pagination from "../components/books/Pageination";

const Books = () => {
  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <BooksList />
        <BooksEmpty />
        <BooksFilter />
        <BooksSwitcher />
        <Pagination />
      </BooksStyle>
    </>
  );
};

const BooksStyle = styled.div``;

export default Books;
