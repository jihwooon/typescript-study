import { notFound } from 'next/navigation';
import style from '@/app/book/[id]/page.module.css';
import Image from 'next/image';

export async function BookDetail({ bookId }: { bookId: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`, {
    cache: 'force-cache',
  });

  const { id, title, subTitle, description, author, publisher, coverImgUrl } = await response.json();
  if (!response.ok) {
    if (response.status == 404) {
      notFound();
    }

    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <section>
      <div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
        <Image src={coverImgUrl} alt={`도서 ${title}의 표지 이미지입니다.`} width={240} height={300} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}
