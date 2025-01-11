import style from "./review-item.module.css"
import {ReviewData} from "@/types";
import ReviewItemDelete from "@/components/review-item-delete";

export default function ReviewItem(
    {
        id,
        content,
        author,
        createdAt,
        bookId,
    }: ReviewData) {
    return (
        <div className={style.container}>
            <div className={style.author}>{author}</div>
            <div className={style.content}>{content}</div>
            <div className={style.bottom_container}>
                <div>{new Date(createdAt).toLocaleString()}</div>
                <ReviewItemDelete reviewId={id} bookId={bookId}/>
            </div>
        </div>
    )
}
