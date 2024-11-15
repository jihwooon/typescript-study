import {Book} from "../../models/book.model";
import BooksItem from "./BooksItem";
import {styled} from "styled-components";

const dummyBook: Book = {
    id: 1,
    title: "The Journey of Science",
    img: 507,
    category_id: 5,
    form: "Hardcover",
    isbn: "4df42c9cf363",
    summary: "A brief and intriguing summary of the book's content.",
    detail: "Detailed description providing more insights into the book's themes and narrative.",
    author: "Emma Jones",
    pages: 137,
    contents: "Table of contents with chapter titles and sections.",
    price: 41.35,
    likes: 609,
    pubDate: "2024-07-14"
}

function BooksList() {
    return(
        <BookListStyle>
            <BooksItem book={dummyBook}></BooksItem>
        </BookListStyle>
    )
}

const BookListStyle = styled.div``

export default BooksList;
