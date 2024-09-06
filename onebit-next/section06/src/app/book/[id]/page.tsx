import { BookDetail } from '@/app/book/[id]/BookDetail';
import style from '@/app/book/[id]/page.module.css';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

function ReviewEditor() {
  async function createReviewAction(formData: FormData) {
    'use server';
    const content = formData.get('content');
    const author = formData.get('author');

    console.log(content, author);
  }

  return (
    <section>
      <form action={createReviewAction}>
        <input name="content" placeholder="리뷰 내용" />
        <input name="author" placeholder="작성자" />
        <button type="submit">작성하기</button>
      </form>
    </section>
  );
}

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className={style.container}>
      <BookDetail bookId={params.id} />
      <ReviewEditor />
    </div>
  );
}
