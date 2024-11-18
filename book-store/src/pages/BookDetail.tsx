import {styled} from "styled-components";
import {useParams} from "react-router-dom";
import {useBook} from "../hook/useBook";

function BookDetail() {
    const {bookId} = useParams();
    const {book} = useBook(bookId);

    if (!book) {
        return null;
    }

    return (
        <BookDetailStyle>
            <h1>{book.title}</h1>
        </BookDetailStyle>
    )
}

const BookDetailStyle = styled.div``

export default BookDetail;
