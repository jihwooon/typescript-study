import style from "./page.module.css";
import {BookData} from "@/types";
import NotFound from "@/app/not-found";

export function generateStaticParams () {
    return [{id: "1"}, {id: "2"}, {id: "3"}]
}

export default async function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  const response = await fetch(`http://localhost:12345/book/${params.id}`);
  if (!response.ok) {
    return <NotFound/>
  }

  const book: BookData = await response.json();

  const {
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
