import {Book} from "../../models/book.model";
import BooksItem from "./BooksItem";
import {styled} from "styled-components";

interface Props {
    books: Book[]
}

function BooksList({books}: Props) {
    return (
        <BookListStyle>
            {
                books?.map((book) => (
                    <BooksItem key={book.id} book={book}></BooksItem>
                ))
            }
        </BookListStyle>
    )
}

const BookListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`

export default BooksList;
