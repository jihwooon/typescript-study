import styled from "styled-components";
import BooksItem from "./BooksItem";
import { Book } from "../../models/book.model";

const dummaryBook: Book = {
  id: 1,
  title: "Dummy Book",
  detail: "Dummay Detail",
  img: 5,
  category_id: 1,
  summary: "Dummay Summary",
  author: "Dummay Author",
  price: 10000,
  likes: 1,
  form: "paperback",
  isbn: "Dummay isbn",
  pages: 1000,
  contents: "Dummay Contents",
  pubDate: "2021-01-01",
};

const BooksList = () => {
  return (
    <BooksListStyle>
      <BooksItem book={dummaryBook} />
      <h1>BooksList</h1>
    </BooksListStyle>
  );
};

const BooksListStyle = styled.div``;

export default BooksList;
