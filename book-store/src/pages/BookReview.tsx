import {styled} from "styled-components";
import {BookReviewItem as IBookReviewItem, BookReviewItemWrite} from "../models/book.model";
import BookReviewItem from "../components/book/BookReviewItem";
import Title from "../components/common/Title";
import BookReviewAdd from "../components/book/BookReviewAdd";

interface Props {
    reviews: IBookReviewItem[];
    onAdd: (data: BookReviewItemWrite) => void;
}

function BookReview({reviews, onAdd}: Props) {
    return (
        <BookReviewStyle>
            <BookReviewAdd onAdd={onAdd}/>
            <Title size="medium" color="primary">리뷰</Title>
            {
                reviews.map((review, index) => (
                    <BookReviewItem key={index} review={review}/>
                ))
            }
        </BookReviewStyle>
    )
}

const BookReviewStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export default BookReview
