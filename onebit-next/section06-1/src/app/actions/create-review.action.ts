'use server'

import { revalidatePath } from 'next/cache'
import {delay} from "@/util/delay";

export async function createReviewAction(_: any, formData: FormData) {
    const bookId= formData.get("bookId")?.toString();
    const content = formData.get('content')?.toString();
    const author = formData.get('author')?.toString();

    if (!(bookId && content && author)) {
        return {
            status: false,
            error: "리뷰 내용과 작성자를 작성해주세요"
        }
    }

    try {
        await delay(20000);
        const response = await fetch(`http://localhost:12345/review`, {
            method: "POST",
            body: JSON.stringify({
                bookId, content,author
            })
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        revalidatePath(`review-${bookId}`);
    } catch(err) {
        console.error(err)
        return {
            status: false,
            error: "리뷰 내용과 작성자를 작성해주세요"
        }
    }
}
