'use client';

import { useActionState, useEffect, useRef } from 'react';
import { deleteReviewAction } from '@/actions/delete-review.action';

interface Props {
  reviewId: number;
  bookId: number;
}

export default function ReviewItemDeleteButton({ bookId, reviewId }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(deleteReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input name="reviewId" value={reviewId} hidden />
      <input name="bookId" value={bookId} hidden />
      {isPending ? <div>...</div> : <div onClick={() => formRef.current?.requestSubmit()}>리뷰 삭제하기</div>}
    </form>
  );
}
