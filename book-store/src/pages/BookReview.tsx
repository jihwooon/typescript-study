import {styled} from "styled-components";
import {BookReviewItem as IBookReviewItem} from "../models/book.model";
import BookReviewItem from "../components/book/BookReviewItem";
import Title from "../components/common/Title";

interface Props {
    reviews: IBookReviewItem[];
}

function BookReview({reviews}: Props) {
    return (
        <BookReviewStyle>
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
