'use client'

import style from "./review-editor.module.css"
import {createReviewAction} from "@/app/actions/create-review.action";
import {useActionState, useEffect } from 'react'

export default function ReviewEditor({bookId}: { bookId: string }) {

    const [state, formAction, pending] = useActionState(createReviewAction, null);

    useEffect(() => {
        if (state && !state.status) {
            alert(state.error)
        }
    }, [state])

    return (
        <section>
            <form className={style.form_container} action={formAction}>
                <input name="bookId" value={bookId} hidden readOnly/>
                <textarea disabled={pending} required name="content" placeholder="리뷰 내용"/>
                <div className={style.submit_container}>
                    <input disabled={pending} required name="author" placeholder="작성자"/>
                    <button disabled={pending} type="submit">
                        {pending ? "..." : "작성하기"}
                    </button>
                </div>
            </form>
        </section>
    )
}
