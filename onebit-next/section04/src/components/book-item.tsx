import Link from 'next/link';
import style from './book-item.module.css';
import { Books } from '@/models/book.model';

export default function BookItem({ id, title, subTitle, description, author, publisher, coverImgUrl }: Books) {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
