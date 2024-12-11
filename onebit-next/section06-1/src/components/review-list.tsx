import {ReviewData} from "@/types";
import ReviewItem from "@/components/review-item";

export default async function ReviewList({bookId}: { bookId: string }) {
    const response = await fetch(`http://localhost:12345/review/book/${bookId}`);
    console.log(response)
    if (!response.ok) {
        throw new Error(`Review fetch failded : ${response.statusText}`);
    }

    const reviews: ReviewData[] = await response.json();

    return (
        <section>
            {reviews.map((review) => (
                <ReviewItem key={`review-item-${review.id}`}{...review} />
            ))}
        </section>
    )
}
