import styled from "styled-components";
import BooksItem from "./BooksItem";
import { Book } from "../../models/book.model";

interface Props {
  books: Book[];
}

const BooksList = ({ books }: Props) => {
  return (
    <BooksListStyle>
      {books?.map((item) => <BooksItem key={item.id} book={item} />)}
    </BooksListStyle>
  );
};

const BooksListStyle = styled.div`
  display: flex;
  grid-template-colums: repeat(4, 1fr);
  gap: 24px;
`;

export default BooksList;
