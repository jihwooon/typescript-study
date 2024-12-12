'use server'

import {revalidateTag} from "next/cache";

export default async function deleteReviewAction(_: any, formData: FormData) {
    const reviewId= formData.get("reviewId")?.toString();
    const bookId= formData.get("bookId")?.toString();

    if(!reviewId) {
        return {
            status: false,
            error: "리뷰 내용과 작성자를 작성해주세요"
        }
    }

    try {
        const response = await fetch(`http://localhost:12345/review/${reviewId}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        revalidateTag(`review-${bookId}`);
        return {
            status: true,
            error:""
        }
    } catch(err) {
        return {
            status: false,
            error: `리뷰 삭제에 실패했습니다 : ${reviewId}`
        }
    }
}
