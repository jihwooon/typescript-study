'use client'

import {useActionState, useEffect, useRef} from "react";
import deleteReviewAction from "@/app/actions/delete-review.action";

export default function ReviewItemDelete({reviewId, bookId}: { reviewId: number, bookId: number }) {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction, pending] = useActionState(deleteReviewAction, null);

    useEffect(() => {
        if (state && !state.status) {
            alert(state.error)
        }
    }, [state])

    return (
        <form ref={formRef} action={formAction}>
            <input name="reviewId" value={reviewId} hidden readOnly/>
            <input name="bookId" value={bookId} hidden readOnly/>
            {pending ? (
                <div>...</div>
            ) : (
                <div onClick={() => formRef.current?.requestSubmit()}>
                    삭제하기
                </div>
            )}
        </form>
    )
}
